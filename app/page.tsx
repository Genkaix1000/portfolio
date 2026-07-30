import { ConstellationCanvas } from "@/components/constellation-canvas";
import { HeroStage } from "@/components/hero-stage";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";

export default function Portfolio() {
  return (
    <main>
      <section className="hero">
        <ConstellationCanvas />
        <div className="hero-inner">
          <header className="topbar">
            <a href="#" className="wordmark">MATÍAS ASIN <span>· DATA &amp; SOFTWARE</span></a>
            <nav aria-label="Enlaces principales">
              <span aria-label="Idiomas disponibles">ES / EN</span>
              <a href="https://www.linkedin.com/in/matias-asin-573320250/" target="_blank" rel="noreferrer">
                LINKEDIN ↗
              </a>
            </nav>
          </header>
          <HeroStage />
        </div>
      </section>
      <ResumeSection />
      <ProjectsSection />
      <footer>
        <p>© 2026 MATÍAS ASIN <i>·</i> matiasasin123@gmail.com <i>·</i> +54 9 11 70623866</p>
        <p><a href="https://www.linkedin.com/in/matias-asin-573320250/" target="_blank" rel="noreferrer">LINKEDIN ↗</a> <i>·</i> BOLÍVAR, BA, ARGENTINA</p>
      </footer>
    </main>
  );
}
