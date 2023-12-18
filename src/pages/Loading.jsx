import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import styles from "../css/loading.module.css";
import Result from "../components/Result";
function Loading() {
  const [second, setSecond] = useState(true);
  setTimeout(() => {
    setSecond(false);
  }, 3000);
  return (
    <div>
      <div className={styles.containerA}>
        {second ? <ClimbingBoxLoader size={35} color="#b197fc" /> : <Result />}
      </div>
    </div>
  );
}

export default Loading;
