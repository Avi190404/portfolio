import React, { useState } from "react";

const ContactSection = () => {
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
    <section className="bg-gray-50 text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600">Get in Touch</h2>
        <p className="mt-2 text-gray-600">
          Feel free to reach out. I’d love to hear from you!
        </p>
      </div>

      <form
        className="mt-8 max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg border border-gray-200"
        onSubmit={handleSubmit}
      >
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
            placeholder="What do you want to ask?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
