import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { ModalCrearCliente } from "./ModalCrearCliente";
import { ModalEliminarCliente } from "./ModalEliminarCliente";

export const ListaClientes = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    console.log("Cliente eliminado");
    setShowDeleteModal(false);
    // Aquí iría la lógica para hacer el DELETE a la API
  };

  const clientes = [
    {
      id: 1,
      nombre: "Juan Pérez",
      email: "juan.perez@email.com",
      rut: "12.345.678-9",
      telefono: "+56 9 1234 5678",
      direccion:
        "La casa de las madres Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      id: 2,
      nombre: "María López",
      email: "maria.lopez@email.com",
      rut: "98.765.432-1",
      telefono: "+56 9 8765 4321",
      direccion: "Otra dirección importante aquí...",
    },
  ];

  return (
    <div className="container-fluid px-4 py-3 animate__animated animate__fadeIn">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <h1 className="h2 mb-1 fw-bold text-primary">Clientes</h1>
          <p className="text-muted mb-0">Gestión de clientes registrados</p>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
          className="d-flex align-items-center gap-2"
        >
          <i className="bi bi-plus-lg"></i>
          Nuevo Cliente
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
            placeholder="Buscar clientes..."
            className="border-start-0"
          />
        </div>
      </div>
      {/* Tabla Responsive */}
      <div className="card shadow-sm border-0 overflow-hidden">
        <div className="table-responsive rounded-3">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col" className="ps-4">
                  ID
                </th>
                <th scope="col">Cliente</th>
                <th scope="col">RUT</th>
                <th scope="col">Teléfono</th>
                <th scope="col" className="text-end pe-4">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id} className="transition-all">
                  <td className="ps-4 fw-semibold">#{cliente.id}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <h6 className="mb-1 fw-semibold">{cliente.nombre}</h6>
                        <small className="text-muted d-block">
                          {cliente.email}
                        </small>
                        <div
                          className="text-truncate"
                          style={{ maxWidth: "300px" }}
                        >
                          <small className="text-muted">
                            {cliente.direccion}
                          </small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border">
                      {cliente.rut}
                    </span>
                  </td>
                  <td>
                    <a
                      href={`tel:${cliente.telefono}`}
                      className="text-decoration-none"
                    >
                      {cliente.telefono}
                    </a>
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
                      >
                        <i className="bi bi-pencil"></i>
                        <span className="d-none d-md-inline">Editar</span>
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="d-flex align-items-center gap-2"
                        onClick={() => setShowDeleteModal(true)}
                      >
                        <i className="bi bi-trash"></i>
                        <span className="d-none d-md-inline">Borrar</span>
                      </Button>
                    </Stack>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-lg">
            <li className="page-item disabled">
              <button className="page-link">Anterior</button>
            </li>
            <li className="page-item active">
              <button className="page-link">1</button>
            </li>
            <li className="page-item">
              <button className="page-link">2</button>
            </li>
            <li className="page-item">
              <button className="page-link">3</button>
            </li>
            <li className="page-item">
              <button className="page-link">Siguiente</button>
            </li>
          </ul>
        </nav>
      </div>
      {/* Modal */}
      <ModalCrearCliente
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />

      {/* Modal de eliminación */}
      <ModalEliminarCliente
        showModal={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={handleDelete}
      />
    </div>
  );
};
