"use client";

import React from "react";
import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section className="py-12 px-4 md:px-16 text-center md:table-fixed bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
        What Makes us Different?
      </h2>
      <p className="text-gray-700 mb-10">
        With International Schooling, you will get
        <span className="font-semibold">
          Assured Premium Quality Education with Accessibility & Affordability
        </span>
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base border text-gray-800">
          <thead>
            <tr className="bg-white border-b text-blue-700 font-bold">
              <th className="p-4 min-w-[150px]">Benefits</th>
              <th className="p-4 min-w-[150px]">International Schooling</th>
              <th className="p-4 min-w-[150px]">Other Online Schools</th>
              <th className="p-4 min-w-[150px]">Traditional Schools</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="p-4 font-semibold text-center">
                American Curriculum
              </td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
            </tr>
            <tr className="bg-gray-100 border-b">
              <td className="p-4 font-semibold text-center">500+ Courses</td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="p-4 font-semibold text-center">
                600+ Certified Teachers
              </td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
            </tr>
            <tr className="bg-gray-100 border-b">
              <td className="p-4 font-semibold text-center">Live Classes</td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="p-4 font-semibold text-center">
                One-to-One Learning
              </td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
            </tr>
            <tr className="bg-gray-100 border-b">
              <td className="p-4 font-semibold text-center">Group Learning</td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="p-4 font-semibold text-center">
                Online Examinations
              </td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
            </tr>
            <tr className="bg-gray-100 border-b">
              <td className="p-4 font-semibold text-center">
                Flexible Class Timings
              </td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
              <td className="text-center">
                <X className="text-red-500 mx-auto" />
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="p-4 font-semibold text-center">
                Social Interaction
              </td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
              <td className="text-center">
                <Check className="text-green-500 mx-auto" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4">
        <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-md text-lg animate-pulse">
          Get Free Brochure
        </button>
      </div>
    </section>
  );
}
