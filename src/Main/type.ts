export type image = {
    name: string;
    link: string;
}

export type imageModalProps = {
    image: image;
    onClose: () => void;
}