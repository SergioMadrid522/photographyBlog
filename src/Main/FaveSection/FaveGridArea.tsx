import { useState } from "react";
import Masonry from "react-masonry-css";
//Data
import { faveImages, faveBreakPointColumnsObj } from "../data.ts";

function FaveGridArea() {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(!openModal);
    console.log("hola")
  }

  return (
    <Masonry
      breakpointCols={faveBreakPointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {faveImages.map((img, index) => (
        <div key={index} className={`image-card`}>
          <img
            src={img.src} alt={`Image ${index}`}
            loading="lazy"
            onClick={handleClick}/>
        </div>
      ))}
    </Masonry>
  );
}

export default FaveGridArea;