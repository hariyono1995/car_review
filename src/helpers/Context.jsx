import { useState, createContext, useEffect } from "react";
import { getUserLoginLocalStorage } from "./utils";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [oneData, setOneData] = useState({});
  const [userLogin, setUserLogin] = useState(
    getUserLoginLocalStorage()
  );
  const [message, setMessage] = useState({
    success: null,
    error: null,
  });

  return (
    <DataContext.Provider
      value={{
        message,
        setMessage,
        data,
        setData,
        oneData,
        setOneData,
        userLogin,
        setUserLogin,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
