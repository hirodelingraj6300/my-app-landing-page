import React from "react";
import styles from "./GalleryGrid.module.css";

const GalleryGrid = ({ images = [], activeCategory = "All", onImageClick }) => {
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Debugging help — remove later
  console.log("GalleryGrid — activeCategory:", activeCategory, "filtered count:", filteredImages.length);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        {filteredImages.length === 0 ? (
          <div className={styles.empty}>
            <p>No projects found for <strong>{activeCategory}</strong>.</p>
            <p>Try switching to <em>All</em> to see all projects.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredImages.map((img, index) => (
              <div
                key={index}
                className={styles.card}
                onClick={() => onImageClick && onImageClick(img.url)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter") onImageClick && onImageClick(img.url); }}
              >
                <img src={img.url} alt={img.title || `Project ${index + 1}`} className={styles.image} />
                <div className={styles.overlay}>
                  <h3>{img.title}</h3>
                  <span className={styles.cat}>{img.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
