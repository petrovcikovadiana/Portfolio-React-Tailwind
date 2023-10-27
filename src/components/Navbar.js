import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    // nav desktop
    <nav className="md:bg-black/30 text-white fixed top-0 left-0 right-0 z-10 backdrop-blur-sm ">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex justify-between md:justify-center items-center h-16  ">
          <div className="flex space-x-4">
            {/* nav list desktop*/}
            <ul className="hidden md:flex space-x-10 uppercase">
              <li>
                <a href="#home" className="text-white hover:text-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-accent">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-white hover:text-accent">
                  Work
                </a>
              </li>
              <li>
                {" "}
                <a href="#contact" className="text-white hover:text-accent">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden ">
            {/* hamburger button mobile  */}
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 focus:outline-none "
            >
              {mobileMenuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/10	backdrop-blur-sm ">
          {/* hamburger list */}
          <ul className="flex flex-col space-y-5 text-white items-center uppercase h-screen">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
