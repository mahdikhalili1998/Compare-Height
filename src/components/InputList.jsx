import React, { useReducer, useState } from "react";
import styles from "../css/inputlist.module.css";
import { useContext } from "react";
import { InfoContext } from "../context/Provider";
import UserInfoC from "./UserInfo";
import { NavLink } from "react-router-dom";
import Loading from "../pages/Loading";

function InputList() {
  const result = useContext(InfoContext);
  const { compareHandler } = result;
  const [loading, setLoading] = useState(true);
  //   console.log(loading);

  return (
    <>
      <div className={styles.firstContainer}>
        <div className={styles.InFirst}>
          <UserInfoC />
          <button onClick={compareHandler} className={styles.navii}>
            Add Person
          </button>
        </div>
      </div>
    </>
  );
}

export default InputList;
