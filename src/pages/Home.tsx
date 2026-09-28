import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHighlight from '../components/AnimatedHighlight';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-x-clip min-h-[800px] flex items-center justify-center pt-24 px-5">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_45%_at_18%_25%,rgba(203,213,225,1)_0%,rgba(203,213,225,0.68)_30%,transparent_80%),radial-gradient(ellipse_55%_50%_at_82%_75%,rgba(100,116,139,0.2)_0%,rgba(100,116,139,0.1)_30%,transparent_80%)] opacity-80" />
        
        <div className="z-30 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative">
          <div className="md:w-3/5 text-left z-30 pt-12 md:pt-0">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-plaak font-black uppercase text-brand-navy leading-[0.85] tracking-[-0.03em] drop-shadow-lg"
            >
              <span className="block text-[12vw] md:text-[100px] lg:text-[130px]">PROSPERITY</span>
              <span className="block text-[12vw] md:text-[100px] lg:text-[130px] mt-2 relative inline-block">
                <AnimatedHighlight delay={0.6}>FOR RENO</AnimatedHighlight>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-xl font-basetica text-brand-steel max-w-lg"
            >
              
            </motion.p>
          </div>

          <div className="md:w-2/5 flex justify-center md:justify-end md:pr-10 lg:pr-16 mt-16 md:mt-0 relative">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-[300px] md:w-[420px] relative z-20 pointer-events-none"
            >
              <img 
                src="https://www.otempo.com.br/content/dam/otempo/editorias/super-noticia/famosos/2026/9/quem-e-takato-ishida-o-governador-conservador-mais-jovem-do-japao-que-viralizou-nas-redes.webp" 
                alt="Tadashi Hayase" 
                className="w-full h-auto drop-shadow-2xl rounded-t-full object-cover aspect-[3/4]"
                style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 15%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="relative z-40 -mt-24 max-w-7xl mx-auto px-5 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 bg-brand-white/80 backdrop-blur-md rounded-2xl border border-brand-navy/10 overflow-hidden shadow-xl text-brand-navy">
          {[
            { title: "Working Class First", desc: "Protecting our manufacturing and manual labor sectors.", link: "/policies#vocational-training" },
            { title: "Veterans & Security", desc: "Honoring our military and ensuring a strong defense.", link: "/policies#veterans-security" },
            { title: "Clean Industry", desc: "Sensible environmentalism that doesn't kill jobs.", link: "/policies#sustainable-localism" },
            { title: "Free Markets", desc: "Pro-business, balanced solutions for local growth.", link: "/policies#balanced-economy" }
          ].map((card, idx) => (
             <Link key={idx} to={card.link} className="group flex flex-col p-8 min-h-[220px] transition-all duration-300 border-b md:border-b-0 md:border-r border-brand-navy/10 last:border-0 hover:bg-brand-navy/5">
              <h3 className="font-plaak font-bold text-3xl lowercase tracking-tight mb-3">{card.title}</h3>
              <p className="font-basetica text-sm text-brand-navy/70 flex-1">{card.desc}</p>
              <span className="font-basetica font-bold text-[13px] flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                Learn more <ChevronRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Parallax Reno Context: Industry & Suburbs */}
      <section id="vision" className="relative h-[800px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Manufacturing and Labor representing Reno" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-brand-navy/70" />
        </div>
        <div className="relative z-10 max-w-4xl px-5 text-center text-brand-white">
          <p className="font-basetica font-bold tracking-widest uppercase text-xs mb-4 text-brand-gold">The Engine of Caprica</p>
          <h2 className="font-plaak font-bold text-5xl md:text-7xl lowercase mb-6">Honoring Hard Work</h2>
          <p className="font-basetica text-lg md:text-xl text-brand-white/90">
            Reno is built on the shoulders of its working and middle class. With strong trade union roots and a history of manual trades and manufacturing, Tadashi stands for fair labor practices, industrial resurgence, and uncompromising localism. 
          </p>
        </div>
      </section>

      {/* Urban Center / Abilene Context */}
      <section className="py-24 bg-brand-navy text-brand-white px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80" 
              alt="Abilene representing Reno City Center" 
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full border border-brand-steel/30"
            />
          </div>
          <div>
            <p className="font-basetica font-bold tracking-widest uppercase text-xs mb-4 text-brand-gold">Commercial Prowess</p>
            <h2 className="font-plaak font-bold text-5xl lowercase mb-6">A modern financial hub</h2>
            <p className="font-basetica text-lg text-brand-white/80 mb-8 leading-relaxed">
              While our industry drives us, our financial sector in Abilene secures our place on the global stage. We will foster environments where COIN and CIVIC thrive, ensuring a robust economy across all sectors of Reno.
            </p>
            <Link to="/policies" className="inline-block bg-brand-gold text-brand-navy px-8 py-4 rounded-full font-basetica font-bold hover:brightness-110 transition-colors">
              Read Our Plan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
