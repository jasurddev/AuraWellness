import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Treatment, Doctor, CartItem, Product } from '@/lib/mockData';

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
    recommendedTreatments: (Treatment | string)[];
    hautAiMetrics?: {
      metrics: {
        acne: number;
        pigmentation: number;
        hydration: number;
        wrinkles: number;
        scarring: number;
        texture: number;
        oiliness: number;
      };
      overall_score: number;
      confidence_score: number;
      detected_concerns: string[];
      treatment_recommendations: string[];
      recommended_ingredients: string[];
      wellness_insight?: string;
    };
  } | null;
  setScanResult: (result: AppState['scanResult']) => void;

  // Pain Tracker State
  painAreas: string[];
  setPainAreas: (areas: string[]) => void;
  togglePainArea: (area: string) => void;
  
  // Cart State (Skincare Shop)
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  
  // Admin dashboard state
  activeTab: 'overview' | 'schedule' | 'emr' | 'analytics' | 'inventory' | 'sales' | 'profile';
  setActiveTab: (tab: 'overview' | 'schedule' | 'emr' | 'analytics' | 'inventory' | 'sales' | 'profile') => void;
  adminDoctorId: string | null;
  setAdminDoctorId: (id: string | null) => void;
  adminRole: 'frontdesk' | 'manager' | 'doctor' | null;
  setAdminRole: (role: 'frontdesk' | 'manager' | 'doctor' | null) => void;
  
  // Clear data
  resetPatientData: () => void;
};

export const useStore = create<AppState>()(
  persist(
    (set) => ({
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
      
      // Cart Actions
      cartItems: [],
      addToCart: (product) => set((state) => {
        const existingItem = state.cartItems.find(item => item.product.id === product.id);
        if (existingItem) {
          return {
            cartItems: state.cartItems.map(item => 
              item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          };
        }
        return { cartItems: [...state.cartItems, { product, quantity: 1 }] };
      }),
      removeFromCart: (productId) => set((state) => ({
        cartItems: state.cartItems.filter(item => item.product.id !== productId)
      })),
      clearCart: () => set({ cartItems: [] }),

      activeTab: 'overview',
      setActiveTab: (tab) => set({ activeTab: tab }),

      adminDoctorId: null,
      setAdminDoctorId: (id) => set({ adminDoctorId: id }),

      adminRole: null,
      setAdminRole: (role) => set({ adminRole: role }),

      resetPatientData: () => set({ 
        bookingData: {}, 
        wellnessData: null, 
        scanResult: null, 
        painAreas: [] 
      }),
    }),
    {
      name: 'aura-patient-storage', // unique name
      partialize: (state) => ({
        bookingData: state.bookingData,
        wellnessData: state.wellnessData,
        scanResult: state.scanResult,
        painAreas: state.painAreas,
        cartItems: state.cartItems,
        adminDoctorId: state.adminDoctorId,
        adminRole: state.adminRole,
      }), // Persist everything except activeTab
    }
  )
);
