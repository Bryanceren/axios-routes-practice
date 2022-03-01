import { useRef } from "react";
import { HttpClient } from "../../services/axios/HttpClient";

const Index = () => {
  const correo = useRef("");
  const password = useRef("");
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
    }
  };
  return (
    <div className="main-container">
      <form className="form" onSubmit={handleSend}>
        <div>
          <input placeholder="correo" ref={correo}></input>
        </div>
        <div>
          <input placeholder="contraseña" ref={password}></input>
        </div>
        <div>
          <button>enviar</button>
        </div>
      </form>
    </div>
  );
};
export default Index;
