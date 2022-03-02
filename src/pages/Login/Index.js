import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HttpClient } from "../../services/axios/HttpClient";

const Index = () => {
  const correo = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const handleSend = async (e) => {
    e.preventDefault();
    const response = await HttpClient(
      "/api/v1/login",
      {
        email: correo.current.value,
        password: password.current.value,
      },
      "post"
    );
    if (response?.status === 200) {
      sessionStorage.setItem("token", response.data.token);
      navigate('/main')
    }
  };
  return (
    <div className="main-container">
      <div className="card w-8 w-sm-7 w-md-5">
        <h2>Login</h2>
        <form className="form" onSubmit={handleSend}>
          <label className="input-filled">
            <input ref={correo} required></input>
            <span className="placeholder">Correo electrónico</span>
          </label>
          <label className="input-filled">
            <input required ref={password}></input>
            <span className="placeholder">Contraseña</span>
          </label>
          <div>
            <button className="button-main">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Index;
