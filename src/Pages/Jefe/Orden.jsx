import { Header } from "../../Components/Layout/Header";
import { SidebarJefe } from "../../Components/Layout/SidebarJefe";
import { ListaOrdenes } from "./components/ListaOrdenes";

export const Orden = () => {
  return (
    <>
      <SidebarJefe>
        <div className="mt-5 animate__animated">
          <ListaOrdenes />
        </div>
      </SidebarJefe>
    </>
  );
};
