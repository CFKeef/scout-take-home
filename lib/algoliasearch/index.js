import algoliasearch from "algoliasearch/lite";

export const client = algoliasearch(
  process.env.ALGOLIA_ID,
  process.env.ALGOLIA_KEY
);

export const index = client.initIndex("products");
