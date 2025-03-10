import Button from "./button"

export default function FeaturedTwo () {
    return (
        <div className="pb-10">
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
        </div>

    )
}