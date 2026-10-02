import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    }, 1200);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setName('');
    onClose();
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm"
          />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-md transform overflow-hidden rounded-3xl bg-brand-white text-left align-middle shadow-2xl transition-all my-8"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-brand-navy/50 hover:text-brand-navy hover:bg-brand-navy/5 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-10 text-center flex flex-col items-center justify-center min-h-[400px]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                >
                  <CheckCircle2 size={64} className="text-brand-gold mb-6" />
                </motion.div>
                <h3 className="font-plaak text-3xl font-bold text-brand-navy mb-3">
                  Welcome aboard{name ? `, ${name}` : ''}!
                </h3>
                <p className="font-basetica text-brand-navy/70 text-lg">
                  Thank you for joining the campaign. Together, we'll build a stronger Reno.
                </p>
              </motion.div>
            ) : (
              <div className="p-8 sm:p-10">
                <div className="mb-8">
                  <h3 className="font-plaak text-3xl font-bold text-brand-navy mb-2 lowercase">
                    Join the Movement
                  </h3>
                  <p className="font-basetica text-brand-navy/70 text-sm">
                    Sign up to get the latest updates, volunteer opportunities, and event invitations.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-basetica text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">First Name</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-brand-light border border-brand-navy/10 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-basetica text-brand-navy placeholder:text-brand-navy/30"
                        placeholder="Fredrick"
                      />
                    </div>
                    <div>
                      <label className="block font-basetica text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">Last Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-brand-light border border-brand-navy/10 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-basetica text-brand-navy placeholder:text-brand-navy/30"
                        placeholder="Madden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-basetica text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-brand-light border border-brand-navy/10 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-basetica text-brand-navy placeholder:text-brand-navy/30"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block font-basetica text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">ZIP Code</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-brand-light border border-brand-navy/10 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-basetica text-brand-navy placeholder:text-brand-navy/30"
                      placeholder="12345"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 bg-brand-navy text-brand-white py-4 rounded-xl font-basetica font-bold tracking-wide hover:bg-brand-gold hover:text-brand-navy transition-colors disabled:opacity-70 disabled:cursor-wait relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Join the Movement"
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
