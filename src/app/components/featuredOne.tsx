import Button from "./button";
import Image from "next/image";
import zx9Speaker from "../../../public/image/home/desktop/image-speaker-zx9.png"
import Link from "next/link";

export default function FeaturedOne () {
  return (
    <div className="pb-10">
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
              <Link href="/products/speakers/details/zx9-speaker">
                <Button variant="dark">See Products</Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}