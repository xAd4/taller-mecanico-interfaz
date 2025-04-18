import { Header } from "../../Components/Layout/Header";
import { SidebarJefe } from "../../Components/Layout/SidebarJefe";
import { ListaUsuarios } from "./components/ListaUsuarios";

export const Usuarios = () => {
  return (
    <SidebarJefe>
      <div className="mt-5 animate__animated">
        <ListaUsuarios />
      </div>
    </SidebarJefe>
  );
};
