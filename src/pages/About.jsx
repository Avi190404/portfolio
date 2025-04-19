import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm Avi <span className="inline-block animate-waving-hand">👋</span>
        </h1>

        <p className="text-gray-300 text-lg mb-1">
          Full-Stack Developer from India
        </p>
        <p className="text-gray-400 text-lg mb-6">
          Passionate about building web apps and automation solutions.
        </p>

        <p className="text-gray-500 text-sm mb-6" >📧 <a href="mailto:avi19042004@gmail.com" className="text-purple-500 hover:text-purple-700">avi19042004@gmail.com</a></p>

        <button
          onClick={() => navigate("/skills")}
          className=" bg-purple-700 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          View Skills
        </button>
      </motion.div>
    </div>
  );
};

export default About;