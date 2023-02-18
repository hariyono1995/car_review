import { useState, createContext, useEffect } from "react";
import { getUserLoginLocalStorage } from "./utils";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState([]);
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
        userLogin,
        setUserLogin,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
