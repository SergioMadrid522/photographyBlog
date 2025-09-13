import type { imageModalProps } from "./type.ts";

function ImageModal({image, onClose}: imageModalProps) {
    return (
        <div className="modal">
            <button
                type="button"
                onClick={onClose}>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        className="bi bi-x-lg"
                        viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </span>
            </button>
            <div className="modal-container">
                <img src={image.link} alt={image.name} loading="lazy" />
                <div className="modal-content">
                    <h2 className="modal-content__title">{image.name}</h2>
                    <div className="modal-content__description">
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, alias. 
                            Animi quia suscipit hic illo eaque necessitatibus alias nostrum voluptate aspernatur ipsa?
                            Ea minus quis, officiis quia numquam cumque nihil!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageModal;