"use client"

import React, { useRef, useState, useActionState } from "react"
import { createProduct } from "./action"
import { useFormStatus } from "react-dom";
// import { Submit } from "@/app/components/submit";

export default function Cart(props: {name:string}) {

  const [count, setCount] = useState<number>(0)

  const inputRef = useRef<HTMLInputElement>(null)

  // When user submits the form, save the favorite number to the local storage
  // const saveToLocalStorage = () => {
  //   const countPermanent = Number(localStorage.getItem(`${props.name}`))
  //   const value = countPermanent + Number(inputRef.current?.value)

  //   if (Number(inputRef.current?.value) != 0) {
  //     localStorage.setItem(`${props.name}`, `${value}`)
  //   }

  //   setCount(0)
  // }

  const add = () => setCount(Number(inputRef.current?.value) + 1)

  const sub = () => (Number(inputRef.current?.value) <= 0) ? 0 : setCount(Number(inputRef.current?.value) - 1)

  const { pending } = useFormStatus();

  return (
    // <div key={props.name}>
      <form action={createProduct}>
        <input name="item" value={props.name} readOnly className="visibility: hidden"/>
        <p onClick={sub} className="px-10"> - </p>
          <input type="number" ref={inputRef} value={count} name="qty" readOnly/>
        <p onClick={add} className="px-10"> + </p>
        <button
          type="submit"
          className={`font-bold py-3 px-5 text-subTitle uppercase cursor-pointer text-lightColor  ${count > 0 ? 'bg-primaryDark' : 'bg-seondaryDark'} hover:${count > 0 ? 'bg-primaryLight' : ''}`}
          disabled={pending || count > 0 ? false : true}
        >
          Add to cart
        </button>
      </form>
    // </div>
  )
}



