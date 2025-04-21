import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { TareasAsignadas } from "./TareasAsignadas";
import { TareasAsignadas2 } from "./TareasAsignadas2";
import { TareasCompletadas } from "./TareasCompletadas";

export const AppMecanico = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tareas" element={<TareasAsignadas />} />
        <Route path="/tareas2" element={<TareasAsignadas2 />} />
        <Route path="/tareas/completadas" element={<TareasCompletadas />} />
        <Route path="/*" element={<Navigate to="mecanico/dashboard" />} />
      </Routes>
    </>
  );
};
