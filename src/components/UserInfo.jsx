import React, { useContext, useReducer } from "react";
import styles from "../css/inputlist.module.css";
import { InfoContext } from "../context/Provider";

function UserInfoC() {
  const result = useContext(InfoContext);
  const { UserInfo, dispatch } = result;
  // console.log(UserInfo);

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
          type="number"
          placeholder="Height (cm)"
          value={UserInfo.height}
          onChange={(e) =>
            dispatch({
              type: "height",
              payload: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}

export default UserInfoC;
