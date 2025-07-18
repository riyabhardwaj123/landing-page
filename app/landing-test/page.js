"use client";
import React from "react";
import Image from "next/image";
import Formsection from "@/components/Formsection";
import TopSection from "@/components/Topsection";
import ComparisonTable from "@/components/ComparisonTable";
import Thumnailsection from "@/components/Thumnailsection";
import YoutubeSection from "@/components/YoutubeSection";
import FaqSection from "@/components/FaqSection";
import ParentTestimonials from "@/components/ParentTestimonials";
import Rating from "@/components/Rating";
import DiplomaSection from "@/components/ DiplomaSection";
export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <div className="flex justify-between items-center px-4 py-2 bg-white">
        <div className="flex flex-col px-4 items-center space-y-2">
          <Image src="/logo-is.webp" alt="Logo" width={200} height={200} />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-xs md:text-base">
          Connect Now
        </button>
      </div>
      <section>
        <TopSection />
      </section>
      <section className="relative w-full mt-8 pb-2">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl max-w-6xl mx-auto p-10 text-center shadow-lg">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            International Schooling<sup className="text-sm align-super">®</sup>
          </h3>
          <p className="text-base md:text-lg leading-relaxed">
            International Schooling is the best online school, serving 15,000+
            students and trusted by parents across 190+ countries. Accredited by
            Cognia and approved by the College Board, USA, we offer an American
            curriculum for Grades KG–12, supported by 600+ internationally
            trained and certified teachers fluent in 40+ languages.
          </p>
        </div>
      </section>
      <section>
        <Formsection />
      </section>
      <section>
        <ParentTestimonials />
      </section>
      <section>
        <Rating />
      </section>
      <section>
        <Thumnailsection />
      </section>
      <section>
        <ComparisonTable />
      </section>
      <section>
        <YoutubeSection />
      </section>
      <section>
        <DiplomaSection />
      </section>
      <section>
        <FaqSection />
      </section>
    </main>
  );
}
