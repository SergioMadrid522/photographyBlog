import { faveImages, faveBreakPointColumnsObj } from "../data.ts";
import Masonry from "react-masonry-css";
import ImageModal from "../ImageModal";
import { useModal } from "../useModal.ts";

function FaveGridArea() {
 const { openModal, handleOpen, handleClose } = useModal();

  return (
    <>
      <Masonry
        breakpointCols={faveBreakPointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {faveImages.map((img, index) => (
          <div key={index} className={`image-card`}>
            <img
              src={img.link} alt={img.name}
              loading="lazy"
              onClick={() => handleOpen(img)}
              />
          </div>
        ))}
      </Masonry>
      {/* <ImageModal/> */}
      {openModal && (<ImageModal image={openModal} onClose={handleClose}/>)}
    </>
  );
}

export default FaveGridArea;