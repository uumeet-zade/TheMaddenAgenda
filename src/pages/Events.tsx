import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHighlight from '../components/AnimatedHighlight';

export default function Events() {
  const events = [
    {
      city: "Syon",
      type: "Urban City",
      title: "Commercial & Innovation Forum",
      focus: "Deregulation & Financial Sector",
      day: "12",
      month: "OCT"
    },
    {
      city: "Redmont",
      type: "Suburban Town",
      title: "Family & Veterans Picnic",
      focus: "Local Zoning & Family Values",
      day: "19",
      month: "OCT"
    },
    {
      city: "Capital Park",
      type: "Industrial Town",
      title: "Manufacturing Town Hall",
      focus: "Trades, Labor & Industry",
      day: "26",
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
            <AnimatedHighlight delay={0.3}>Join the Movement</AnimatedHighlight>
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
              
              <div className="group/ticket flex flex-col md:flex-row cursor-pointer [perspective:1200px]">
                
                {/* Main Ticket Body (Left) */}
                <div className="bg-brand-white/95 backdrop-blur-xl flex-1 p-8 md:p-12 relative border-t border-l border-r md:border-r-0 border-brand-navy/10 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [transform-origin:right_center] group-hover/ticket:scale-[1.015] shadow-lg group-hover/ticket:shadow-2xl z-20">
                  <p className="font-basetica text-brand-navy/60 text-[10px] font-extrabold tracking-[0.2em] uppercase mb-4">Official Campaign Event · 2072</p>
                  <h3 className="font-plaak text-3xl md:text-5xl font-bold tracking-tight text-brand-navy lowercase mb-8">
                    {evt.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8 max-w-lg">
                    <div>
                      <p className="font-basetica text-brand-navy/50 text-[10px] font-extrabold tracking-[0.18em] uppercase">Location</p>
                      <p className="font-plaak text-brand-navy mt-1 text-xl font-bold">{evt.city}</p>
                      <p className="font-basetica text-brand-navy/70 text-xs mt-1">{evt.type}</p>
                    </div>
                    <div>
                      <p className="font-basetica text-brand-navy/50 text-[10px] font-extrabold tracking-[0.18em] uppercase">Focus</p>
                      <p className="font-basetica text-brand-navy mt-2 text-sm font-medium">{evt.focus}</p>
                    </div>
                  </div>
                  
                  <button className="bg-brand-navy text-brand-white font-basetica font-bold text-sm px-8 py-3.5 rounded-full group-hover/ticket:bg-brand-gold group-hover/ticket:text-brand-navy transition-colors">
                    RSVP for Event →
                  </button>
                </div>

                {/* Stub (Right) */}
                <div className="bg-brand-gold md:w-56 p-8 md:p-0 flex flex-col items-center justify-center relative border border-brand-navy/10 md:border-l-0 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [transform-origin:left_center] md:group-hover/ticket:[transform:translateX(24px)_rotateY(-12deg)_rotate(3deg)_scale(1.015)] group-hover/ticket:[transform:translateY(16px)_rotateX(10deg)_scale(1.015)] shadow-lg group-hover/ticket:shadow-2xl z-10">
                  
                  {/* Dashed Tear Line */}
                  <div className="absolute top-8 bottom-8 left-0 border-l-2 border-brand-navy/15 border-dashed hidden md:block" />
                  <div className="absolute left-8 right-8 top-0 border-t-2 border-brand-navy/15 border-dashed md:hidden" />

                  <div className="flex flex-col items-center text-brand-navy mt-4 md:mt-0">
                    <p className="font-basetica text-brand-navy/70 text-[10px] font-extrabold tracking-[0.2em] uppercase mb-4">Date</p>
                    <span className="font-plaak text-7xl font-black leading-[0.8]">{evt.day}</span>
                    <span className="font-plaak text-3xl font-bold tracking-widest uppercase mt-2">{evt.month}</span>
                    <span className="font-basetica text-sm font-extrabold tracking-widest mt-1">2072</span>
                  </div>
                  <p className="font-basetica text-brand-navy/50 text-[9px] font-bold tracking-[0.2em] uppercase mt-8">Admit One</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Media & Campaign Updates */}
      <section className="bg-brand-navy py-24 px-5 text-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-plaak font-bold uppercase text-5xl tracking-tight">Campaign Media</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Media boxes removed for separate implementation */}
          </div>
        </div>
      </section>
    </div>
  );
}
