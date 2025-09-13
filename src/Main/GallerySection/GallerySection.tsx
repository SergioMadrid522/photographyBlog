//import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import "./GallerySection.css";

import gallery1 from "../../assets/galleryPics/gallery1.webp";
import gallery2 from "../../assets/galleryPics/gallery2.webp";
import gallery3 from "../../assets/galleryPics/gallery3.webp";
import gallery4 from "../../assets/galleryPics/gallery4.webp";
import gallery5 from "../../assets/galleryPics/gallery5.webp";
import gallery6 from "../../assets/galleryPics/gallery6.webp";
import gallery7 from "../../assets/galleryPics/gallery7.webp";
import gallery8 from "../../assets/galleryPics/gallery8.webp";
import gallery9 from "../../assets/galleryPics/gallery9.webp";
import gallery10 from "../../assets/galleryPics/gallery10.webp";
import gallery11 from "../../assets/galleryPics/gallery11.webp";
import gallery12 from "../../assets/galleryPics/gallery12.webp";

function FaveGridGallery() {
  const images = [
    { src: gallery1 },
    { src: gallery2 },
    { src: gallery3 },
    { src: gallery4 },
    { src: gallery5 },
    { src: gallery6 },
    { src: gallery7 },
    { src: gallery8 },
    { src: gallery9 },
    { src: gallery10 },
    { src: gallery11 },
    { src: gallery12 },
  ];
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 2,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((img, index) => (
        <div key={index} className={`image-card`}>
          <img src={img.src} alt={`Image ${index}`} loading="lazy" />
        </div>
      ))}
    </Masonry>
  );
}

function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <h2>Gallery section</h2>
      <FaveGridGallery />
      {/* <div className="more-pictures">
        <a href="../../pages/MorePictures">Do you want to see more?</a>
      </div> */}
    </section>
  );
}
export default GallerySection;
