import Masonry from "react-masonry-css";
import "./FaveSection.css";

import fave1 from "../../assets/faveShotsPics/fave1.webp";
import fave2 from "../../assets/faveShotsPics/fave2.webp";
import fave3 from "../../assets/faveShotsPics/fave3.webp";
import fave4 from "../../assets/faveShotsPics/fave4.webp";
import fave5 from "../../assets/faveShotsPics/fave5.webp";
import fave6 from "../../assets/faveShotsPics/fave6.webp";

function FaveGridArea() {
  const images = [
    { src: fave1 },
    { src: fave2 },
    { src: fave3 },
    { src: fave4 },
    { src: fave5 },
    { src: fave6 },
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
          <img src={img.src} alt={`Image ${index}`} />
        </div>
      ))}
    </Masonry>
  );
}

function FaveSection() {
  return (
    <section className="FaveSection" id="faves">
      <h2>My Fave Shots</h2>
      <FaveGridArea />
    </section>
  );
}
export default FaveSection;
