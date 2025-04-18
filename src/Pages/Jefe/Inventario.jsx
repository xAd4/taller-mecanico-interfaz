import { Header } from "../../Components/Layout/Header";
import { SidebarJefe } from "../../Components/Layout/SidebarJefe";
import { ListaProductos } from "./components/ListaProductos";

export const Inventario = () => {
  return (
    <>
      <SidebarJefe>
        <Header />
        <div className="mt-5">
          <ListaProductos />
        </div>
      </SidebarJefe>
    </>
  );
};
