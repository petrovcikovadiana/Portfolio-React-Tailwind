import React from "react";

// import icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

// import motion
import { motion } from "framer-motion";

// import fade
import { fadeIn } from "../variants";

const Hero = () => {
  return (
    // section hero
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center md:pt-44 mb-10 overflow-y-hidden "
      id="home"
    >
      <div className="md:container mx-auto flex flex-row md:px-44 md:gap-32">
        {/* left container */}
        <div className="flex flex-col gap-y-8 md:items-center md:gap-x-12 ">
          {/* introduction text */}
          <div className="flex-1 text-center font-primary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-md mb-4 leading-[0.8] "
            >
              <span>Hello! I'm</span>{" "}
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className=" text-[36px] lg:text-[60px] font-primary font-bold uppercase leading-[1] "
            >
              <span className=" bg-gradient-to-r from-pinkGradient to-violetGradient inline-block text-transparent bg-clip-text">
                DIANA{" "}
              </span>{" "}
              <br />
              <span className="text-white mr-4">PETROVČÍKOVÁ </span>
            </motion.div>
            <h3 className="text-xl mb-4 tracking-widest">
              Junior Frontend Developer
            </h3>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 "
            >
              {" "}
              Turning ideas into interactive websites with ReactJS.{" "}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0"
            >
              {" "}
              {/* button */}
              <a href="#contact">
                <button class="btn btn-lg before:ease relative  overflow-hidden  bg-violetGradient text-white  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                  <span relative="relative z-10">Contact me</span>
                </button>
              </a>{" "}
            </motion.div>
            {/* social icons */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex text-[20px] gap-x-3 max-w-max mx-auto lg:mx-0 "
            >
              <a
                href="https://github.com/petrovcikovadiana"
                className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center"
              >
                <FaGithub />
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/diana-petrov%C4%8D%C3%ADkov%C3%A1-a6034a1b2/"
                className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>
        </div>

        {/* right container with photo*/}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="hidden lg:flex flex-1 mx-w-[320px] lg:max-w-[482px] "
        >
          {" "}
          <div className="hidden md:flex">
            <div className="w-64 h-80 bg-gradient-to-b from-violetGradient to-pinkGradient rounded-t-full">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/photo-diana-withoutbg.png"
                }
                alt="diana"
                className="flex mt-1 "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
