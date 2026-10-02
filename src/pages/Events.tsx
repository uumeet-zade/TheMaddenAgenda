import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHighlight from '../components/AnimatedHighlight';

export default function Events() {
  const events = [
    {
      city: "Syon Central Park",
      title: "STEM & Education Address",
      focus: "Higher Ed & STEM Investment",
      day: "12",
      month: "OCT"
    },
    {
      city: "Redmont City Hall",
      title: "Transparency & Transit Town Hall",
      focus: "Tax Transparency & Infrastructure",
      day: "19",
      month: "OCT"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-light">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1602869676901-e89f13a5c095?auto=format&fit=crop&w=2000&q=80" 
          alt="Long Island City skyline" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 pt-16">
          <p className="font-basetica text-brand-white/80 text-[11px] font-extrabold tracking-[0.22em] uppercase">The Campaign Trail</p>
          <h1 className="font-plaak font-black uppercase text-5xl md:text-7xl text-brand-white tracking-tight mt-4">
            Join the Movement
          </h1>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 -mt-24 md:-mt-40 mb-32">
        <div className="flex flex-col gap-8 md:gap-12">
          {events.map((evt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative isolate mx-auto w-full max-w-4xl"
            >
              {/* Background glow on hover */}
              <div className="absolute -inset-4 -z-10 bg-brand-gold/20 blur-2xl rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="group/ticket flex flex-col md:flex-row cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                
                {/* Main Ticket Body (Left) */}
                <div className="bg-brand-white flex-1 p-8 md:p-12 relative border border-brand-navy/10 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none transition-all duration-300 shadow-md group-hover/ticket:shadow-2xl z-20 flex flex-col justify-center items-start">
                  <h3 className="font-plaak text-3xl md:text-5xl font-bold tracking-tight text-brand-navy uppercase mb-2">
                    {evt.title}
                  </h3>
                  <p className="font-basetica text-brand-navy/70 text-lg">{evt.city} - {evt.focus}</p>
                </div>

                {/* Stub (Right) */}
                <div className="bg-brand-gold md:w-56 p-8 flex flex-col items-center justify-center relative border border-brand-navy/10 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none transition-all duration-300 shadow-md group-hover/ticket:shadow-2xl z-10 group-hover/ticket:brightness-105">
                  <div className="flex flex-col items-center text-brand-navy">
                    <span className="font-plaak text-7xl font-black leading-[0.8]">{evt.day}</span>
                    <span className="font-plaak text-3xl font-bold tracking-widest uppercase mt-2">{evt.month}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
