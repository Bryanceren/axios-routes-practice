import { Route } from "react-router-dom";
import Dashboard from "../../pages/Dash/Dashboard";

const MainRoutes = () => {
  return (
    <Route path="/" element={<Dashboard />}>
      {/* aqui pueden ir mas rutas */}
    </Route>
  );
};
export default MainRoutes;
