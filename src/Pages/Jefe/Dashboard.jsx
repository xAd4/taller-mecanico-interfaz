import { Header } from "../../Components/Layout/Header";
import { SidebarJefe } from "../../Components/Layout/SidebarJefe";
import { Estadisticas } from "./components/Estadisticas";
import { OrdenesRecientes } from "./components/OrdenesRecientes";

export const Dashboard = () => {
  return (
    <>
      <SidebarJefe>
        <div className="animate__animated animate__fadeIn">
          <div className="container mt-4">
            <h1 className="text-center mb-4">Dashboard</h1>
            <Estadisticas />
          </div>

          <div className="mt-5">
            <OrdenesRecientes />
          </div>
        </div>
      </SidebarJefe>
    </>
  );
};
