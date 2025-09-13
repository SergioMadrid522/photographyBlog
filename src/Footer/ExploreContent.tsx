import type { explore } from "./types.ts";
import { exploreNav } from "./data.ts";

function ExploreContent() {
  return (
    <div className="explore-container">
      <h2>Explore</h2>
      <nav>
        <ul>
            {exploreNav.map((section: explore) => (
                <li key={section.name}>
                    <a 
                      href={`#${section.link}`} 
                      rel="noreferrer">
                        {section.name}
                    </a>
                </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default ExploreContent;