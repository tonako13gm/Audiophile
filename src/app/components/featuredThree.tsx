import Button from "./button"

export default function FeaturedThree () {
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