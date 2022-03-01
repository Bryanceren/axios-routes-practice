import { Children } from "react";
import { BrowserRouter } from "react-router-dom";
import Index from "../../pages/Login/Index";
import AppRoutes from "../../routes/AppRoutes";
import MainRoutes from "../../routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
