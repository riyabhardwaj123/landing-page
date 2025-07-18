"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Slider() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-[400px] overflow-hidden flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          className="z-10"
        >
          <Image
            src="/slide1.png"
            alt="Slide 1"
            width={1200}
            height={1200}
            className="object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          className="absolute top-0 w-[70%] translate-x-[90px]"
        >
          <Image
            src="/slide2.png"
            alt="Slide 2"
            width={1200}
            height={1200}
            className="object-contain"
          />
        </motion.div>
      </div>
      <div className="relative w-full flex justify-center items-center gap-10 mt-4">
        <motion.div
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
          className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-purple-600"
        >
          <Image
            src="/slide3.png"
            alt="slide3"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 2.2 }}
          className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-purple-600"
        >
          <Image
            src="/slide4.png"
            alt="slide4"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
