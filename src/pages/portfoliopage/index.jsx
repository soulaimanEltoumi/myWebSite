import React from "react";
import certificateImage from "../../../src/img/certificate.jpg"; // Cambia la ruta según tu imagen de certificado
import project1Image from "../../../src/img/p1.png"; // Imagen de tu primer proyecto

function Portfolio() {
  const project2Image = "https://finance-smm.netlify.app/assets/logo-B_FNRPcg.png";

  return (
    <div className="bg-gray-900 p-10 min-h-screen">
      {/* Sección del Certificado */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-8">Portfolio</h1>
        <h2 className="text-3xl font-semibold text-white mb-4">My Certificate</h2>
        <img
          src={certificateImage}
          alt="My Certificate"
          className="max-h-fit h-auto rounded-lg shadow-lg mb-12"
        />
      </div>

      {/* Sección de Proyectos */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold text-white text-center mb-8">Projects</h2>
        
        {/* Proyecto 1 */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src={project1Image}
            alt="Project 1"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6"
          />
          <div className="md:w-1/2 text-white">
            <h3 className="text-2xl font-bold mb-4">GYM SPARTA</h3>
            <p className="text-lg mb-4">
              A MERN stack web application designed to enhance the fitness experience. Gym Sparta leverages a REST API to provide access to a database of over 1,000 exercises. Users can create personalised workouts, explore workouts created by others, and track their progress over time.
            </p>
            <a
              href="https://gymsparta.netlify.app/"
              className="text-blue-500 underline block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to the website 
            </a>
            <a
              href="https://github.com/soulaimanEltoumi/Fitness-Tracker-Frontend"
              className="text-blue-500 underline block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to the repository (frontend)
            </a>
            <a
              href="https://github.com/soulaimanEltoumi/Fitness-Tracker-Backend"
              className="text-blue-500 underline block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to the repository (backend)
            </a>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src={project2Image}
            alt="Project 2"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6"
          />
          <div className="md:w-1/2 text-white">
            <h3 className="text-2xl font-bold mb-4">Finance SMM</h3>
            <p className="text-lg mb-4">
              A web application developed using the MERN stack that delivers real-time market data through a REST API. Finance SMM enables users to track prices across multiple markets, including forex, cryptocurrencies, and stocks. The application features interactive charts for in-depth analysis and provides the latest market news, ensuring users stay informed about current trends.
            </p>
            <a
              href="https://finance-smm.netlify.app/"
              className="text-blue-500 underline block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to the website
            </a>
            <a
              href="https://github.com/soulaimanEltoumi/Web-Project"
              className="text-blue-500 underline block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to the repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
