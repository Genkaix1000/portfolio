import Link from 'next/link';

/**
 * PREMIUM MAINTENANCE PAGE
 * 
 * Designed to provide a high-end, professional feel even when the site is restricted.
 * Uses Tailwind CSS for modern aesthetics, gradients, and subtle animations.
 */

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-white font-sans selection:bg-indigo-500/30 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content Container */}
      <div className="max-w-3xl w-full text-center space-y-10">
        
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          System Status: Private Construction
        </div>

        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent leading-[1.1]">
            Curating the <br /> 
            <span className="italic font-serif">Portfolio.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl mx-auto font-light">
            My digital space is currently under exclusive maintenance. 
            If you're a recruiter or collaborator, please access the public CV below.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <Link
            href="/cv"
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-black transition-all duration-300 bg-white rounded-full hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
          >
            <span className="mr-3">Access Public CV</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold mb-1">Authorization</span>
            <div className="px-4 py-2 border border-white/5 bg-white/5 rounded-lg backdrop-blur-md">
              <span className="text-xs text-neutral-300 font-mono">ID: RESTRICTED_ACCESS_v2</span>
            </div>
          </div>
        </div>

        {/* Decorative Grid or Elements */}
        <div className="pt-20 opacity-20">
          <div className="flex justify-center gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-white" />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Metadata */}
      <footer className="absolute bottom-12 w-full flex flex-col items-center gap-2">
        <p className="text-neutral-600 text-xs font-medium uppercase tracking-[0.2em]">
          Designed for Excellence
        </p>
        <p className="text-neutral-800 text-[10px] font-mono">
          SECURE_PORTFOLIO_NODE_{new Date().getFullYear()}
        </p>
      </footer>

      {/* CSS Overlay for Noise Texture (Optional but adds premium feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
