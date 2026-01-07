import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="resume"
      className="p-5 mt-10"
    >
      <div className="text-4xl font-bold p-5 text-[#00df9a]">
        <h1 className="border-b border-dotted border-#00df9a] pb-3">
          My Resume
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div>
          <h1 className="text-center uppercase underline decoration-[#00df9a] decoration-2 underline-offset-4 text-lg font-medium text-gray-300">
            Experience
          </h1>
          <div className="mt-5 border border-gray-400/10 py-5 px-8 rounded text-gray-300">
            <p>Freelance Developer</p>
            <p>04/2025 - Present</p>
          </div>

          <div className="mt-5 border border-gray-400/10 py-5 px-8 rounded text-gray-300">
            <p>Intenship at Techvibes Nig Limited.</p>
            <p>07/2024 - 04/2025</p>
          </div>
          <div className="mt-5 border border-gray-400/10 py-5 px-8 rounded text-gray-300">
            <p>Data entry agent, AIT(IBCC building).</p>
            <p>01/2023 - 05/2024</p>
          </div>
          {/* <div className="mt-5 border border-[#00df9a] py-5 px-8 rounded">
            <p>Central Forcaster, Nigeria meteorological Agency (NIMET).</p>
            <p>11/2021 - 11/2022</p>
          </div>
          <div className="mt-5 border border-[#00df9a] py-5 px-8 rounded">
            <p>Manager, Tun&day Oil and Gas Nig limited</p>
            <p>07/2019 - 09/2022</p>
          </div>
          <div className="mt-5 border border-[#00df9a] py-5 px-8 rounded">
            <p>
              Preciding Officer, Independent National Electoral Commission
              (INEC).
            </p>
            <p>02/2022</p>
          </div> */}
        </div>
        <div>
          <h1 className="text-center uppercase underline decoration-[#00df9a] decoration-2 underline-offset-4 text-lg font-medium text-gray-300">
            Education
          </h1>
          <div className="mt-5 border border-gray-400/10 py-5 px-8 rounded text-gray-300">
            <p>
              Bachelor of Technology (Geography / Meteorology), <br /> Federal
              University of techology Minna, Niger state.
            </p>
            <p>09 / 2021</p>
          </div>
          <div className="mt-5 border border-gray-400/10 py-5 px-8 rounded text-gray-300">
            <p>Frontend Developer, Globatech World Computer Institute Abuja.</p>
            <p>2023 / 2024</p>
          </div>
          <div className="mt-5 border border-gray-400/10 py-5 px-8 rounded text-gray-300">
            <p>
              Customer Service and Relationship Management (CSRM), <br /> Exford
              Global consult Ltd.
            </p>
            <p>12/2021 / 05/2022</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
