import React from "react";
import styles from "./GalleryLightbox.module.css";
import { FaTimes } from "react-icons/fa";

const GalleryLightbox = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.lightbox}>
        <button className={styles.closeBtn} onClick={onClose}>
          <FaTimes />
        </button>
        <img src={selectedImage} alt="Gallery Full View" className={styles.image} />
      </div>
    </div>
  );
};

export default GalleryLightbox;
