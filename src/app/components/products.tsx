'use client'

import { useRouter } from 'next/navigation'
import Image, { StaticImageData } from "next/image";

import headPhonePNG from "../../../public/image/shared/desktop/image-category-thumbnail-headphones.png"
import speakersPNG from "../../../public/image/shared/desktop/image-category-thumbnail-speakers.png"
import earPhonePNG from "../../../public/image/shared/desktop/image-category-thumbnail-earphones.png"
import arrowICon from "../../../public/image/shared/desktop/icon-arrow-right.svg"


interface ProductsProps {
    icon: StaticImageData;
    item: string;
  }

function ProductItems ({ icon, item }: ProductsProps) {
    const router = useRouter()

    return (
            <div onClick={() => router.push(`/products/${item}`)} className="w-full md:mx-2 h-44 bg-secondaryLight justify-items-center rounded-md mb-20 group cursor-pointer">
                <div>
                    <Image
                        src={icon}
                        alt={item}
                        className="max-w-40 absolute -translate-x-1/2 -translate-y-1/3 group-hover:max-w-48"
                    />
                </div>
                <div className="pt-24 justify-items-center">
                    <p className="pb-2 text-body font-bold">{item}</p>
                    <div className="flex space-x-4 items-center">
                        <p className="text-subTitle group-hover:text-primaryDark">shop</p>
                        <Image
                            src={arrowICon}
                            alt="Click here"
                            className='max-w-5 max-h-3'
                        />
                    </div>
                </div>
            </div>
    )
}

export default function Products () {
    return (
        <div className="justify-items-center w-10/12 md:flex justify-self-center md:justify-between pt-32">
            <ProductItems
                icon={headPhonePNG}
                item="headphones"
            />
            <ProductItems
                icon={speakersPNG}
                item="speakers"
            />
            <ProductItems
                icon={earPhonePNG}
                item="earphones"
            />
        </div>
    )
}