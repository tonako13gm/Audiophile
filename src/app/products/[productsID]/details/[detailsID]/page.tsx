// 'use server'

import Link from 'next/link'
import Cart from './cart'
import { data } from '@/app/hooks/dataFetch'
import Products from '@/app/components/products'
import SubFooter from '@/app/components/subFooter'

export default async function Page({
  params,
}: {
  params: Promise<{ detailsID: string }>
}) {

  const {detailsID} = await params
  const selectedProductItem = detailsID
  const item = data.filter((i: {slug:string}) => i.slug == selectedProductItem)

  const selectedItem = item[0]

  const reg = new RegExp(selectedItem.category, "i")
  const itemNameTrimmed = selectedItem.name.replace(reg,"")

  const description = (props:string) => {
    const descriptionFormated = props.split('\n').map(str => <p key={item[0].name} className="mb-4">{str}</p>);
    return descriptionFormated;
  }

  const imageGalleryHolder = (props:string) => {
    const path = (`${props}.${selectedItem.image}`)
    return (
      <div key={item[0].name} className="pb-4">
        <picture>
          <source media="(min-width: 1024px)" srcSet={`${path}.desktop}`} />
          <source media="(min-width: 768px)" srcSet={`${path}.tablet}`} />
          <source media="(min-width: 300px)" srcSet={`${path}.mobile}`} />
          <img className="w-full h-auto rounded-md" alt=''/>
        </picture>
      </div>
    )
  }

  const inclusion = selectedItem.includes.map((inclusion) => {
    return (
        <p key={item[0].name} className='text-primaryDark text-subTitle font-bold'>{`${inclusion.quantity}x`}
          <span className='pl-5 text-darkColor font-normal'>{inclusion.item}</span>
        </p>
      )
    }
  )

  const suggestedProducts = selectedItem.others.map((otherProducts) => {
      return (
        <div key={selectedItem.id}>
          <p>
            {otherProducts.name}
          </p>
          <div>
            <picture>
              <source media="(min-width: 1024px)" srcSet={otherProducts.image.desktop} />
              <source media="(min-width: 768px)" srcSet={otherProducts.image.tablet} />
              <source media="(min-width: 300px)" srcSet={otherProducts.image.mobile} />
              <img className="w-20 h-auto rounded-md" alt=''/>
            </picture>
          </div>
        </div>

      )
    }
  )

  // const suggestedProducts = data
  //   .filter((i:{slug:string}) => i.slug !== selectedProductItem)
  //   .slice(0,3)
  //   .sort(() => 0.5 - Math.random())

  function FilteredItem () {
    return (
      <div key={item[0].name}>
        <div className='pb-20'>
          <div className="lg:flex">
            <div className="pb-5 lg:w-6/12">
              <picture>
                <source media="(min-width: 1024px)" srcSet={selectedItem.image.desktop} />
                <source media="(min-width: 768px)" srcSet={selectedItem.image.tablet} />
                <source media="(min-width: 300px)" srcSet={selectedItem.image.mobile} />
                <img className="w-full h-auto rounded-md" alt=''/>
              </picture>
            </div>
            <div className="justify-items-start text-center lg:w-6/12   ">
              <h3 className={`uppercase pb-5 text-subTitle tracking-overLine text-primaryDark ${(selectedItem.new ? '' : 'hidden')}`}>
                New Product
              </h3>
              <div className="pb-5 text-4xl justify-items-start uppercase font-bold lg:justify-items-start">
                <h1>{itemNameTrimmed}</h1>
                <h1>{selectedItem.category}</h1>
              </div>
              <p className="pb-5 text-left lg:text-left">{selectedItem.description}</p>
              <p className="pb-5 font-bold lg:text-left">{`$ ${selectedItem.price}`}</p>
              <Cart name={selectedItem.name}/>
            </div>
          </div>
        </div>
        <div className='pb-20'>
          <div>
            <h3 className="uppercase text-3xl font-bold pb-4">Features</h3>
            {description(selectedItem.description)}
          </div>
        </div>
        <div>
          <div>
            <h3 className="uppercase text-3xl font-bold pb-4">In the box</h3>
          </div>
          <div className='pb-20'>
            {inclusion}
          </div>
        </div>

        <div>
          {suggestedProducts}
        </div>

        <div className='md:flex'>
          <div>
            {imageGalleryHolder(`{${selectedItem.gallery.first}}`)}
            {imageGalleryHolder(`{${selectedItem.gallery.second}}`)}
          </div>
          <div>
            {imageGalleryHolder(`{${selectedItem.gallery.third}}`)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-10/12 justify-self-center">
      {/* <CartCheckOut/> */}
      <Link href={`/products/${selectedItem.category}`}>
        <p className="py-3">Go Back</p>
      </Link>
      <FilteredItem/>
      <Products/>
      <SubFooter/>
    </div>
  )
}



