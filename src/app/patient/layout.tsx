export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen sm:bg-[#EFECE5] bg-[#F9F8F6] flex items-center justify-center sm:p-8 font-sans">
      {/* Device Frame (Only visible on Desktop, Fullscreen on Mobile) */}
      <div className="relative w-full h-screen sm:h-[850px] sm:max-h-[90vh] sm:max-w-[400px] bg-[#F9F8F6] sm:rounded-[3rem] shadow-none sm:shadow-[0_20px_50px_rgba(84,87,67,0.15)] overflow-hidden sm:border-[10px] sm:border-[#2A2D24] ring-1 ring-border/50">
        
        {/* Dynamic Island / Camera Notch (Only on Desktop) */}
        <div className="hidden sm:flex absolute top-2 inset-x-0 justify-center z-50 pointer-events-none">
          <div className="w-24 h-6 bg-[#2A2D24] rounded-full shadow-sm flex items-center justify-end px-2">
             <div className="w-2 h-2 rounded-full bg-[#1a1c16] border border-white/10" />
          </div>
        </div>

        {/* Content Area */}
        <div className="relative w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
          {children}
        </div>

      </div>
    </div>
  );
}
