'use client'

import Image, { StaticImageData } from "next/image";

import headPhonePNG from "../../public/image/shared/desktop/image-category-thumbnail-headphones.png"
import speakersPNG from "../../public/image/shared/desktop/image-category-thumbnail-speakers.png"
import earPhonePNG from "../../public/image/shared/desktop/image-category-thumbnail-earphones.png"

import earPhoneBG from "../../public/image/home/desktop/image-hero.jpg"

import Button from "./components/button";



function NewProducts () {



  return (
    <div className="w-full h-[70vh] bg-[#191919] bg-contain bg-no-repeat bg-center text-lightColor content-center
      bg-[url(../../public/image/home/mobile/image-header.jpg)]
      md:bg-[url(../../public/image/home/tablet/image-header.jpg)]
      lg:bg-[url(../../public/image/home/desktop/image-hero.jpg)]
    ">
      <div className="justify-items-center">

        <div className="text-subTitle tracking-overLine text-seondaryDark mb-5">
          <h1>new product</h1>
        </div>

        <div className="text-4xl font-bold justify-items-center mb-5">
          <h1>XX99 Mark II</h1>
          <h1>HeadphoneS</h1>
        </div>

        <div className="text-center text-body lowercase text-seondaryDark w-72 mb-5">
          <h1>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </h1>
        </div>

        <div>
          <Button variant="light">See Products</Button>

          {/* <style>{`
            .btn {
              font-bold py-2 px-4 rounded;
            }
            .btn-blue {
              @apply bg-blue-500 text-white;
            }
            .btn-blue:hover {
              @apply bg-blue-700;
            }
          `}</style> */}

        </div>
      </div>
    </div>
  )
}

interface ProductsProps {
  icon: StaticImageData;
  item: String;
}

function Products({ icon, item }: ProductsProps) {
  return (
    <div className="w-10/12 md:w-4/12 md:mx-2 h-44 bg-secondaryLight justify-items-center rounded-md mb-20">
      <div className="relative">
        <Image
            priority
            src={icon}
            alt="Headphones"
            className="max-w-40 absolute -translate-x-1/2 -translate-y-1/3"
        />
      </div>
      <div className="pt-24 justify-items-center">
        <p className="pb-2 text-body font-bold">{item}</p>
        <p className="text-subTitle">shop</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full bg-lightColor text-darkColor justify-self-center uppercase">
      <section className="pb-32">
        <NewProducts/>
      </section>
      <section className="justify-items-center w-10/12 md:flex justify-self-center md:justify-between">
        <Products
          icon={headPhonePNG}
          item="Headphones"
        />
              <Products
          icon={speakersPNG}
          item="Speakers"
        />
              <Products
          icon={earPhonePNG}
          item="Earphones"
        />
      </section>
    </main>
  );
}
