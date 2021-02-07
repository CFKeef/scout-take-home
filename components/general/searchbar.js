import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import debounce from "lodash/debounce";
import { index } from "../../lib/algoliasearch";
import styles from "../../styles/Searchbar.module.scss";

const SearchBar = () => {
  const [target, setTarget] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(null);
  const [results, setResults] = useState(null);

  // Generates the list of hits
  const getSearchResultsList = () => {
    return (
      <ul>
        {results.map((result) => {
          return (
            <li key={"result" + result.style_id}>
              <Link
                href={"/product/[...slug]"}
                as={`/product/${result.url}/${result.style_id}/${result.release_date}`}
                passHref
              >
                <a draggable={false}>
                  <div className={styles.productImageContainer}>
                    <img draggable="false" src={result.thumbnail_url} />
                  </div>
                  <div className={styles.productDetailsContainer}>
                    <h2>{result.brand}</h2>
                    <h1>{result.name}</h1>
                    <h3>{result.colorway}</h3>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  // Generates the content based on the results of the query
  const handleSearchResultResponse = () => {
    return (
      <div className={styles.searchResults}>
        {results.length === 0 ? (
          <div className={styles.emptySearch}>
            <p>😢 Couldn't find anything</p>
            <p>Double check what you entered</p>
          </div>
        ) : (
          getSearchResultsList()
        )}
      </div>
    );
  };

  // Eats up multiple requests in the given span of time(500)
  const handleDelayedSearch = debounce((search) => {
    setDebouncedSearch(search);
  }, 500);

  // When debouncedSearch updates we'll query with algolia
  useEffect(() => {
    if (debouncedSearch) {
      index.search(debouncedSearch).then((res) => {
        setResults(res.hits);
      });
    } else if (target === "") {
      setResults(null);
      setDebouncedSearch("");
    }
  }, [debouncedSearch]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInput}>
        <input
          type="text"
          value={target}
          placeholder="Search for brand, color, etc"
          autoFocus={false}
          onChange={(e) => {
            handleDelayedSearch(e.target.value);
            setTarget(e.target.value);
          }}
        />
        <AiOutlineSearch />
      </div>
      {results ? handleSearchResultResponse() : null}
    </div>
  );
};

export default SearchBar;
