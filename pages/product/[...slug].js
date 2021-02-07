import React, { useEffect } from "react";
import Nav from "../../components/general/nav";
import Head from "next/head";
import { useRouter } from "next/router";
import ItemRow from "../../components/general/itemrow";
import styles from "../../styles/ProductPage.module.scss";
import { index } from "../../lib/algoliasearch";

const ProductPage = ({ data, recommended }) => {
  const router = useRouter();

  // Refresh w context
  useEffect(() => {
    router.replace(router.asPath);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>StockX</title>
        <link rel="icon" href="/favicon.ico" />
        <script>0</script>
      </Head>
      <Nav desktopSearchBar={true} />
      <div className={styles.contentContainer}>
        <div className={styles.posContainer}>
          <h1>{data.name}</h1>
          <h2>{`Conditon: New | Ticker: ${data.ticker_symbol} | 100% Authentic`}</h2>
          <div className={styles.imgContainer}>
            <img draggable={false} src={data.thumbnail_url} />
          </div>
          <div className={styles.detailsContainer}>
            <div>
              <p>Total sold in USD:</p>
              <p>${data.total_dollars}</p>
            </div>
            <div>
              <p>Units Sold:</p>
              <p>{data.deadstock_sold}</p>
            </div>
            <div>
              <p>Highest Bid:</p>
              <p>{data.highest_bid}</p>
            </div>
            <div>
              <p>Highest Ask:</p>
              <p>{data.lowest_ask}</p>
            </div>
          </div>
          <div className={styles.rowContainer}>
            <ItemRow
              title={"Most Popular"}
              sectionCategory={"popular"}
              toolTip={false}
              Items={recommended}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

export const getServerSideProps = async (context) => {
  const data = await index.search(context.query.slug[1]);
  const recommended = await index.search("", { hitsPerPage: 8 });
  const res = recommended.hits.filter((element) => {
    return element.product_category === "sneakers";
  });

  return {
    props: {
      data: data.hits[0],
      recommended: res,
    },
  };
};
