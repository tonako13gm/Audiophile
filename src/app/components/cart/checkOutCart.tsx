


import { getProducts } from "@/src/prisma-db";
import { deleteAll } from "@/src/app/products/[productsID]/details/[detailsID]/action";
import CartItemsList from "./cartItemsList";
import { data } from '@/src/app/components/hooks/dataFetch';

// import { getMyData } from "@/app/data/page";



export interface Product {
  id: number;
  item: string;
  qty: number;
};

export default async function CartCheckOut() {
  // const data = await getMyData();
  const products: Product[] = await getProducts();

  if (products.length === 0) {
    return (
      <h1>your cart is empty. Feel free to browse through our products</h1>
    )
  }

  const detailedCartItems = products.map(a => {
    const match = data.find(d => d.name === a.item);
      return {
        id: a.id,
        name: a.item,
        qty: a.qty,
        price: match?.price || 0,
        slug: match?.slug || '',
        preTotal: (match?.price || 0) * a.qty,
      };
    });

    // Calculate total properly - reset each time
    let overAllTotal = 0;
    for (let i = 0; i < detailedCartItems.length; i++) {
        overAllTotal += detailedCartItems[i].preTotal;
    }

  return (
    <div className="h-full flex flex-col">
      {/* Cart Header */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-200 mb-4">
        <h1 className="text-xl font-bold">CART ({products.length})</h1>
        <form action={deleteAll}>
          <button
            type="submit"
            className="px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
          >
            Remove all
          </button>
        </form>
      </div>
      {/* Scrollable Cart Items */}
      <div className="flex-1 overflow-hidden">
        <CartItemsList cartItems={detailedCartItems} total={overAllTotal} />
      </div>
    </div>
  )
}
