import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 text-gray-900 shadow-md px-6 py-3 flex justify-between items-center border-b border-gray-300">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Avi.dev
      </Link>

      {/* Mobile Menu Button */}
      <button className="text-gray-900 focus:outline-none sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Navbar Links */}
      <div className={`absolute top-12 left-0 w-full bg-gray-50 sm:static sm:w-auto sm:flex ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
          <Link to="/about" className="py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-100">
            About
          </Link>
          <Link to="/projects" className="py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-100">
            Projects
          </Link>
          <Link to="/contact" className="py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-100">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
