"use client";
import { motion } from "framer-motion";

export default function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Hello!
    </motion.div>
  );
}
