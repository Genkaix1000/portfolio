'use client';

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
          .section-gap { margin-top: 8px !important; margin-bottom: 8px !important; }
          .item-gap { margin-bottom: 6px !important; }
          .body-padding { padding: 15px 0 !important; }
          
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
              <p className="text-lg md:text-xl font-medium text-neutral-400 uppercase tracking-[0.2em] print:text-neutral-600 print:text-[10px]">
                Junior Data Scientist & Software Developer
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-[10px] font-black uppercase tracking-widest print:gap-2 header-badges">
              <span className="bg-white/5 text-neutral-300 px-4 py-2 rounded-lg border border-white/5 print:text-neutral-600 print:border-neutral-300 print:px-2 print:py-0.5">
                Bolívar, BA, Argentina
              </span>
              <span className="bg-white/5 text-neutral-300 px-4 py-2 rounded-lg border border-white/5 print:text-neutral-600 print:border-neutral-300 print:px-2 print:py-0.5">
                25 Years Old
              </span>
            </div>
          </div>
        </header>

        <div className="p-10 md:p-12 space-y-16 body-padding print:space-y-6">

          {/* PROFESSIONAL PROFILE */}
          <section className="space-y-6 print:space-y-1 section-gap">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-indigo-500 border-b border-neutral-100 pb-2 inline-block">
              Professional Profile
            </h2>
            <div className="space-y-4 print:space-y-1">
              <p className="text-2xl md:text-3xl text-neutral-900 leading-tight font-light tracking-tight print:text-base profile-main-text">
                A <span className="font-medium text-indigo-600 print:text-black">hands-on builder</span> fueled by <span className="italic text-neutral-500 print:text-black">curiosity</span> and a relentless desire to expand my horizons through <span className="font-medium">international collaboration.</span>
              </p>
              <p className="text-neutral-500 leading-relaxed max-w-3xl text-base font-light print:text-black">
                I’m a 25-year-old tech student and developer from Argentina, driven by the chance to embrace new experiences abroad and polish my English in a truly global workspace. Beyond the code, my background in logistics and high-pressure retail environments has taught me the value of grit, problem-solving, and real-world responsibility. I’m not just looking for a specific role—I’m looking for a dynamic team where I can adapt quickly, work hard, contribute my diverse skills, and build a solid professional path abroad.
              </p>
            </div>
          </section>

          {/* MAIN EXPERIENCE */}
          <section className="space-y-10 print:space-y-3 section-gap">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-indigo-500 border-b border-neutral-100 pb-2 inline-block">
              Experience
            </h2>

            <div className="space-y-12 print:space-y-4">

              <div className="grid md:grid-cols-4 gap-4 item-gap group transition-colors">
                <div className="md:col-span-1">
                  <p className="text-xs font-black text-neutral-400 uppercase tracking-widest print:text-[9px] group-hover:text-indigo-500 transition-colors">Jan 2025 — May 2026</p>
                </div>
                <div className="md:col-span-3 space-y-3 print:space-y-1">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-neutral-900 tracking-tight leading-none">Logistics Coordinator</h3>
                    <div className="flex items-center gap-3">
                      <p className="text-sm text-indigo-600 font-bold italic print:text-black">Actual Supermercados</p>
                      <a href="https://ar.linkedin.com/company/actual-supermercados" target="_blank" className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-[9px] font-bold text-neutral-500 hover:bg-neutral-100 hover:border-neutral-200 transition-all print:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-[#0077b5]"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light print:text-black">
                    Spearheaded regional distribution logistics and supply chain optimization for a major retail chain. Directed inventory management and quality control protocols, leveraging data-driven tracking systems to enhance operational throughput and reduce waste in high-volume environments.
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
                    Mastered interpersonal communication and crisis management within high-stakes, fast-paced environments. Expert in conflict resolution and professional networking, delivering elite service standards while managing complex social dynamics for diverse international audiences.
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
                    <div className="flex items-center gap-3">
                      <p className="text-sm text-indigo-600 font-bold italic print:text-black">@asn.psd</p>
                      <a href="https://www.instagram.com/asn.psd" target="_blank" className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-[9px] font-bold text-neutral-500 hover:bg-neutral-100 hover:border-neutral-200 transition-all print:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-[#E4405F]">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Instagram
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light print:text-black">
                    Visual identity architect specializing in branding for independent artists and corporate entities. Orchestrated end-to-end design workflows, from conceptualization to high-fidelity delivery, ensuring brand consistency across digital and print media under aggressive timelines.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* TOOLS & SKILLS */}
          <section className="space-y-8 bg-neutral-50 p-8 rounded-2xl border border-neutral-100 print:p-4 print:space-y-2 section-gap">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-neutral-500 border-b border-neutral-200 pb-2 inline-block">
              Technical Toolkit
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 print:gap-4">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest print:text-[8px]">Data & Logic</p>
                <ul className="text-xs font-bold text-neutral-800 space-y-1 print:text-[10px]">
                  <li>• Advanced Excel / SQL</li>
                  <li>• Python (Pandas/NumPy)</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest print:text-[8px]">Development</p>
                <ul className="text-xs font-bold text-neutral-800 space-y-1 print:text-[10px]">
                  <li>• React / Next.js / Git</li>
                  <li>• TypeScript</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest print:text-[8px]">Design</p>
                <ul className="text-xs font-bold text-neutral-800 space-y-1 print:text-[10px]">
                  <li>• PS / AI / Branding</li>
                  <li>• UI/UX Fundamentals</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest print:text-[8px]">Soft Skills</p>
                <ul className="text-xs font-bold text-neutral-800 space-y-1 print:text-[10px]">
                  <li>• PR / Crisis Management</li>
                  <li>• Adaptability</li>
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
