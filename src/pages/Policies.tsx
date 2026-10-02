import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AnimatedHighlight from '../components/AnimatedHighlight';

export default function Policies() {
  const { hash } = useLocation();
  const [highlightedPolicy, setHighlightedPolicy] = useState<string | null>(null);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setHighlightedPolicy(id);
      const timer = setTimeout(() => {
        setHighlightedPolicy(null);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  const policies = [
    { 
      id: "green-liberalism",
      title: "Green Liberalism", 
      desc: "True sustainability is achieved through innovation and enterprise. We rely on market-oriented green policies, de-regulation of the green market, and voluntary tax incentives like the Green Housing Tax Incentive Act to encourage the private market to invest in a clean energy economy." 
    },
    { 
      id: "higher-education",
      title: "Higher Education", 
      desc: "Our universities should be engines of growth. We are establishing an organized higher education system in Reno and encouraging pathways for private investment into university construction to ensure world-class facilities and programs." 
    },
    { 
      id: "stem",
      title: "STEM & Opportunity", 
      desc: "To prepare Reno's workforce for the jobs of tomorrow, we are building a subsidized STEM program that guarantees accessible training in technology and science. Furthermore, we are committed to establishing affordable tuition rates for low-income students." 
    },
    { 
      id: "public-schools",
      title: "Public Schooling", 
      desc: "A prosperous state begins with its youngest citizens. Governor Madden is dedicating significant investments in Reno Public Schooling, upgrading facilities and resources so that every child, regardless of zip code, receives a foundational education." 
    }
  ];

  return (
    <div className="pt-32 pb-24 px-5 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >

        <h1 className="font-plaak font-black uppercase text-5xl md:text-7xl text-brand-navy tracking-tight">
          The Madden Agenda
        </h1>
        <p className="mt-6 text-xl font-basetica text-brand-steel max-w-2xl mx-auto">
          A focused plan combining market-oriented sustainability with comprehensive educational investments for a prosperous Reno.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {policies.map((policy, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div
              id={policy.id}
              className={`p-10 rounded-3xl transition-all duration-700 shadow-sm border h-full ${
                highlightedPolicy === policy.id 
                  ? 'bg-brand-gold/10 border-brand-gold ring-2 ring-brand-gold scale-[1.02]' 
                  : 'bg-brand-white border-brand-navy/5 hover:-translate-y-2'
              }`}
            >
              <h3 className="font-plaak font-bold text-3xl mb-4 text-brand-navy">{policy.title}</h3>
              <p className="font-basetica text-brand-navy/80 text-lg leading-relaxed">{policy.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 bg-brand-navy rounded-3xl p-12 text-center text-brand-white">
        <h2 className="font-plaak font-bold text-4xl mb-6">Ready to support the movement?</h2>
        <p className="font-basetica text-brand-white/80 max-w-2xl mx-auto mb-8 text-lg">
          Join thousands of other citizens in securing a second term of prosperity for Reno.
        </p>
        <button className="bg-brand-gold text-brand-navy px-10 py-4 rounded-full font-basetica font-bold hover:brightness-110 transition-colors text-lg">
          Volunteer Today
        </button>
      </div>
    </div>
  );
}
