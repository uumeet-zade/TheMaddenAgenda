import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHighlight from '../components/AnimatedHighlight';

export default function About() {
  return (
    <div className="min-h-screen bg-brand-light">
      
      {/* Hero Section */}
      <section className="relative isolate pt-40 pb-20 md:pt-56 md:pb-28 overflow-hidden">
        {/* Soft Background Gradients */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(44,94,59,0.15),rgba(255,255,255,0))]" />
        
        <div className="mx-auto w-full max-w-4xl px-5 md:px-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-plaak text-brand-navy text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-[0.85]"
          >
            Fredrick Madden
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mt-8 md:mt-12 flex items-center gap-4"
          >
            <span className="bg-brand-navy/30 h-px w-12 md:w-16 shrink-0" />
            <span className="font-basetica text-brand-navy/70 text-lg md:text-xl font-medium tracking-wide">
              Governor of Reno · Re-election 2070
            </span>
          </motion.div>
        </div>
      </section>

      {/* Biography Content */}
      <article className="mx-auto w-full max-w-4xl px-5 md:px-10 pb-32">
        
        {/* Lead Paragraph */}
        <div className="border-b border-brand-navy/10 pb-10 mb-12">
          <p className="font-basetica text-brand-navy text-xl md:text-2xl leading-relaxed mb-6">
            An economist by trade and a public servant by choice, Fredrick Madden has dedicated his career to forging a pragmatic path forward through Green Liberalism and educational excellence.
          </p>
        </div>

        {/* Section 1: Brief Background */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-plaak text-brand-navy text-3xl md:text-4xl font-bold tracking-tight mb-6 uppercase">
            A Pragmatic Approach
          </h2>
          <p className="font-basetica text-brand-navy/80 text-lg leading-[1.8] mb-6">
            Fredrick Madden is an economist and a founding member of the Democratic Greens of Caprica. As Governor of Reno, he has built a reputation for market-oriented Green Liberalism - demonstrating that environmental progress and economic growth go hand-in-hand when guided by smart, targeted incentives and voluntary market solutions.
          </p>
        </motion.div>

        {/* Blockquote */}
        <motion.figure 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="my-16 border-l-4 border-brand-gold pl-6 md:pl-8 py-2"
        >
          <blockquote className="font-plaak text-brand-navy text-3xl md:text-4xl font-bold leading-tight mb-4 uppercase">
            "I have always believed that the strongest economy is one that gives people choices and gives them opportunities. We must ensure that the road is open and Renoites are trusted to build their future."
          </blockquote>
          <figcaption className="font-basetica text-brand-navy/60 text-sm font-bold tracking-widest uppercase">
            Governor Fredrick Madden
          </figcaption>
        </motion.figure>

        {/* Section 2: Legislative Record */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-plaak text-brand-navy text-3xl md:text-4xl font-bold tracking-tight mb-6 uppercase">
            A Record of Delivery
          </h2>
          <p className="font-basetica text-brand-navy/80 text-lg leading-[1.8] mb-8">
            During his first term, Governor Madden worked to dismantle unnecessary barriers and invest strategically in Reno's future. His hallmark legislative achievements include:
          </p>

          <ul className="space-y-6 font-basetica text-brand-navy/80 text-lg leading-[1.8]">
            <li className="flex gap-4">
              <span className="text-brand-gold mt-1">■</span>
              <div>
                <strong className="text-brand-navy">Clean Commercial Transition Act of 2069:</strong> Created voluntary, market-driven incentives - including a 25% tax credit - for businesses upgrading to energy-efficient infrastructure and transitioning fleets to zero-emission vehicles.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-brand-gold mt-1">■</span>
              <div>
                <strong className="text-brand-navy">Higher Education & Research Commission Act of 2069:</strong> Established a specialized commission to evaluate and plan the foundations for Reno's very own higher education and research network, preparing the Margraviate for the economy of tomorrow.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-brand-gold mt-1">■</span>
              <div>
                <strong className="text-brand-navy">Innovation & Regulatory Reform Act of 2069:</strong> Modernized Reno's regulatory system by creating the Reno Regulatory Board and a Regulatory Sandbox Program, dramatically streamlining business licensing and reducing bureaucratic friction for local entrepreneurs.
              </div>
            </li>
          </ul>
        </motion.div>
        
      </article>
    </div>
  );
}
