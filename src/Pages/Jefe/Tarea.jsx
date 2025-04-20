import { SidebarJefe } from "../../Components/Layout/SidebarJefe";
import { ListaTareas } from "./components/ListaTareas";

export const Tarea = () => {
  return (
    <>
      <SidebarJefe>
        <div className="mt-5">
          <ListaTareas />
        </div>
      </SidebarJefe>
    </>
  );
};
