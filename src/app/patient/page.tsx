"use client";

import { useState } from 'react';
import { HeroSection } from '@/components/patient/HeroSection';
import { AIScannerFlow } from '@/components/patient/AIScannerFlow';
import { BookingWizard } from '@/components/patient/BookingWizard';
import { PainTrackerFlow } from '@/components/patient/PainTrackerFlow';
import { PatientDashboard } from '@/components/patient/PatientDashboard';
import { AIConciergeChat } from '@/components/patient/AIConciergeChat';
import { useStore } from '@/store/useStore';
import { AnimatePresence, motion } from 'framer-motion';

type ViewState = 'home' | 'scanner' | 'booking' | 'pain-tracker' | 'dashboard';

export default function PatientPage() {
  const [view, setView] = useState<ViewState>('home');
  const { setBookingData, setScanResult, setPainAreas, setWellnessData } = useStore();

  const handleStartScan = () => {
    setWellnessData(null);
    setScanResult(null);
    setView('scanner');
  };

  const handleStartBooking = () => {
    setBookingData({ treatmentId: undefined, doctorId: undefined, date: undefined, time: undefined });
    setScanResult(null);
    setView('booking');
  };

  const handleStartPainTracker = () => {
    setPainAreas([]);
    setView('pain-tracker');
  };

  const handleStartDashboard = () => {
    setView('dashboard');
  };

  const handleCompleteToBooking = () => {
    setView('booking');
  };

  const handleBackToHome = () => {
    setView('home');
  };

  return (
    <div className="h-full bg-background relative overflow-hidden">
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div 
            key="home" 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 20 }}
            className="h-full"
          >
            <HeroSection 
              onStartScan={handleStartScan} 
              onStartBooking={handleStartBooking}
              onStartPainTracker={handleStartPainTracker}
              onStartDashboard={handleStartDashboard}
            />
          </motion.div>
        )}

        {view === 'scanner' && (
          <motion.div 
            key="scanner" 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="h-full"
          >
            <AIScannerFlow onComplete={handleCompleteToBooking} onBack={handleBackToHome} />
          </motion.div>
        )}

        {view === 'pain-tracker' && (
          <motion.div 
            key="pain-tracker" 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="h-full"
          >
            <PainTrackerFlow onComplete={handleCompleteToBooking} onBack={handleBackToHome} />
          </motion.div>
        )}

        {view === 'dashboard' && (
          <motion.div 
            key="dashboard" 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="h-full"
          >
            <PatientDashboard onBack={handleBackToHome} />
          </motion.div>
        )}

        {view === 'booking' && (
          <motion.div 
            key="booking" 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="h-full"
          >
            <BookingWizard 
              onBack={handleBackToHome} 
              onComplete={handleBackToHome} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AIConciergeChat />
    </div>
  );
}
