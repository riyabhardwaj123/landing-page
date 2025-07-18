"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Rating() {
  const testimonials = [
    {
      name: "Nour",
      rating: 4,
      review:
        "If you like flexibility and quality of education, then this is the school for you. I'm a new student at IS, enrolled in one-to-one teaching, from a traditional school and honestly, I'm impressed...",
    },
    {
      name: "Celina Raess",
      rating: 5,
      review:
        "International Schooling offers a lot of opportunities for every individual. You have a lot of subjects to choose from...",
    },
    {
      name: "Enisha Rahemani",
      rating: 5,
      review:
        "My experience till now has been really good. It's been like 2 months, the teachers are kind, classes are interactive...",
    },
  ];

  return (
    <section className="bg-base-200 md:py-16 py-8 px-6">
      <div className="text-center mb-12">
        <div className="flex justify-center mt-4 gap-4 flex-col md:flex-row items-center">
          <Image
            src="/googlerating.webp"
            alt="Google"
            width={200}
            height={150}
          />
          <Image
            src="/trustpilot_4.webp"
            alt="Trustpilot"
            width={200}
            height={150}
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.5 }}
            className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100"
          >
            <h3 className="text-lg font-bold text-primary">{t.name}</h3>
            <div className="rating mt-2 mb-4">
              {Array.from({ length: 5 }, (_, idx) => (
                <input
                  key={idx}
                  type="radio"
                  name={`rating-${i}`}
                  className="mask mask-star-2 bg-green-500"
                  checked={idx < t.rating}
                  readOnly
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">{t.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
