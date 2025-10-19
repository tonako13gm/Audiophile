export default function SubFooter () {
    return (
        <div className="w-10/12 justify-self-center pb-20 pt-20 lg:flex lg:flex-row-reverse">
        <div className="rounded-md mb-7 lg:mb-0 lg:w-6/12 lg:ml-4">
        <picture>
              <source media="(min-width: 1024px)" srcSet="/image/shared/desktop/image-best-gear.jpg" />
              <source media="(min-width: 768px)" srcSet="/image/shared/tablet/image-best-gear.jpg" />
              <source media="(min-width: 300px)" srcSet="/image/shared/mobile/image-best-gear.jpg" />
              <img className="w-full h-auto" alt="Best gear"/>
            </picture>
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