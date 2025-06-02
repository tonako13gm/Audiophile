import Link from "next/link";
import Button from "./button";

export default function Hero () {

  return (
    <div className="w-full h-[90vh] bg-[#191919] bg-contain bg-no-repeat bg-center text-lightColor content-center
      bg-[url(../../public/image/home/mobile/image-header.jpg)]
      md:bg-[url(../../public/image/home/tablet/image-header.jpg)]
      lg:bg-[url(../../public/image/home/desktop/image-hero.jpg)]
      lg:bg-right
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
          <Link href="/products/headphones/details/xx99-mark-two-headphones">
            <Button variant="main">
              See Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}