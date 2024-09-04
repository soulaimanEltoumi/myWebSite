import React from "react";
import firstImage from "../../img/img1.jpg"

function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 p-8">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-white mb-4">
          Hello, I'm Soulaiman El Toumi
          </h1>
          <p className="text-gray-300 text-lg">
          Hello, I'm Soulaiman El Toumi, born and raised in Spain with Moroccan roots.
           I'm 21 years old and have been living in Berlin since 2018. I enjoy sports,
            especially football and going to the gym. In Germany,
             I completed an Ausbildung as an IT Assistant, where I discovered my passion for coding, 
             challenging myself, and solving problems. This led me to complete a Fullstack 
             Web Development bootcamp at Ironhack.          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={firstImage}
            alt="Mi Foto"
            className="w-64  rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
