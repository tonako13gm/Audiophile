'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";

export const navLinks = [
  { name: "Home",
    path: "/"
  },
  {
    name: "Headphones",
    path: "/products/headphones",
  },
  {
    name: "Speakers",
    path: "/products/speakers",
  },
  {
    name: "Earphones",
    path: "/products/earphones",
  },
];



export default function Navlinks() {
  const pathname = usePathname()
  return (
    <>
      {navLinks.map((link, index) => {
        const isActive = pathname.endsWith(link.path) || (link.path.includes(pathname) && pathname !== "/")
        const newClassName = `${isActive ? "text-primaryDark" : ""}`
          return (
              <div key={index}>
                <Link href={link.path} className={`${newClassName} uppercase hover:text-primaryDark`}>
                  {link.name}
                </Link>
              </div>
          );
      })}
    </>
  )
}

