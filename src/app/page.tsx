import Hero from "./components/hero";
import Products from "./components/products";
import FeaturedOne from "./components/featuredOne";
import FeaturedTwo from "./components/featuredTwo";
import FeaturedThree from "./components/featuredThree";
import type { Metadata } from "next";
import SubFooter from "./components/subFooter";

export const metadata: Metadata = {
  title: "Audiophone",
  description: "- Ecommerce Website",
};

export default function Home() {

  return (
    <main className="w-full bg-lightColor text-darkColor justify-self-center uppercase">
      <section>
        <Hero/>
      </section>
      <section>
        <Products/>
      </section>
      <section>
        <FeaturedOne/>
      </section>
      <section>
        <FeaturedTwo/>
      </section>
      <section>
        <FeaturedThree/>
      </section>
      <section>
        <SubFooter/>
      </section>
    </main>
  );
}
