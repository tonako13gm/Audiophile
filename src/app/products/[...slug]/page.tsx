
import { promises as fs } from 'fs';
import Products from "@/app/components/products"
import Button from "@/app/components/button";


export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const {slug} = await params
    const file = await fs.readFile(process.cwd() + '/src/app/products/data.json', 'utf8');
    const data = JSON.parse(file);

    const productCategory = slug

    interface categoryTypes{
      category: string
    }
    const filteredProducts = data
      .filter((items: categoryTypes) => items.category == productCategory)
      .toReversed()

    const reg = new RegExp(filteredProducts[0].category, "i")
    const itemNameTrimmed = filteredProducts[0].name.replace(reg,"")

    const StylingForDesktop = (props:number) => props % 2 == 0 ? "" : "lg:flex-row-reverse"
    const StylingForDesktopCard = (props:number) => props % 2 == 0 ? "lg:pl-16" : "lg:pr-16"
    const NewOrNot = (props:boolean) => props ? "" : "hidden"

    interface itemTypes {
      id: number
      category: string
      name: string
      description: string
      new: boolean
      categoryImage: {
        mobile: string
        tablet: string
        desktop: string
      }
    }

    const filteredProductsList = filteredProducts.map((item: itemTypes) =>
      <div key={item.id} className='pb-20'>
        <div className={`lg:flex ${StylingForDesktop(item.id)}`}>
          <div className="pb-5 lg:w-6/12">
            <picture>
              <source media="(min-width: 1024px)" srcSet={item.categoryImage.desktop} />
              <source media="(min-width: 768px)" srcSet={item.categoryImage.tablet} />
              <source media="(min-width: 300px)" srcSet={item.categoryImage.mobile} />
              <img className="w-full h-auto rounded-md" />
            </picture>
          </div>
          <div className={`justify-items-center text-center lg:w-6/12 lg:justify-items-start lg:content-center ${StylingForDesktopCard(item.id)}`}>
            <h3 className={`uppercase pb-5 text-subTitle tracking-overLine text-primaryDark ${NewOrNot(item.new)}`}>
              New Product
            </h3>
            <div className="pb-5 text-4xl uppercase font-bold lg:justify-items-start">
              <h1>{itemNameTrimmed}</h1>
              <h1>{item.category}</h1>
            </div>
            <p className="pb-5 lg:text-left">{item.description}</p>
            <Button variant='main'>See Product</Button>
          </div>
        </div>
      </div>
    )

    return (
      <>
        <div className="justify-items-center py-10 mb-10 uppercase text-4xl md:text-h1 text-lightColor bg-darkColor w-full">
          <h1 className="text-h2">
            {productCategory}
          </h1>
        </div>
        <div className="w-10/12 justify-self-center">
          {filteredProductsList}
        </div>
        <div>
          <Products/>
        </div>
      </>
    );
}