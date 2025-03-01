import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A fully responsive portfolio built with React and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://portfolioby-avi.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "An online store with cart functionality and secure checkout.",
    techStack: ["Next.js", "Stripe", "MongoDB"],
    link: "https://therachanaart.netlify.app/",
  },
  {
    id: 3,
    title: "AI-Powered Chatbot",
    description: "A chatbot that provides smart responses using NLP.",
    techStack: ["Python", "OpenAI API", "Flask"],
    link: "https://your-chatbot.com",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A productivity app to manage daily tasks efficiently.",
    techStack: ["React.js", "Firebase", "Tailwind CSS"],
    link: "https://your-taskapp.com",
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "A real-time weather forecast app with location tracking.",
    techStack: ["React", "API", "CSS"],
    link: "https://wether-app-jade.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">My Projects</h1>
        <p className="text-center text-gray-600 mb-10">
          Explore a collection of my work, ranging from web applications to AI-powered tools.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
