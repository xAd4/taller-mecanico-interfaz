import { SidebarMecanico } from "../../Components/Layout/SidebarMecanico";
import { ListaTareasCompletadas } from "./components/ListaTareasCompletadas";

export const TareasCompletadas = () => {
  return (
    <>
      <SidebarMecanico>
        <div className="mt-5">
          <ListaTareasCompletadas />
        </div>
      </SidebarMecanico>
    </>
  );
};
