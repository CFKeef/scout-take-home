import React from "react";
import styles from "../../styles/Picker.module.scss";

const CategoryPicker = ({ setSelectedCategory, selectedCategory }) => {
  const generateChoices = () => {
    const list = [
      "Sneakers",
      "Streetwear",
      "Electronics",
      "Collectibles",
      "Handbags",
      "Watches",
    ];

    return (
      <ul>
        {list.map((category) => {
          return (
            <li
              key={"category" + category}
              className={
                selectedCategory === category
                  ? styles.selectedCategory
                  : styles.category
              }
            >
              <p onClick={() => setSelectedCategory(category)}>{category}</p>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section className={styles.pickerContainer}>
      <div className={styles.posContainer}>{generateChoices()}</div>
    </section>
  );
};

export default CategoryPicker;
