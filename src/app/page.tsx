'use client'

import Image, { StaticImageData } from "next/image";

import headPhonePNG from "../../public/image/shared/desktop/image-category-thumbnail-headphones.png"
import speakersPNG from "../../public/image/shared/desktop/image-category-thumbnail-speakers.png"
import earPhonePNG from "../../public/image/shared/desktop/image-category-thumbnail-earphones.png"

import zx9Speaker from "../../public/image/home/desktop/image-speaker-zx9.png"

import Button from "./components/button";



function NewProducts () {

  return (
    <div className="w-full h-[90vh] bg-[#191919] bg-contain bg-no-repeat bg-center text-lightColor content-center
      bg-[url(../../public/image/home/mobile/image-header.jpg)]
      md:bg-[url(../../public/image/home/tablet/image-header.jpg)]
      lg:bg-[url(../../public/image/home/desktop/image-hero.jpg)]
    ">
      <div className="w-10/12 justify-self-center justify-items-center lg:justify-items-start">

        <div className="text-subTitle tracking-overLine text-seondaryDark mb-5">
          <h1>new product</h1>
        </div>

        <div className="text-4xl md:text-h1 font-bold justify-items-center mb-5 lg:justify-items-start">
          <h1 className="mb-4">XX99 Mark II</h1>
          <h1>HeadphoneS</h1>
        </div>

        <div className="text-center lg:text-left text-body lowercase text-seondaryDark w-72 mb-5">
          <h1>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </h1>
        </div>

        <div>
          <Button variant="main">See Products</Button>
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
    <div className="w-full md:w-4/12 md:mx-2 h-44 bg-secondaryLight justify-items-center rounded-md mb-20">
      <div className="relative">
        <Image
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

function FeaturedOne () {
  return (
    <div className="w-10/12 bg-primaryDark justify-self-center justify-items-center py-14 rounded-md lg:py-24
      bg-[url(../../public/image/home/desktop/pattern-circles.svg)]
      bg-contain
      bg-no-repeat
      lg:overflow-hidden
    ">
      <div className="w-10/12 md:w-6/12 lg:w-full justify-items-center lg:flex">

        <div className="lg:w-6/12">
          <div className="mb-5 md:mb-14 lg:mb-0 lg:justify-items-center lg:relative">
            <Image
              src={zx9Speaker}
              alt="ZX9 Speaker"
              className="max-w-40 lg:max-w-80 lg:absolute lg:translate-x-28 lg:-translate-y-5"
            />
          </div>
        </div>

        <div className="lg:w-6/12 lg:px-24 lg:justify-items-start">
          <div className="text-4xl md:text-h1 font-bold justify-items-center text-lightColor mb-5 md:mb-14 lg:justify-items-start lg:mb-7">
            <h1 className="mb-4">ZX9</h1>
            <h1>Speaker</h1>
          </div>
          <div className="text-lightColor text-body mb-5 md:mb-14 text-center lowercase lg:text-left lg:mb-7">
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
          </div>
          <div className="justify-self-center lg:justify-self-start">
            <Button variant="dark">See Products</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

function FeaturedTwo () {
  return (
    <div className="w-10/12 justify-self-center rounded-md
      bg-[url(../../public/image/home/mobile/image-speaker-zx7.jpg)]
      md:bg-[url(../../public/image/home/tablet/image-speaker-zx7.jpg)]
      lg:bg-[url(../../public/image/home/desktop/image-speaker-zx7.jpg)]
      bg-cover
      bg-right-top
      bg-no-repeat
      ">
      <div className="w-10/12 justify-self-center py-28">
        <div className="text-h3 text-darkColor font-bold pb-5">
          <h3>ZX7 SPEAKER</h3>
        </div>
        <div>
          <Button variant="light">See Products</Button>
        </div>
      </div>
    </div>
  )
}

function FeaturedThree () {
  return (
    <div className="w-10/12 md:flex justify-self-center">

      <div className="md:w-6/12 rounded-md md:mr-4 py-28 md:py-0 mb-5 md:mb-0
        bg-[url(../../public/image/home/mobile/image-earphones-yx1.jpg)]
        md:bg-[url(../../public/image/home/tablet/image-earphones-yx1.jpg)]
        lg:bg-[url(../../public/image/home/desktop/image-earphones-yx1.jpg)]
        bg-cover
        bg-right-top
        bg-no-repeat
      ">
      </div>

      <div className="md:w-6/12 rounded-md bg-seondaryDark pl-14 md:ml-4 py-10 md:py-24">
        <div className="text-h3 text-darkColor font-bold pb-5">
          <h3>YX1 EARPHONES</h3>
        </div>
        <div>
          <Button variant="light">See Products</Button>
        </div>
      </div>
    </div>
  )
}

function SubFooter () {
  return (
    <div className="w-10/12 justify-self-center pb-32 pt-24 lg:flex lg:flex-row-reverse">
      <div className="rounded-md py-40 lg:py-60 mb-7 lg:mb-0 lg:w-6/12 lg:ml-4
        bg-[url(../../public/image/shared/mobile/image-best-gear.jpg)]
        md:bg-[url(../../public/image/shared/tablet/image-best-gear.jpg)]
        lg:bg-[url(../../public/image/shared/desktop/image-best-gear.jpg)]
        bg-cover
        bg-no-repeat
      ">
      </div>
      <div className="text-center lg:text-left lg:w-6/12 lg:mr-4 lg:content-center lg:pr-16">
        <div className="text-h3 text-darkColor font-bold pb-5">
          <h3>Bringing you the <span className="text-primaryDark">best</span> audio gear</h3>
        </div>
        <div>
          <p className="lowercase">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  )
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
      <section className="pb-10">
        <FeaturedOne />
      </section>
      <section className="pb-10">
        <FeaturedTwo />
      </section>
      <section className="pb-10">
        <FeaturedThree />
      </section>
      <section>
        <SubFooter />
      </section>
    </main>
  );
}
