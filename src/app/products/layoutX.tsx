import "@/app/globals.css"
import type { Metadata } from "next";
import Products from "@/app/components/products";
import SubFooter from "@/app/components/subFooter";

export const metadata: Metadata = {
  title: "Audiophile - products",
  description: "product description",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <Products/>
      <SubFooter/>
    </>
  )
}

