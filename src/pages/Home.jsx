import React, { useRef, useEffect, useState } from "react";
import CenterCircle from "../components/CenterCircle";
import OuterCircle from "../components/OuterCircle";

const Home = () => {
  const centerRef = useRef();
  const [radius, setRadius] = useState(250);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;

      if (width >= 1024) setRadius(250);
      else if (width >= 768) setRadius(200);
      else setRadius(140);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const outerCircles = [
    { label: "About", link: "/about", delay: 0.3, angle: (4 / 6) * 2 * Math.PI },
    { label: "Skills", link: "/skills", delay: 0.5, angle: (5 / 6) * 2 * Math.PI },
    { label: "Projects", link: "/projects", delay: 0.7, angle: (0 / 6) * 2 * Math.PI },
    { label: "Work", link: "/workexperience", delay: 0.9, angle: (1 / 6) * 2 * Math.PI },
    { label: "Contact", link: "/contact", delay: 1.1, angle: (2 / 6) * 2 * Math.PI },
    { label: "Resume", link: "/blog", delay: 1.3, angle: (3 / 6) * 2 * Math.PI },
  ];

  return (
    <div className="w-screen h-screen bg-black text-white relative flex items-center justify-center overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-purple-700 rounded-full blur-3xl opacity-20 z-0 sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]" />

      <div className="relative w-full h-full flex items-center justify-center">
        <CenterCircle ref={centerRef} />

        {outerCircles.map((circle, index) => (
          <OuterCircle
            key={index}
            label={circle.label}
            link={circle.link}
            delay={circle.delay}
            angle={circle.angle}
            radius={radius}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;