import { SidebarMecanico } from "../../Components/Layout/SidebarMecanico";
import { ListaTareasAsignadas } from "./components/ListaTareasAsignadas";

export const TareasAsignadas = () => {
  return (
    <>
      <SidebarMecanico>
        <div className="mt-5">
          <ListaTareasAsignadas />
        </div>
      </SidebarMecanico>
    </>
  );
};
