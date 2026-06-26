export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string; // Changed from avatar to imageUrl to match components
};

export type Treatment = {
  id: string;
  name: string;
  category: string;
  price: string; // Changed to string (e.g., "Rp 2.500.000")
  durationMinutes: number;
  description: string;
  imageUrl: string;
};

export type Patient = {
  id: string;
  name: string;
  avatar: string;
  lastVisit: string;
  notes: string;
};

export const MOCK_DOCTORS: Doctor[] = [
  { 
    id: 'd1', 
    name: 'Dr. Sarah Lee', 
    specialty: 'Aesthetic Dermatologist', 
    imageUrl: 'https://images.unsplash.com/photo-1594824436998-d14c2db4c0c4?auto=format&fit=crop&q=80&w=250&h=250' 
  },
  { 
    id: 'd2', 
    name: 'Dr. James Chen', 
    specialty: 'Pain Management & Holistic', 
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=250&h=250' 
  },
  { 
    id: 'd3', 
    name: 'Dr. Emily Carter', 
    specialty: 'Anti-Aging Specialist', 
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=250&h=250' 
  },
];

export const MOCK_TREATMENTS: Treatment[] = [
  { 
    id: 't1', 
    name: 'Holistic Skin Rejuvenation', 
    category: 'Facial', 
    price: 'Rp 1.500.000', 
    durationMinutes: 45,
    description: 'Terapi peremajaan kulit yang menggabungkan pijat relaksasi dan teknologi laser ringan untuk merangsang kolagen.',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=300'
  },
  { 
    id: 't2', 
    name: 'Happy Aging Peeling', 
    category: 'Peel', 
    price: 'Rp 850.000', 
    durationMinutes: 30,
    description: 'Eksfoliasi lembut untuk mengangkat sel kulit mati, mencerahkan, dan memberikan efek glowing alami.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=300'
  },
  { 
    id: 't3', 
    name: 'Therapeutic Neck & Back Relief', 
    category: 'Pain Management', 
    price: 'Rp 1.200.000', 
    durationMinutes: 60,
    description: 'Terapi pemulihan holistik menggunakan teknologi heat & frequency untuk meredakan ketegangan otot leher dan punggung.',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=300'
  },
  { 
    id: 't4', 
    name: 'Posture Alignment Therapy', 
    category: 'Pain Management', 
    price: 'Rp 1.800.000', 
    durationMinutes: 45,
    description: 'Terapi spesialis untuk memperbaiki postur dan mengurangi nyeri kronis, mendukung konsep kecantikan dari dalam tubuh.',
    imageUrl: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=300'
  },
];

// E-Prescription Mock Data for Patient Dashboard
export const MOCK_PRESCRIPTIONS = [
  { id: 'rx1', time: 'Morning', title: 'Gentle Cleanser', completed: true },
  { id: 'rx2', time: 'Morning', title: 'Vitamin C Serum 15%', completed: false },
  { id: 'rx3', time: 'Morning', title: 'Sunscreen SPF 50+', completed: false },
  { id: 'rx4', time: 'Night', title: 'Retinol 0.5% Cream', completed: false },
  { id: 'rx5', time: 'Night', title: 'Deep Hydration Moisturizer', completed: false },
];

export const MOCK_JOURNEY = [
  { date: '10 Jun 2026', title: 'Happy Aging Peeling', type: 'treatment' },
  { date: '15 May 2026', title: 'Therapeutic Neck Relief', type: 'treatment' },
  { date: '01 May 2026', title: 'Initial AI Skin Scan', type: 'scan' },
];

export type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
};

export const MOCK_PATIENTS: Patient[] = [
  { id: 'p1', name: 'Emma Watson', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250&h=250', lastVisit: '2026-05-15', notes: 'Therapeutic Neck Relief. Good progress.' },
  { id: 'p2', name: 'Liam Neeson', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250&h=250', lastVisit: '2026-06-02', notes: 'Happy Aging Peeling. Recommended daily sunscreen.' },
  { id: 'p3', name: 'Sophia Loren', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&q=80&w=250&h=250', lastVisit: '2026-06-10', notes: 'Consultation for pain management.' },
];

export const MOCK_TIME_SLOTS: TimeSlot[] = [
  { id: 'ts1', time: '09:00 AM', available: true },
  { id: 'ts2', time: '10:00 AM', available: false },
  { id: 'ts3', time: '11:00 AM', available: true },
  { id: 'ts4', time: '01:00 PM', available: true },
  { id: 'ts5', time: '02:00 PM', available: true },
  { id: 'ts6', time: '03:00 PM', available: false },
  { id: 'ts7', time: '04:00 PM', available: true },
];
