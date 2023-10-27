import React from "react";

// components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden flex flex-col justify-between">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Copyright />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default App;
