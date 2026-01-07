import React from "react";
import DeeYImage from "../Images/Dee.jpeg";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about">
      <div className="p-5 mt-20 mx-auto">
        <div className="p-5 text-4xl text-[#00df9a] font-bold">
          <h1 className="border-b border-dotted pb-3">About Me</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-15 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="mt-5 text-[#00df9a] text-2xl">
              Front End Developer
            </h3>
            <p className="mt-3 border-b border-dotted border-[#00df9a] pb-3 w-full text-lg leading-relaxed text-gray-300">
              I’m a Frontend Developer with practical experience building
              responsive, scalable web applications using Next.js, React.js,
              Tailwind CSS, and JavaScript. I enjoy working closely with
              designers and backend teams to deliver clean, maintainable, and
              high-performance user interfaces. I’m a quick learner, passionate
              about modern React practices such as state management, data
              fetching, server-side rendering, and responsive design. I thrive
              in agile teams where I can contribute, grow, and continuously
              improve my skills.
            </p>

            <div className="mt-5">
              <h3 className="text-2xl text-[#00df9a]">Personal Information</h3>
              <p className="mt-1 text-lg font-semibold text-gray-300">
                Name: Odoje Oladayo Jacob
              </p>
              <p className="text-lg font-semibold text-gray-300">
                Address: Abuja, Nigeria
              </p>
              <p className="flex items-center gap-2 text-lg font-semibold text-gray-300">
                <FaRegEnvelope /> Dayodoje@gmail.com
              </p>
              <p className="flex items-center gap-2 text-lg font-semibold text-gray-300">
                <FaWhatsapp /> 07057616192
              </p>
              <p className="flex items-center gap-2 text-lg font-semibold text-gray-300">
                <IoCallSharp /> 08167482343
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="w-100 h-130 rounded-lg overflow-hidden shadow-lg">
              <img
                src={DeeYImage}
                alt="Odoje Oladayo Jacob"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
