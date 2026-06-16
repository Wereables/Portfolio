"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="inline-block"
        >
          {word}{index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.div>
  );
}
