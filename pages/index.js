import Head from "next/head";
import React, { useState } from "react";
import { index } from "../lib/algoliasearch";

import CategoryPicker from "../components/landingpage/categorypicker";
import RowDisplays from "../components/landingpage/rowdisplays";
import Hero from "../components/landingpage/hero";
import Nav from "../components/landingpage/nav";
import styles from "../styles/Home.module.scss";

export default function Home({ popularItems, lowestItems, highestItems }) {
  const [selectedCategory, setSelectedCategory] = useState("Sneakers");

  return (
    <div className={styles.container}>
      <Head>
        <title>StockX</title>
        <link rel="icon" href="/favicon.ico" />
        <script>0</script>
      </Head>
      <Nav />
      <Hero selectedCategory={selectedCategory} />
      <CategoryPicker
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <RowDisplays
        popularItems={popularItems}
        lowestItems={lowestItems}
        highestItems={highestItems}
      />
      <footer></footer>
    </div>
  );
}

// Some beautiful Incremental Static regeneration :)
export const getStaticProps = async () => {
  // Emulating response
  const res = await index.search();

  return {
    props: {
      popularItems: res.hits,
      lowestItems: res.hits,
      highestItems: res.hits,
    },
    // Will revalidate data every 3 hours (in seconds)
    revalidate: 10800,
  };
};
