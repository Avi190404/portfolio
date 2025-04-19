import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const workExperiences = [
  {
    company: "Ecowoodies",
    role: "Automation Engineer",
    duration: "Jan 2025 - Present",
    description: "Created multiple Automation to do daily task Easier.",
    link: "https://ecowoodies.com",
  },
];

const WorkExperience = () => {
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
        Work Experience
      </motion.h1>

      <div className="space-y-8">
        {workExperiences.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="bg-purple-700 p-6 rounded-lg shadow-lg hover:bg-purple-500"
          >
            <a href={work.link} target="_blank" rel="noopener noreferrer"><h3 className="text-xl font-semibold cursor-pointer underline">{work.company}</h3></a>
            <h4 className="text-lg font-medium">{work.role}</h4>
            <p className="text-sm text-gray-300">{work.duration}</p>
            <p className="mt-4">{work.description}</p>
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
            onClick={() => navigate("/contact")}
            className="text-white bg-purple-700 hover:bg-purple-500 px-4 py-2 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Go to Contact
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;