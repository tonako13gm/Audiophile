"use client"

import { useState, useEffect } from 'react'
// import { Product } from './checkOutCart'
// import { createProduct, deleteAll } from '@/app/products/[productsID]/details/[detailsID]/action';
import { updateProduct } from '@/src/app/products/[productsID]/details/[detailsID]/action';
// import { data } from '@/app/hooks/dataFetch';
// import { data } from '@/app/hooks/dataFetch';
// import  { dataTypes } from '@/app/hooks/dataFetch';

import Image from 'next/image';
// import { count } from 'console';

// import testImage from '../../../public/image/cart/image-xx59-headphones.jpg';

export interface CartItem {
    id: number;
    name: string;
    qty: number;
    price: number;
    slug: string;
    preTotal: number;
};

interface CartItemsListProps {
    cartItems: CartItem[];
    total: number;
};

const CartItemsList: React.FC<CartItemsListProps> = ({ cartItems, total }) => {

    let [overAllTotal, setOverAllTotal] = useState<number>(total);
    const [totalTrigger, setTotalTrigger] = useState<boolean>(false);

    // const [count, setCount] = useState<number>(0);
    // const [itemTotal, setItemTotal] = useState<number>(0);

    useEffect(() => {
        const updateTtl = async () => {
            try {
                setOverAllTotal(total);
            } catch (error) {
                console.error('Error updating product:', error);
            }
        };
        updateTtl();
    }, [totalTrigger]);

    const removeLastWord = (str:string) => {
        const words = str.split(' '); // Split the string by spaces into an array of words
        if (words.length > 1) {
            words.pop(); // Remove the last element (word) from the array
            return words.join(' '); // Join the remaining words back into a string
        } else {
            return ''; // If there's only one word or an empty string, return an empty string
        }
    }

    return (
        <ul>
                {cartItems.map((product) => {

                    const [count, setCount] = useState<number>(product.qty);
                    const [itemTotal, setItemTotal] = useState<number>(product.preTotal);

                    // Update DB when count changes

                    useEffect(() => {
                        if (count !== product.qty) {
                            const updateQty = async () => {
                                try {
                                    console.log(count);
                                    await updateProduct(product.id, product.name, count);
                                } catch (error) {
                                    console.error('Error updating product:', error);
                                }
                            };
                            updateQty();
                            setItemTotal(product.price * count);
                            setTotalTrigger(!totalTrigger);
                            console.log(totalTrigger)
                        }
                    }, [count]);

                    const add = (e: React.MouseEvent) => {
                        e.preventDefault();
                        setCount((c) => c + 1);
                    };

                    const sub = (e: React.MouseEvent) => {
                        e.preventDefault();
                        setCount((c) => (c > 0 ? c - 1 : 0));
                    };

            return (
                    <li key={product.id} className='my-6'>
                        <input name="item" value={removeLastWord(product.name)} readOnly />
                        <button onClick={sub} className="px-10"> - </button>
                        <input type="number" value={count} name="qty" readOnly />
                        <button onClick={add} className="px-10"> + </button>
                        <h1>{`\$ ${product.price}`}</h1>
                        {/* <input type="text" value={product.slug} readOnly /> */}
                        {/* <h1>{product.preTotal}</h1> */}
                        <input type="number" value={itemTotal} readOnly />

                        <Image
                            src={`/image/cart/image-${product.slug}.jpg`}
                            alt={product.slug}
                            width={50}
                            height={50}
                        />
                    </li>
                );
            })}
            <h1>TOTAL: {overAllTotal}</h1>
        </ul>
    );
};

export default CartItemsList;