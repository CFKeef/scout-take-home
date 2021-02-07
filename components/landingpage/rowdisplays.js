import React from "react";
import ItemRow from "../general/itemrow";
import styles from "../../styles/RowDisplays.module.scss";

const RowDisplays = ({ popularItems, lowestItems, highestItems }) => {
  const mostPopularMessage =
    "The 'Most Popular' products are a curated collection of our best selling items.";

  const newLowestMessage =
    "The 'New Lowest Asks' are the products with the most recently listed Lowest Asks. These are the products that people are ready to sell.";

  const newHighestMessage =
    "The 'New Highest Bids' are the products with the most recently listed Highest Bids. These are the products that people are ready to buy.";
  return (
    <main className={styles.rowDisplaysContainer}>
      <div className={styles.posContainer}>
        <ItemRow
          title={"Most Popular"}
          sectionCategory={"popular"}
          toolTip={true}
          toolTipMessage={mostPopularMessage}
          Items={popularItems}
        />
        <ItemRow
          title={"New Lowest Asks"}
          sectionCategory={"asks"}
          toolTip={true}
          toolTipMessage={newLowestMessage}
          Items={lowestItems}
        />
        <ItemRow
          title={"New Highest BIds"}
          sectionCategory={"Bids"}
          toolTip={true}
          toolTipMessage={newHighestMessage}
          Items={highestItems}
        />
      </div>
    </main>
  );
};

export default RowDisplays;
