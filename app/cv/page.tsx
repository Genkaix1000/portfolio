'use client';
import Link from "next/link";

/**
 * MATÍAS ASIN - PROFESSIONAL CV 
 * 
 */

export default function CVPage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-neutral-800 selection:bg-indigo-100 selection:text-indigo-900 font-sans py-12 px-6 lg:py-20 print:py-0 print:px-0 print:bg-white">

      {/* NAVIGATION - HIDDEN ON PRINT */}
      <nav className="max-w-4xl mx-auto mb-8 print:hidden">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Systems
        </Link>
      </nav>

      {/* SURGICAL PRINT OPTIMIZATION */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0.4cm;
          }
          body {
            -webkit-print-color-adjust: exact;
            background: white !important;
            color: #000 !important;
          }
          
          /* Grayscale / B&W Logic */
          * {
            color: #000 !important;
            border-color: #ddd !important;
          }
          
          /* Force all colored bullets to black */
          .bg-indigo-500 { background: #000 !important; }
          .text-indigo-600 { color: #000 !important; }
          .text-indigo-400 { color: #000 !important; }
          .text-indigo-500 { color: #000 !important; }
          
          /* edge-to-edge text */
          .max-w-3xl { max-width: none !important; }
          
          /* Header Left-Alignment & Hierarchy */
          .header-padding { 
            background: white !important; 
            padding: 15px 0 !important;
            border-bottom: 3px solid #000 !important;
            display: flex !important;
            flex-direction: row !important;
            align-items: flex-start !important;
            gap: 24px !important;
            text-align: left !important;
          }
          
          .header-text-block {
            text-align: left !important;
            align-items: flex-start !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 4px !important;
          }

          .header-badges {
            display: flex !important;
            flex-direction: row !important;
            justify-content: flex-start !important;
            gap: 8px !important;
            margin-top: 4px !important;
          }

          h1, h1 span { 
            font-size: 38px !important; 
            line-height: 1 !important;
            margin-bottom: 2px !important;
          }
          
          /* Global Font Density ( Photocopy Optimized ) */
          * {
            font-size: 12px !important;
            line-height: 1.3 !important;
          }
          h2 { font-size: 10px !important; margin-bottom: 4px !important; margin-top: 8px !important; border-color: #000 !important; }
          h3 { font-size: 16px !important; }
          p, li { font-size: 12px !important; }
          .profile-main-text { font-size: 16px !important; }
          
          /* Spacing Tightening to keep 1-page */
          .section-gap { margin-top: 6px !important; margin-bottom: 6px !important; }
          .item-gap { margin-bottom: 4px !important; }
          .body-padding { padding: 12px 0 !important; }
          
          /* Photo Size (Bigger & Left) */
          .photo-size { 
            width: 120px !important; 
            height: 120px !important; 
            border-radius: 12px !important;
            filter: grayscale(1) contrast(1.2) !important;
            border: 2px solid #000 !important;
          }
          
          /* Hide non-essential */
          .print-hide { display: none !important; }
          .grid { gap: 10px !important; }
          .bg-neutral-50 { background: white !important; border: 1px solid #ddd !important; }
          .bg-indigo-50 { background: #eee !important; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto bg-white shadow-2xl shadow-neutral-200 rounded-[2rem] overflow-hidden border border-neutral-100 print:shadow-none print:border-none print:rounded-none print:max-w-full">

        {/* HEADER SECTION */}
        <header className="relative bg-neutral-950 text-white p-10 md:p-14 flex flex-col md:flex-row gap-10 items-center header-padding overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full -mr-20 -mt-20 print:hidden"></div>

          <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-2xl overflow-hidden ring-4 ring-white/10 shadow-2xl photo-size group">
            <img
              src="/cv/cv.png"
              alt="Matías Asin"
              className="object-cover w-full h-full grayscale object-[center_35%] transition-all duration-500 group-hover:grayscale-0"
            />
          </div>

          <div className="text-center md:text-left space-y-4 print:space-y-0 relative z-10 header-text-block">
            <div className="space-y-1">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none print:text-4xl">
                Matías <span className="text-indigo-400 print:text-white">Asin</span>
              </h1>
              <p className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm print:text-black print:text-[14px] print:font-black print:mt-1">
                Applying for: Game Presenter
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-[10px] font-black uppercase tracking-widest print:gap-2 header-badges">
              <span className="bg-white/5 text-neutral-300 px-4 py-2 rounded-lg border border-white/5 print:text-neutral-600 print:border-neutral-300 print:px-2 print:py-0.5">
                Bolívar, BA, Argentina
              </span>
              <span className="bg-white/5 text-neutral-300 px-4 py-2 rounded-lg border border-white/5 print:text-neutral-600 print:border-neutral-300 print:px-2 print:py-0.5">
                25 Years Old
              </span>
              <span className="bg-white/5 text-neutral-300 px-4 py-2 rounded-lg border border-white/5 print:text-neutral-600 print:border-neutral-300 print:px-2 print:py-0.5 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="print:text-black"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +54 9 11 70623866
              </span>
              <span className="bg-white/5 text-neutral-300 px-4 py-2 rounded-lg border border-white/5 print:text-neutral-600 print:border-neutral-300 print:px-2 print:py-0.5 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="print:text-black"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                matiasasin123@gmail.com
              </span>
            </div>
          </div>
        </header>

        <div className="p-10 md:p-12 space-y-16 body-padding print:space-y-6">

          {/* PROFESSIONAL PROFILE */}
          <section className="space-y-6 print:space-y-1 section-gap">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-indigo-500 border-b border-neutral-100 pb-2 inline-block">
              About Me
            </h2>
            <div className="space-y-4 print:space-y-1">
              <p className="text-2xl md:text-3xl text-neutral-900 leading-tight font-light tracking-tight print:text-base profile-main-text">
                Motivated and adaptable professional from Argentina with experience in <span className="font-medium text-indigo-600 print:text-black">fast paced customer service</span> environments. 
              </p>
              <p className="text-neutral-500 leading-relaxed max-w-3xl text-base font-light print:text-black">
                Strong communication skills, positive attitude, and the ability to work confidently under pressure. Currently looking for an opportunity to grow professionally in <span className="font-medium text-indigo-600">igaming</span>, and be part of an international team.
              </p>
            </div>
          </section>

          {/* MAIN EXPERIENCE */}
          <section className="space-y-10 print:space-y-3 section-gap">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-indigo-500 border-b border-neutral-100 pb-2 inline-block">
              Experience
            </h2>

            <div className="space-y-12 print:space-y-4">

              {/* COCKTRAIL */}
              <div className="grid md:grid-cols-4 gap-4 item-gap group transition-colors">
                <div className="md:col-span-1">
                  <p className="text-xs font-black text-neutral-400 uppercase tracking-widest print:text-[9px] group-hover:text-indigo-500 transition-colors">May 2024 — Present</p>
                </div>
                <div className="md:col-span-3 space-y-3 print:space-y-1">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-neutral-900 tracking-tight leading-none">Operations & System Management</h3>
                    <p className="text-sm text-indigo-600 font-bold italic print:text-black">Cocktrail</p>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light print:text-black">
                    Spearheading the implementation of a management system for high-traffic nightlife venues. Focused on optimizing operational workflows and ensuring seamless service delivery in fast-paced, high-pressure environments.
                  </p>
                </div>
              </div>

              {/* BOLIVAR APP */}
              <div className="grid md:grid-cols-4 gap-4 item-gap group transition-colors">
                <div className="md:col-span-1">
                  <p className="text-xs font-black text-neutral-400 uppercase tracking-widest print:text-[9px] group-hover:text-indigo-500 transition-colors">Ongoing</p>
                </div>
                <div className="md:col-span-3 space-y-3 print:space-y-1">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-neutral-900 tracking-tight leading-none">Public Relations & Project Development</h3>
                    <p className="text-sm text-indigo-600 font-bold italic print:text-black">BolivarAPP</p>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light print:text-black">
                    Collaborating on a municipal platform for community management and claim resolution. Bridging the gap between public needs and digital solutions with a focus on user experience and effective community communication.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 item-gap group transition-colors">
                <div className="md:col-span-1">
                  <p className="text-xs font-black text-neutral-400 uppercase tracking-widest print:text-[9px] group-hover:text-indigo-500 transition-colors">Jan 2025 — May 2026</p>
                </div>
                <div className="md:col-span-3 space-y-3 print:space-y-1">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-neutral-900 tracking-tight leading-none">Logistics Coordinator</h3>
                    <div className="flex items-center gap-3">
                      <p className="text-sm text-indigo-600 font-bold italic print:text-black">Actual Supermercados</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light print:text-black">
                    Managed regional distribution and supply chain logistics for a major retail chain. Directed inventory and quality control protocols, focusing on team coordination and operational efficiency in high-volume retail environments.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 item-gap group transition-colors">
                <div className="md:col-span-1">
                  <p className="text-xs font-black text-neutral-400 uppercase tracking-widest print:text-[9px] group-hover:text-indigo-500 transition-colors">2020 — 2024</p>
                </div>
                <div className="md:col-span-3 space-y-3 print:space-y-1">
                  <h3 className="text-xl font-black text-neutral-900 tracking-tight">Customer Service & Public Relations</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light print:text-black">
                    Mastered interpersonal communication and crisis management within high-stakes, fast-paced environments. Expert in conflict resolution and professional networking, delivering elite service standards while managing complex social dynamics for diverse audiences.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 item-gap group transition-colors">
                <div className="md:col-span-1">
                  <p className="text-xs font-black text-neutral-400 uppercase tracking-widest print:text-[9px] group-hover:text-indigo-500 transition-colors">Ongoing</p>
                </div>
                <div className="md:col-span-3 space-y-3 print:space-y-1">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-neutral-900 tracking-tight leading-none">Freelance Graphic Designer</h3>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light print:text-black">
                    Visual identity specialist focusing on client branding and communication. Orchestrated end-to-end design workflows, ensuring consistency across digital and print media while managing direct client relationships and expectations.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* TOOLS & SKILLS */}
          <section className="space-y-8 bg-neutral-50 p-8 rounded-2xl border border-neutral-100 print:p-4 print:space-y-2 section-gap">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-neutral-500 border-b border-neutral-200 pb-2 inline-block">
              Professional Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 print:gap-4">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest print:text-[8px]">Soft Skills</p>
                <ul className="text-xs font-bold text-neutral-800 space-y-1 print:text-[10px]">
                  <li>• PR / Communication</li>
                  <li>• Crisis Management</li>
                  <li>• Adaptability</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest print:text-[8px]">Data & Logic</p>
                <ul className="text-xs font-bold text-neutral-800 space-y-1 print:text-[10px]">
                  <li>• Advanced Excel / SQL</li>
                  <li>• Reporting & Analysis</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest print:text-[8px]">Design</p>
                <ul className="text-xs font-bold text-neutral-800 space-y-1 print:text-[10px]">
                  <li>• PS / AI / Branding</li>
                  <li>• Visual Identity</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest print:text-[8px]">Systems</p>
                <ul className="text-xs font-bold text-neutral-800 space-y-1 print:text-[10px]">
                  <li>• Workflow Optimization</li>
                  <li>• Tech Savvy / Git</li>
                </ul>
              </div>
            </div>
          </section>

          {/* EDUCATION & ACADEMIC */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 print:gap-8 section-gap">

            {/* TECLAB SECTION */}
            <div className="space-y-6 print:space-y-2">
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-indigo-500 border-b border-neutral-100 pb-2 inline-block">
                Education & Degree Progress
              </h2>
              <div className="space-y-6 print:space-y-2">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 print:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-neutral-900 tracking-tight leading-tight">Higher Technical Degree in Data Science</h3>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest italic leading-none">Teclab — Final Stages</p>
                  </div>
                </div>

                <div className="space-y-4 pl-2 md:pl-16 print:pl-0 print:space-y-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <p className="text-xs font-black text-neutral-800 uppercase tracking-tight leading-none">Intermediate Degree Obtained</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <p className="text-xs font-black text-neutral-800 uppercase tracking-tight leading-none">Active Regular Student</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pl-2 md:pl-16 print:hidden">
                  <a href="/cv/pdfs/constancia.pdf" target="_blank" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-100 text-[10px] font-bold text-neutral-600 hover:bg-neutral-100 hover:border-neutral-200 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                    Certificate
                  </a>
                  <a href="/cv/pdfs/intermedio.pdf" target="_blank" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-100 text-[10px] font-bold text-neutral-600 hover:bg-neutral-100 hover:border-neutral-200 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                    Intermediate Degree
                  </a>
                  <a href="/cv/pdfs/analitico.pdf" target="_blank" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-100 text-[10px] font-bold text-neutral-600 hover:bg-neutral-100 hover:border-neutral-200 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Transcript
                  </a>
                </div>
              </div>
            </div>

            {/* EGG SECTION */}
            <div className="space-y-6 pt-10 md:pt-0 print:pt-0 print:space-y-2">
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-indigo-500 border-b border-neutral-100 pb-2 inline-block">
                Certifications & Specializations
              </h2>
              <div className="space-y-6 print:space-y-2">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 print:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-neutral-900 tracking-tight leading-tight">Full Stack Web Development</h3>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest italic leading-none">Egg Cooperation</p>
                  </div>
                </div>

                <div className="space-y-4 pl-2 md:pl-16 print:pl-0 print:space-y-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <p className="text-xs font-black text-neutral-800 uppercase tracking-tight leading-none">Backend: Java & Database Engineering</p>
                    </div>
                    <a href="https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/63f787f294d117558b4fc81a-1756673724399.pdf" target="_blank" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-100 text-[10px] font-bold text-neutral-600 hover:bg-neutral-100 hover:border-neutral-200 transition-all print:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      Credential
                    </a>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <p className="text-xs font-black text-neutral-800 uppercase tracking-tight leading-none">Frontend: Advanced Web Frameworks</p>
                    </div>
                    <a href="https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/63f787f294d117558b4fc81a-1756673624036.pdf" target="_blank" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-100 text-[10px] font-bold text-neutral-600 hover:bg-neutral-100 hover:border-neutral-200 transition-all print:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      Credential
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER CTA */}
          <footer className="pt-12 flex flex-col items-center gap-8 print:hidden print-hide">
            <button
              onClick={handlePrint}
              className="group flex items-center gap-3 px-8 py-4 font-black text-neutral-900 bg-white border-2 border-neutral-900 rounded-2xl hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-lg active:scale-95 text-[10px] uppercase tracking-[0.2em]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              EXPORT AS PDF
            </button>
            <p className="text-[10px] font-black text-neutral-300 uppercase tracking-[0.4em]">Matías Asin — Digital Portfolio</p>
          </footer>

        </div>
      </div>
    </main>
  );
}
