import { BrowserRouter, Route, Routes } from "react-router-dom";

import Singup from "../pages/auth/Singup";
import Singin from "../pages/auth/Singin";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/singin" element={<Singin />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
