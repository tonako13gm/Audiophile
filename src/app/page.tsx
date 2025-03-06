
import Hero from "./components/hero";
import Products from "./components/products";
import FeaturedOne from "./components/featuredOne";
import FeaturedTwo from "./components/featuredTwo";
import FeaturedThree from "./components/featuredThree";
import SubFooter from "./components/subFooter";

export default function Home() {
  return (
    <main className="w-full bg-lightColor text-darkColor justify-self-center uppercase">
      <section className="pb-32">
        <Hero/>
      </section>
      <section className="justify-items-center w-10/12 md:flex justify-self-center md:justify-between">
        <Products />
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
