import React, { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../css/result.module.css";
import Result from "../components/Result";
export const InfoContext = createContext();
const initialstate = { gender: "man", name: "", height: "", id: 0 };
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
  const [count, setCount] = useState(-1);
  const [save, setSave] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [timeclass, setTimeclass] = useState(true);
  const [next, setNext] = useState(true);

  const compareHandler = () => {
    setCount((count) => count + 1);
    {
      !empty ? setSave([]) : save.push({ ...UserInfo, id: uuidv4() });
    }

    dispatch({ type: "save" });
    if (!empty) {
      setTimeout(() => {
        setTimeclass(false);
        setTimeout(() => {
          setTimeclass(true);
        }, 2000);
      }, 0);
    }
  };

  return (
    <div>
      <InfoContext.Provider
        value={{
          UserInfo,
          dispatch,
          compareHandler,
          reducer,
          save,
          count,
          timeclass,
          setTimeclass,
          empty,
          setEmpty,
          next,
          setNext,
        }}
      >
        {children}
      </InfoContext.Provider>
    </div>
  );
}

export default Provider;
