"use client"
import { useState } from "react";
import Image from 'next/image';
import hambugerIcon from '../../../public/image/shared/tablet/icon-hamburger.svg'
import Navlinks from "./navLinks";

export default function HamburgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const showMenuNav = 'absolute w-screen h-2/4 top-0 left-0 z-10 flex-col justify-evenly items-center bg-secondaryLight content-center'

  return (
    <div className='flex items-center justify-between text-darkColor'>
      <section className="flex lg:hidden">
        <div onClick={() => setIsNavOpen((prev) => !prev)}>
          <Image
              priority
              src={hambugerIcon}
              alt="Add to cart"
              className='max-w-5 max-h-5'
          />
        </div>

        <div className={isNavOpen ? showMenuNav : 'hidden'}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-darkColor"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <nav className="grid h-52 justify-items-center" onClick={() => setIsNavOpen(false)}>
            <Navlinks/>
          </nav>
        </div>
      </section>
    </div>
  );
}
