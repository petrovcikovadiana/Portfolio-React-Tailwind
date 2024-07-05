import React from "react";
// import framer motion
import { motion } from "framer-motion";
// import fade
import { fadeIn } from "../variants";
// import icons
import { FaHammer } from "react-icons/fa";

const Work = () => {
  return (
    // section my projects
    <section className="section" id="work">
      <div className="container mx-auto pt-16 ">
        <div>
          {/* title */}
          <h2 className="h3 leading-light text-center">My Projects </h2>
          {/* description */}
          <p className="max-w-md mb-16 text-center mx-auto">
            {" "}
            All the websites I have created represent my current capabilities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-x-10 lg:gap-y-10 ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-20 lg:mb-0"
          >
            {" "}
            {/* hitflora start */}
            {/* overlay black hover*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-10 ">
              <a href="https://www.hitflora.cz/">
                <div className="xl:group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 bg-black/70 xl:bg-transparent"></div>{" "}
              </a>
              {/* image */}
              <img
                className=" lg:group-hover:scale-125 transition-all duration-500 "
                src={process.env.PUBLIC_URL + "/assets/hitflora-desktop.png"}
                alt=""
              />
              {/*programming language */}
              <div className="absolute bottom-24 left-12 xl:-bottom-full xl:group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="bg-gradient-to-r from-pinkGradient to-violetGradient inline-block text-transparent bg-clip-text">
                  React, Tailwind
                </span>
              </div>
              {/* project name */}
              <div className="absolute bottom-14 left-12 xl:-bottom-full xl:group-hover:bottom-14 transition-all duration-700 z-50">
                {" "}
                <span className="text-3xl text-white">Hitflora</span>{" "}
              </div>
              <div>
                {/* Click to explore button */}
                <button className="  absolute bottom-6 left-12 xl:-bottom-full group-hover:bottom-6 transition-all duration-700 z-50 text-pinkGradient underline underline-offset-2">
                  <a href="https://www.hitflora.cz/">Click to explore </a>
                </button>
              </div>
            </div>
          </motion.div>{" "}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-1 flex-col lg:gap-y-10"
          >
            {/* overlay black hover*/}
            {/* tesla start */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-10 ">
              {" "}
              <a href="https://petrovcikovadiana.github.io/tesla-clone-react/">
                <div className="xl:group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 bg-black/70 xl:bg-transparent"></div>
              </a>
              {/* image */}
              <img
                className=" lg:group-hover:scale-125 transition-all duration-500  "
                src={process.env.PUBLIC_URL + "/assets/tesla-desktop.png"}
                alt=""
              />
              {/*programming language */}
              <div className="flex flex-row gap-5 items-center justify-center  -top-full absolute left-12 group-hover:top-2 transition-all duration-500 z-50">
                <FaHammer />
                <p>In progress </p>
              </div>
              <div className="absolute bottom-24 left-12 xl:-bottom-full xl:group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="bg-gradient-to-r from-pinkGradient to-violetGradient inline-block text-transparent bg-clip-text">
                  React, Tailwind
                </span>
              </div>
              {/* project name */}
              <div className="absolute bottom-14 left-12 xl:-bottom-full lg:group-hover:bottom-14 transition-all duration-700 z-50">
                {" "}
                <span className="text-3xl text-white">Tesla clone</span>{" "}
              </div>
              <div>
                {/* Click to explore button */}
                <button className="absolute bottom-6 left-12 xl:-bottom-full group-hover:bottom-6 transition-all duration-700 z-50 text-pinkGradient underline underline-offset-2">
                  <a href="https://petrovcikovadiana.github.io/tesla-clone-react/">
                    Click to explore{" "}
                  </a>
                </button>
              </div>
            </div>
            {/* tesla end */}
          </motion.div>{" "}
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10 lg:gap-y-10 ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-20 lg:mb-0"
          >
            {" "}
            {/* barbershop pepe start */}
            {/* overlay black hover*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-10 ">
              <a href="https://petrovcikovadiana.github.io/Barbershop-Tailwind/">
                <div className="xl:group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 bg-black/70 xl:bg-transparent"></div>
              </a>
              {/* image */}
              <img
                className=" lg:group-hover:scale-125 transition-all duration-500 "
                src={process.env.PUBLIC_URL + "/assets/barber-desktop.png"}
                alt=""
              />
              {/*programming language */}
              <div className="absolute bottom-24 left-12 xl:-bottom-full xl:group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="bg-gradient-to-r from-pinkGradient to-violetGradient inline-block text-transparent bg-clip-text">
                  HTML, Tailwind, JS
                </span>
              </div>
              <div>
                {/* Click to explore button */}
                <button className="  absolute bottom-6 left-12 xl:-bottom-full group-hover:bottom-6 transition-all duration-700 z-50 text-pinkGradient underline underline-offset-2">
                  <a href="https://petrovcikovadiana.github.io/Barbershop-Tailwind/">
                    Click to explore{" "}
                  </a>
                </button>
              </div>
              {/* project name */}
              <div className="absolute bottom-14 left-12 xl:-bottom-full lg:group-hover:bottom-14 transition-all duration-700 z-50">
                {" "}
                <span className="text-3xl text-white">Barbershop</span>{" "}
              </div>
            </div>
          </motion.div>{" "}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-1 flex-col lg:gap-y-10"
          >
            {/* overlay black hover*/}
            {/* tesla start */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-10 ">
              <a href="https://petrovcikovadiana.github.io/Fitness-web/">
                <div className="xl:group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 bg-black/70 xl:bg-transparent"></div>
              </a>
              {/* image */}
              <img
                className=" lg:group-hover:scale-125 transition-all duration-500  "
                src={process.env.PUBLIC_URL + "/assets/fitness-desktop.png"}
                alt=""
              />
              {/*programming language */}
              <div className="absolute bottom-24 left-12 xl:-bottom-full xl:group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="bg-gradient-to-r from-pinkGradient to-violetGradient inline-block text-transparent bg-clip-text">
                  HTML CSS JS
                </span>
              </div>
              <div>
                {/* Click to explore button */}
                <button className="  absolute bottom-6 left-12 xl:-bottom-full group-hover:bottom-6 transition-all duration-700 z-50 text-pinkGradient underline underline-offset-2">
                  <a href="https://petrovcikovadiana.github.io/Fitness-web/">
                    Click to explore{" "}
                  </a>
                </button>
              </div>
              {/* project name */}
              <div className="absolute bottom-14 left-12 xl:-bottom-full lg:group-hover:bottom-14 transition-all duration-700 z-50">
                {" "}
                <span className="text-3xl text-white">Fitness</span>{" "}
              </div>
            </div>
            {/* tesla end */}
          </motion.div>{" "}
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10 lg:gap-y-10 ">
          {/* noreason start */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-20 lg:mb-0 "
          >
            {/* overlay black hover*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-10">
              <a href="https://noreason.cz/">
                <div className="xl:group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 bg-black/70 xl:bg-transparent"></div>
              </a>
              {/* image */}
              <img
                className=" lg:group-hover:scale-125 transition-all duration-500  "
                src={process.env.PUBLIC_URL + "/assets/noreason-desktop.png"}
                alt=""
              />
              {/*programming language */}
              <div className="absolute bottom-24 left-12 xl:-bottom-full xl:group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="bg-gradient-to-r from-pinkGradient to-violetGradient inline-block text-transparent bg-clip-text">
                  WORDPRESS
                </span>
              </div>
              {/* project name */}
              <div className="absolute bottom-14 left-12 xl:-bottom-full lg:group-hover:bottom-14 transition-all duration-700 z-50">
                {" "}
                <span className="text-3xl text-white">No Reason</span>{" "}
              </div>
              <div>
                {/* Click to explore button */}
                <button className="absolute bottom-6 left-12 xl:-bottom-full group-hover:bottom-6 transition-all duration-700 z-50 text-pinkGradient underline underline-offset-2">
                  <a href="https://noreason.cz/">Click to explore </a>
                </button>
              </div>
            </div>
          </motion.div>
          {/* noreason end */}
          {/* netmate start */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex flex-col lg:gap-y-10"
          >
            {/* overlay black hover*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-10">
              <a href="https://netmate.cz/">
                <div className="xl:group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 bg-black/70 xl:bg-transparent"></div>
              </a>
              {/* image */}
              <img
                className=" lg:group-hover:scale-125 transition-all duration-500  "
                src={process.env.PUBLIC_URL + "/assets/netmate-desktop.png"}
                alt=""
              />
              {/*programming language */}
              <div className="absolute bottom-24 left-12 xl:-bottom-full xl:group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="bg-gradient-to-r from-pinkGradient to-violetGradient inline-block text-transparent bg-clip-text">
                  WORDPRESS
                </span>
              </div>
              {/* project name */}
              <div className="absolute bottom-14 left-12 xl:-bottom-full lg:group-hover:bottom-14 transition-all duration-700 z-50">
                {" "}
                <span className="text-3xl text-white">Netmate</span>{" "}
              </div>
              <div>
                {/* Click to explore button */}
                <button className="  absolute bottom-6 left-12 xl:-bottom-full group-hover:bottom-6 transition-all duration-700 z-50 text-pinkGradient underline underline-offset-2">
                  <a href="https://netmate.cz/">Click to explore </a>
                </button>
              </div>
            </div>
            {/* netmate end */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
