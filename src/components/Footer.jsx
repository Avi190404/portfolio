import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-300 shadow-md py-6 flex flex-col items-center">

      {/* Navigation Links & Social Media in Row */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-6 mb-3">
          <Link to="/about" className="hover:text-blue-500 transition duration-300">
            About
          </Link>
          <Link to="/projects" className="hover:text-blue-500 transition duration-300">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-3">
          <a href="https://github.com/Avi190404" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
            <FaGithub size={20} />
          </a>
          <a href="www.linkedin.com/in/avi-patel-6170b6238" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Copyright Below Everything */}
      <div className="text-sm text-gray-500 mt-3">
        © {new Date().getFullYear()} Avi.dev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
