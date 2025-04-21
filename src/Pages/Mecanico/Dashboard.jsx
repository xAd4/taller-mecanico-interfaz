import { EstadisticasMecanico } from "./components/EstadisticasMecanico";
import { TareasAsignadas } from "./components/TareasAsignadas";
import "../styles/DashboardMecanico.css";
import { SidebarMecanico } from "../../Components/Layout/SidebarMecanico";

export const Dashboard = () => {
  return (
    <SidebarMecanico>
      <div className="animate__animated animate__fadeIn">
        <div className="container mt-4">
          <h1 className="text-center mb-4">Panel del Mecánico</h1>
          <EstadisticasMecanico />
        </div>

        <div className="mt-5">
          <TareasAsignadas />
        </div>
      </div>
    </SidebarMecanico>
  );
};
