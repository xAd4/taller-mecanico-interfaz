import { Header } from "../../Components/Layout/Header";
import { SidebarJefe } from "../../Components/Layout/SidebarJefe";
import { ListaVehiculos } from "./components/ListarVehiculos";

export const Vehiculo = () => {
  return (
    <>
      <SidebarJefe>
        <div className="mt-5 animate__animated">
          <ListaVehiculos />
        </div>
      </SidebarJefe>
    </>
  );
};
