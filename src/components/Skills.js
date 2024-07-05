import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const skills = [
  "html",
  "css",
  "js",
  "react",
  "tailwind",
  "vs",
  "wordpress",
  "github-svg",
  "atom",
];

const Skills = () => {
  return (
    <section className="section bg-card" id="skills">
      <div className="container mx-auto pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto text-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:bg-diana lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            {/* title */}
            <h3 className="h3 max-w-[455px] text-center mx-auto">My skills</h3>
            {/* description */}
            <p className="text-md max-w-[500px] mb-10 mx-auto">
              These are the technologies I use in my projects
            </p>
            {/* list of skills */}
            <div className="flex max-w-[550px] items-center justify-center mx-auto gap-5 flex-wrap">
              {skills.map((skill) => (
                <img
                  key={skill}
                  src={`${process.env.PUBLIC_URL}/assets/svg/${skill}.svg`}
                  alt={skill}
                  className="h-16"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
