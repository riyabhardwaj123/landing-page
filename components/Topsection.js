"use client";

import React from "react";
import { Download } from "lucide-react";
import Image from "next/image";
const Card = ({ number, label }) => (
  <div
    className="w-52 h-36 rounded-2xl flex flex-col justify-center items-center 
               bg-white/10 backdrop-blur-[12px] border border-white/20 
               shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-gray-500 text-center"
  >
    <p className="text-3xl font-extrabold drop-shadow-md">{number}</p>
    <p className="text-base mt-2 font-medium drop-shadow-md">{label}</p>
  </div>
);
export default function TopSection() {
  return (
    <section className="relative bg-white text-center px-4 pt-4 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-[400px] h-[400px] bg-blue-400 rounded-full blur-[150px] absolute top-1/4 left-[30%] opacity-30" />
        <div className="w-[400px] h-[400px] bg-pink-400 rounded-full blur-[150px] absolute top-1/4 right-[30%] opacity-30" />
      </div>
      <div className="relative w-full mt-12 pb-6">
        <p className="animate-bounce inline-flex items-center gap-2">
          <Image
            src="/amidd.png"
            alt="Admissions Open Icon"
            width={200}
            height={100}
          />
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Trusted & Top Rated
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mt-2">
          International Online School
        </h2>
        <p className="text-gray-700 mt-6 text-lg max-w-xl mx-auto">
          Offering
          <span className="font-semibold text-blue-700">Live Group</span> and
          <span className="font-semibold text-blue-700">
            One-to-One Classes
          </span>
          for Grades KG to 12, with 500+ course options to choose from.
        </p>
        <button className="mt-6 bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-3 rounded-md text-sm font-semibold flex items-center justify-center gap-2 mx-auto">
          Download Free Brochure <Download size={16} />
        </button>
        <div className="relative w-full mt-12">
          <div className="absolute w-96 h-96 bg-white rounded-full opacity-20 blur-[100px] top-0 left-0" />
          <div className="absolute w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-[100px] bottom-0 right-0" />

          <div className="relative z-10 flex flex-wrap justify-center gap-6">
            <Card number="190+" label="Countries" />
            <Card number="15,000+" label="Students" />
            <Card number="500+" label="Courses" />
            <Card number="600+" label="Teachers" />
          </div>
        </div>
      </div>
    </section>
  );
}
