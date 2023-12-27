import React, { useContext, useReducer, useState } from "react";
import styles from "../css/inputlist.module.css";
import { InfoContext } from "../context/Provider";

function UserInfoC() {
  const { UserInfo, dispatch, empty, setEmpty, count } =
    useContext(InfoContext);

  return (
    <div className={styles.containerA}>
      <div className={styles.containerB}>
        <label htmlFor=""> Gender : </label>
        <select
          value={UserInfo.gender}
          onChange={(e) =>
            dispatch({
              type: "gender",
              payload: e.target.value,
            })
          }
        >
          <option value="man">Man</option>
          <option value="woman">Woman</option>
        </select>
      </div>
      <div className={styles.containerC}>
        <input
          className={styles.inputs}
          type="text"
          placeholder="  Name"
          value={UserInfo.name}
          onChange={(e) =>
            dispatch({
              type: "name",
              payload: e.target.value,
            })
          }
        />
        <input
          className={
            count > -1
              ? !empty
                ? styles.inputs_error
                : styles.inputs
              : styles.inputs
          }
          type="number"
          placeholder="Height (cm)"
          value={UserInfo.height}
          onChange={(e) => {
            e.target.value ? setEmpty(true) : setEmpty(false);
            dispatch({
              type: "height",
              payload: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
}

export default UserInfoC;
