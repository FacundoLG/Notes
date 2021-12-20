import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
const UserState = ({ children }) => {
  const initialState = {
    token: null,
    username: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setUserInfo = (userData) => {
    dispatch({
      type: "SET_USER",
      payload: userData,
    });
  };

  return (
    <UserContext.Provider value={{ state, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
