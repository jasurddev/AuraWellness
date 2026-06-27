import { MOCK_DOCTORS } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Star, Award, ChevronLeft, MapPin } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const doctor = MOCK_DOCTORS.find(d => d.slug === params.slug);
  
  if (!doctor) {
    return { title: 'Doctor Not Found - AuraWellness' };
  }

  return {
    title: `${doctor.name} - ${doctor.specialty} | AuraWellness`,
    description: doctor.bio,
    openGraph: {
      title: `${doctor.name} - AuraWellness Expert`,
      description: doctor.bio,
      images: [doctor.imageUrl],
    },
  };
}

export default function DoctorProfilePage({ params }: Props) {
  const doctor = MOCK_DOCTORS.find(d => d.slug === params.slug);
  
  if (!doctor) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans pb-24 relative">
      {/* Header Image */}
      <div className="relative w-full h-80">
        <img 
          src={doctor.imageUrl} 
          alt={doctor.name} 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Back Button */}
        <Link href="/patient" className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          <ChevronLeft className="w-6 h-6 -ml-1" />
        </Link>
        
        {/* Doctor Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium mb-3">
            {doctor.specialty}
          </div>
          <h1 className="text-3xl font-serif text-white mb-2">{doctor.name}</h1>
          <div className="flex items-center text-white/90 text-sm gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{doctor.rating}</span>
              <span className="opacity-70">({doctor.reviewsCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Aura Kemang</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 space-y-8 max-w-2xl mx-auto">
        {/* Bio Section */}
        <section>
          <h2 className="text-lg font-serif text-slate-900 mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" /> About
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            {doctor.bio}
          </p>
        </section>

        {/* Gallery Section */}
        <section>
          <h2 className="text-lg font-serif text-slate-900 mb-4">Before / After Gallery</h2>
          <div className="grid grid-cols-2 gap-3">
            {doctor.gallery.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Credentials / Experience (Static for MVP) */}
        <section>
          <h2 className="text-lg font-serif text-slate-900 mb-4">Credentials</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-slate-900 mt-2 shrink-0"></div>
              <div>
                <div className="text-sm font-medium text-slate-900">Board Certified Dermatologist</div>
                <div className="text-xs text-slate-500">Indonesian Medical Association</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-slate-900 mt-2 shrink-0"></div>
              <div>
                <div className="text-sm font-medium text-slate-900">10+ Years Experience</div>
                <div className="text-xs text-slate-500">Specializing in holistic aesthetic treatments</div>
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-white/0 z-50 pointer-events-none">
        <div className="max-w-2xl mx-auto pointer-events-auto">
          <Link 
            href={`/patient?doctorId=${doctor.id}`}
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-medium shadow-xl hover:bg-slate-800 transition-colors active:scale-95"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
