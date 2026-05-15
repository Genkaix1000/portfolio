import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

// Helper to get base64 of the image
const imagePath = path.join(process.cwd(), 'public/cv/cv.png');
const imageBase64 = fs.readFileSync(imagePath).toString('base64');

const cvData = {
    name: "Matías Asin",
    position: "Applying for: Game Presenter",
    location: "Bolívar, BA, Argentina",
    age: "25 Years Old",
    phone: "+54 9 11 70623866",
    email: "matiasasin123@gmail.com",
    about: "Motivated and adaptable professional from Argentina with experience in fast paced customer service environments. Strong communication skills, positive attitude, and the ability to work confidently under pressure. Currently looking for an opportunity to grow professionally in igaming, and be part of an international team.",
    experience: [
        {
            title: "Software Developer & Project Consultant",
            company: "Cocktrail & BolivarAPP",
            period: "Ongoing",
            description: "Driving the development of management systems for nightlife venues and municipal platforms. I lead stakeholder meetings to align technical solutions with user expectations, focusing on resolving communication bottlenecks and improving team workflows through proactive public relations and technical insight."
        },
        {
            title: "Logistics Coordinator",
            company: "Actual Supermercados",
            period: "Jan 2025 — May 2026",
            description: "Managed regional distribution and supply chain logistics for a major retail chain. Directed inventory and quality control protocols, focusing on team coordination and operational efficiency in high-volume retail environments."
        },
        {
            title: "Customer Service & Public Relations",
            company: "Various",
            period: "2020 — 2024",
            description: "Mastered interpersonal communication and crisis management within high-stakes, fast-paced environments. Expert in conflict resolution and professional networking, delivering elite service standards while managing complex social dynamics for diverse audiences."
        },
        {
            title: "Freelance Graphic Designer",
            company: "Independent",
            period: "2024",
            description: "Visual identity specialist focusing on client branding and communication. Orchestrated end-to-end design workflows, ensuring consistency across digital and print media while managing direct client relationships and expectations."
        }
    ],
    education: [
        {
            degree: "Higher Technical Degree in Data Science",
            school: "Teclab — Final Stages",
            status: "Intermediate Degree Obtained. Specialized in Data Analysis and Logic."
        },
        {
            degree: "Full Stack Web Development",
            school: "Egg Cooperation",
            status: "Mastery in Backend (Java), Frontend (React) & Database Engineering."
        },
        {
            degree: "High School Diploma (Bachiller)",
            school: "Escuela de Educación Secundaria N° 4 (EESN4)",
            status: "Complete Secondary Education."
        }
    ],
    skills: {
        soft: ["PR / Communication", "Crisis Management", "Adaptability"],
        data: ["Advanced Excel / SQL", "Reporting & Analysis"],
        design: ["PS / AI / Branding", "Visual Identity"],
        systems: ["Workflow Optimization", "Tech Savvy / Git"]
    }
};

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Inter', sans-serif; 
            color: #1a1a1a; 
            line-height: 1.35;
            padding: 25px 45px;
            background: white;
            width: 210mm;
            height: 297mm;
        }
        
        .header { 
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 15px;
            border-bottom: 2px solid #000;
            padding-bottom: 12px;
        }
        
        .photo-container {
            width: 85px;
            height: 85px;
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid #000;
            flex-shrink: 0;
        }
        
        .photo-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .header-text h1 { 
            font-family: 'Playfair Display', serif; 
            font-size: 34px; 
            font-weight: 700;
            letter-spacing: -1px;
            line-height: 1;
            margin-bottom: 3px;
        }

        .header-meta {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #666;
            font-weight: 700;
        }
        
        .section { margin-bottom: 14px; }
        
        .section-title { 
            font-size: 10px; 
            text-transform: uppercase; 
            letter-spacing: 2px; 
            font-weight: 900; 
            color: #4f46e5;
            margin-bottom: 8px;
            border-bottom: 1px solid #eee;
            padding-bottom: 4px;
        }
        
        .about-text { 
            font-size: 13px; 
            color: #333; 
            max-width: 100%;
        }
        
        .experience-item { margin-bottom: 10px; }
        
        .exp-header { 
            display: flex; 
            justify-content: space-between; 
            align-items: baseline;
            margin-bottom: 2px;
        }
        
        .exp-title { font-weight: 900; font-size: 13px; }
        .exp-company { font-style: italic; color: #4f46e5; font-size: 12px; font-weight: 700; }
        .exp-period { font-size: 10px; font-weight: 700; color: #999; text-transform: uppercase; }
        
        .exp-desc { font-size: 11.5px; color: #444; text-align: justify; }
        
        /* Skills Layout */
        .skills-grid { 
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px 40px;
            margin-bottom: 12px;
        }
        
        .skill-column { flex: 1; }
        
        .skill-list { 
            display: grid;
            list-style: none; 
            font-size: 11px; 
        }
        
        .skill-list li { display: flex; align-items: center; margin-bottom: 3px; }
        .skill-list li::before { content: "•"; color: #4f46e5; font-weight: bold; margin-right: 6px; }
        
        .edu-grid { display: grid; grid-template-cols: 1fr 1fr; gap: 20px; }
        .edu-item { margin-bottom: 6px; }
        .edu-degree { font-weight: 700; font-size: 12px; line-height: 1.2; }
        .edu-school { font-size: 10px; color: #666; text-transform: uppercase; font-weight: 700; }
        .edu-status { font-size: 10px; color: #4f46e5; font-weight: 600; }

        .footer {
            margin-top: auto;
            text-align: center;
            font-size: 9px;
            color: #ccc;
            text-transform: uppercase;
            letter-spacing: 3px;
            padding-top: 20px;
        }
        
        @media print {
            body { padding: 30px 45px; }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="photo-container">
            <img src="data:image/png;base64,${imageBase64}" alt="Matías Asin">
        </div>
        <div class="header-text">
            <h1>${cvData.name}</h1>
            <div style="font-size: 13px; font-weight: 900; color: #4f46e5; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
                ${cvData.position}
            </div>
            <div class="header-meta">
                ${cvData.location} &nbsp;•&nbsp; ${cvData.age}
            </div>
            <div class="header-meta" style="margin-top: 3px; color: #111; font-weight: 800;">
                ${cvData.phone} &nbsp;•&nbsp; ${cvData.email}
            </div>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">About Me</h2>
        <p class="about-text">${cvData.about}</p>
    </div>

    <div class="section">
        <h2 class="section-title">Experience</h2>
        ${cvData.experience.map(exp => `
            <div class="experience-item">
                <div class="exp-header">
                    <span class="exp-title">${exp.title}</span>
                    <span class="exp-period">${exp.period}</span>
                </div>
                <div class="exp-company">${exp.company}</div>
                <p class="exp-desc">${exp.description}</p>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <h2 class="section-title">Professional Skills</h2>
        <div class="skills-grid">
            <div class="skill-column">
                <p style="font-size: 9px; font-weight: 900; color: #999; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">Soft Skills</p>
                <ul class="skill-list">
                    ${cvData.skills.soft.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
            <div class="skill-column">
                <p style="font-size: 9px; font-weight: 900; color: #999; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">Data & Logic</p>
                <ul class="skill-list">
                    ${cvData.skills.data.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
            <div class="skill-column" style="margin-top: 10px;">
                <p style="font-size: 9px; font-weight: 900; color: #999; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">Design</p>
                <ul class="skill-list">
                    ${cvData.skills.design.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
            <div class="skill-column" style="margin-top: 10px;">
                <p style="font-size: 9px; font-weight: 900; color: #999; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">Systems</p>
                <ul class="skill-list">
                    ${cvData.skills.systems.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Education</h2>
        <div class="edu-grid">
            ${cvData.education.map(edu => `
                <div class="edu-item">
                    <div class="edu-degree">${edu.degree}</div>
                    <div class="edu-school">${edu.school}</div>
                    <div class="edu-status">${edu.status}</div>
                </div>
            `).join('')}
        </div>
    </div>

    <div class="footer">
        Matías Asin — Curriculum Vitae 2026
    </div>
</body>
</html>
`;

async function generatePDF() {
    console.log('🚀 Generating 1-Page Premium PDF...');
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.setContent(htmlContent);

    await page.pdf({
        path: 'Asin_Matias_CV.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        }
    });

    console.log('✅ Success! Your 1-page PDF is ready: CV_Matias_Asin_Final.pdf');
    await browser.close();
}

generatePDF();
