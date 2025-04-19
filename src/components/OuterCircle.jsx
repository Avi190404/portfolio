import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OuterCircle = ({ label, link, delay, angle, radius }) => {
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, x, y }}
      transition={{ delay, duration: 0.5 }}
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
    >
      {label === "Resume" ? (
        <a
          href="/Resume.pdf"
          download
          className="w-24 h-24 bg-purple-700 text-white rounded-full flex items-center justify-center text-sm cursor-pointer shadow-lg hover:bg-purple-500 transition sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
        >
          <div className="w-24 h-24 bg-purple-700 text-white rounded-full flex items-center justify-center text-sm cursor-pointer shadow-lg hover:bg-purple-500 transition sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
            {label}
          </div>
        </a>
      ) : (
        <Link to={link}>
          <div className="w-24 h-24 bg-purple-700 text-white rounded-full flex items-center justify-center text-sm cursor-pointer shadow-lg hover:bg-purple-500 transition sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
            {label}
          </div>
        </Link>
      )}
    </motion.div>
  );
};

export default OuterCircle;
