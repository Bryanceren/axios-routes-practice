import { HttpClient } from "../../services/axios/HttpClient";

const Dashboard = () => {
  const handlePeticionClick = async () => {
    const {data} = await HttpClient("/api/v1/sexo");
    console.log(data);
  };
  return (
    <div className="main-container">
      hola este es el dash
      <button onClick={handlePeticionClick}>Peticion</button>
    </div>
  );
};
export default Dashboard;
