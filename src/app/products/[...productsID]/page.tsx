

import Products from "@/app/components/products"

import { promises as fs } from 'fs';
import Image from "next/image";

import { getImageProps } from 'next/image'

import testImage from "../../../../public/image/product-xx59-headphones/tablet/image-category-page-preview.jpg"


export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/src/app/products/data.json', 'utf8');
  const data = JSON.parse(file);

  const headphones = data.filter((items: { category: string; }) =>
    items.category === 'headphones'
  )

  interface itemTypes {
    id: number
    category: string
    name: string
    description: string
    categoryImage: {
      mobile: string
      tablet: string
      desktop: string
    }
  }

  const tablet = "tablet"

  function imageSetter () {
    return (
      tablet
    )
  }

  const headPhoneItems = headphones.map((item: itemTypes) =>
    <div key={item.id}>
      <div>
        {/* <Image
          className="!relative"
          src={item.categoryImage.tablet}
          alt={item.name}
          fill={true}
        /> */}
        <picture>
          <source media="(min-width: 1024px)" srcSet={item.categoryImage.desktop} />
          <source media="(min-width: 768px)" srcSet={item.categoryImage.tablet} />
          <source media="(min-width: 300px)" srcSet={item.categoryImage.mobile} />
          <img className="w-full h-auto" />
        </picture>
      </div>
      <div>
        <h3>New Product</h3>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>
    </div>
  )

  return (
    <div className="w-10/12 justify-self-center">
      {headPhoneItems}
    </div>
  );
}