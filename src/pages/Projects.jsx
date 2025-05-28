import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Ecommerce Website",
    description:
      "A modern eCommerce platform focused on efficient product management, smooth user experience, and customizable storefronts.",
    stack: "React • tailwindcss • Express js • MongoDB",
    github: "https://github.com/yourusername/decentralized-identity",
  },
  {
    title: "Shopify Automation Bot",
    description:
      "Automates order updates and notifications via Telegram using Google Apps Script.",
    stack: "Apps Script • Shopify API • Telegram",
    github: "https://github.com/yourusername/shopify-automation",
  },
  {
    title: "Url Shortener",
    description:
      "A URL shortener built with React, Express, and MongoDB. Shortens URLs and tracks click statistics.",
    stack: "React • tailwindcss • Express • MongoDB",
    github: "https://github.com/yourusername/email-automation",
  },
  {
    title: "Wether App",
    description:
      "A weather app that provides real-time weather updates and forecasts using OpenWeatherMap API.",
    stack: "React • tailwindcss • OpenWeatherMap API",
    github: "https://weather.avi-dev.in/",
  },
  {
    title: "This Portfolio Website",
    description:
      "Built with React, Tailwind, Vite & Framer Motion. Animated homepage with center & outer circles.",
    stack: "React • Tailwind • Vite • Framer Motion",
    github: "https://github.com/yourusername/portfolio-site",
  },
];

const Projects = () => {
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
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-purple-800 rounded-xl p-6 shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-purple-100 mb-4">{project.description}</p>
            <p className="text-sm text-purple-300 italic mb-4">{project.stack}</p>
            {/* <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 underline"
            >
              Demo ↗
            </a> */}
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
            onClick={() => navigate("/workexperience")}
            className="text-white bg-purple-700 hover:bg-purple-500 px-4 py-2 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Go to Work Experience
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Projects;