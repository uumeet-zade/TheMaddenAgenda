import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHighlight from '../components/AnimatedHighlight';

export default function About() {
  return (
    <div className="min-h-screen bg-brand-light">
      
      {/* Hero Section */}
      <section className="relative isolate pt-40 pb-20 md:pt-56 md:pb-28 overflow-hidden">
        {/* Soft Background Gradients */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,179,0,0.15),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_10%_40%,rgba(2,6,23,0.05),rgba(255,255,255,0))]" />
        
        <div className="mx-auto w-full max-w-4xl px-5 md:px-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-plaak text-brand-navy text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-[0.85]"
          >
            Tadashi Hayase
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mt-8 md:mt-12 flex items-center gap-4"
          >
            <span className="bg-brand-navy/30 h-px w-12 md:w-16 shrink-0" />
            <span className="font-basetica text-brand-navy/70 text-lg md:text-xl font-medium tracking-wide">
              Candidate for Parliament, Reno · 2072
            </span>
          </motion.div>
        </div>
      </section>

      {/* Biography Content */}
      <article className="mx-auto w-full max-w-3xl px-5 md:px-10 pb-32">
        
        {/* Lead Paragraph */}
        <div className="border-b border-brand-navy/10 pb-10 mb-12">
          <p className="font-basetica text-brand-navy text-xl md:text-2xl leading-relaxed mb-6">
            A son of working-class immigrants, a dedicated local leader, and a relentless advocate for Caprica's industrial towns, Tadashi Hayase has always placed <AnimatedHighlight delay={0.5}>hard work</AnimatedHighlight> and shared values at the center of his life. 
          </p>
          <p className="font-basetica text-brand-navy text-xl md:text-2xl leading-relaxed">
            Throughout his public service, one conviction has remained absolute: Caprica's true strength does not come from distant boardrooms or extreme ideologies, but from the families, workers, and local communities that form the backbone of our nation.
          </p>
        </div>

        {/* Section 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-plaak text-brand-navy text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Roots in Miyamoto, Raised in Reno
          </h2>
          <p className="font-basetica text-brand-navy/80 text-lg leading-[1.8] mb-6">
            Tadashi's parents emigrated from Miyamoto, Izumo, arriving in Caprica with little more than a fierce determination to build a better life. They settled in the industrial heartland, where they taught him that respect is earned, not given, and that prosperity is built by human hands.
          </p>
          <p className="font-basetica text-brand-navy/80 text-lg leading-[1.8] mb-6">
            Growing up in a blue-collar neighborhood, Tadashi learned early on that <AnimatedHighlight delay={0.2}>opportunity is a byproduct of effort</AnimatedHighlight>. He witnessed firsthand the struggles of working families trying to keep pace with a changing economy, and the pride of tradesmen who literally built the city around them.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="font-plaak text-brand-navy text-3xl md:text-4xl font-bold tracking-tight mb-6">
            A Voice for the Working Class
          </h2>
          <p className="font-basetica text-brand-navy/80 text-lg leading-[1.8] mb-6">
            Unwilling to accept that the working class should be left behind by modern progress, Tadashi entered local politics. He quickly gained a reputation as a pragmatic problem-solver who cared more about results than rhetoric. 
          </p>
          <p className="font-basetica text-brand-navy/80 text-lg leading-[1.8] mb-6">
            As a local leader, he fought tirelessly for <AnimatedHighlight delay={0.2}>strong localism</AnimatedHighlight>—ensuring that communities retained control over their own zoning laws, schools, and cultural heritage. He spearheaded initiatives to protect local trades, heavily deregulate burdensome municipal codes that hurt small businesses, and champion family values that keep neighborhoods safe and tightly knit.
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
          <blockquote className="font-plaak text-brand-navy text-3xl md:text-4xl font-bold leading-tight mb-4">
            "A strong Caprica isn't built from the top down. It's built block by block, family by family, by the people who work its factories and walk its streets."
          </blockquote>
          <figcaption className="font-basetica text-brand-navy/60 text-sm font-bold tracking-widest uppercase">
            Tadashi Hayase, 2072 Campaign Launch
          </figcaption>
        </motion.figure>

        {/* Section 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-plaak text-brand-navy text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Balanced Growth & A Shared Future
          </h2>
          <p className="font-basetica text-brand-navy/80 text-lg leading-[1.8] mb-6">
            Today, Caprica stands at a crossroads. We face a choice between the extreme ideologies that seek to divide us, and a pragmatic path forward rooted in shared constitutional values. Tadashi is running for Parliament to restore balance to our economic growth.
          </p>
          <p className="font-basetica text-brand-navy/80 text-lg leading-[1.8] mb-6">
            His platform rejects the idea that a thriving economy must come at the expense of local communities. By embracing a <AnimatedHighlight delay={0.2}>balanced economic plan</AnimatedHighlight>, he envisions a future where free enterprise flourishes alongside strong community protections, where the working class is the priority, and where every citizen has the freedom to forge their own destiny.
          </p>
        </motion.div>
        
      </article>
    </div>
  );
}
