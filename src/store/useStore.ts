import { create } from 'zustand';
import { Treatment, Doctor } from '@/lib/mockData';

type AppState = {
  // Booking Flow State
  bookingData: {
    treatmentId?: string;
    doctorId?: string;
    date?: string;
    time?: string;
  };
  setBookingData: (data: Partial<AppState['bookingData']>) => void;
  
  // AI Scan state & Holistic Wellness
  wellnessData: {
    stress: number; // 1-5
    sleep: number; // 1-5
  } | null;
  setWellnessData: (data: AppState['wellnessData']) => void;

  scanResult: {
    imageUrl: string;
    issues: string[];
    recommendedTreatments: Treatment[];
  } | null;
  setScanResult: (result: AppState['scanResult']) => void;

  // Pain Tracker State
  painAreas: string[];
  setPainAreas: (areas: string[]) => void;
  togglePainArea: (area: string) => void;
  
  // Admin dashboard state
  activeTab: 'overview' | 'schedule' | 'emr' | 'analytics' | 'inventory';
  setActiveTab: (tab: 'overview' | 'schedule' | 'emr' | 'analytics' | 'inventory') => void;
};

export const useStore = create<AppState>((set) => ({
  bookingData: {},
  setBookingData: (data) => set((state) => ({ 
    bookingData: { ...state.bookingData, ...data } 
  })),
  
  wellnessData: null,
  setWellnessData: (data) => set({ wellnessData: data }),

  scanResult: null,
  setScanResult: (result) => set({ scanResult: result }),

  painAreas: [],
  setPainAreas: (areas) => set({ painAreas: areas }),
  togglePainArea: (area) => set((state) => {
    if (state.painAreas.includes(area)) {
      return { painAreas: state.painAreas.filter(a => a !== area) };
    }
    return { painAreas: [...state.painAreas, area] };
  }),
  
  activeTab: 'overview',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
