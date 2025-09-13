import { useState } from "react";
import type { image } from "./type.ts";

export function useModal() {
  const [openModal, setOpenModal] = useState<image | null>(null);

  const handleOpen = (image: image) => setOpenModal(image);
  const handleClose = () => setOpenModal(null);
    
  return { openModal, handleOpen, handleClose };
}
