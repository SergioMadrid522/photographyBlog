import type { project } from "./types.ts"
import { projects } from "./data.ts";

function ProjectContent() {
  return (
    <div className="project-container">
      <h2>Projects</h2>
      <nav>
        <ul>
            {projects.map((item: project, idx) => (
                <li key={idx}>
                    <a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
                </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default ProjectContent;