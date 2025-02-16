import React from "react";
import { Link } from "react-router-dom";
import heroImg from '../assets/image/hero.webp'

const Hero = () => {
  return (
    <section className="bg-white text-[#101828] py-20 flex flex-col md:flex-row items-center justify-center gap-10 px-6">
      {/* Left Side - Text Content */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-4xl font-bold text-blue-600">
          Hi, I'm Avi 👋
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Full-Stack Developer & Automation Engineer, passionate about
          building web apps and automation solutions.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <Link
            to="/projects"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* Right Side - Anime Image */}
      <div className="w-64 md:w-80">
        <img
          src={heroImg}
          alt="Anime Style Hero"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
