import React, { useContext, useState } from "react";
import { InfoContext } from "../context/Provider";
import { IoManSharp } from "react-icons/io5";
import { IoWoman } from "react-icons/io5";
import styles from "../css/result.module.css";
import { Link } from "react-router-dom";
function Result() {
  const { save, next, setNext } = useContext(InfoContext);
  const [reload, setReload] = useState(true);
  if (save.length > 2) {
    setTimeout(() => {
      setReload(false);
    }, 2000);
  }

  console.log(save);
  return (
    <>
      {save.length > 2 ? (
        <div>
          <p>just two people can add</p>
          {!reload ? window.location.reload() : null}
        </div>
      ) : (
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
      )}
    </>
  );
}

export default Result;
