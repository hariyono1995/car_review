import React, { useContext, useEffect } from "react";
import { DataContext } from "../Context";
import { getData } from "../utils";

function useHeaders() {
  const { userLogin } = useContext(DataContext);

  return {
    headers: {
      Authorization: "Bearer " + userLogin?.token,
    },
  };
}

export { useHeaders };
