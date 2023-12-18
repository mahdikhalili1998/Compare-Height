import React, { useContext } from "react";
import { InfoContext } from "../context/Provider";
import { IoManSharp } from "react-icons/io5";
import { IoWoman } from "react-icons/io5";
function Result() {
  const fakeresult = useContext(InfoContext);
  const { Result, save, count } = fakeresult;

  return (
    <div>
      <div style={{ fontSize: "4rem" }}>
        {/* {count.gender === "man" ? <IoManSharp /> : <IoWoman />}
        {count.gender === "man" ? <IoManSharp /> : <IoWoman />} */}
      </div>
    </div>
  );
}

export default Result;
