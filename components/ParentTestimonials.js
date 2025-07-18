"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function ParentsAcrossTheGlobe() {
  const scrollRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 320,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const data = [
    { country: "UAE", image: "/uae.webp" },
    { country: "Switzerland", image: "/switzerland.webp" },
    { country: "Romania", image: "/Romania.webp" },
    { country: "Canada", image: "/canada.webp" },
    { country: "Colombia", image: "/Colombia.webp" },
    { country: "Mexico", image: "/Mexico.webp" },
  ];

  return (
    <section className="relative px-4 md:px-20 md:py-14 py-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Parents Across The Globe
      </h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-blue-500 scroll-smooth"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] w-[300px] flex-shrink-0 text-center"
          >
            <p className="text-blue-700 font-semibold mb-2">{item.country}</p>
            <div className="relative w-full h-[180px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={`${item.country} Review`}
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button className="text-white text-4xl">
                  <Play />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
