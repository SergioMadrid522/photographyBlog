import { socialMediaLogos } from "./data.ts"
import type { socialMedia } from "./types.ts";
function SocialMediaContent() {
  return (
    <div className="social-media-container" id="contact">
      <h2>My Social media</h2>
      <nav>
        <ul>
          {socialMediaLogos.map((media: socialMedia) => (
            <li key={media.id}>
              <a
                href={media.link}
                target="_blank"
                rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className={media.class}
                  viewBox="0 0 16 16"
                >
                  <path d={media.logo} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SocialMediaContent;