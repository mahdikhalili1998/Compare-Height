import React from "react";
import styles from "../css/about.module.css";
import mahdiImg from "../image/bg.png";
function About_us() {
  return (
    <div className={styles.gg}>
      <div className={styles.container}>
        <p>This site is made for practice only</p>
        <p>
          You can see more site in my
          <a href="https://github.com/mahdikhalili1998"> github</a>
        </p>
        <p>
          also see my{" "}
          <a href="https://www.instagram.com/mahdi_lhj/">Instagram</a>
        </p>
      </div>
      <img src={mahdiImg} alt="" />
    </div>
  );
}

export default About_us;
