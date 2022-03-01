import { Children, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Login/Index";
import AuthRoutes from "./Auth/AuthRoutes";
import MainRoutes from "./Pages/MainRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainRoutes/>}></Route>
      <Route path="login" element={<AuthRoutes/>}></Route>
    </Routes>
  );
};
export default AppRoutes;
