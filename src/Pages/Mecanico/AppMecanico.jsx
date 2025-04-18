import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { TareasAsignadas } from "./TareasAsignadas";

export const AppMecanico = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboardmecanico" element={<Dashboard />} />
        <Route path="/tareas" element={<TareasAsignadas />} />
        <Route path="/*" element={<Navigate to="/dashboardmecanico" />} />
      </Routes>
    </>
  );
};
