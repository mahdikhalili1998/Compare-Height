import React, { useContext, useReducer, useState } from "react";
import { createContext } from "react";

export const InfoContext = createContext();
const initialstate = { gender: "man", name: "", height: "" };
const reducer = (state, action) => {
  switch (action.type) {
    case "gender":
      return { ...state, gender: action.payload };
    case "name":
      return { ...state, name: action.payload };
    case "height":
      return { ...state, height: action.payload };
    case "save":
      return { gender: "man", name: "", height: "" };
    default:
      break;
  }
  switch (action.type) {
    case "save":
      return {
        grnder: "man",
        name: "",
        height: "",
      };
    default:
      break;
  }
};

function Provider({ children }) {
  const [UserInfo, dispatch] = useReducer(reducer, initialstate);
  const [count, setCount] = useState(0);
  const [save, setSave] = useState({});
  const [result, setResult] = useState(true);

  const compareHandler = () => {
    setCount((count) => count + 1);
    setSave((save) => ({ ...save, [count]: UserInfo }));
    dispatch({ type: "save" });
    setResult(false);
  };

  return (
    <div>
      <InfoContext.Provider
        value={{ UserInfo, dispatch, compareHandler, reducer, result, save }}
      >
        {children}
      </InfoContext.Provider>
    </div>
  );
}

export default Provider;
