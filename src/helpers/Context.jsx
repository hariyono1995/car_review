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

  const [isForm, setIsForm] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  return (
    <DataContext.Provider
      value={{
        setIsForm,
        setCurrentId,
        isForm,
        currentId,

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
