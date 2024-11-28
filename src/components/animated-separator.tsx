"use client";

import { motion } from "motion/react";

export const AnimatedSeparator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[1px] rounded-md bg-neutral-800/50 mx-auto max-w-[1440px]"
    />
  );
};
