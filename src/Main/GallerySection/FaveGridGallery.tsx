import Masonry from "react-masonry-css";

import { galleryImages, galleryBreakPointColumnsObj } from "../data.ts"

function FaveGridGallery() {
  return (
    <Masonry
      breakpointCols={galleryBreakPointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {galleryImages.map((img, index) => (
        <div key={index} className={`image-card`}>
          <img src={img.src} alt={`Image ${index}`} loading="lazy" />
        </div>
      ))}
    </Masonry>
  );
}

export default FaveGridGallery;