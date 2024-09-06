import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed w-full bg-black bg-opacity-50 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
           
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about-me"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
