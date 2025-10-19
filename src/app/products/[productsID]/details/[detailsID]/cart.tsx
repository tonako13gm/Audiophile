"use client"

import React, { useRef, useState, useEffect } from "react"
import { createProduct } from "./action"
import FormStatusWrapper from "@/src/app/components/FormStatusWrapper";
// import { Submit } from "@/app/components/submit";

export default function Cart(props: {name:string}) {

  const [count, setCount] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [animationKey, setAnimationKey] = useState<number>(0)

  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // When user submits the form, save the favorite number to the local storage
  // const saveToLocalStorage = () => {
  //   const countPermanent = Number(localStorage.getItem(`${props.name}`))
  //   const value = countPermanent + Number(inputRef.current?.value)

  //   if (Number(inputRef.current?.value) != 0) {
  //     localStorage.setItem(`${props.name}`, `${value}`)
  //   }

  //   setCount(0)
  // }

  const submitHandler = (formData: FormData) => {
    // Start animation before submitting
    setIsAnimating(true);
    setAnimationKey(prev => prev + 1);
    
    // Wait for animation to complete (1.5 seconds)
    setTimeout(() => {
      setCount(0);
      setIsAnimating(false);
    }, 1500);
    
    try {
      const result = createProduct(formData);
      console.log('Product added to DB:', result);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  }

  const add = () => setCount(Number(inputRef.current?.value) + 1)

  const sub = () => (Number(inputRef.current?.value) <= 0) ? 0 : setCount(Number(inputRef.current?.value) - 1)

  // Calculate cart icon position
  const getCartIconPosition = () => {
    const cartElement = document.querySelector('.cart');
    if (cartElement) {
      const rect = cartElement.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
    }
    // Fallback position (top-right of screen)
    return { x: window.innerWidth - 50, y: 50 };
  };

  // Flying animation component
  const FlyingItem = () => {
    if (!isAnimating) return <></>;
    
    const buttonRect = buttonRef.current?.getBoundingClientRect();
    const cartPosition = getCartIconPosition();
    
    if (!buttonRect) return <></>;
    
    const startX = buttonRect.left + buttonRect.width / 2;
    const startY = buttonRect.top + buttonRect.height / 2;
    const endX = cartPosition.x;
    const endY = cartPosition.y;
    
    return (
      <div
        key={animationKey}
        className="fixed z-50 pointer-events-none"
        style={{
          left: startX - 16, // Center the 32px circle
          top: startY - 16,
          '--end-x': `${endX - startX}px`,
          '--end-y': `${endY - startY}px`,
          animation: 'flyToCart 1.5s ease-in-out forwards'
        } as React.CSSProperties}
      >
        <div className="w-8 h-8 bg-primaryDark rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-sm font-bold">{count}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <form action={submitHandler}>
        <input name="item" value={props.name} readOnly className="visibility: hidden"/>
        <p onClick={sub} className="px-10"> - </p>
        <input type="number" ref={inputRef} value={count} name="qty" readOnly/>
        <p onClick={add} className="px-10"> + </p>
        <FormStatusWrapper>
          {(pending) => (
            <button
              ref={buttonRef}
              type="submit"
              className={`font-bold py-3 px-5 text-subTitle uppercase cursor-pointer text-lightColor  ${count > 0 ? 'bg-primaryDark' : 'bg-seondaryDark'} hover:${count > 0 ? 'bg-primaryLight' : ''}`}
              disabled={pending || count > 0 ? false : true}
            >
              Add to cart
            </button>
          )}
        </FormStatusWrapper>
      </form>
      
      {/* Flying Animation */}
      <FlyingItem />
      
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes flyToCart {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(calc(var(--end-x) * 0.6), calc(var(--end-y) * 0.6)) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translate(var(--end-x), var(--end-y)) scale(0.3);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}



