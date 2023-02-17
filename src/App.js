import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Routes from "./Routes";
import { DataContext } from "./helpers";
import "./App.css";

function App() {
  const { message, setMessage } = useContext(DataContext);
  const { success, error } = message;

  if (success) {
    toast.success(success);
    console.log("masuk app success ", success);

    setMessage({ success: null, error: null });
  }
  if (error) {
    toast.error(error);
    console.log("masuk app error ", error);

    setMessage({ success: null, error: null });
  }

  console.log("message apps ", message);
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Routes />
    </>
  );
}

export default App;
