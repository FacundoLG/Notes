import { BrowserRouter, Route, Routes } from "react-router-dom";
import Singup from "../pages/auth/Singup";
import Singin from "../pages/auth/Singin";
import Home from "../pages/home/Home";
import AuthComponent from "../components/Auth/AuthComponent";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/singin" element={<Singin />} />
        <Route path="/singup" element={<Singup />} />
        <Route
          path="/home"
          element={
            <AuthComponent>
              <Home />
            </AuthComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
