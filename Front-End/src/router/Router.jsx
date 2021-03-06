import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Singup from "../pages/auth/Singup";
import Singin from "../pages/auth/Singin";
import Home from "../pages/Home";
import AuthComponent from "../components/Auth/AuthComponent";
import OptionsState from "../context/Options/OptionsState";

const Router = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/singin" element={<Singin />} />
        <Route path="/singup" element={<Singup />} />
        <Route
          path="/home"
          element={
            <AuthComponent>
              <OptionsState>
                <Home />
              </OptionsState>
            </AuthComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
