import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../public/images/stockx.svg";

import styles from "../../styles/Nav.module.scss";

const Nav = () => {
  const [menuShowing, setMenuShowing] = useState(false);

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

  // Will generate the burger menu
  const generateBurger = () => {
    return (
      <button
        className={styles.burger}
        onClick={() => setMenuShowing(!menuShowing)}
      >
        {menuShowing ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    );
  };
  return (
    <section className={styles.navContainer}>
      <div className={styles.posContainer}>
        <div className={styles.leftContainer}>
          <img draggable={false} src={Logo} />
        </div>
        <nav>
          {generateNavList()}
          {generateBurger()}
        </nav>
      </div>
      {/*Will use this for drop down */}
      {menuShowing ? (
        <div className={styles.dropDown}> {generateNavList()}</div>
      ) : null}
    </section>
  );
};

export default Nav;
