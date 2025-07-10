import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Aquabilla from "../Images/water_billing_system.png";
import foodApp from "../Images/food_recipe.png";
import TodoApp from "../Images/Todo_list.png";
import Restaurant from "../Images/Restuarant.png";
import Guess from "../Images/Guess_my_number.png";

const Portfolio = () => {
  return (
    <div className="p-5" id="portfolio">
      <div className="p-5 text-4xl font-bold mt-10 text-[#00df9a]">
        <h1 className="border-b border-dotted pb-3">My Portfolio</h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
        <div className="relative overflow-hidden rounded-lg group">
          <img src={Aquabilla} alt="Project" className="w-full h-[600px]" />

          <div
            className="absolute left-0 bottom-0 w-[100%] h-0 bg-[rgba(0,0,0,0.7)]
 rounded-lg overflow-hidden flex justify-center items-center flex-col text-center px-10 text-sm transition-all duration-500 group-hover:h-full"
          >
            <h3 className="mb-5 font-medium text-2xl text-white">
              WATER BILLING SYSTEM
            </h3>
            <p className="text-white text-lg mb-5">
              Developed a Water Billing Management System with the following
              features and technologies: Frontend: Built with React.js for a
              dynamic, component-based user interface. Styling: Implemented
              using Tailwind CSS for a responsive and modern design. Backend:
              Integrated with a Node.js API for handling all server-side
              operations and database interactions. Authentication: Includes a
              secure login page for admin access to manage billing records.
            </p>
            <a
              href="https://water-billing-system-theta.vercel.app/"
              className="mt-2 text-xl rounded-full bg-white  text-[#00df9a] p-4 flex items-center justify-center"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg group">
          <img src={foodApp} alt="Project" className="w-full h-[600px]" />

          <div
            className="absolute left-0 bottom-0 w-[100%] h-0 bg-[rgba(0,0,0,0.7)]
 rounded-lg overflow-hidden flex justify-center items-center flex-col text-center px-10 text-sm transition-all duration-500 group-hover:h-full"
          >
            <h3 className="mb-5 font-medium text-2xl text-white">
              FOOD RECIPE APP
            </h3>
            <p className="text-white text-lg mb-5">
              Built a responsive Food Recipe App using React.js and Tailwind
              CSS, featuring recipe browsing, detailed instructions, and a
              modern, user-friendly interface.
            </p>
            <a
              href="https://food-app-react-tailwindcss-tan.vercel.app/"
              className="mt-2 text-xl rounded-full bg-white  text-[#00df9a] p-4 flex items-center justify-center"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg group">
          <img src={TodoApp} alt="Project" className="w-full h-[600px]" />

          <div
            className="absolute left-0 bottom-0 w-[100%] h-0 bg-[rgba(0,0,0,0.7)]
 rounded-lg overflow-hidden flex justify-center items-center flex-col text-center px-10 text-sm transition-all duration-500 group-hover:h-full"
          >
            <h3 className="mb-5 font-medium text-2xl text-white">TODO APP</h3>
            <p className="text-white textt-lg mb-5">
              This minimalist todo application was built with HTML, CSS, and
              JavaScript. Designed to enhance productivity, it facilitates task
              prioritization and effective management. Users can effortlessly
              create their to-do lists, mark tasks as completed, and seamlessly
              delete them, offering a seamless task management experience.
            </p>
            <a
              href="https://todo-list-app-chi-one.vercel.app/"
              className="mt-2 text-xl rounded-full bg-white  text-[#00df9a] p-4 flex items-center justify-center"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg group">
          <img src={Restaurant} alt="Project" className="w-full h-[600px]" />

          <div
            className="absolute left-0 bottom-0 w-[100%] h-0 bg-[rgba(0,0,0,0.7)]
 rounded-lg overflow-hidden flex justify-center items-center flex-col text-center px-10 text-sm transition-all duration-500 group-hover:h-full"
          >
            <h3 className="mb-5 font-medium text-2xl text-white">
              RESTAURANT APP
            </h3>
            <p className="text-white mb-5 text-lg">
              Crafted a simple yet engaging Restaurant Web App using HTML, CSS,
              and JavaScript, enabling easy menu exploration and smooth
              navigation.
            </p>
            <a
              href="https://restaurant-phi-eight-25.vercel.app/"
              className="mt-2 text-xl rounded-full bg-white  text-[#00df9a] p-4 flex items-center justify-center"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg group">
          <img src={Guess} alt="Project" className="w-full h-[600px]" />

          <div
            className="absolute left-0 bottom-0 w-[100%] h-0 bg-[rgba(0,0,0,0.7)]
 rounded-lg overflow-hidden flex justify-center items-center flex-col text-center px-10 text-sm transition-all duration-500 group-hover:h-full"
          >
            <h3 className="mb-5 font-medium text-2xl text-white">
              GUESS MY NUMBER
            </h3>
            <p className="text-white text-lg mb-5">
              Created an interactive Guess My Number Game using HTML, CSS, and
              JavaScript. The game challenges users to guess a randomly
              generated number within a limited number of attempts. Real-time
              feedback guides the player by indicating whether their guess is
              too high or too low. Designed with a clean and responsive user
              interface for an engaging gaming experience.
            </p>
            <a
              href="https://guess-my-number-game-liard.vercel.app/"
              className="mt-2 text-xl rounded-full bg-white text-[#00df9a] p-4 flex items-center justify-center"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
