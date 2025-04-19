import { motion } from "framer-motion";
import React from "react";

const CenterCircle = React.forwardRef(({ label = "Welcome" }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6 }}
      className="absolute w-36 h-36 bg-purple-900 rounded-full flex items-center justify-center text-white text-lg z-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48"
    >
      {label}
    </motion.div>
  );
});

export default CenterCircle;
