"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const totalObject = reviews.length;

  function indexChange(value) {
    const finalIndex = value === "+" ? index + 1 : index - 1;
    if (finalIndex > totalObject - 1) {
      setIndex(0);
    } else if (finalIndex < 0) {
      setIndex(totalObject - 1);
    } else {
      setIndex(finalIndex);
    }
  }
  return (
    <div className="space-y-4 mx-2 mr-5 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24">
      <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-8 lg:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={reviews[index].img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
          >
            <Image
              src={reviews[index].img}
              alt="Reviewer"
              width={100}
              height={100}
              className="rounded-full border-4 border-[#97C747] aspect-square object-cover w-24 h-24 sm:w-28 sm:h-28"
            />
            <div className="border-l p-6 border-base-300 sm:border-l sm:pl-6">
              <div className="flex gap-1 mb-2 justify-center sm:justify-start">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="fill-yellow-400" strokeWidth={0} />
                ))}
              </div>
              <p className="text-black text-base mb-3 text-center sm:text-left max-w-md">
                {reviews[index].text}
              </p>
              <p className="font-bold text-black text-center sm:text-left">
                {reviews[index].name}
              </p>
              <p className="text-gray-600 text-center sm:text-left">
                {reviews[index].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={() => indexChange("-")}
          className="w-10 h-10 rounded-full bg-[#97C747] text-white flex items-center justify-center hover:bg-[#7eb033] transition absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => indexChange("+")}
          className="w-10 h-10 rounded-full bg-[#97C747] text-white flex items-center justify-center hover:bg-[#7eb033] transition absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
const reviews = [
  {
    name: "Demo1",
    text: "NWAC's accreditation brings unmatched credibility and quality assurance to institutions worldwide.",
    role: "Student",
    img: "/face1.jpeg",
  },
  {
    name: "Demo2",
    text: "Proud to be part of a globally recognized accreditation system that truly prioritizes academic excellence.",
    role: "Teacher",
    img: "/image2.jpeg",
  },
  {
    name: "Demo3",
    text: "With NWAC, educational standards are elevated, ensuring every student receives a world-class learning experience.",
    role: "Student",
    img: "/image3.jpeg",
  },
];
