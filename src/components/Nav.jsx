import React, { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 z-50" id="home">
      {/* Desktop View */}
      <div className="md:flex hidden justify-between items-center p-5 bg-black">
        <div className="flex items-center gap-4">
          <div className="bg-[#00df9a] h-10 w-10 rounded-lg text-white flex items-center justify-center italic">
            DY
          </div>
          <h1 className="text-3xl italic text-gray-300">
            Dee <span className="text-[#00df9a]">Y</span>
          </h1>
        </div>
        <div>
          <nav className="flex gap-4 cursor-pointer uppercase">
            <a
              href="#header"
              className="relative text-[#00df9a] no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-500 hover:after:w-full"
            >
              Home
            </a>
            <a
              href="#about"
              className="relative text-[#00df9a] no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-500 hover:after:w-full"
            >
              About
            </a>
            <a
              href="#skill"
              className="relative text-[#00df9a] no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-500 hover:after:w-full"
            >
              Skills
            </a>
            <a
              href="#resume"
              className="relative text-[#00df9a] no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-500 hover:after:w-full"
            >
              Resume
            </a>
            <a
              href="#portfolio"
              className="relative text-[#00df9a] no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-500 hover:after:w-full"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="relative text-[#00df9a] no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-500 hover:after:w-full"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* ----------------Mobile View------------------------------- */}

      <div className="md:hidden">
        <div className="flex justify-between items-center p-5 bg-black fixed top-0 left-0 w-full z-50">
          <div className="flex items-center gap-4">
            <div className="bg-[#00df9a] h-10 w-10 rounded-lg text-white flex items-center justify-center italic">
              DY
            </div>
            <h1 className="text-xl italic text-gray-300">
              Dee <span className="text-[#00df9a]">Y</span>
            </h1>
          </div>

          <div
            className="text-3xl cursor-pointer text-white"
            onClick={handleNav}
          >
            {nav ? <IoMdClose /> : <IoIosMenu />}
          </div>
        </div>

        {/* Mobile Menu - Slide from Left */}
        <ul
          className={
            nav
              ? "fixed left-0 top-16 p-5 uppercase space-y-5 w-full text-[#00df9a] bg-black h-screen ease-in duration-300"
              : "fixed left-[-100%] top-16 p-5 uppercase space-y-5 w-full text-[#00df9a] bg-black h-screen ease-in duration-300"
          }
        >
          <li className="border-b border-[#00df9a] pb-3" onClick={handleNav}>
            <a href="#header">Home</a>
          </li>
          <li className="border-b pb-3" onClick={handleNav}>
            <a href="#about">About</a>
          </li>
          <li className="border-b pb-3" onClick={handleNav}>
            <a href="#skill">Skill</a>
          </li>
          <li className="border-b pb-3" onClick={handleNav}>
            <a href="#resume">Resume</a>
          </li>
          <li className="border-b pb-3" onClick={handleNav}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={handleNav}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
