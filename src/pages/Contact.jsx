import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Replace this with an API call to send an email
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-50 text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600">Contact Me</h2>
          <p className="mt-2 text-gray-600">
            Have a question or want to work together? Reach out below!
          </p>
        </div>

        {/* Contact Details */}
        <div className="mt-10 bg-white shadow-lg p-6 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            My Contact Information
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-blue-600" /> 
              <span>avi19042004@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaPhone className="text-blue-600" /> 
              <span>+91 8140660571</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaLinkedin className="text-blue-600" /> 
              <a href="https://www.linkedin.com/in/avi-patel-6170b6238" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/avi-patel-6170b6238
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaGithub className="text-blue-600" /> 
              <a href="https://github.com/Avi190404" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/Avi190404
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form
          className="mt-10 bg-white shadow-lg p-6 rounded-lg border border-gray-200"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Send Me a Message
          </h3>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;