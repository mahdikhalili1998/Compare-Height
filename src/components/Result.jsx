import React, { useContext } from "react";
import { InfoContext } from "../context/Provider";
import { IoManSharp } from "react-icons/io5";
import { IoWoman } from "react-icons/io5";
import styles from "../css/result.module.css";
import { Link } from "react-router-dom";
function Result() {
  const { save, next, setNext } = useContext(InfoContext);
  console.log(save);
  return (
    <>
      <ul className={styles.ul}>
        {save.map((item) => (
          <li className={styles.li} key={item.id}>
            <p className={styles.icon}>
              {item.gender === "man" ? (
                <IoManSharp style={{ fontSize: `${item.height}px` }} />
              ) : (
                <IoWoman style={{ fontSize: `${item.height}px` }} />
              )}
            </p>
            <div className={styles.nh}>
              <p style={{ height: "1.5rem" }}>{item.name}</p>
              <p style={{ height: "1.5rem" }}>{`${item.height} cm`}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Result;
