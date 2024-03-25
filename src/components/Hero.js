import React from "react";
// import type animation
import { TypeAnimation } from "react-type-animation";

// import icons
import { FaFacebookF } from "react-icons/fa";
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
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center pt-44"
      id="home"
    >
      <div className="container mx-auto flex flex-row">
        <div className="flex flex-col gap-y-8  lg:items-center lg:gap-x-12 ">
          {/* introduction text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[25px] mb-8 leading-[0.8] lg:text-[30px]"
            >
              DIANA <span>PETROVČÍKOVÁ</span>{" "}
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] "
            >
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={["Frontend developer", 2000, "", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <h3 className="h3 mb-4">
              I'm a Freelance junior Front-end Developer with over 1 year of
              experience.
            </h3>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 "
            >
              {" "}
              My love of coding drives me internally and I relish every
              opportunity to tackle the deepest technical challenges. I am
              currently learning ReactJS and in the process I am improving my
              knowledge of already learned languages-HTML, TailwindCSS.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              {" "}
              {/* buttons */}
              <a href="#contact">
                <button className="btn btn-lg">Contact me</button>
              </a>{" "}
              <a href="#work" className="text-gradient btn-link ">
                My portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <a href="https://github.com/petrovcikovadiana">
                <FaGithub />
              </a>{" "}
              <a href="https://www.linkedin.com/in/diana-petrov%C4%8D%C3%ADkov%C3%A1-a6034a1b2/">
                <FaLinkedinIn />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100010250708026">
                <FaFacebookF />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 mx-w-[320px] lg:max-w-[482px] "
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
