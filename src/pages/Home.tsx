import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Dark & Sharp Hero Section */}
      <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center justify-center bg-brand-navy pt-24 px-5">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative mt-12 lg:mt-0">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="font-plaak font-black uppercase text-brand-white text-6xl md:text-8xl lg:text-[110px] leading-[0.9] tracking-tight mb-8">
                FREDRICK<br />MADDEN
              </h1>
              <p className="text-xl md:text-2xl font-basetica text-brand-white/80 max-w-xl leading-relaxed">
                Championing a second term of Green Liberalism, educational excellence, and sustained prosperity for the people of Reno.
              </p>
              <div className="mt-10 flex gap-4">
                <Link to="/policies" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-basetica font-bold uppercase tracking-wider hover:bg-brand-white transition-colors">
                  Read The Agenda
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full max-w-[500px] relative z-20"
            >
              <div className="absolute -inset-4 bg-brand-gold/20 blur-2xl z-0 rounded-full"></div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Joel_Kinnaman_SDCC_2015_%28cropped%29.jpg" 
                alt="Governor Fredrick Madden" 
                className="w-full h-auto object-cover aspect-[4/5] shadow-2xl relative z-10 rounded-sm grayscale-[20%] contrast-125"
                style={{ objectPosition: 'center 20%' }}
              />
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-brand-gold z-20"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-brand-gold z-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Action Cards */}
      <section className="bg-brand-light py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-plaak font-bold uppercase text-4xl md:text-5xl text-brand-navy tracking-tight">The 2070 Priorities</h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Green Liberalism", desc: "Voluntary incentives and market-based solutions for a clean energy economy." },
              { title: "Higher Education", desc: "Establishing organized systems and pathways for private investment in universities." },
              { title: "STEM & Opportunity", desc: "Subsidizing STEM programs and ensuring affordable tuition for low-income students." },
              { title: "Public Schooling", desc: "Investing heavily in Reno's public schools for a world-class foundation." }
            ].map((card, idx) => (
               <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-white p-8 border-t-4 border-brand-gold shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="font-plaak font-bold text-2xl uppercase tracking-tight mb-4 text-brand-navy">{card.title}</h3>
                <p className="font-basetica text-base text-brand-navy/70 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Split Section */}
      <section className="bg-brand-white py-24 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80" 
              alt="Wind turbines in a green landscape representing clean energy" 
              className="w-full h-[600px] object-cover shadow-xl rounded-sm"
            />
          </div>
          <div className="order-1 lg:order-2">

            <h2 className="font-plaak font-bold text-5xl md:text-6xl uppercase tracking-tight text-brand-navy mb-8">A Greener, Brighter Future</h2>
            <div className="space-y-6 font-basetica text-lg text-brand-navy/80 leading-relaxed">
              <p>
                Governor Fredrick Madden has proven that a strong economy and a clean environment can flourish together. Through market-oriented Green Liberalism, voluntary tax incentives, and major educational investments, Reno continues to stand as a beacon of prosperity and innovation.
              </p>
              <p>
                Through initiatives like the Clean Commercial Transition Act, we are fostering an environment where local businesses flourish while embracing sustainability. We are ensuring robust economic growth without compromising our district's character.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Banner */}
      <section className="bg-brand-navy py-20 px-5 text-center text-brand-white">
        <h2 className="font-plaak font-bold uppercase text-4xl mb-6">Stand with Governor Madden</h2>
        <button className="bg-brand-gold text-brand-navy px-10 py-4 rounded-sm font-basetica font-bold uppercase tracking-widest hover:bg-brand-white transition-colors">
          Join The Campaign
        </button>
      </section>
    </>
  );
}
