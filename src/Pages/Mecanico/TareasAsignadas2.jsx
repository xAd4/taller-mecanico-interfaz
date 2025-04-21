import { SidebarMecanico } from "../../Components/Layout/SidebarMecanico";
import { ListaTareasAsignadas2 } from "./components/ListaTareasAsignadas2";

export const TareasAsignadas2 = () => {
  return (
    <>
      <SidebarMecanico>
        <div className="mt-5">
          <ListaTareasAsignadas2 />
        </div>
      </SidebarMecanico>
    </>
  );
};
