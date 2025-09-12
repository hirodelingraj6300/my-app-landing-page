import React from "react";
import styles from "./GalleryFilter.module.css";

const GalleryFilter = ({ activeCategory, onFilterChange }) => {
  const categories = ["All", "Construction", "Interior", "Vastu"];

  return (
    <div className={styles.filterSection}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.button} ${
            activeCategory === category ? styles.active : ""
          }`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
