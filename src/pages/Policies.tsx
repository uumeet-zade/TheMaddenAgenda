import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
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
      id: "balanced-economy",
      title: "Balanced Economy & Labor", 
      desc: "A strong free-market depends on fair play. We support trade unions and reject excessive taxation, ensuring prosperity reaches the working class. Our approach guarantees balanced budgets and lower taxes without stripping workers of their rights, ensuring a robust free market." 
    },
    { 
      id: "sustainable-localism",
      title: "Sustainable Localism", 
      desc: "Protecting Reno's natural environment is essential, but it must be balanced with our industrial needs. Clean manufacturing is our future. We will empower our suburban homeowners by keeping local zoning decisions local and promoting stability in our communities." 
    },
    { 
      id: "veterans-security",
      title: "Veterans & Security First", 
      desc: "Reno is home to thousands of proud veterans. We believe in uncompromising support for those who served. A secure nation starts at the community level, honoring our commitment to a strong defense and shared values." 
    },
    { 
      id: "merit-based-immigration",
      title: "Merit-Based Immigration", 
      desc: "As the son of Izuman migrants, Tadashi believes in an immigration system that rewards skill, contribution, and shared Caprican values. We must move past ethnic or religious divisions and embrace those who contribute to the constitutional values of Caprica." 
    },
    {
      id: "urban-suburban-integration",
      title: "Urban-Suburban Integration",
      desc: "Abilene is a modern financial hub that must work in tandem with our vast suburbs. We will bridge the gap between the suburban residential areas and the city's commercial hubs, ensuring our urban population and renters have strong representation while maintaining suburban integrity."
    },
    {
      id: "vocational-training",
      title: "Vocational Training & Innovation",
      desc: "A thriving industrial sector requires a skilled workforce. We will prioritize technical education and apprenticeships, ensuring our youth can secure high-paying careers in trades and manufacturing without the burden of excessive debt."
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
        <p className="font-basetica font-bold tracking-widest uppercase text-xs mb-4 text-brand-gold">Our Platform</p>
        <h1 className="font-plaak font-black uppercase text-5xl md:text-7xl text-brand-navy tracking-tight">
          <AnimatedHighlight delay={0.3}>Our Foundation</AnimatedHighlight>
        </h1>
        <p className="mt-6 text-xl font-basetica text-brand-steel max-w-2xl mx-auto">
          A comprehensive plan for balanced economic growth, strong localism, and shared constitutional values.
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
          Join thousands of other working and middle-class Capricans in securing prosperity for Reno.
        </p>
        <button className="bg-brand-gold text-brand-navy px-10 py-4 rounded-full font-basetica font-bold hover:brightness-110 transition-colors text-lg">
          Volunteer Today
        </button>
      </div>
    </div>
  );
}
