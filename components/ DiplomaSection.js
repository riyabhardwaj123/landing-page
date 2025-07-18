"use client";

import React from "react";
import Image from "next/image";

export default function DiplomaSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 leading-snug">
            Worldwide Accepted Diploma
          </h2>
          <p className="text-gray-700 text-lg">
            Our students receive a US high school diploma recognized and
            accepted internationally, allowing them to apply in the top colleges
            and universities worldwide!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition">
            Learn More
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/Diploma.webp"
            alt="Graduate with Diploma"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
