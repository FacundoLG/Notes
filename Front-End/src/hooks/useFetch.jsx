import { useContext, useEffect, useState } from "react";
import UserContext from "../context/User/UserContext";

const useFetch = (url, params) => {
  const user = useContext(UserContext);
  const [data, setData] = useState(null);

  const getData = async (url, customParams) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${user.state.token}`,
      },
      ...params,
      ...customParams,
    })
      .then((res) => res.json())
      .then(setData);
  };
  return { data, getData };
};

export default useFetch;
