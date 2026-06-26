"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, ScanFace, CheckCircle2, ChevronRight, Sparkles, ArrowLeft, Leaf, Activity, Heart, Moon } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { MOCK_TREATMENTS } from '@/lib/mockData';

export function AIScannerFlow({ onComplete, onBack }: { onComplete: () => void, onBack: () => void }) {
  const [step, setStep] = useState<'wellness' | 'upload' | 'scanning' | 'results'>('wellness');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const { setScanResult, wellnessData, setWellnessData } = useStore();
  const [localStress, setLocalStress] = useState(3);
  const [localSleep, setLocalSleep] = useState(3);

  const handleWellnessSubmit = () => {
    setWellnessData({ stress: localStress, sleep: localSleep });
    setStep('upload');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      setStep('scanning');
      simulateScanning(url);
    }
  };

  const simulateScanning = (imageUrl: string) => {
    setTimeout(() => {
      const mockResult = {
        imageUrl,
        issues: ['Dehidrasi Ringan', 'Garis Halus', 'Tanda Kelelahan'],
        recommendedTreatments: [MOCK_TREATMENTS[0], MOCK_TREATMENTS[1]],
      };
      setScanResult(mockResult);
      setStep('results');
    }, 3500);
  };

  return (
    <div className="min-h-full flex flex-col bg-[#F9F8F6]">
      {/* Header */}
      <div className="pt-12 pb-4 px-6 flex items-center justify-between sticky top-0 bg-[#F9F8F6]/80 backdrop-blur-md z-20">
        <button 
          onClick={() => {
            if (step === 'wellness') onBack();
            else if (step === 'upload') setStep('wellness');
            else onBack();
          }} 
          className="p-2 -ml-2 rounded-full hover:bg-secondary text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="font-serif font-medium text-primary">Holistic AI Scan</div>
        <div className="w-9" />
      </div>

      <div className="flex-1 px-6 pb-8 relative">
        <AnimatePresence mode="wait">
          
          {/* WELLNESS STEP */}
          {step === 'wellness' && (
            <motion.div
              key="wellness"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col h-full pt-6"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-serif text-primary mb-2">Inner Beauty Check</h2>
                <p className="text-sm text-muted-foreground">Kecantikan sejati berawal dari dalam. Bagaimana kondisi Anda akhir-akhir ini?</p>
              </div>

              <div className="space-y-8 flex-1">
                {/* Stress Level */}
                <div className="glass-panel p-5 rounded-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-5 h-5 text-accent" />
                    <h3 className="font-medium text-primary text-sm">Tingkat Stres (1-5)</h3>
                  </div>
                  <div className="flex justify-between items-center px-2">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={`stress-${val}`}
                        onClick={() => setLocalStress(val)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${localStress === val ? 'bg-primary text-white scale-110 shadow-md' : 'bg-white text-primary border border-border/50 hover:bg-secondary'}`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-2 px-2">
                    <span>Sangat Rileks</span>
                    <span>Sangat Stres</span>
                  </div>
                </div>

                {/* Sleep Quality */}
                <div className="glass-panel p-5 rounded-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Moon className="w-5 h-5 text-accent" />
                    <h3 className="font-medium text-primary text-sm">Kualitas Tidur (1-5)</h3>
                  </div>
                  <div className="flex justify-between items-center px-2">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={`sleep-${val}`}
                        onClick={() => setLocalSleep(val)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${localSleep === val ? 'bg-primary text-white scale-110 shadow-md' : 'bg-white text-primary border border-border/50 hover:bg-secondary'}`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-2 px-2">
                    <span>Sangat Buruk</span>
                    <span>Sangat Nyenyak</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWellnessSubmit}
                className="w-full py-4 mt-6 bg-primary text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Lanjut ke Skin Scan <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* UPLOAD STEP */}
          {step === 'upload' && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center justify-center h-full pt-10"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-border/50">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-serif text-primary mb-2 text-center">Face Scan</h2>
              <p className="text-sm text-muted-foreground text-center mb-10 px-4">
                Ambil foto wajah Anda di tempat dengan pencahayaan yang cukup.
              </p>

              <label className="w-full relative group cursor-pointer">
                <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                <div className="glass-panel rounded-[2rem] p-8 flex flex-col items-center justify-center border-dashed border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                  <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium text-primary">Upload Photo</span>
                  <span className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB</span>
                </div>
              </label>
            </motion.div>
          )}

          {/* SCANNING STEP */}
          {step === 'scanning' && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full pt-20"
            >
              <div className="relative w-64 h-64 mb-8">
                {/* Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  {imagePreview && (
                    <img src={imagePreview} alt="Scanning" className="w-full h-full object-cover" />
                  )}
                  {/* Overlay Filter */}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </div>
                
                {/* Scanning Ring Animation */}
                <motion.div 
                  className="absolute -inset-4 rounded-full border-2 border-accent/40"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Scanner Line */}
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-accent/80 shadow-[0_0_15px_rgba(197,168,128,0.8)] z-10"
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <h3 className="text-xl font-serif text-primary mb-2">Menganalisa Holistik...</h3>
              <p className="text-sm text-muted-foreground animate-pulse text-center max-w-[250px]">
                Mengkombinasikan data stres, tidur, dan tekstur kulit Anda.
              </p>
            </motion.div>
          )}

          {/* RESULTS STEP */}
          {step === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-6 pb-20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary">Holistic Result</h3>
                  <p className="text-xs text-muted-foreground">Kondisi Anda saat ini</p>
                </div>
              </div>

              <div className="space-y-6">
                {wellnessData && wellnessData.stress >= 4 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
                    <Activity className="w-5 h-5 text-amber-600 shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-amber-900">Indikasi Stres Tinggi</h4>
                      <p className="text-xs text-amber-700 mt-1">Stres memicu hormon kortisol yang dapat membuat kulit kusam dan rentan inflamasi. Kami menyarankan treatment dengan relaksasi ekstra.</p>
                    </div>
                  </div>
                )}

                <div className="glass-panel rounded-2xl p-5">
                  <h4 className="text-sm font-medium text-primary mb-3">Identified Concerns</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Dehidrasi Ringan', 'Garis Halus', 'Tanda Kelelahan'].map((issue, i) => (
                      <span key={i} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-primary shadow-sm border border-border/50">
                        {issue}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-primary mb-3 px-1">Rekomendasi Treatment</h4>
                  <div className="space-y-3">
                    {MOCK_TREATMENTS.slice(0,2).map((t) => (
                      <div key={t.id} className="bg-white rounded-2xl p-4 shadow-sm border border-border/40 flex gap-4">
                        <img src={t.imageUrl} alt={t.name} className="w-20 h-20 rounded-xl object-cover" />
                        <div className="flex-1">
                          <h5 className="font-medium text-primary text-sm mb-1">{t.name}</h5>
                          <p className="text-[10px] text-muted-foreground line-clamp-2 mb-2">{t.description}</p>
                          <div className="text-sm font-semibold text-accent">{t.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#F9F8F6] via-[#F9F8F6] to-transparent z-30">
                <button
                  onClick={onComplete}
                  className="w-full py-4 bg-primary text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Book Recommended Treatment <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
