import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Next js",
  "Tailwind CSS",
  "Google Apps Script",
  "Python",
  "Express.js",
  "MongoDB"
];

const Skill = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Skills
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="bg-purple-700 p-6 rounded-lg shadow-lg hover:bg-purple-500 cursor-pointer"
          >
            <h3 className="text-xl font-medium">{skill}</h3>
          </motion.div>
        ))}
      </div>

      {animationComplete && (
        <div className="flex justify-between mt-12">
          <motion.button
            onClick={() => navigate("/")}
            className="text-white bg-purple-700 hover:bg-purple-500 px-4 py-2 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Go Back to Home
          </motion.button>

          <motion.button
            onClick={() => navigate("/projects")}
            className="text-white bg-purple-700 hover:bg-purple-500 px-4 py-2 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Go to Projects
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Skill;