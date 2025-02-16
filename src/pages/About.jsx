import React from "react";
import acoutImg from '../assets/image/about.webp'

const AboutPage = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 xl:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-40 h-40 md:w-56 md:h-56 bg-gray-200 rounded-full overflow-hidden shadow-lg">
            <img
              src={acoutImg}
              alt="Anime-style Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
              About Me
            </h1>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Hey there! I'm <strong>Avi</strong>, a passionate full-stack developer with expertise in <strong>React, Next.js, and automation tools like Make.com</strong>. I love building scalable applications and <strong>helping businesses optimize workflows</strong> with automation.
            </p>
            <p className="text-gray-700 mt-2 leading-relaxed">
              With <strong>2+ years of freelancing experience</strong>, I have successfully worked with clients worldwide, developing <strong>custom web applications and automation solutions</strong>.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-blue-600">Experience</h2>
          <div className="mt-4 space-y-6">
            <div className="p-4 border-l-4 border-blue-600 bg-gray-100 rounded-md">
              <h3 className="font-semibold">Freelance Automation Developer</h3>
              <p className="text-gray-600">2023 - Present</p>
              <p className="text-gray-700 mt-2">
                Developed custom automation solutions using <strong>Make.com</strong>, <strong>Google Apps Script</strong>, and integrated APIs to streamline workflows for businesses.
              </p>
            </div>
            <div className="p-4 border-l-4 border-blue-600 bg-gray-100 rounded-md">
              <h3 className="font-semibold">Full-Stack Web Developer</h3>
              <p className="text-gray-600">2024 - Present</p>
              <p className="text-gray-700 mt-2">
                Specialized in <strong>React, Next.js, Node.js, and MongoDB</strong> to create high-performance web applications.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-blue-600">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {["JavaScript", "React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Google Apps Script", "Make.com", "Blockchain"].map((skill, index) => (
              <div key={index} className="p-3 bg-gray-100 rounded-md shadow-md text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* What I Do Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-blue-600">What I Do</h2>
          <div className="mt-4 space-y-6">
            <div className="p-4 bg-gray-100 rounded-md shadow-md">
              <h3 className="font-semibold">Web Development</h3>
              <p className="text-gray-700 mt-2">
                Creating modern, responsive, and scalable web applications using <strong>React, Next.js, and Node.js</strong>.
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md shadow-md">
              <h3 className="font-semibold">Automation & AI Engineering</h3>
              <p className="text-gray-700 mt-2">
                Automating workflows with <strong>Make.com, Google Apps Script</strong>, and integrating AI-powered tools.
              </p>
            </div>
            {/* <div className="p-4 bg-gray-100 rounded-md shadow-md">
              <h3 className="font-semibold">Decentralized Identity Systems</h3>
              <p className="text-gray-700 mt-2">
                Building <strong>decentralized identity solutions</strong> using <strong>blockchain and smart contracts</strong>.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
