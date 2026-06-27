export type Doctor = {
  id: string;
  name: string;
  slug: string;
  specialty: string;
  imageUrl: string; 
  bio: string;
  rating: number;
  reviewsCount: number;
  gallery: string[];
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
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
    slug: 'dr-sarah-lee',
    specialty: 'Aesthetic Dermatologist', 
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=250&h=250',
    bio: 'With over 10 years of experience in aesthetic dermatology, Dr. Sarah Lee specializes in non-invasive skin rejuvenation and advanced laser treatments. She believes in enhancing natural beauty through holistic approaches.',
    rating: 4.9,
    reviewsCount: 1240,
    gallery: [
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=400',
    ]
  },
  { 
    id: 'd2', 
    name: 'Dr. James Chen', 
    slug: 'dr-james-chen',
    specialty: 'Pain Management & Holistic', 
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=250&h=250',
    bio: 'Dr. James Chen is a pioneer in combining traditional pain management with modern technological therapies. His holistic approach aims not just to treat pain, but to restore overall body alignment and vitality.',
    rating: 4.8,
    reviewsCount: 890,
    gallery: [
      'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400',
    ]
  },
  { 
    id: 'd3', 
    name: 'Dr. Emily Carter', 
    slug: 'dr-emily-carter',
    specialty: 'Anti-Aging Specialist', 
    imageUrl: 'https://images.unsplash.com/photo-1594824432258-29406085a6e6?auto=format&fit=crop&q=80&w=250&h=250',
    bio: 'Dedicated to the science of longevity and cellular health, Dr. Emily Carter focuses on preventative anti-aging treatments. She creates bespoke regimens tailored to each patient\'s unique genetic makeup.',
    rating: 5.0,
    reviewsCount: 1532,
    gallery: [
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1608248593842-8d76e4c25603?auto=format&fit=crop&q=80&w=400',
    ]
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
  { id: 'rx1', time: 'Morning', title: 'Gentle Cleanser', completed: true, instructions: 'Gunakan 1-2 pump, pijat lembut di wajah basah.', benefits: 'Membersihkan kotoran tanpa merusak skin barrier.' },
  { id: 'rx2', time: 'Morning', title: 'Vitamin C Serum 15%', completed: false, instructions: 'Teteskan 3-4 tetes merata ke seluruh wajah dan leher.', benefits: 'Mencerahkan dan melindungi dari radikal bebas.' },
  { id: 'rx3', time: 'Morning', title: 'Sunscreen SPF 50+', completed: false, instructions: 'Gunakan sebanyak 2 jari, reapply setiap 4 jam.', benefits: 'Perlindungan maksimal dari UVA & UVB.' },
  { id: 'rx4', time: 'Night', title: 'Retinol 0.5% Cream', completed: false, instructions: 'Gunakan seukuran kacang polong (pea-sized) setelah toner.', benefits: 'Stimulasi kolagen & anti-aging.' },
  { id: 'rx5', time: 'Night', title: 'Deep Hydration Moisturizer', completed: false, instructions: 'Oleskan tebal sebagai tahap akhir rutinitas malam.', benefits: 'Mengunci kelembapan sepanjang malam.' },
];

export const MOCK_JOURNEY = [
  { id: 'j1', date: '10 Jun 2026', title: 'Happy Aging Peeling', type: 'treatment', doctor: 'Dr. Sarah Lee', notes: 'Kulit merespons sangat baik terhadap peeling. Kemerahan normal hilang dalam 1 jam. Disarankan rutin hidrasi malam.' },
  { id: 'j2', date: '15 May 2026', title: 'Therapeutic Neck Relief', type: 'treatment', doctor: 'Dr. James Chen', notes: 'Ketegangan otot leher bagian atas berkurang signifikan. Postur mulai membaik.' },
  { id: 'j3', date: '01 May 2026', title: 'Initial AI Skin Scan', type: 'scan', doctor: 'AI System', notes: 'Skor awal: Hidrasi 65%, Pori-pori 80%. Terdapat tanda penuaan dini ringan di area mata.' },
];

export type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
};

export const MOCK_PATIENTS: Patient[] = [
  { id: 'p1', name: 'Emma Watson', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250&h=250', lastVisit: '2026-05-15', notes: 'Therapeutic Neck Relief. Good progress.' },
  { id: 'p2', name: 'Liam Neeson', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250&h=250', lastVisit: '2026-06-02', notes: 'Happy Aging Peeling. Recommended daily sunscreen.' },
  { id: 'p3', name: 'Sophia Loren', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250', lastVisit: '2026-06-10', notes: 'Consultation for pain management.' },
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

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod1',
    name: 'Aura Glowing Serum 15%',
    category: 'Serum',
    price: 350000,
    description: 'Serum pencerah intensif dengan Vitamin C 15% dan Ferulic Acid.',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=300',
    rating: 4.8
  },
  {
    id: 'prod2',
    name: 'Happy Aging Peptide Cream',
    category: 'Moisturizer',
    price: 450000,
    description: 'Krim malam anti-aging dengan matrixyl peptides dan ceramide kompleks.',
    imageUrl: 'https://images.unsplash.com/photo-1608248593842-8d76e4c25603?auto=format&fit=crop&q=80&w=300',
    rating: 4.9
  },
  {
    id: 'prod3',
    name: 'Invisible Shield SPF 50+',
    category: 'Sunscreen',
    price: 220000,
    description: 'Tabir surya ringan tanpa whitecast, cocok untuk kulit berjerawat.',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=300',
    rating: 4.7
  },
  {
    id: 'prod4',
    name: 'Gentle Clarifying Cleanser',
    category: 'Cleanser',
    price: 180000,
    description: 'Pembersih wajah pH seimbang dengan kandungan Salicylic Acid ringan.',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=300',
    rating: 4.5
  }
];
