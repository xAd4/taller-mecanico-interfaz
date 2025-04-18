import { Header } from "../../Components/Layout/Header";
import { SidebarJefe } from "../../Components/Layout/SidebarJefe";
import { ListaUsuarios } from "./components/ListaUsuarios";

export const Usuarios = () => {
  return (
    <SidebarJefe>
      <Header />
      <div className="mt-5">
        <ListaUsuarios />
      </div>
    </SidebarJefe>
  );
};
