import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedHighlight({ children, delay = 0.6 }: Props) {
  return (
    <span className="relative inline-block whitespace-nowrap px-1 mx-[-4px]">
      <span className="relative z-10">{children}</span>
      <motion.span 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="absolute bottom-[15%] left-0 w-full h-[40%] bg-brand-gold mix-blend-multiply rounded-sm" 
      />
    </span>
  );
}
