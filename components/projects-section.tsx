"use client";

import Image from "next/image";
import { IconExternal, IconGithub } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";

export function ProjectsSection() {
  const { t } = useLocale();

  return (
    <section id="proyectos" className="section-band projects-band" aria-labelledby="projects-title">
      <div className="section-shell">
        <p className="section-kicker">{t.projects.kicker}</p>
        <h2 id="projects-title">{t.projects.title}</h2>
        <div className="projects-grid">
          {t.projects.items.map((project) => (
            <article className="project-item" key={project.name}>
              <div className="project-media">
                <Image
                  src={project.image}
                  alt={`${t.projects.imageAlt} ${project.name}`}
                  fill
                  sizes="(max-width: 760px) 100vw, 360px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <h3>{project.name}</h3>
                  <span className="project-status">{project.status}</span>
                </div>
                <p className="project-role">{project.role}</p>
                <p className="project-stack">{project.stack}</p>
                <p className="project-detail">{project.detail}</p>
                <div className="project-links">
                  {project.href && (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {t.projects.view} <IconExternal className="icon-sm" />
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      {t.projects.code} <IconGithub className="icon-sm" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
