import { Fragment } from "react";
import Intro from "../components/UI/Intro";
import About from "../components/UI/About";
import Catalog from "../components/UI/Catalog";
import Carousel from "../components/UI/Carousel";

export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <Intro />
      <Catalog   />
      <About />
    </Fragment>
  );
}
