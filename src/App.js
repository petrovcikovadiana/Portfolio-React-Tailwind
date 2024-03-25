import React from "react";

// components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <div className="bg-gradient bg-no-repeat bg-cover overflow-hidden flex flex-col justify-between">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Contact />
      <Copyright />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default App;
