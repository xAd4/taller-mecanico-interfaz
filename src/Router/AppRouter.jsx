import { Route, Routes } from "react-router-dom";
import { AppJefe } from "../pages/jefe/AppJefe";
import { AppMecanico } from "../pages/mecanico/AppMecanico";
import { AppCliente } from "../pages/cliente/AppCliente";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/jefe/*" element={<AppJefe />} />
        <Route path="/mecanico/*" element={<AppMecanico />} />
        <Route path="/*" element={<AppCliente />} />
      </Routes>
    </>
  );
};
