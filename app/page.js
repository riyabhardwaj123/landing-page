"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ReviewCarousel from "@/components/ReviewCarousel";
import Marquee from "@/components/Marque";
import React, { useState } from "react";
import StatsSection from "@/components/StatsSection";
import Link from "next/link";
import Slider from "@/components/slider";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 md:px-8 mb-6 text-center mt-15">
        <h1 className="text-xl md:text-6xl sm:text-4xl lg:text-6xl lg:font-bold text-gray-900 mb-4">
          Welcome to the School
          <br />
          <span>for e-Education Research & Innovation (SERI)</span>
        </h1>
        <p className="md:text-lg  sm:text-lg text-gray-700 max-w-2xl mb-4">
          At SERI, we believe in staying ahead to deliver the best in education.
          Our focus has always been on innovation, quality, and making learning
          better for every student.
        </p>
        <div className="group flex gap-2 justify-center items-center mt-10 mb-4 text-center px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-green-300 bg-green-100 text-black hover:bg-[#623F95] hover:text-white transition-all duration-200">
          <button className="text-sm sm:text-lg font-semibold whitespace-nowrap">
            Schedule an Appointment
          </button>
          <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 duration-200" />
        </div>

        <div className="mt-8">
          <Slider />
        </div>
      </div>
      <div>
        <div className="bg-[#623F95] text-white ">
          <Marquee />
        </div>
        <div>
          <StatsSection />
        </div>
      </div>
      <div className="bg-[#dbe8c2] rounded-lg px-4 sm:px-6 py-4 text-gray-800 max-w-7xl mx-auto mt-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
          <img
            src="/logo setting in seri web page 2.png"
            alt="Accreditation 1"
            className="w-24 h-24 sm:w-24 sm:h-24  object-contain"
          />
          <Image src="/image.png" width={100} height={50} alt="dkajn" />
        </div>
        <p className="text-sm sm:text-base md:text-lg text-center sm:text-left">
          As education continues to evolve, the need for strong quality
          standards has become more important than ever. We've partnered with
          NWAC/Cognia to bring global accreditation expertise to India, helping
          raise standards and ensure students receive a world-class learning
          experience.
        </p>
      </div>
      <div className="text-2xl sm:text-base md:text-4xl font-bold text-gray-900 mb-6 text-center mt-15">
        <h2>Our Why and Our Way Forward.</h2>
      </div>
      <div className=" flex justify-center items-center mb-6 relative">
        <Image src="/ourmission.png" width={50} height={20} alt="image" />
        <div className="h-19 w-[1.5px] bg-green-400 mx-auto absolute top-14"></div>
      </div>
      <div className="text-[50px] font-bold text-green-100 absolute-top text-center mb-2">
        Our Mission
      </div>
      <div className="text-[20px] font-bold text-black-100 absolute-top text-center mb-2">
        Our Mission
      </div>
      <p className="text-[16px] sm:text-xl  px-4 sm:px-8 md:px-16 py-8 text-black-100 mb-2 text-center">
        Our vision is to transform schools into high-quality learning centres
        through NWAC/Cognia-accredited programs, providing structured, authentic
        education that empowers students to thrive in a competitive world and
        lead the future.
      </p>
      <div className=" flex justify-center items-center mb-6 relative">
        <Image src="/ourvision.png" width={50} height={20} alt="image2" />
        <div className="h-17 w-[1.5px] bg-[#623F95] mx-auto absolute top-14"></div>
      </div>
      <div className="text-[50px] font-bold text-purple-100 absolute-top text-center mb-2">
        Our Vision
      </div>
      <div className="text-[20px] font-bold text-black-100 absolute-top text-center mb-2">
        Our Vision
      </div>
      <p className="text-[16px] sm:text-xl px-4 sm:px-8 md:px-16 py-8 text-black-100 mb-12 text-center">
        We are dedicated to providing quality education through a one-stop
        classroom platform that empowers students to gain knowledge and achieve
        their goals, following a step-by-step approach.
      </p>
      <div className="bg-[#623F95] rounded-xl flex flex-col md:flex-row justify-between items-center gap-8 p-6 bg-[url(/reviews-bg.png)] bg-center bg-repeat-round mx-4 md:mx-10 py-10 mb-10 mt-5">
        <div className="w-full md:w-1/2 px-4 md:ml-6">
          <div className="flex items-center gap-2 mb-2">
            <Image
              width={20}
              height={20}
              src="/grp.png"
              alt="Students & Parents"
            />
            <p className="text-white text-sm sm:text-base font-medium">
              Students & Parents feedback
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Top Rated And Most Recommended
          </h2>

          <div className="text-white flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="text-5xl sm:text-6xl font-bold">99%</p>
            <p className="text-sm sm:text-base w-full sm:w-1/2">
              Student's complete course successfully.
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <ReviewCarousel />
        </div>
      </div>
      <div></div>
      <div className="sm:text-[20px] font-bold text-[#97C747] text-center">
        WE ARE HERE TO HELP
      </div>
      <p className="sm:text-[32px] font-bold text-black text-center mt-1">
        Frequently Asked Questions
      </p>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 mt-4">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          What is Accreditation?
        </div>
        <div className="collapse-content text-xs sm:text-sm">
          Accreditation is a process of rigorous and consistent evaluation of
          the total quality of an institution on part of the institution as well
          as by peers and an accrediting organization. It involves a
          comprehensive process of self-evaluation, followed by an evaluation of
          the same by a third-party independent organization. Accreditation is
          like a fitness test for institutions and the qualification of the same
          implies that an institution is above its other peers in terms of its
          total capability and quality.
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold text-sm sm:text-base">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-xs sm:text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold text-sm sm:text-base">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-xs sm:text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
      <div className="group hover:text-green flex gap-2 justify-center items-center mt-10 mb-15 text-center py-3 text-lg font-semibold rounded-full border border-green-300 bg-green-100 text-gray-500 hover:bg-[#97C747] duration-200 transition-all w-fit mx-auto ">
        <button className="px-4">More FAQs</button>
      </div>
      <Link href="/about">About</Link>
    </section>
  );
}
