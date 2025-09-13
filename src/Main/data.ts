import type {image} from "./type.ts";
//Fave Section
import fave1 from "../assets/faveShotsPics/fave1.webp";
import fave2 from "../assets/faveShotsPics/fave2.webp";
import fave3 from "../assets/faveShotsPics/fave3.webp";
import fave4 from "../assets/faveShotsPics/fave4.webp";
import fave5 from "../assets/faveShotsPics/fave5.webp";
import fave6 from "../assets/faveShotsPics/fave6.webp";

import gallery1 from "../assets/galleryPics/gallery1.webp";
import gallery2 from "../assets/galleryPics/gallery2.webp";
import gallery3 from "../assets/galleryPics/gallery3.webp";
import gallery4 from "../assets/galleryPics/gallery4.webp";
import gallery5 from "../assets/galleryPics/gallery5.webp";
import gallery6 from "../assets/galleryPics/gallery6.webp";
import gallery7 from "../assets/galleryPics/gallery7.webp";
import gallery8 from "../assets/galleryPics/gallery8.webp";
import gallery9 from "../assets/galleryPics/gallery9.webp";
import gallery10 from "../assets/galleryPics/gallery10.webp";
import gallery11 from "../assets/galleryPics/gallery11.webp";
import gallery12 from "../assets/galleryPics/gallery12.webp";

export const faveImages: image[] = [
    { name:"Photo about a boat on the beach", link: fave1 },
    { name:"Photo about the moon", link: fave2 },
    { name:"Photo about a sunset", link: fave3 },
    { name:"Photo about ", link: fave4 },
    { name:"Photo about some birds at carpinter lagoon", link: fave5 },
    { name:"Photo about my dad and brother riding their bikes at night", link: fave6 },
];

export const faveBreakPointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 2,
};

export const galleryImages: image[] = [
    { name:"Photo about a baot in early morning", link: gallery1 },
    { name:"Photo about a bird flying away from us", link: gallery2 },
    { name:"Photo about a boat upside down", link: gallery3 },
    { name:"Photo about a bird looking at its food", link: gallery4 },
    { name:"Photo about sunset", link: gallery5 },
    { name:"Photo about the reflection of the sky on the sea", link: gallery6 },
    { name:"Photo about a pink rose", link: gallery7 },
    { name:"Photo about a man shooting a picture to the sunrise", link: gallery8 },
    { name:"Photo about the moon", link: gallery9 },
    { name:"Photo about a boat at the chapayan lagoon", link: gallery10 },
    { name:"Photo about a field full of cows", link: gallery11 },
    { name:"Photo about the sky before sunrise", link: gallery12 },
];
export const galleryBreakPointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 2,
};