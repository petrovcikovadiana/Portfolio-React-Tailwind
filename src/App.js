import React from "react";

// components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import Skills from "./components/Skills";
import CarouselBrand from "./components/CarouselBrand";
import Aboutme from "./components/Aboutme";

const App = () => {
  return (
    <div className="bg-background bg-no-repeat bg-cover overflow-hidden flex flex-col justify-between">
      <Navbar />
      <Hero />
      <CarouselBrand />
      <Aboutme />
      <Skills />
      <Work />
      <Contact />
      <Copyright />
    </div>
  );
};

export default App;
