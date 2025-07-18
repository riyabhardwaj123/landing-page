"use client";

import React from "react";

export default function BrochureSection() {
  return (
    <section className="bg-white py-12 px-4 md:px-16 flex flex-col md:flex-row items-start">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Download Brochure
        </h2>
        <p className="text-gray-600 mb-6">
          Our School Brochure Gives You a Complete Overview Of:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 mb-8">
          {[
            "Our Different Learning Plans",
            "Number of Classes & Grading System",
            "Comparison with Other Online Schools",
            "Special Fee Discounts for Athletes",
            "What Each Plan Includes",
            "Exciting Extracurricular Activities",
            "Information About Our Qualified Teachers",
            "Flexible and Easy Fee Payment Options",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="demo-thumb.webp"
            alt="Dr. Jenny Kincaid"
            className="w-full"
          />
        </div>
      </div>
      <div className="md:w-1/2 bg-gray-50 rounded-xl shadow-md p-6 w-full max-w-lg mx-auto">
        <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
          YOUR CHILD DESERVES THE BEST
        </h3>
        <p className="text-sm text-center mb-6 text-gray-500">
          Download Brochure Now
        </p>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Full Name *</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Grade *</label>
            <select className="w-full border rounded px-3 py-2 mt-1" required>
              <option>Choose Grade</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Email *</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>

          <div className="flex gap-2">
            <div className="w-1/3">
              <label className="text-sm font-medium">Phone Code *</label>
              <select className="w-full border rounded px-3 py-2 mt-1" required>
                <option>+91</option>
              </select>
            </div>
            <div className="w-2/3">
              <label className="text-sm font-medium">Phone Number *</label>
              <input
                type="tel"
                placeholder="Enter Phone"
                className="w-full border rounded px-3 py-2 mt-1"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded text-lg font-semibold mt-4"
          >
            Download Now
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          By submitting this form, I am giving my consent to International
          Schooling to contact me for further details related to their programs.
          Read our
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          and
          <a href="#" className="text-blue-600 underline">
            Terms of Use.
          </a>
        </p>

        <div className="flex justify-center mt-4">
          <img
            src="/SecuroTRUST.webp"
            alt="SecuroTrust Certified"
            className="w-28"
          />
        </div>
      </div>
    </section>
  );
}
