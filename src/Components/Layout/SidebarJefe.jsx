import { NavLink } from "react-router-dom";

export const SidebarJefe = ({ children }) => {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3"
        style={{
          width: "180px",
          position: "fixed",
          top: 0,
          bottom: 0,
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
      <div className="flex-grow-1 p-4" style={{ marginLeft: "180px" }}>
        {children}
      </div>
    </div>
  );
};
