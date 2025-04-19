import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Contact = () => {
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
        Contact Information
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <div>
          <h2 className="text-2xl font-semibold">Phone</h2>
          <p className="text-lg">+91 814066 0570</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Email</h2>
          <p className="text-lg"><a href="mailto:avi19042004@gmail.com">avi19042004@gmail.com</a></p>
        </div>

        <div className="space-x-6 mt-6">
          <h2 className="text-2xl font-semibold">Follow Me</h2>
          <div className="flex justify-center space-x-6 mt-4">
            <motion.a
              href="https://www.linkedin.com/in/avi-patel-6170b6238"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-400 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Twitter
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-400 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-300 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Instagram
            </motion.a>
          </div>
        </div>
      </motion.div>

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
            onClick={() => navigate("/about")}
            className="text-white bg-purple-700 hover:bg-purple-500 px-4 py-2 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Go to About
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Contact;