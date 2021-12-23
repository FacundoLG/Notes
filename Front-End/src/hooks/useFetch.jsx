import { useContext, useEffect, useState } from "react";
import UserContext from "../context/User/UserContext";

const useFetch = (url) => {
  const user = useContext(UserContext);
  const getData = (params, body) => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        ...params,
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${user.state.token}`,
        },
        body: body ? JSON.stringify(body) : null,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message) resolve(res.message);
          else reject(res.error);
        });
    });
  };

  return getData;
};

export default useFetch;
