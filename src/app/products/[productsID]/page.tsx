
import Button from '@/app/components/button';
import React from 'react';
import Link from 'next/link';
import Products from '@/app/components/products';
import SubFooter from '@/app/components/subFooter';
import { data } from '@/app/hooks/dataFetch'

export const dynamicParams = false

export async function generateStaticParams() {
  return [
    {productsID: "headphones"},
    {productsID: "earphones"},
    {productsID: "speakers"}
  ]
}

export default async function Page({
    params,
  }: {
    params: Promise<{ productsID: string }>
  }) {

  const {productsID} = await params

  const productCategory = productsID

  const filteredProducts = data
    .filter((items) => items.category == productCategory)
    .toReversed()

  const reg = new RegExp(filteredProducts[0].category, "i")
  const itemNameTrimmed = filteredProducts[0].name.replace(reg,"")

  const StylingForDesktop = (props:number) => props % 2 == 0 ? "" : "lg:flex-row-reverse"
  const StylingForDesktopCard = (props:number) => props % 2 == 0 ? "lg:pl-16" : "lg:pr-16"

  function FilteredProductsList () {
    return (
      filteredProducts.map((item) =>
        <div key={item.id} className='pb-20'>
          <div className={`lg:flex ${StylingForDesktop(item.id)}`}>
            <div className="pb-5 lg:w-6/12">
              <picture>
                <source media="(min-width: 1024px)" srcSet={item.categoryImage.desktop} />
                <source media="(min-width: 768px)" srcSet={item.categoryImage.tablet} />
                <source media="(min-width: 300px)" srcSet={item.categoryImage.mobile} />
                <img className="w-full h-auto rounded-md" alt=''/>
              </picture>
            </div>
            <div className={`justify-items-center text-center lg:w-6/12 lg:justify-items-start lg:content-center ${StylingForDesktopCard(item.id)}`}>
              <h3 className={`uppercase pb-5 text-subTitle tracking-overLine text-primaryDark ${(item.new ? "" : "hidden")}`}>
                New Product
              </h3>
              <div className="pb-5 text-4xl uppercase font-bold lg:justify-items-start">
                <h1>{itemNameTrimmed}</h1>
                <h1>{item.category}</h1>
              </div>
              <p className="pb-5 lg:text-left">{item.description}</p>
              <Link href={`/products/${item.category}/details/${item.slug}`}>
                <Button variant='main'>See Product</Button>
              </Link>
            </div>
          </div>
        </div>
      )
    )
  }

    return (
      <>
        <div className="justify-items-center py-10 mb-10 uppercase text-4xl md:text-h1 text-lightColor bg-darkColor w-full">
          <h1 className="text-h2">
            {productCategory}
          </h1>
        </div>
        <div className="w-10/12 justify-self-center">
          <FilteredProductsList/>
        </div>
        <Products/>
        <SubFooter/>
      </>
    );
}






