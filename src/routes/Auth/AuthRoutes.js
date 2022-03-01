import { Route } from "react-router-dom";
import Index from "../../pages/Login/Index";

const AuthRoutes = () => {
  return <Route path="login" element={<Index />} />;
};
export default AuthRoutes;
