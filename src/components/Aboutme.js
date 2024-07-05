import React from "react";

// import motion
import { motion } from "framer-motion";
// import fade
import { fadeIn } from "../variants";

const Aboutme = () => {
  return (
    // section about
    <section className="section mx-auto" id="services">
      {" "}
      <div className="md:container mx-auto text-center md:text-left items-center justify-center md:px-44 pt-16">
        <div className="flex flex-col lg:flex-row gap-24 mx-auto items-center justify-center max-w-screen">
          {/* left container text */}
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="show"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className=" items-center justify-center"
          >
            <div className="hidden md:flex flex-row gap-3">
              <img
                src={process.env.PUBLIC_URL + "/assets/comp.jpg"}
                alt="left"
                className="rounded-full h-64 w-32 object-fill"
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/ntb.jpg"}
                alt="right"
                className="rounded-full h-64 w-32 mt-16"
              />
            </div>
          </motion.div>
          {/*right container services */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className=" lg:bg-diana lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="bg-gradient-to-r from-pinkGradient to-violetGradient inline-block text-transparent bg-clip-text text-xl uppercase">
              About me
            </h2>
            <h3 className="h3 max-w-[455px] ">I am Diana,</h3>
            <h3 className="text-md max-w-[455px] mb-10">
              {" "}
              I am a junior front-end developer with a year of experience in
              creating dynamic and responsive websites. My preferred tools are
              React and TailwindCSS, where I find the perfect blend of
              flexibility and efficiency.
              <h3 className="text-md max-w-[455px] mb-10 mt-5">
                {" "}
                I am passionate about crafting seamless user experiences and
                continuously improving my skills in modern web development
                technologies.
              </h3>
            </h3>
            <a href="#work">
              <button class="btn btn-lg before:ease relative  overflow-hidden  bg-violetGradient text-white  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                <span relative="relative z-10">View all projects</span>
              </button>
            </a>{" "}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
