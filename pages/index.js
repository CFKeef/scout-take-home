import Head from "next/head";
import React, { useState } from "react";

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
      </Head>
      <Nav />
      <Hero selectedCategory={selectedCategory} />
      <ContentView
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <footer></footer>
    </div>
  );
}
