import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";

export const AppCliente = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
