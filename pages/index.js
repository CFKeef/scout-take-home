import Head from "next/head";
import React, { useState } from "react";

import CategoryPicker from "../components/landingpage/categorypicker";
import ContentView from "../components/landingpage/contentview";
import Hero from "../components/landingpage/hero";
import Nav from "../components/landingpage/nav";
import styles from "../styles/Home.module.scss";

export default function Home() {
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
      <ContentView selectedCategory={selectedCategory} />
      <footer></footer>
    </div>
  );
}
