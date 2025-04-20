import { useState } from "react";
import { Button, Form, Stack, Badge } from "react-bootstrap";
import { ModalCrearOrden } from "./ModalCrearOrden";
import { ModalEliminarOrden } from "./ModalEliminarOrden";
import { ModalActualizarOrden } from "./ModalActualizarOrden";

export const ListaOrdenes = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedOrden, setSelectedOrden] = useState(null);

  const handleUpdate = (updatedData) => {
    console.log("Datos actualizados:", updatedData);
    // Aquí iría la lógica para hacer el PUT o PATCH a la API
  };

  const handleDelete = () => {
    console.log("Orden eliminada");
    setShowDeleteModal(false);
    // Aquí iría la lógica para hacer el DELETE a la API
  };

  const ordenes = [
    {
      id: 1,
      clienteId: 12345,
      vehiculoId: 67890,
      datosExtras: "Revisión general",
      fechaRecepcion: "2025-04-01",
      fechaPrometida: "2025-04-10",
      cambios: "Cambio de aceite y filtros",
      estado: "En proceso",
    },
    {
      id: 2,
      clienteId: 54321,
      vehiculoId: 49876,
      datosExtras: "Reparación de frenos",
      fechaRecepcion: "2025-04-05",
      fechaPrometida: "2025-04-15",
      cambios: "Revisión de frenos y suspensión",
      estado: "Pendiente",
    },
  ];

  return (
    <div className="container-fluid px-4 py-3 animate__animated animate__fadeIn">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <h1 className="h2 mb-1 fw-bold text-primary">Órdenes de Trabajo</h1>
          <p className="text-muted mb-0">Gestión de órdenes activas</p>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
          className="d-flex align-items-center gap-2"
        >
          <i className="bi bi-file-earmark-plus"></i>
          Nueva Orden
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
            placeholder="Buscar órdenes..."
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
                  Cliente
                </th>
                <th scope="col">Vehículo</th>
                <th scope="col">Detalles</th>
                <th scope="col">Fechas</th>
                <th scope="col">Estado</th>
                <th scope="col" className="text-end pe-4">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {ordenes.map((orden) => (
                <tr key={orden.id} className="transition-all">
                  <td className="ps-4">
                    <div className="d-flex align-items-center gap-3">
                      <i className="bi bi-person-circle fs-4 text-muted"></i>
                      <div>
                        <h6 className="mb-0 fw-semibold">#{orden.clienteId}</h6>
                        <small className="text-muted">Cliente</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <i className="bi bi-car-front fs-4 text-muted"></i>
                      <div>
                        <h6 className="mb-0 fw-semibold">
                          #{orden.vehiculoId}
                        </h6>
                        <small className="text-muted">Vehículo</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="max-width-300">
                      <h6 className="mb-1 fw-semibold">{orden.datosExtras}</h6>
                      <small className="text-muted text-truncate d-block">
                        {orden.cambios}
                      </small>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-column gap-2">
                      <div>
                        <small className="text-muted d-block">Recepción:</small>
                        <span className="text-nowrap">
                          <i className="bi bi-calendar-check me-2"></i>
                          {orden.fechaRecepcion}
                        </span>
                      </div>
                      <div>
                        <small className="text-muted d-block">Prometida:</small>
                        <span className="text-nowrap">
                          <i className="bi bi-calendar-event me-2"></i>
                          {orden.fechaPrometida}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Badge
                      bg={
                        orden.estado === "En proceso" ? "warning" : "secondary"
                      }
                      className="text-capitalize"
                    >
                      {orden.estado}
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
                          setSelectedOrden(orden);
                          setShowUpdateModal(true);
                        }}
                      >
                        <i className="bi bi-pencil"></i>
                        <span className="d-none d-lg-inline">Editar</span>
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="d-flex align-items-center gap-2"
                        onClick={() => setShowDeleteModal(true)}
                      >
                        <i className="bi bi-trash"></i>
                        <span className="d-none d-lg-inline">Borrar</span>
                      </Button>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="d-flex align-items-center gap-2"
                      >
                        <i className="bi bi-eye"></i>
                        <span className="d-none d-lg-inline">Detalles</span>
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
      <ModalCrearOrden
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />
      {/* Modal de eliminación */}
      <ModalEliminarOrden
        showModal={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={handleDelete}
      />
      {/* Modal de actualización */}
      <ModalActualizarOrden
        showModal={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        handleUpdate={handleUpdate}
        ordenData={selectedOrden}
      />
    </div>
  );
};
