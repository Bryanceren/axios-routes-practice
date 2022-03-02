import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dash/Dashboard";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />}></Route>
    </Routes>
  );
};
export default AuthRoutes;
