import React from "react";
import styles from "../css/layout.module.css";
import { NavLink } from "react-router-dom";
function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <p>Compare your height !</p>
        <ul>
          <li>
            <NavLink className={styles.navlink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navlink} to="/about-us">
              About-us
            </NavLink>
          </li>
        </ul>
      </header>
      {children}
      <footer className={styles.footer}>
        This site supported by react ! ❤
      </footer>
    </div>
  );
}

export default Layout;
