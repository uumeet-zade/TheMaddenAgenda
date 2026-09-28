import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy py-12 px-5 border-t border-brand-steel/20 text-brand-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="font-plaak font-bold text-3xl uppercase tracking-tighter">Hayase 2072</h2>
        <div className="font-basetica text-sm text-brand-white/60 text-center md:text-left">
          © 2072 Hayase for Reno Campaign. Paid by Tadashi Hayase himself.
        </div>
      </div>
    </footer>
  );
}
