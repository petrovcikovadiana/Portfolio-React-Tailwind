import React from "react";

// import motion
import { motion } from "framer-motion";
// import fade
import { fadeIn } from "../variants";
// import image
import diana from "../assets/diana.png";

const About = () => {
  return (
    <div id="about">
      <div className="container mx-auto pt-16 lg:pt-44 h-[600px]">
        <div
          className="flex flex-col gap-y-10 lg:flex-row  lg:gap-x-20 lg:gap-y-0 h-screen lg:max-w-6xl
        "
        >
          {/* image */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" h-[600px] hidden lg:block"
          >
            <img className="w-80 h-96" src={diana} alt="diana"></img>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I'm a Freelance junior Front-end Developer with over 1 year of
              experience.
            </h3>
            <p className="mb-6">
              I am currently learning ReactJS and in the process I am improving
              my knowledge of already learned languages-HTML, TailwindCSS.
            </p>
            <div className="flex gap-x-8 items-center">
              <a href="#contact">
                <button className="btn btn-lg">Contact me</button>
              </a>{" "}
              <a href="#work" className="text-gradient btn-link">
                My portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
