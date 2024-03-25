import React from "react";
// import framer motion
import { motion } from "framer-motion";
// import fade
import { fadeIn } from "../variants";
// import images
import Img1 from "../assets/barber.png";
import Img2 from "../assets/tesla.png";
import Img3 from "../assets/fitness.png";
import Img4 from "../assets/netmate.png";
import Img5 from "../assets/no-reason.png";
import Img6 from "../assets/hitflora.png";
import { FaHammer } from "react-icons/fa";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto pt-10">
        {/* left and right container */}
        <div className="flex flex-col lg:flex-row gap-x-10 lg:gap-y-10">
          {/* left container */}

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-36 lg:mb-0 "
          >
            <div>
              <h2 className="h2 leading-light text-accent">
                My Latest <br />
                Work.{" "}
              </h2>
              <p className="max-w-sm mb-16">
                {" "}
                All websites created by me represent my current capabilities
              </p>
            </div>
            {/* barbershop start */}
            {/* overlay black hover*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="lg:group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                className=" lg:group-hover:scale-125 transition-all duration-500  "
                src={Img6}
                alt=""
              />

              {/*programming language */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React, Tailwind</span>
              </div>
              {/* project name */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                {" "}
                <span className="text-3xl text-white">Hitflora</span>{" "}
              </div>
              <div>
                {/* link button */}
                <button className="hidden lg:block absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50 text-accent underline underline-offset-2">
                  <a href="https://www.hitflora.cz/">Link </a>
                </button>
              </div>
            </div>
          </motion.div>
          {/* mobile link */}
          <div className=" lg:hidden text-accent underline underline-offset-2 ">
            <a href="https://www.hitflora.cz/">Link </a>{" "}
          </div>
          {/* barbershop end */}
          {/* tesla start */}

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col lg:gap-y-10"
          >
            {/* overlay black hover*/}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {" "}
              <div className="lg:group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                className=" lg:group-hover:scale-125 transition-all duration-500  "
                src={Img2}
                alt=""
              />
              {/*programming language */}
              <div className="flex flex-row gap-5 items-center justify-center  -top-full absolute left-12 group-hover:top-2 transition-all duration-500 z-50">
                <FaHammer />

                <p>In progress </p>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React, Tailwind</span>
              </div>
              {/* project name */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                {" "}
                <span className="text-3xl text-white">Tesla clone</span>{" "}
              </div>
              <div>
                {/* link button */}
                <button className="hidden lg:block absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50 text-accent underline underline-offset-2">
                  <a href="https://petrovcikovadiana.github.io/tesla-clone-react/">
                    Link{" "}
                  </a>
                </button>
              </div>
            </div>
            {/* mobile link */}
            <div className=" lg:hidden text-accent underline underline-offset-2 ">
              <a href="https://petrovcikovadiana.github.io/tesla-clone-react/">
                Link{" "}
              </a>{" "}
            </div>
            {/* barbershop end */}
            {/* fitness start */}

            {/* overlay black hover*/}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="lg:group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}

              <img
                className=" lg:group-hover:scale-125 transition-all duration-500  "
                src={Img3}
                alt=""
              />
              {/*programming language */}

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">HTML CSS JS</span>
              </div>
              <div>
                {/* link button */}
                <button className=" hidden lg:block absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50 text-accent underline underline-offset-2">
                  <a href="https://petrovcikovadiana.github.io/Fitness-web/">
                    Link{" "}
                  </a>
                </button>
              </div>
              {/* project name */}

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                {" "}
                <span className="text-3xl text-white">Fitness</span>{" "}
              </div>
            </div>
          </motion.div>
          {/* mobile link */}
          <div className="lg:hidden text-accent underline underline-offset-2 ">
            <a href="https://petrovcikovadiana.github.io/Fitness-web/">Link </a>{" "}
          </div>
        </div>
        {/* fitness start */}

        {/* left and right container */}
        <div className="flex flex-col lg:flex-row gap-x-10 lg:gap-y-10 mt-10">
          {/* left container */}
          {/* noreason start */}

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-20 lg:mb-0 "
          >
            {/* overlay black hover*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="lg:group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                className=" lg:group-hover:scale-125 transition-all duration-500  "
                src={Img5}
                alt=""
              />

              {/*programming language */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">WORDPRESS</span>
              </div>
              {/* project name */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                {" "}
                <span className="text-3xl text-white">No Reason</span>{" "}
              </div>
              <div>
                {/* link button */}
                <button className="hidden lg:block absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50 text-accent underline underline-offset-2">
                  <a href="https://noreason.cz/">Link </a>
                </button>
              </div>
            </div>
          </motion.div>
          {/* mobile link */}
          <div className=" lg:hidden text-accent underline underline-offset-2 ">
            <a href="https://noreason.cz/">Link </a>{" "}
          </div>
          {/* noreason end */}
          {/* netmate start */}

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col lg:gap-y-10"
          >
            {/* overlay black hover*/}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="lg:group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}

              <img
                className=" lg:group-hover:scale-125 transition-all duration-500  "
                src={Img4}
                alt=""
              />
              {/*programming language */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">WORDPRESS</span>
              </div>
              {/* project name */}

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                {" "}
                <span className="text-3xl text-white">Netmate</span>{" "}
              </div>
              <div>
                {/* link button */}
                <button className="hidden lg:block absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50 text-accent underline underline-offset-2">
                  <a href="https://netmate.cz/">Link </a>
                </button>
              </div>
            </div>
            {/* mobile link */}
            <div className=" lg:hidden text-accent underline underline-offset-2 ">
              <a href="https://netmate.cz/">Link </a>{" "}
            </div>
            {/* netmate end */}

            {/* overlay black hover*/}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="lg:group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}

              <img
                className=" lg:group-hover:scale-125 transition-all duration-500  "
                src={Img1}
                alt=""
              />
              {/*programming language */}

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">HTML, Tailwind, JS</span>
              </div>
              <div>
                {/* link button */}
                <button className=" hidden lg:block absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50 text-accent underline underline-offset-2">
                  <a href="https://petrovcikovadiana.github.io/Barbershop-Tailwind/">
                    Link{" "}
                  </a>
                </button>
              </div>
              {/* project name */}

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                {" "}
                <span className="text-3xl text-white">Barbershop</span>{" "}
              </div>
            </div>
          </motion.div>
          {/* mobile link */}
          <div className="lg:hidden text-accent underline underline-offset-2 ">
            <a href="https://petrovcikovadiana.github.io/Barbershop-Tailwind/">
              Link{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
