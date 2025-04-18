import { Header } from "../../Components/Layout/Header";
import { SidebarJefe } from "../../Components/Layout/SidebarJefe";
import { ListaOrdenes } from "./components/ListaOrdenes";

export const Orden = () => {
  return (
    <>
      <SidebarJefe>
        <Header />
        <div className="mt-5"></div>
        <ListaOrdenes />
      </SidebarJefe>
    </>
  );
};
