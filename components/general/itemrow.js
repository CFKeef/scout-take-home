import React, { useEffect, useState } from "react";
import ReactToolTip from "react-tooltip";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import styles from "../../styles/ItemRow.module.scss";
import Link from "next/link";

/*
    Generic Item Rows
    Params:
        Title: Section title 
            ex: Popular Brands
        sectionCategory: Used to redirect user to a page with more products
            ex: Popular
        toolTip: tells the component if it should have a toolTip for the user
        toolTipMessage: Used to populated the tool tip Content
        Items: What will be used to render each card
*/

const ItemRow = ({
  title,
  sectionCategory,
  toolTip,
  toolTipMessage,
  Items,
}) => {
  const [isToolTipVisible, setToolTipVisibility] = useState(false);
  // Generates the tool tip element
  const generateToolTip = () => {
    return (
      <React.Fragment>
        <span data-tip={toolTipMessage}>
          <AiOutlineQuestionCircle />
        </span>
      </React.Fragment>
    );
  };

  // Generates the product card
  const generateCard = (product) => {
    return (
      <Link href={`/product/${product.id}`} passhref>
        <a draggable={false}>
          <div className={styles.imgContainer}>
            <img draggable={false} src={product.thumbnail_url} />
          </div>
          <div className={styles.detailsContainer}>
            <p>{product.name}</p>
            <span>Sales Last 72</span>
            <p className={styles.salesCount}>{product.sales_last_72}</p>
          </div>
        </a>
      </Link>
    );
  };

  // Generates the container for the product cards
  const generateItemDisplay = () => {
    return (
      <ul>
        {Items.map((item) => {
          return <li key={"item" + item.name}>{generateCard(item)}</li>;
        })}
      </ul>
    );
  };

  // Fixes SSR issue w react tooltip
  useEffect(() => {
    setToolTipVisibility(true);
  }, []);

  return (
    <div className={styles.itemRowContainer}>
      <div className={styles.upperContainer}>
        {isToolTipVisible ? <ReactToolTip scrollHide={true} /> : null}
        <h2>
          {title} {toolTip ? generateToolTip() : null}
        </h2>
        <Link href={`/view/${sectionCategory}`} passhref>
          <a>See All</a>
        </Link>
      </div>
      <div className={styles.lowerContainer}>
        {Items.length > 0 ? (
          generateItemDisplay()
        ) : (
          <p>Keep moving nothing to see here</p>
        )}
      </div>
    </div>
  );
};

export default ItemRow;
