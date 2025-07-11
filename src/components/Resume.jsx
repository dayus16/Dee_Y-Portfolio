import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="p-5 mt-10">
      <div className="text-4xl font-bold p-5 text-[#00df9a]">
        <h1 className="border-b border-dotted border-#00df9a] pb-3">
          My Resume
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div>
          <h1 className="text-center uppercase underline decoration-[#00df9a] decoration-2 underline-offset-4 text-lg font-medium">
            Experience
          </h1>

          <div className="mt-5 border border-[#00df9a] py-5 px-8 rounded">
            <p>Intenship at Techvibes Nig Limited.</p>
            <p>07/2024 - 04/2025</p>
          </div>
          <div className="mt-5 border border-[#00df9a] py-5 px-8 rounded">
            <p>Data entry agent, AIT(IBCC building).</p>
            <p>01/2023 - 05/2024</p>
          </div>
          <div className="mt-5 border border-[#00df9a] py-5 px-8 rounded">
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
          </div>
        </div>
        <div>
          <h1 className="text-center uppercase underline decoration-[#00df9a] decoration-2 underline-offset-4 text-lg font-medium">
            Education
          </h1>
          <div className="mt-5 border border-[#00df9a] py-5 px-8 rounded">
            <p>
              Bachelor of Technology (Geography / Meteorology), <br /> Federal
              University of techology Minna, Niger state.
            </p>
            <p>09 / 2021</p>
          </div>
          <div className="mt-5 border border-[#00df9a] py-5 px-8 rounded">
            <p>Frontend Developer, Globatech World Computer Institute Abuja.</p>
            <p>2023 / 2024</p>
          </div>
          <div className="mt-5 border border-[#00df9a] py-5 px-8 rounded">
            <p>
              Customer Service and Relationship Management (CSRM), <br /> Exford Global
              consult Ltd.
            </p>
            <p>12/2021 / 05/2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
