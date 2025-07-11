import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Aquabilla from "../Images/water_billing_system.png";
import foodApp from "../Images/food_recipe.png";
import TodoApp from "../Images/Todo_list.png";
import Restaurant from "../Images/Restuarant.png";
import Guess from "../Images/Guess_my_number.png";

const Portfolio = () => {
  const waterBillingSystemText = `Developed a Water Billing Management System using React.js for component-based user interface,  Tailwind CSS,  Integrated with a Node.js API for handling all server-side operations and database interactions. Also Includes a secure login page for admin access to manage billing records.`;

  const foodRecipe = `Built a responsive Food Recipe App using React.js and Tailwind
              CSS, featuring recipe browsing, detailed instructions, and a
              modern, user-friendly interface.`;

  const todoList = ` This minimalist todo application was built with HTML, CSS, and
              JavaScript. Designed to enhance productivity, it facilitates task
              prioritization and effective management. Users can effortlessly
              create their to-do lists, mark tasks as completed, and seamlessly
              delete them, offering a seamless task management experience.`;

  const restuarant = `  Crafted a simple yet engaging Restaurant Web App using HTML, CSS,
              and JavaScript, enabling easy menu exploration and smooth
              navigation.`;

  const guessMyNumber = `Created an interactive Guess My Number Game using HTML, CSS, and
              JavaScript. The game challenges users to guess a randomly
              generated number within a limited number of attempts. Real-time
              feedback guides the player by indicating whether their guess is
              too high or too low. Designed with a clean and responsive user
              interface for an engaging gaming experience.`;

  return (
    <div className="p-5" id="portfolio">
      <div className="p-5 text-4xl font-bold mt-10 text-[#00df9a]">
        <h1 className="border-b border-dotted pb-3">My Portfolio</h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-5 gap-10">
        <div className="border border-gray-400/10 h-105 rounded-lg overflow-hidden">
          <img src={Aquabilla} alt="Project" className="w-full h-[200px]" />

          <div className="mt-3 text-center mx-auto">
            <h3 className="mb-2 font-medium text-xl text-gray-300">
              WATER BILLING SYSTEM
            </h3>
            <p className="text-gray-300 mb-2 p-3">
              {waterBillingSystemText.substring(0, 200) + "..."}
            </p>
            <a
              href="https://water-billing-system-theta.vercel.app/"
              target="_blank"
              className="text-white flex items-center justify-center"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>
        <div className="border border-gray-400/10 h-105 rounded-lg overflow-hidden [bg-[rgba(0,0,0,0.7)]">
          <img src={foodApp} alt="Project" className="w-full h-[200px]" />

          <div className="mt-3 text-center mx-auto">
            <h3 className="mb-2 font-medium text-xl text-gray-300">
              FOOD RECIPE APP
            </h3>
            <p className="text-gray-300 mb-2 p-3">
              {foodRecipe.substring(0, 200) + "..."}
            </p>
            <a
              href="https://food-app-react-tailwindcss-tan.vercel.app/"
              target="_blank"
              className="text-white flex items-center justify-center"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>
        <div className="border border-gray-400/10 h-105 rounded-lg overflow-hidden [bg-[rgba(0,0,0,0.7)]">
          <img src={TodoApp} alt="Project" className="w-full h-[200px]" />

          <div className="mt-3 text-center mx-auto">
            <h3 className="mb-2 font-medium text-xl text-gray-300">TODO APP</h3>
            <p className="text-gray-300 mb-2 p-3">
              {todoList.substring(0, 200) + "..."}
            </p>
            <a
              href="https://todo-list-app-chi-one.vercel.app/"
              target="_blank"
              className="text-white flex items-center justify-center"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>
        <div className="border border-gray-400/10 h-105 rounded-lg overflow-hidden [bg-[rgba(0,0,0,0.7)]">
          <img src={Restaurant} alt="Project" className="w-full h-[200px]" />

          <div className="mt-3 text-center mx-auto">
            <h3 className="mb-2 font-medium text-xl text-gray-300">
              RESTAURANT APP
            </h3>
            <p className="text-gray-300 mb-2 p-3">
              {restuarant.substring(0, 200) + "..."}
            </p>
            <a
              href="https://restaurant-phi-eight-25.vercel.app/"
              target="_blank"
              className="text-white flex items-center justify-center"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>
        <div className="border border-gray-400/10 h-105 rounded-lg overflow-hidden [bg-[rgba(0,0,0,0.7)]">
          <img src={Guess} alt="Project" className="w-full h-[200px]" />

          <div className="mt-3 text-center mx-auto">
            <h3 className="mb-2 font-medium text-xl text-gray-300">
              GUESS MY NUMBER
            </h3>
            <p className="text-gray-300 mb-2 p-3">
              {guessMyNumber.substring(0, 200) + "..."}
            </p>
            <a
              href="https://guess-my-number-game-liard.vercel.app/"
              target="_blank"
              className="text-white flex items-center justify-center"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
