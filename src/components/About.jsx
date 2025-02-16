import React from "react";
import acoutImg from '../assets/image/about.webp'

const About = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 xl:px-32 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="w-40 h-40 md:w-56 md:h-56 bg-gray-200 rounded-full overflow-hidden shadow-lg">
          <img
            src={acoutImg}
            alt="Anime-style Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
            About Me
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Hey there! I'm <strong>Avi</strong>, a passionate full-stack developer with a deep 
            love for <strong>automation, web development, and decentralized identity systems</strong>.  
            I specialize in <strong>React, Next.js, and Make.com automation</strong> to build 
            high-quality, scalable applications.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed">
            With <strong>React, Next.js, and Make.com automation</strong>, I've worked with clients 
            worldwide, helping businesses optimize their workflows with automation.
          </p>

          {/* Button */}
          <div className="mt-6">
            <a
              href="/about"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
