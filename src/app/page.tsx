import Link from 'next/link';
import { Sparkles, LayoutDashboard } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center space-y-8">
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center shadow-sm mb-3">
            <img 
              src="/logo.png" 
              alt="Aura Wellness" 
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="text-sm font-normal text-muted-foreground tracking-normal">by Studio Satu Akun</div>
        </div>
        <p className="text-foreground/60 max-w-md mx-auto mt-6">
          Welcome to the Aura Wellness Ecosystem Prototype. Select a portal to begin.
        </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg">
        <Link 
          href="/patient"
          className="w-full flex-1 bg-blush/30 hover:bg-blush/50 border border-blush text-charcoal rounded-2xl p-6 flex flex-col items-center justify-center transition-all active:scale-95 space-y-3"
        >
          <Sparkles className="w-8 h-8 text-gold" />
          <div className="font-medium">Patient Portal</div>
          <div className="text-xs text-foreground/50">Mobile-first Web App</div>
        </Link>

        <Link 
          href="/admin"
          className="w-full flex-1 bg-charcoal hover:bg-charcoal/90 text-white rounded-2xl p-6 flex flex-col items-center justify-center transition-all active:scale-95 space-y-3"
        >
          <LayoutDashboard className="w-8 h-8 text-gold" />
          <div className="font-medium">Admin Dashboard</div>
          <div className="text-xs text-white/50">Desktop SaaS</div>
        </Link>
      </div>
    </div>
  );
}
