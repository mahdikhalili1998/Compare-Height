import React, { useReducer, useState } from "react";
import styles from "../css/inputlist.module.css";
import { useContext } from "react";
import { InfoContext } from "../context/Provider";
import UserInfoC from "./UserInfo";
import { NavLink } from "react-router-dom";
import Result from "../components/Result";

function InputList() {
  const { compareHandler, timeclass, empty, count, save } =
    useContext(InfoContext);

  return (
    <div className={styles.Ri}>
      <div className={styles.firstContainer}>
        <div className={styles.InFirst}>
          <UserInfoC />
          <div className={styles.error}>
            <p className={!timeclass ? styles.error : styles.hide}>
              fill the blanke
            </p>
          </div>
          <button onClick={compareHandler} className={styles.navii}>
            Add Person
          </button>
        </div>
      </div>

      <div className={styles.Result}>
        <Result />
      </div>
    </div>
  );
}

export default InputList;
