import React, { useReducer, useState } from "react";
import styles from "../css/inputlist.module.css";
import { useContext } from "react";
import { InfoContext } from "../context/Provider";
import UserInfoC from "./UserInfo";
import { NavLink } from "react-router-dom";
import Loading from "../pages/Loading";

function InputList() {
  const result = useContext(InfoContext);
  const { UserInfo, dispatch, save, setSave, reducer } = result;
  const [loading, setLoading] = useState(true);
  //   console.log(loading);
  const compareHandler = () => {
    setSave({ ...save, UserInfo });
    reducer(UserInfo, dispatch);
  };

  return (
    <>
      <div className={!loading ? styles.hide : styles.show}>
        <div className={styles.container}>
          <UserInfoC />
        </div>
        <div style={{ textAlign: "center" }}>
          <button onClick={compareHandler} className={styles.navii}>
            Add Person
          </button>
        </div>
      </div>
      {!loading ? <Loading /> : null}
    </>
  );
}

export default InputList;
