import React from "react";

export default function StatsSection() {
  return (
    <div className="sm:text-base md:text-4xl  text-gray-900 mb-6 text-center mt-15">
      <h2 className="text-3xl font-bold ">
        We know schools because we’re in schools
      </h2>
      <p className="text-xl text-center">
        Our global network of educators guides you to diagnose challenges and
        implement change.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-10">
        <div className="text-center">
          <p className="text-4xl font-semibold text-gray-900">40,000</p>
          <p className="text-sm font-semibold text-gray-600 mt-2">
            INSTITUTIONS
          </p>
        </div>
        <div className="border-l border-gray-300 px-6 text-center">
          <p className="text-4xl font-semibold text-gray-900">90+</p>
          <p className="text-sm font-semibold text-gray-600 mt-2">COUNTRIES</p>
        </div>
        <div className="border-l border-gray-300 px-6 text-center">
          <p className="text-4xl font-semibold text-gray-900">17,000,000</p>
          <p className="text-sm font-semibold text-gray-600 mt-2">STUDENTS</p>
        </div>
      </div>
    </div>
  );
}
