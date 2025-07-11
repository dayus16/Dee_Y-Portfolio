import React from "react";

const Skills = () => {
  return (
    <div id="skill" className="p-10">
      <div className="text-4xl text-#00df9a] font-bold">
        <h1 className="border-b border-dotted border-[#00df9a] pb-3">
          My Skills
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-5 uppercase">
        {[
          "HTML",
          "CSS",
          "JAVASCRIPT",
          "REACT JS",
          "TAILWIND CSS",
          "Data Fetching: TanStack Query (React Query)",
          "GITHUB",
          "GIT",
          "REST APIs, Responsive Design, Cross-browser compatibility",
          "APP TESTING",
          "GOOD COMMUNICATION",
          "Languages: English (Fluent), Yoruba, Hausa",
          "Problem-solving",
          "Teamwork, Attention to detail",
          "Netlify",
          "Vercel",
        ].map((skill, index) => (
          <p
            key={index}
            className="border-b border-[#00df9a] pb-2 w-full min-h-[50px] flex items-center"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
