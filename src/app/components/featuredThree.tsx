import Button from "./button"
import Link from "next/link"

export default function FeaturedThree () {
    return (
      <div className="pb-10">
        <div className="w-10/12 md:flex justify-self-center">
          <div className="md:w-6/12 rounded-md md:mr-4 mb-5 md:mb-0">
            <picture>
              <source media="(min-width: 1024px)" srcSet="/image/home/desktop/image-earphones-yx1.jpg" />
              <source media="(min-width: 768px)" srcSet="/image/home/tablet/image-earphones-yx1.jpg" />
              <source media="(min-width: 300px)" srcSet="/image/home/mobile/image-earphones-yx1.jpg" />
              <img className="w-full h-auto"alt=""/>
            </picture>
          </div>
          <div className="md:w-6/12 rounded-md bg-seondaryDark pl-14 md:ml-4 py-10 content-center">
            <div className="text-h3 text-darkColor font-bold pb-5">
              <h3>YX1 EARPHONES</h3>
            </div>
            <div>
              <Link href="/products/earphones/details/yx1-earphones">
                <Button variant="light">See Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }