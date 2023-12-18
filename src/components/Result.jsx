import React, { useContext } from "react";
import { InfoContext } from "../context/Provider";
import { IoManSharp } from "react-icons/io5";
import { IoWoman } from "react-icons/io5";
function Result() {
  const fakeresult = useContext(InfoContext);
  const { Result, save } = fakeresult;
  console.log(save);
  return (
    <div>
      <IoManSharp />
      <IoWoman />
    </div>
  );
}

export default Result;
