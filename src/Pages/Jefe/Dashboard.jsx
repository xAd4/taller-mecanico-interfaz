import { Header } from "../../Components/Layout/Header";
import { SidebarJefe } from "../../Components/Layout/SidebarJefe";
import { Estadisticas } from "./components/Estadisticas";
import { OrdenesRecientes } from "./components/OrdenesRecientes";

export const Dashboard = () => {
  return (
    <>
      <SidebarJefe>
        <Header />
        <div className="container mt-4">
          <h1 className="text-center mb-4">Dashboard</h1>
          <h3 className="text-center text-muted mb-5">
            Bienvenido al Dashboard del Jefe de Taller
          </h3>
          <Estadisticas />
        </div>

        <div className="mt-5">
          <OrdenesRecientes />
        </div>
      </SidebarJefe>
    </>
  );
};
