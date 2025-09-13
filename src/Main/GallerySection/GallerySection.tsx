//import { Link } from "react-router-dom";
import FaveGridGallery from "./FaveGridGallery";
import "./GallerySection.css";

function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <h2>Gallery section</h2>
      <FaveGridGallery/>
      {/* <div className="more-pictures">
        <a href="../../pages/MorePictures">Do you want to see more?</a>
      </div> */}
    </section>
  );
}
export default GallerySection;
