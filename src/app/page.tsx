import Image, { StaticImageData } from "next/image";

import headPhonePNG from "../../public/image/shared/desktop/image-category-thumbnail-headphones.png"
import speakersPNG from "../../public/image/shared/desktop/image-category-thumbnail-speakers.png"
import earPhonePNG from "../../public/image/shared/desktop/image-category-thumbnail-earphones.png"

interface ProductsProps {
  icon: StaticImageData;
  item: String;
}

function Products({ icon, item }: ProductsProps) {
  return (
    <div className="">
      <div className="w-full h-44 bg-secondaryLight justify-items-center rounded-md mb-20">
        <div className="relative">
          <Image
              priority
              src={icon}
              alt="Headphones"
              className="max-w-40 absolute -translate-x-1/2 -translate-y-1/3"
          />
        </div>
        <div className="pt-24 justify-items-center">
          <h1 className="pb-2">{item}</h1>
          <p>shop</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="pt-28 bg-lightColor text-darkColor w-10/12 justify-self-center uppercase">
      <section>
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
