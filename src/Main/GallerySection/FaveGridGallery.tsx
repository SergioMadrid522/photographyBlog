import Masonry from "react-masonry-css";

import { galleryImages, galleryBreakPointColumnsObj } from "../data.ts"
import { useModal } from "../useModal.ts";
import ImageModal from "../ImageModal";
function FaveGridGallery() {
  const { openModal, handleOpen, handleClose } = useModal();
  return (
    <>
    <Masonry
      breakpointCols={galleryBreakPointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {galleryImages.map((img, index) => (
        <div key={index} className={`image-card`}>
          <img 
            src={img.link}
            alt={img.name}
            loading="lazy"
            onClick={() => handleOpen(img)}/>
        </div>
      ))}
    </Masonry>
    {openModal && (<ImageModal image={openModal} onClose={handleClose}/>)}
    </>
  );
}

export default FaveGridGallery;