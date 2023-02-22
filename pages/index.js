import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import About from "../components/UI/About";
import Catalog from "../components/UI/Catalog";
import Carousel from "../components/UI/Carousel";

export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <Hero />
      <Catalog   />
      <About />
    </Fragment>
  );
}
