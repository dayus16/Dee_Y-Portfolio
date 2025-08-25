import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Aquabilla from "../Images/water_billing_system.png";
import foodApp from "../Images/food_recipe.png";
import TodoApp from "../Images/Todo_list.png";
import Restaurant from "../Images/Restuarant.png";
import Guess from "../Images/Guess_my_number.png";
import Blog from "../Images/Blog.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sport Blog",
    description:
      "Built a responsive sports blogging platform built with React.js, Tailwind CSS, and Contentful CMS. It features dynamic post rendering, individual blog pages, a custom view counter, and smooth navigation, showcasing skills in API integration, routing, and UI design.",
    image: Blog,
    link: "https://www.sportpulseblog.com/",
  },
  {
    title: "WATER BILLING SYSTEM",
    description:
      "Developed a Water Billing Management System using React.js for component-based user interface, Tailwind CSS, Integrated with a Node.js API for handling all server-side operations and database interactions. Also Includes a secure login page for admin access to manage billing records.",
    image: Aquabilla,
    link: "https://water-billing-system-theta.vercel.app/",
  },
  {
    title: "FOOD RECIPE APP",
    description:
      "Built a responsive Food Recipe App using React.js and Tailwind CSS, featuring recipe browsing, detailed instructions, and a modern, user-friendly interface.",
    image: foodApp,
    link: "https://food-app-react-tailwindcss-tan.vercel.app/",
  },
  {
    title: "TODO APP",
    description:
      "This minimalist todo application was built with React.js and Tailwind CSS. Designed to enhance productivity, it facilitates task prioritization and effective management. Users can effortlessly create their to-do lists, mark tasks as completed, and seamlessly delete them, offering a seamless task management experience.",
    image: TodoApp,
    link: "https://todo-list-two-nu-30.vercel.app/",
  },
  {
    title: "RESTAURANT APP",
    description:
      "Crafted a simple yet engaging Restaurant Web App using HTML, CSS, and JavaScript, enabling easy menu exploration and smooth navigation.",
    image: Restaurant,
    link: "https://restaurant-phi-eight-25.vercel.app/",
  },
  {
    title: "GUESS MY NUMBER",
    description:
      "Created an interactive Guess My Number Game using HTML, CSS, and JavaScript. The game challenges users to guess a randomly generated number within a limited number of attempts. Real-time feedback guides the player by indicating whether their guess is too high or too low. Designed with a clean and responsive user interface for an engaging gaming experience.",
    image: Guess,
    link: "https://guess-my-number-game-liard.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-5"
      id="portfolio"
    >
      <div className="text-4xl font-bold mt-10 text-[#00df9a] p-5">
        <h1 className="border-b border-dotted pb-3">My Portfolio</h1>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-4 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-400/10 rounded-lg overflow-hidden bg-[rgba(0, 0, 0, 0.918))] min-h-[450px] flex flex-col shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="flex flex-col justify-between flex-grow text-center p-4">
              <h3 className="mb-2 font-medium text-xl text-gray-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description.substring(0, 200) + "..."}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center justify-center hover:text-[#00df9a] transition duration-300"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
