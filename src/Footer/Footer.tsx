import CreditsContent from "./CreditsContent";
import ExploreContent from "./ExploreContent";
import ProjectContent from "./ProjectContent";
import SocialMediaContent from "./SocialMediaContent";

import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <SocialMediaContent />
        <ExploreContent />
        <ProjectContent />
        <CreditsContent />
      </div>
    </footer>
  );
}
export default Footer;
