import React from "react";

// import motion
import { motion } from "framer-motion";
// import fade
import { fadeIn } from "../variants";

//services data
const services = [
  {
    name: "HTML5",
  },
  {
    name: "CSS",
  },
  {
    name: "Vanilla Javascript",
  },
  {
    name: "React",
  },
  {
    name: "Tailwind",
  },
  {
    name: "Visual Studio Code",
  },

  {
    name: "Wordpress",
  },
  {
    name: "Github",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      {" "}
      <div className="container mx-auto pt-12">
        <div className="flex flex-col lg:flex-row">
          {/* left container text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-diana lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6">My Skills</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a freelance Frontend Developer with 1 year of experience.
            </h3>
            <a href="#work">
              <button className="btn btn-sm">View all projects</button>
            </a>{" "}
          </motion.div>
          {/*right container services */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/*right container service list-destructure  */}
            <div>
              {services.map((service, index) => {
                const { name } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[40px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold">
                        {name}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
