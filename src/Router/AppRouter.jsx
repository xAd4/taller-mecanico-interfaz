import { Route, Routes } from "react-router-dom";
import { AppJefe } from "../Pages/Jefe/AppJefe";
import { AppMecanico } from "../Pages/Mecanico/AppMecanico";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/jefe/*" element={<AppJefe />} />
        <Route path="/mecanico/*" element={<AppMecanico />} />
      </Routes>
    </>
  );
};
