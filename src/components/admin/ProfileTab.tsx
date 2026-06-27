"use client";

import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { MOCK_DOCTORS } from '@/lib/mockData';
import { Copy, CheckCircle2, User, Share2, UploadCloud, Save } from 'lucide-react';

export function ProfileTab() {
  const { bookingData } = useStore();
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loggedInDoctor = (mounted && bookingData?.doctorId) 
    ? (MOCK_DOCTORS.find(d => d.id === bookingData.doctorId) || MOCK_DOCTORS[0])
    : MOCK_DOCTORS[0];

  const shareUrl = `https://auraos.com/doctor/${loggedInDoctor.slug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-24">
      {/* Header / Share Link */}
      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
            <Share2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-medium text-charcoal">Your Shareable Link</h2>
            <p className="text-xs text-foreground/50">Patients can book directly via this link.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-muted/30 border border-border/50 px-3 py-2 rounded-xl w-full sm:w-auto">
          <span className="text-sm font-mono text-charcoal/80 flex-1 truncate">{shareUrl}</span>
          <button 
            onClick={handleCopy}
            className="p-2 bg-white border border-border rounded-lg shadow-sm hover:bg-muted transition-colors text-charcoal active:scale-95"
          >
            {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Editor */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border bg-muted/10 flex items-center gap-2">
              <User className="w-5 h-5 text-gold" />
              <h2 className="font-medium text-charcoal">Edit Profile</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-6 items-start">
                <img src={loggedInDoctor.imageUrl} alt={loggedInDoctor.name} className="w-24 h-24 rounded-xl object-cover shadow-sm" />
                <button className="px-4 py-2 bg-white border border-border text-charcoal text-sm font-medium rounded-lg hover:bg-muted transition-colors flex items-center gap-2">
                  <UploadCloud className="w-4 h-4" /> Change Photo
                </button>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-1">Full Name</label>
                <input type="text" defaultValue={loggedInDoctor.name} className="w-full bg-white border border-border rounded-xl px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors" />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-1">Specialty</label>
                <input type="text" defaultValue={loggedInDoctor.specialty} className="w-full bg-white border border-border rounded-xl px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-1">Biography</label>
                <textarea 
                  rows={4} 
                  defaultValue={loggedInDoctor.bio} 
                  className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors resize-none" 
                />
              </div>

              <div className="pt-4 border-t border-border flex justify-end">
                <button onClick={handleSave} className="px-6 py-2.5 bg-charcoal text-white text-sm font-medium rounded-xl shadow-sm hover:bg-charcoal/90 transition-colors active:scale-95 flex items-center gap-2">
                  {isSaving ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery / Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border bg-muted/10">
              <h2 className="font-medium text-charcoal text-sm">Before & After Gallery</h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {loggedInDoctor.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group">
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <span className="text-white text-xs font-medium">Remove</span>
                    </div>
                  </div>
                ))}
                <div className="aspect-square rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center text-foreground/40 cursor-pointer hover:bg-muted/30 transition-colors">
                  <UploadCloud className="w-6 h-6 mb-1" />
                  <span className="text-[10px] font-medium uppercase tracking-wider">Add Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
