import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting feedback:", feedback);

    setFeedback("");
    toast.success("Your feedback is valuable.Thanx for feedback😎");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            onClick={() => navigate("/contact")}
            className="text-base text-indigo-600 font-semibold tracking-wide uppercase cursor-pointer"
          >
            Contact Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            We'd Love to Hear from You
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Have questions, feedback, or suggestions? Fill out the form below
            and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-12">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-6">
              <label
                htmlFor="feedback"
                className="block text-sm font-medium  text-slate-300"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                className="mt-1 block w-full px-3 py-2 border border-gray-800 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                rows="4"
                placeholder="Your feedback..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
