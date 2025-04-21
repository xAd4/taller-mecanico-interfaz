import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Tareas } from "./Tareas";

export const AppMecanico = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/*" element={<Navigate to="mecanico/dashboard" />} />
      </Routes>
    </>
  );
};
