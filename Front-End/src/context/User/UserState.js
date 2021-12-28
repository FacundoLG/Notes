import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
const UserState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("NoteTKN") || null,
    username: null,
    activeNote: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setUserInfo = (userData) => {
    localStorage.setItem("NoteTKN", userData?.token);
    dispatch({
      type: "SET_USER",
      payload: userData,
    });
  };

  const setActiveUserNote = (noteData) => {
    dispatch({
      type: "SET_ACTIVE_NOTE",
      payload: noteData,
    });
  };

  return (
    <UserContext.Provider value={{ state, setUserInfo, setActiveUserNote }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
