const projects = [
  {
    name: "BolivarApp",
    role: "Community platform",
    stack: "Flutter · Firebase",
    detail: "Municipio de Bolívar",
  },
  {
    name: "Cocktrail",
    role: "Nightlife management system",
    stack: "Next.js · SQL",
    detail: "Operación de alto tráfico nocturno",
  },
  {
    name: "GMod Workshop",
    role: "Lua engineering",
    stack: "Game engine scripts",
    detail: "Steam Workshop",
    href: "https://gmodstore.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="proyectos" className="section-shell projects-section" aria-labelledby="projects-title">
      <p className="section-kicker">02 — TRABAJO</p>
      <h2 id="projects-title">PROYECTOS</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-item" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.role}</p>
            <p>{project.stack}</p>
            <small>{project.detail}</small>
            {project.href && (
              <a href={project.href} target="_blank" rel="noreferrer">VER ↗</a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
