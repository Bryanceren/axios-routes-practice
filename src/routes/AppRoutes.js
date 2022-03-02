import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./Auth/AuthRoutes";
import PublicRoutes from "./Public/PublicRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PublicRoutes/>}></Route>
      <Route path="main/*" element={<AuthRoutes/>}></Route>
    </Routes>
  );
};
export default AppRoutes;
