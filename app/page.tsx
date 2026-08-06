import { ConstellationCanvas } from "@/components/constellation-canvas";
import { HeroStage } from "@/components/hero-stage";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Portfolio() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <ConstellationCanvas />
        <div className="hero-inner">
          <HeroStage />
        </div>
      </section>
      <ResumeSection />
      <ProjectsSection />
      <SiteFooter />
    </main>
  );
}
