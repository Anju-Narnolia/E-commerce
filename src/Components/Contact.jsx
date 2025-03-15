import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="m-10 px-20 p-10">
      <h2 className="text-5xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-gray-600 text-center mb-4 text-xl">
        Have questions? Send us a message and we'll get back to you soon.
      </p>

      <form onSubmit={handleSubmit} className=" p-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 border bg-gray-100 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
            rows="4"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-red-800 text-white py-2 hover:border-red-800 border-2 rounded-md hover:bg-white hover:text-red-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
