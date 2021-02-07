import React from "react";
import styles from "../../styles/Hero.module.scss";
import SearchBar from "../general/searchbar";

const Hero = ({ selectedCategory }) => {
  return (
    <header className={styles.heroContainer}>
      <div className={styles.posContainer}>
        <h1>Buy & Sell </h1>
        <h1>
          <mark>Authentic {selectedCategory}</mark>
        </h1>
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Hero;
