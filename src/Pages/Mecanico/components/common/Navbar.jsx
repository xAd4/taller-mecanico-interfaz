import { NavLink, useNavigate } from "react-router-dom";
import "../../../styles/Navbar.css";
import { useAuthStore } from "../../../../hooks/useAuthStore";

export const Navbar = () => {
  const navigate = useNavigate();
  const { startLogout } = useAuthStore();
  return (
    <header className="navbar-main bg-gradient-primary">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid px-4">
          {/* Brand */}
          <NavLink
            to="/mecanico/dashboard"
            className="navbar-brand d-flex align-items-center"
          >
            <div className="brand-logo me-2">
              <i className="bi bi-gear-fill"></i>
            </div>
            {/* <span className="brand-text">
              Taller<span className="text-accent">Mecanico</span>
            </span> */}
          </NavLink>

          {/* Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto">
              {[
                {
                  to: "/mecanico/dashboard",
                  icon: "speedometer2",
                  text: "Dashboard",
                },
                {
                  to: "/mecanico/tareas",
                  icon: "person-workspace",
                  text: "Tareas",
                },
              ].map((item, index) => (
                <li className="nav-item mx-2" key={index}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `nav-link d-flex align-items-center ${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    <i className={`bi bi-${item.icon} nav-icon`}></i>
                    <span className="nav-text">{item.text}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* User Section */}
            <div className="d-flex align-items-center">
              <button className="btn btn-logout" onClick={startLogout}>
                <i className="bi bi-box-arrow-right me-2"></i>
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
