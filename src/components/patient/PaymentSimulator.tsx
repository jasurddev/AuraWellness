"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, ShieldCheck, X } from 'lucide-react';
import { useStore } from '@/store/useStore';

export function PaymentSimulator({ amount, onClose, onSuccess }: { amount: number, onClose: () => void, onSuccess: () => void }) {
  const [status, setStatus] = useState<'processing' | 'success'>('processing');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('success');
    }, 2500); // Simulate 2.5s network request

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white w-full max-w-sm rounded-3xl p-8 flex flex-col items-center relative overflow-hidden shadow-2xl"
      >
        {status === 'success' && (
          <button onClick={onClose} className="absolute top-4 right-4 p-2 text-muted-foreground hover:bg-secondary rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
        
        <div className="mb-6 relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-secondary/50">
          {status === 'processing' ? (
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          ) : (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </motion.div>
          )}
        </div>

        <h3 className="text-xl font-serif text-primary mb-2 text-center relative z-10">
          {status === 'processing' ? 'Processing Payment...' : 'Payment Successful!'}
        </h3>
        
        <p className="text-sm text-muted-foreground text-center mb-6 relative z-10">
          {status === 'processing' 
            ? 'Please wait while we secure your transaction with our payment partner.' 
            : 'Your order has been placed successfully and will be prepared for delivery.'}
        </p>

        <div className="w-full bg-secondary/50 rounded-2xl p-4 mb-6 relative z-10">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Amount Paid</span>
            <span className="font-medium text-primary">Rp {amount.toLocaleString('id-ID')}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Payment Method</span>
            <span className="font-medium text-primary flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> Virtual Account
            </span>
          </div>
        </div>

        {status === 'success' && (
          <button 
            onClick={onSuccess}
            className="w-full py-4 bg-primary text-white font-medium rounded-xl active:scale-95 transition-all relative z-10"
          >
            Back to Dashboard
          </button>
        )}
      </motion.div>
    </div>
  );
}
