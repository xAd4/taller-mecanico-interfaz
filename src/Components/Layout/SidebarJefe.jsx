import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Header } from "./Header";

export const SidebarJefe = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3"
        style={{
          width: "150px",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: isSidebarOpen ? 0 : -165,
          transition: "left 0.3s ease-in-out",
          zIndex: 1000,
        }}
      >
        <h4 className="mb-4">Menú</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <NavLink to="/jefe/dashboard" className="nav-link text-white">
              <i className="bi bi-house-door me-2"></i>Dashboard
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/jefe/cliente" className="nav-link text-white">
              <i className="bi bi-gear me-2"></i>Clientes
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/jefe/vehiculo" className="nav-link text-white">
              <i className="bi bi-people me-2"></i>Vehiculos
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/jefe/orden" className="nav-link text-white">
              <i className="bi bi-people me-2"></i>Ordenes
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/jefe/inventario" className="nav-link text-white">
              <i className="bi bi-people me-2"></i>Inventario
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/jefe/usuarios" className="nav-link text-white">
              <i className="bi bi-people me-2"></i>Usuarios
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 p-4"
        style={{ marginLeft: isSidebarOpen ? "175px" : "0" }}
      >
        {/* Botón Hamburguesa */}
        <button
          onClick={toggleSidebar}
          className="btn btn-dark mb-3"
          style={{
            position: "fixed",
            left: isSidebarOpen ? "120px" : "10px",
            zIndex: 1001,
            transition: "left 0.3s ease-in-out",
          }}
        >
          X
        </button>

        <Header />
        {children}
      </div>
    </div>
  );
};
