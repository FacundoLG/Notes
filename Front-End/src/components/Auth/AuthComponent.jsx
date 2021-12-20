import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../context/User/UserContext";
const AuthComponent = ({ children }) => {
  const user = useContext(UserContext);
  return <>{user?.state?.token ? children : <Navigate to="/singin" />}</>;
};

export default AuthComponent;
