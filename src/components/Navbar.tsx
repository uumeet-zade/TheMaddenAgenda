import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import JoinModal from './JoinModal';

export default function Navbar() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 50], ['rgba(248, 250, 252, 0)', 'rgba(248, 250, 252, 0.95)']);
  const navBackdrop = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(16px)']);

  return (
    <motion.nav 
      style={{ backgroundColor: navBackground, backdropFilter: navBackdrop, WebkitBackdropFilter: navBackdrop }}
      className="fixed inset-x-0 top-0 z-50 px-5 pt-4 transition-all duration-300"
    >
      <div className="mx-auto flex w-fit flex-col rounded-sm border border-brand-navy/10 px-4 py-2 bg-brand-white/50 shadow-sm">
        <div className="flex items-center justify-center gap-6 md:gap-12 pl-2">
          <ul className="hidden md:flex items-center gap-6 font-basetica font-bold text-[13.5px] text-brand-navy">
            <li><Link to="/" className="hover:text-brand-steel transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-steel transition-colors">About Fredrick</Link></li>
            <li><Link to="/policies" className="hover:text-brand-steel transition-colors">Core Policies</Link></li>
            <li><Link to="/events" className="hover:text-brand-steel transition-colors">Events</Link></li>
          </ul>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsJoinModalOpen(true)}
              className="bg-brand-navy text-brand-white px-5 py-2.5 rounded-sm font-basetica font-bold text-[12.5px] hover:bg-brand-gold hover:text-brand-navy transition-all shadow-sm"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
      
      <JoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />
    </motion.nav>
  );
}
