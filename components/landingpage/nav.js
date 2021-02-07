import React, { useState } from "react";
import { index } from "../../lib/algoliasearch";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import Logo from "../../public/images/stockx.svg";

import styles from "../../styles/Nav.module.scss";
import SearchBar from "./searchbar";

const Nav = () => {
  const [isMenuShowing, setMenuShowing] = useState(false);
  const [isUserSearching, setUserSearching] = useState(false);

  // Will generate our list of nav items
  const generateNavList = () => {
    const list = [
      "Browse",
      "News",
      "App",
      "About",
      "Help",
      "Login",
      "Sign Up",
      "Sell",
    ];

    return (
      <ul>
        {list.map((element) => {
          return (
            <li key={"nav" + element}>
              <p>{element}</p>
            </li>
          );
        })}
      </ul>
    );
  };

  // Will generate the burger menu and return the correct icon depending on if the menu is dropped or not
  const generateBurger = () => {
    return (
      <button
        className={styles.burger}
        onClick={() => setMenuShowing(!isMenuShowing)}
      >
        {isMenuShowing ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    );
  };

  // Will generate the stockx logo or the searchbar depending on isUserSearching
  const generateCenterContent = () => {
    if (isUserSearching) {
      return <SearchBar />;
    } else return <img draggable={false} src={Logo} />;
  };

  return (
    <section className={styles.navContainer}>
      <div className={styles.posContainer}>
        <div className={styles.searchContainer}>
          <button onClick={() => setUserSearching(!isUserSearching)}>
            {isUserSearching ? <AiOutlineCloseCircle /> : <AiOutlineSearch />}
          </button>
        </div>
        <div className={styles.logoContainer}>{generateCenterContent()}</div>
        <nav>
          {generateNavList()}
          {generateBurger()}
        </nav>
      </div>
      {/*Will use this for drop down */}
      {isMenuShowing ? (
        <div className={styles.dropDown}> {generateNavList()}</div>
      ) : null}
    </section>
  );
};

export default Nav;
