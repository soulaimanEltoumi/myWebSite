import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="bg-gray-700 p-11 rounded-lg shadow-lg text-center max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <div className="space-y-6">
          <a
            href="mailto:Soulaimaneltoumi@gmail.com"
            className="flex items-center justify-center space-x-3 text-2xl"
          >
            <FaEnvelope />
            <span>Email: Soulaimaneltoumi@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/soulaiman-el-toumi-0b658b2a0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 text-2xl"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/soulaimanEltoumi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 text-2xl"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
