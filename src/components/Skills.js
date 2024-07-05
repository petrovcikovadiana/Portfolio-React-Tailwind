import React from "react";

// import html from "../assets/svg/html.svg";
// import css from "../assets/svg/css.svg";
// import js from "../assets/svg/js.svg";
// import react from "../assets/svg/react.svg";
// import tailwind from "../assets/svg/tailwind.svg";
// import vs from "../assets/svg/vs.svg";
// import wordpress from "../assets/svg/wordpress.svg";
// import git from "../assets/svg/github-svg.svg";
// import atom from "../assets/svg/atom.svg";

// import motion
import { motion } from "framer-motion";
// import fade
import { fadeIn } from "../variants";

const Skills = () => {
  return (
    <section className="section bg-card" id="skills">
      {" "}
      <div className="container mx-auto pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto text-center">
          {/*right container services */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className=" lg:bg-diana lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h3 className="h3 max-w-[455px] text-center mx-auto">My skills</h3>
            <h3 className="text-md max-w-[500px] mb-10 mx-auto">
              {" "}
              These are the technologies I use in my projects{" "}
            </h3>
            <div className="flex max-w-[550px] items-center justify-center mx-auto gap-5 flex-wrap">
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/html.svg"}
                alt="vs"
                className="h-16"
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/css.svg"}
                alt="vs"
                className="h-16"
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/js.svg"}
                alt="vs"
                className="h-16"
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/react.svg"}
                alt="vs"
                className="h-16"
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/tailwind.svg"}
                alt="vs"
                className="h-16"
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/vs.svg"}
                alt="vs"
                className="h-16"
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/wordpress.svg"}
                alt="vs"
                className="h-16"
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/github-svg.svg"}
                alt="vs"
                className="h-16"
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/atom.svg"}
                alt="vs"
                className="h-16"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
