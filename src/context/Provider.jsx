import React, { useContext, useReducer, useState } from "react";
import { createContext } from "react";
export const InfoContext = createContext();

const initialstate = { gender: "man", name: "", height: "" };
const reducer = (state, action) => {
  switch (action.type[0]) {
    case "gender":
      return { ...state, gender: action.payload[0] };
    case "name":
      return { ...state, name: action.payload[0] };
    case "height":
      return { ...state, height: action.payload[0] };
    case "save":
      return { gender: "man", name: "", height: "" };
    default:
      break;
  }
  switch (action.type[1]) {
    case "save":
      return {
        grnder: action.payload[1],
        name: action.payload[1],
        height: action.payload[1],
      };
    default:
      break;
  }
};

function Provider({ children }) {
  const [UserInfo, dispatch] = useReducer(reducer, initialstate);
  const [count, setCount] = useState(0);
  const [save, setSave] = useState({});
  console.log(save);
  const compareHandler = () => {
    setCount((count) => count + 1);
    setSave((save) => ({ ...save, [count]: UserInfo }));
  };

  return (
    <div>
      <InfoContext.Provider
        value={{ UserInfo, dispatch, compareHandler, reducer }}
      >
        {children}
      </InfoContext.Provider>
    </div>
  );
}

export default Provider;
