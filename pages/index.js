import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Carousel from "../components/UI/Carousel";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}
