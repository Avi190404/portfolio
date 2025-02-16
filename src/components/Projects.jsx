import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A fully responsive portfolio built with React and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    link: "/projects/portfolio",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "An online store with cart functionality and secure checkout.",
    techStack: ["Next.js", "Stripe", "MongoDB"],
    link: "/projects/ecommerce",
  },
  {
    id: 3,
    title: "AI-Powered Chatbot",
    description: "A chatbot that provides smart responses using NLP.",
    techStack: ["Python", "OpenAI API", "Flask"],
    link: "/projects/chatbot",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Projects</h2>
        <p className="text-center text-gray-600 mb-10">
          A selection of my best work, showcasing skills in web development and automation.
        </p>

        {/* Project Cards */}
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
              <Link
                to={project.link}
                className="text-blue-600 font-medium hover:underline"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>

        {/* Button to See More Projects */}
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="text-blue-600 font-semibold border border-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
