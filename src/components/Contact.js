import React from "react";
// import motion
import { motion } from "framer-motion";
// import fade
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="lg:section py-16 bg-card" id="contact">
      <div className="container mx-auto pt-16 ">
        {/* title and contact form */}
        <div className="flex flex-col ">
          {/*title text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <div className="flex items-center justify-center">
              <h2 className="h3 leading-light text-center  lg:text-3xl mb-12">
                Let's work together{" "}
              </h2>
            </div>
          </motion.div>
          {/*contact form */}
          <form
            action="mailto:diana.petrovcikova@gmail.com"
            method="post"
            enctype="text/plain"
            className=" gap-y-6 pb-24 p-6 md:px-44"
          >
            <div className="flex flex-row gap-10">
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-600 focus:border-violetGradient transition-all "
                type="text"
                placeholder="First name"
              />
              <input
                className="bg-transparent border-b py-3 w-full outline-none placeholder:text-gray-600 focus:border-violetGradient transition-all "
                type="text"
                placeholder="Last name"
              />
            </div>
            <div className="flex flex-row gap-10">
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-600 focus:border-violetGradient transition-all "
                type="text"
                placeholder="Email"
              />
              <input
                className="bg-transparent border-b py-3 w-full outline-none placeholder:text-gray-600 focus:border-violetGradient transition-all "
                type="text"
                placeholder="Phone number"
              />
            </div>
            <textarea
              className="bg-transparent border-b py-3 w-full outline-none placeholder:text-gray-600 focus:border-violetGradient transition-all resize-none mb-12 "
              placeholder="Your message"
            ></textarea>
            {/* button */}
            <div className="flex items-center justify-center">
              <a href="#contact">
                <button class="btn btn-lg before:ease relative  overflow-hidden  bg-violetGradient text-white  before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                  <span relative="relative z-10">Send message</span>
                </button>
              </a>{" "}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
