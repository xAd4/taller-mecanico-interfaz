import { useEffect, useState } from "react";
import { Button, Form, Stack, Badge } from "react-bootstrap";
import { ModalCrearUsuario } from "./ModalCrearUsuario";
import { ModalEliminarUsuario } from "./ModalEliminarUsuario";
import { useUsuarioStore } from "../hooks/useUsuarioStore";
import { SpinnerComponent } from "../../../components/SpinnerComponent";
import { ModalActualizarUsuario } from "./ModalActualizarUsuario";
import { useSearch } from "../../../hooks/useSearch";

export const ListaUsuarios = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleIncrementPaginate = (paginate) => {
    setCurrentPage((prev) => prev + paginate);
  };

  const { usuarios, isLoadingUsuarios, startLoadingUsuario } =
    useUsuarioStore();

  const { filteredData, searchTerm, handleSearchChange } = useSearch(usuarios, [
    "name",
    "rol",
    "email",
  ]);

  useEffect(() => {
    startLoadingUsuario(currentPage);
  }, [currentPage]);

  const getRolColor = (rol) => {
    switch (rol.toLowerCase()) {
      case "jefe":
        return "primary";
      case "mecánico":
        return "warning";
      case "admin":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <div className="container-fluid px-4 py-3 animate__animated animate__fadeIn">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <h1 className="h2 mb-1 fw-bold text-primary">Gestión de Usuarios</h1>
          <p className="text-muted mb-0">Administración de acceso y permisos</p>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
          className="d-flex align-items-center gap-2"
        >
          <i className="bi bi-person-add"></i>
          Registrar nuevo usuario
        </Button>
      </div>

      {/* Buscador */}
      <div className="mb-4">
        <div className="input-group input-group-lg shadow-sm">
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search text-muted"></i>
          </span>
          <Form.Control
            type="search"
            placeholder="Buscar usuarios..."
            className="border-start-0"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Tabla Responsive */}
      <div className="card shadow-sm border-0 overflow-hidden">
        <div className="table-responsive rounded-3">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col">ID</th>
                <th scope="col" className="ps-4">
                  Usuario
                </th>
                <th scope="col">Contacto</th>
                <th scope="col">Rol</th>
                <th scope="col" className="text-end pe-4">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoadingUsuarios ? (
                <SpinnerComponent />
              ) : (
                filteredData.map((usuario, index) => (
                  <tr key={index} className="transition-all">
                    <td>{usuario.id}</td>
                    <td className="ps-4">
                      <div className="d-flex align-items-center gap-3">
                        <div>
                          <h6 className="mb-0 fw-semibold">{usuario.name}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column">
                        <a
                          href={`mailto:${usuario.email}`}
                          className="text-decoration-none"
                        >
                          {usuario.email}
                        </a>
                      </div>
                    </td>
                    <td>
                      <Badge
                        bg={getRolColor(usuario.rol)}
                        className="text-capitalize"
                      >
                        <i
                          className={`bi ${
                            usuario.rol === "Jefe"
                              ? "bi-shield-shaded"
                              : "bi-tools"
                          } me-2`}
                        ></i>
                        {usuario.rol}
                      </Badge>
                    </td>

                    <td className="pe-4">
                      <Stack
                        direction="horizontal"
                        gap={2}
                        className="justify-content-end"
                      >
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="d-flex align-items-center gap-2"
                          onClick={() => {
                            setSelectedUsuario(usuario);
                            setShowUpdateModal(true);
                          }}
                        >
                          <i className="bi bi-pencil"></i>
                          <span className="d-none d-md-inline">Editar</span>
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="d-flex align-items-center gap-2"
                          onClick={() => {
                            setShowDeleteModal(true);
                            setSelectedUsuario(usuario);
                          }}
                        >
                          <i className="bi bi-trash"></i>
                          <span className="d-none d-md-inline">Borrar</span>
                        </Button>
                      </Stack>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Stack direction="horizontal" gap={3}>
          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => handleIncrementPaginate(1)}
          >
            Cargar siguientes usuarios <i className="bi bi-arrow-right"></i>
          </Button>
        </Stack>
      </div>

      {/* Modal */}
      <ModalCrearUsuario
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />
      {/* Modal de eliminación */}
      <ModalEliminarUsuario
        showModal={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        usuarioData={selectedUsuario}
      />
      {/* Modal de actualización */}
      <ModalActualizarUsuario
        showModal={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        usuarioData={selectedUsuario}
      />
    </div>
  );
};

// Estilos adicionales en CSS
const styles = `
  .avatar-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border: 2px solid #dee2e6;
  }
  
  .activity-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  
  .transition-all {
    transition: all 0.2s ease;
  }
`;

// Agregar estilos al documento
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
