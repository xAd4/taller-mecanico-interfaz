import { Header } from "../../Components/Layout/Header";
import { SidebarJefe } from "../../Components/Layout/SidebarJefe";
import { ListaClientes } from "./components/ListaClientes";

export const Cliente = () => {
  return (
    <>
      <SidebarJefe>
        <div className="mt-5 animate__animated">
          <ListaClientes />
        </div>
      </SidebarJefe>
    </>
  );
};
