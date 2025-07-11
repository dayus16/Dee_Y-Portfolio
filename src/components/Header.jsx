import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Resume from "../Images/Odoje_Oladayo_Resume.pdf";

const Header = () => {
  return (
    <div className="p-5 mt-20" id="header">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#00df9a] font-bold leading-tight">
          Hello, I am Oladayo. <br /> Front End Developer
        </h1>
      </div>

      {/* Responsive button container */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
        <button className="border border-[#00df9a] py-2 px-8 md:py-2 md:px-10 text-[#00df9a] hover:bg-[#00df9a] hover:text-white cursor-pointer rounded text-base sm:text-lg md:text-xl font-medium transition-all duration-300">
          <a href="#contact">Hire Me</a>
        </button>
        <button className="border border-[#00df9a] py-2 px-8 md:py-2 md:px-8 text-[#00df9a] hover:bg-[#00df9a] hover:text-white cursor-pointer rounded text-base sm:text-lg md:text-xl font-medium transition-all duration-300">
          <a href={Resume} download>
            Download Resume
          </a>
        </button>
      </div>
      <div>
        <nav className="mt-5 flex justify-center gap-4 text-3xl text-[#00df9a]">
          <a
            href="https://www.linkedin.com/in/dayo-odoje/"
            target="_blank"
            className="hover:transform hover:-translate-y-1 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/dayoodoje"
            target="_blank"
            className="hover:transform hover:-translate-y-1 transition-transform duration-200"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/dayus16"
            target="_blank"
            className="hover:transform hover:-translate-y-1 transition-transform duration-200"
          >
            <FaGithub />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
