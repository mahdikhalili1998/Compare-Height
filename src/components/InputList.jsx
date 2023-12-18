import React, { useReducer, useState } from "react";
import styles from "../css/inputlist.module.css";
import { useContext } from "react";
import { InfoContext } from "../context/Provider";
import UserInfoC from "./UserInfo";
import { NavLink } from "react-router-dom";
import Result from "../components/Result";
function InputList() {
  const resultfake = useContext(InfoContext);
  const { compareHandler, result } = resultfake;

  return (
    <div className={styles.Ri}>
      <div className={styles.firstContainer}>
        <div className={styles.InFirst}>
          <UserInfoC />
          <button onClick={compareHandler} className={styles.navii}>
            Add Person
          </button>
        </div>
      </div>
      <div className={!result ? styles.result : styles.hide}>
        <Result />
      </div>
    </div>
  );
}

export default InputList;
