"use client";

import Image from "next/image";
import React from "react";

export default function YoutubeSection() {
  return (
    <section className="md:py-10 py-6 px-4 text-center">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">
        Listen To Our Parents & Students
      </h2>
      <div className="flex flex-col md:flex-row font-semibold justify-center items-center gap-6 mb-10">
        <div>
          <p className="text-blue-600 text-sm mb-2">Parent From Saudi Arabia</p>
          <Image
            src="/p1.webp"
            alt="Parent 1"
            width={280}
            height={160}
            className="rounded-md"
          />
        </div>

        <div>
          <p className="text-blue-600 text-sm mb-2">Parent From Saudi Arabia</p>
          <Image
            src="/p2.webp"
            alt="Parent 2"
            width={280}
            height={160}
            className="rounded-md"
          />
        </div>

        <div>
          <p className="text-blue-600  text-sm mb-2">
            Student From Saudi Arabia
          </p>
          <Image
            src="/p3.webp"
            alt="Student"
            width={280}
            height={160}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-blue-700 text-white px-6 py-10 rounded-xl min-h-[250px] flex flex-col justify-center items-center text-center">
          <h3 className="text-5xl font-extrabold mb-4">84%</h3>
          <p className="text-base font-semibold">
            of our students have shown increase in their aggregate scores.
          </p>
        </div>

        <div className="bg-blue-700 text-white px-6 py-10 rounded-xl min-h-[250px] flex flex-col justify-center items-center text-center">
          <h3 className="text-5xl font-extrabold mb-4">86%</h3>
          <p className="text-base font-semibold">
            of our students are accepted into their first-choice colleges and
            universities.
          </p>
        </div>

        <div className="bg-blue-700 text-white px-6 py-10 rounded-xl min-h-[250px] flex flex-col justify-center items-center text-center">
          <h3 className="text-5xl font-extrabold mb-4">91%</h3>
          <p className="text-base font-semibold">
            of parents agree that International Schooling is better than their
            previous school.
          </p>
        </div>

        <div className="bg-blue-700 text-white px-6 py-10 rounded-xl min-h-[250px] flex flex-col justify-center items-center text-center">
          <h3 className="text-5xl font-extrabold mb-4">98%</h3>
          <p className="text-base font-semibold">
            of our students agree that their teachers support them very well.
          </p>
        </div>
      </div>
    </section>
  );
}
