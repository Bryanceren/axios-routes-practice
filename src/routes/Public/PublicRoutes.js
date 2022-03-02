import { Route, Routes } from "react-router-dom";
import Index from "../../pages/Login/Index";
const PublicRoutes = () => {
  return (
    <Routes>
      <Route index element={<Index />}></Route>
    </Routes>
  );
};
export default PublicRoutes;
