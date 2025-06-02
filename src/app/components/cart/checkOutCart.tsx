
import { getProducts } from "@/prisma-db";
import { PrismaClient } from "@/generated/prisma";
import { deleteAll } from "@/app/products/[productsID]/details/[detailsID]/action";

export type Product = {
  id: number;
  item: string;
  qty: number;
};


export default async function CartCheckOut(props:any) {
  const products: Product[] = await getProducts()
  const prisma = new PrismaClient()

  const count = await prisma.product.count();
  if (count === 0) {
    return (
      <h1>your cart is empty. Feel free to browse through our products</h1>
    )
  }

  return (
    <>
      <form action={deleteAll}>
        <button type="submit">remove all</button>
      </form>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
          >
            <h2>{product.item}</h2>
            <h2>{product.qty}</h2>
          </li>
        ))}
      </ul>
    </>

  )
}


// 'use client'

// export default function CartCheckOut(props:any) {

//     return (
// 		<>
// 			{/* Form for setting a cookie */}
// 			<form action={props.create}>
// 				<button type="submit">Set Cookie</button>
// 			</form>

// 			<br />

// 			{/* Form for deleting a cookie */}
// 			<form action={props.delete}>
// 				<button type="submit">Delete Cookie</button>
// 			</form>
// 		</>
//     )

// }

// import { cartItems } from "../../hooks/localStorage"
// import React, { useEffect, useRef, useState } from "react"
// import { redirect } from 'next/navigation'
// import type { ImageLoaderProps } from 'next/image';

// const Page = (props:any) => {



// export default function CartCheckOut() {

    // const clearItems = (e:React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault()
    //     localStorage.clear()
    //     redirect('/cart')
    // }

    // const testSubmit = () => console.log('form submitted')

    // return (
    //     <div>
    //         {/* <form onSubmit={testSubmit}>
    //             <button onClick={clearItems}>Remove all</button>
    //             {listItems}
    //             <p>total : {total}</p>
    //             <p>totalRef : {totalValue}</p>
    //             <button type="submit" className="pl-20 mt-10">
    //                 Proceed Check out
    //             </button>
    //         </form> */}
    //         TEST
    //     </div>
    // )




// //File path: src/app/Actionbutton.js

// // 'use client' indicates that this is client component
// 'use client';

// const Page = (props) => {
// 	return (
// 		<>
// 			{/* Form for setting a cookie */}
// 			<form action={props.create}>
// 				<button type="submit">Set Cookie</button>
// 			</form>

// 			<br />

// 			{/* Form for deleting a cookie */}
// 			<form action={props.delete}>
// 				<button type="submit">Delete Cookie</button>
// 			</form>
// 		</>
// 	);
// }

// export default Page;



