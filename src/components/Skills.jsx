import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React JS", level: 75 },
  { name: "Tailwind CSS", level: 85 },
  { name: "TanStack Query (React Query)", level: 70 },
  { name: "GitHub", level: 85 },
  { name: "Git", level: 80 },
  { name: "REST APIs", level: 75 },
  { name: "Responsive Design", level: 80 },
  { name: "Cross-browser Compatibility", level: 70 },
  { name: "App Testing", level: 65 },
  { name: "Communication", level: 90 },
  { name: "Problem-solving", level: 85 },
  { name: "Teamwork", level: 88 },
  { name: "Attention to Detail", level: 87 },
  { name: "Netlify", level: 80 },
  { name: "Vercel", level: 80 },
  { name: "Languages: English (Fluent)", level: 95 },
  { name: "Yoruba", level: 50 },
  { name: "Hausa", level: 60 },
];

const Skills = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
    id="skill" className="p-10">
      <div className="text-4xl text-[#00df9a] font-bold">
        <h1 className="border-b border-dotted border-[#00df9a] pb-3">
          My Skills
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-8">
        {skills.map((skill, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between mb-1 text-gray-300 text-sm">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-[#00df9a] h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
