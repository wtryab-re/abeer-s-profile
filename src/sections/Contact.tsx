import { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaMessage } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen px-8 py-5 font-sans select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* --- Header Section (Matching Sample Work Styling) --- */}
        <div className="text-(--font-color)">
          <span className="text-xs ml-1 sm:text-sm font-black tracking-widest uppercase">
            GET IN TOUCH
          </span>

          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight shrink-0">
              Let's Create{" "}
            </h1>

            <div className="grow flex items-center relative">
              <div className="h-0.75 bg-(--font-color) w-full" />
              <svg
                className="absolute right-0 text-(--font-color) fill-current w-24 h-24 mt-[-0.5px] translate-x-4"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c.5 6.5 5.5 11.5 12 12-6.5.5-11.5 5.5-12 12-.5-6.5-5.5-11.5-12-12 6.5-.5 11.5-5.5 12-12z" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- NETLIFY-COMPATIBLE CONTACT FORM --- */}
      </div>
      {/* --- NETLIFY-COMPATIBLE CONTACT FORM --- */}
      <div className="bg-(--font-color)/10 rounded-3xl p-6   border border-pink-100 max-w-2xl mx-auto my-8">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-6"
        >
          {/* Required Hidden Inputs for Netlify Forms */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          {/* Name Input */}
          <div className="">
            <label className="text-xs uppercase font-black tracking-wider text-[#4a353d]">
              Your Name
            </label>
            <div className="relative flex items-center">
              <FaUser className="absolute left-4 text-xl text-(--lighter-font-color)" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                style={{ fontFamily: "sans-serif" }}
                className="w-full bg-(--bg-color) border border-(--font-color) rounded-2xl py-2 pl-12 pr-4 text-sm font-semibold text-[#1a050d] placeholder-pink-300 focus:outline-none focus:border-(--font-color)  transition-all duration-300"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="">
            <label className="text-xs uppercase font-black tracking-wider text-[#4a353d]">
              Email Address
            </label>
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-4 text-xl text-(--lighter-font-color)" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                style={{ fontFamily: "sans-serif" }}
                className="w-full bg-(--bg-color) border border-(--font-color) rounded-2xl py-2 pl-12 pr-4 text-sm font-semibold text-[#1a050d] placeholder-pink-300 focus:outline-none focus:border-(--font-color)  transition-all duration-300"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="">
            <label className="text-xs uppercase font-black tracking-wider text-[#4a353d]">
              Message
            </label>
            <div className="relative flex items-start">
              <FaMessage className="absolute left-4 top-4.5 text-xl text-(--lighter-font-color)" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your concept, timeline, or goals..."
                style={{ fontFamily: "sans-serif" }}
                className="w-full bg-(--bg-color) border border-(--font-color) font-bold rounded-2xl py-4 pl-12 pr-4 text-sm  text-[#1a050d] placeholder-pink-300 focus:outline-none focus:border-(--font-color)  transition-all duration-300 resize-none"
              />
            </div>
          </div>

          {/* Submit Action Button */}
          <div className=" flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-(--font-color) text-(--bg-color) font-black text-xs uppercase tracking-widest px-8 py-4 rounded-2xl hover:bg-(--lighter-font-color) active:scale-98 transition-all duration-300 shadow-lg shadow-pink-500/20 cursor-pointer"
            >
              <FaPaperPlane className="text-sm" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
