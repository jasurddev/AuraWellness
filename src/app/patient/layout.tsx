export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#EFECE5] flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* Premium Device Frame Container */}
      <div className="relative w-full max-w-[400px] h-[850px] max-h-[90vh] bg-[#F9F8F6] rounded-[3rem] shadow-[0_20px_50px_rgba(84,87,67,0.15)] overflow-hidden border-[8px] border-white ring-1 ring-border/50">
        
        {/* Notch / Dynamic Island simulation */}
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50 pointer-events-none">
          <div className="w-32 h-6 bg-white rounded-b-3xl shadow-sm"></div>
        </div>

        {/* Content Area */}
        <div className="relative w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
          {children}
        </div>

      </div>
    </div>
  );
}
