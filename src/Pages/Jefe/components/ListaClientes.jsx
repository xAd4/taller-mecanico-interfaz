import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { ModalCrearCliente } from "./ModalCrearCliente";
import { ModalEliminarCliente } from "./ModalEliminarCliente";
import { ModalActualizarCliente } from "./ModalActualizarCliente";
import { clientes } from "../helpers/clientes";

export const ListaClientes = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedCliente, setSelectedCliente] = useState(null);

  const handleUpdate = (updatedData) => {
    console.log("Datos actualizados:", updatedData);
    // Aquí iría la lógica para hacer el PUT o PATCH a la API
  };

  const handleDelete = () => {
    console.log("Cliente eliminado");
    setShowDeleteModal(false);
    // Aquí iría la lógica para hacer el DELETE a la API
  };

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
                            {cliente.domicilio}
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
                        onClick={() => {
                          setSelectedCliente(cliente);
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

      {/* Modal de actualización */}
      <ModalActualizarCliente
        showModal={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        handleUpdate={handleUpdate}
        clienteData={selectedCliente}
      />
    </div>
  );
};
