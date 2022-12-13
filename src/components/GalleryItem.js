import { useRef } from "react";
import {
  useGsapGatteryTitle,
  useGsapGatteryCategory,
  useGsapGatteryImage,
} from "../hooks/gsap";

const GalleryItem = ({ image }) => {
  const GalleryTitleRef = useRef(null);
  const GalleryCategoryRef = useRef(null);
  const GalleryImageRef = useRef(null);

  useGsapGatteryTitle(GalleryTitleRef, GalleryImageRef);
  useGsapGatteryCategory(GalleryCategoryRef, GalleryImageRef);
  useGsapGatteryImage(GalleryImageRef);

  return (
    <div className="gallery-item">
      <h1 className="gallery-item-title" ref={GalleryTitleRef}>
        {image.title}
      </h1>
      <p className="gallery-item-category" ref={GalleryCategoryRef}>
        {image.category}
      </p>
      <div
        ref={GalleryImageRef}
        className="gallery-item-img"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
    </div>
  );
};

export default GalleryItem;
