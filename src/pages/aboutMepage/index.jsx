import React from "react";
import profileImage from "../../img/img1.jpg";
import secondImg from "../../img/img3.jpeg";

function AboutMe() {
  return (
    <div className="bg-gray-900 p-20 min-h-screen">
      {/* Sección de Bio + Imagen */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto mb-12">
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-gray-300 text-xl">
            Hi, I’m Soulaiman El Toumi, a 21-year-old developer originally from Spain. 
            I lived in Spain until 2018, where my father owned an Internet café. 
            I spent countless hours there, helping customers solve mobile phone issues, which sparked my passion for technology and problem-solving. 
            After moving to Berlin, I completed an IT Assistant Ausbildung, where I discovered my love for programming.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Profile Picture"
            className="w-64 rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Sección de Info e Intereses Personales */}
      <div className="max-w-4xl mx-auto text-center text-white mb-12">
        <h2 className="text-4xl font-semibold mb-4">Personal Interests</h2>
        <p className="text-gray-300 text-xl">
          I have a deep passion for football and fitness, especially when it comes to teamwork and communication.
          Football has taught me the importance of collaboration, which translates directly to my work in programming. 
          Just like in football, achieving success in development requires clear communication and a unified team effort.
        </p>
      </div>

      {/* Sección de Visión y Motivación */}
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-semibold mb-4">Vision & Motivation</h2>
        <p className="text-gray-300 text-xl">
          My journey into programming began with my curiosity to solve problems. 
          I enjoy facing challenges head-on and finding solutions independently. 
          Seeing the results after overcoming various technical hurdles is what drives my passion for coding.
        </p>
        <p className="text-gray-300 text-xl mt-4">
          I aim to keep learning and improving in the world of development, and I’m particularly drawn to environments where teamwork and communication are key.
          Just like in football, reaching shared goals requires everyone to work together and communicate effectively.
        </p>
        <div className="flex justify-center mt-8">
          <img
            src={secondImg}
            alt="Second Picture"
            className="max-h-fit rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
