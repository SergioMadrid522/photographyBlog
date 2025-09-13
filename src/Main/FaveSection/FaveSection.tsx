import FaveGridArea from "./FaveGridArea";
import "./FaveSection.css";

function FaveSection() {
  return (
    <section className="FaveSection" id="faves">
      <h2>My Fave Shots</h2>
      <FaveGridArea/>
    </section>
  );
}
export default FaveSection;
