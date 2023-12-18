import React, { useContext, useReducer } from "react";
import styles from "../css/inputlist.module.css";
import { InfoContext } from "../context/Provider";

function UserInfoC() {
  const result = useContext(InfoContext);
  const { UserInfo, dispatch, save, setSave } = result;
  // console.log(UserInfo);

  return (
    <div className={styles.containerA}>
      <div>
        <label htmlFor=""> Gender : </label>
        <select
          value={UserInfo.gender}
          onChange={(e) =>
            dispatch({
              type: ["gender", "save"],
              payload: [e.target.value, (e.target.value = "man")],
            })
          }
        >
          <option value="man">Man</option>
          <option value="woman">Woman</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="  Name"
        value={UserInfo.name}
        onChange={(e) =>
          dispatch({
            type: ["name", "save"],
            payload: [e.target.value, (e.target.value = "")],
          })
        }
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={UserInfo.height}
        onChange={(e) =>
          dispatch({
            type: ["height", "save"],
            payload: [e.target.value, (e.target.value = "")],
          })
        }
      />
      {/* {dispatch({ type: "save", payload: UserInfo })} */}
    </div>
  );
}

export default UserInfoC;
