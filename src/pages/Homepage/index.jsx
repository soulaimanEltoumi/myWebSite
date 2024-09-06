import React from "react";
import firstImage from "../../img/img1.jpg";
import { DiJavascript1, DiGit, DiHtml5 } from "react-icons/di";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript, SiPostgresql } from "react-icons/si";
import { FaJava } from "react-icons/fa";


function HomePage() {
  return (
    <div className="bg-gray-800 p-20 min-h-screen">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto mb-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-white mb-4">
            Welcome to my Website
          </h1>
          <p className="text-gray-300 text-lg">
            Hello, I'm Soulaiman El Toumi, born and raised in Spain with Moroccan roots.
            I'm 21 years old and have been living in Berlin since 2018. I enjoy sports,
            especially football and going to the gym. In Germany,
            I completed an Ausbildung as an IT Assistant, where I discovered my passion for coding,
            challenging myself, and solving problems. This led me to complete a Fullstack
            Web Development bootcamp at Ironhack.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={firstImage}
            alt="Mi Foto"
            className="w-64 rounded-full"
          />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="flex items-center justify-center">
        <div className="text-center text-white text-lg">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex justify-center space-x-8 mt-8">
            <DiJavascript1 className="text-5xl text-yellow-400 hover:text-yellow-500 hover:scale-110 transition-transform duration-200" />
            <SiReact className="text-5xl text-blue-400 hover:text-blue-500 hover:scale-110 transition-transform duration-200" />
            <SiNodedotjs className="text-5xl text-green-500 hover:text-green-600 hover:scale-110 transition-transform duration-200" />
            <SiMongodb className="text-5xl text-green-400 hover:text-green-500 hover:scale-110 transition-transform duration-200" />
            <DiGit className="text-5xl text-red-500 hover:text-red-600 hover:scale-110 transition-transform duration-200" />
            <DiHtml5 className="text-5xl text-orange-500 hover:text-orange-600 hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>

      {/* Learning Section */}
      <div className="flex items-center justify-center mt-12">
        <div className="text-center text-white text-lg">
          <h2 className="text-2xl font-semibold mb-4">Currently Learning</h2>
          <div className="flex justify-center space-x-8 mt-8">
            <SiTailwindcss className="text-5xl text-teal-400 hover:text-teal-500 hover:scale-110 transition-transform duration-200" />
            <FaJava className="text-5xl text-red-700 hover:text-red-800 hover:scale-110 transition-transform duration-200" />
            <SiTypescript className="text-5xl text-blue-500 hover:text-blue-600 hover:scale-110 transition-transform duration-200" />
            <SiPostgresql className="text-5xl text-blue-600 hover:text-blue-700 hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
