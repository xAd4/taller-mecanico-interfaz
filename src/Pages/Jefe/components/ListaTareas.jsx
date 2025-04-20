import { useState } from "react";
import { Button, Form, Stack, Badge } from "react-bootstrap";
//import { ModalCrearTarea } from "./ModalCrearTarea";

export const ListaTareas = () => {
  //const [showModal, setShowModal] = useState(false);

  const tareas = [
    {
      id: 1,
      orden_id: 456,
      mecanico_id: 23,
      estado_de_trabajo: "pendiente",
      detalles_de_tarea: "Revisión completa del sistema de frenos",
      notificacion_al_cliente: "Su vehículo está en diagnóstico",
    },
    {
      id: 2,
      orden_id: 789,
      mecanico_id: 15,
      estado_de_trabajo: "en_progreso",
      detalles_de_tarea: "Cambio de aceite y filtros",
      notificacion_al_cliente: "Mantenimiento preventivo en proceso",
    },
  ];

  const getEstadoColor = (estado) => {
    switch (estado) {
      case "pendiente":
        return "warning";
      case "en_progreso":
        return "primary";
      case "completado":
        return "success";
      default:
        return "secondary";
    }
  };

  return (
    <div className="container-fluid px-4 py-3">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <h1 className="h2 mb-1 fw-bold text-primary">Gestión de Tareas</h1>
          <p className="text-muted mb-0">Seguimiento de trabajos en taller</p>
        </div>
        <Button
          variant="primary"
          //onClick={() => setShowModal(true)}
          className="d-flex align-items-center gap-2"
        >
          <i className="bi bi-clipboard-plus"></i>
          Nueva Tarea
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
            placeholder="Buscar tareas..."
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
                  Orden ID
                </th>
                <th scope="col">Mecánico ID</th>
                <th scope="col">Estado</th>
                <th scope="col">Detalles de Tarea</th>
                <th scope="col">Notificación al Cliente</th>
                <th scope="col" className="text-end pe-4">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {tareas.map((tarea) => (
                <tr key={tarea.id} className="transition-all">
                  <td className="ps-4 fw-semibold">#{tarea.orden_id}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-person-workspace"></i>
                      <span className="font-monospace">
                        {tarea.mecanico_id}
                      </span>
                    </div>
                  </td>
                  <td>
                    <Badge
                      bg={getEstadoColor(tarea.estado_de_trabajo)}
                      className="text-capitalize"
                    >
                      {tarea.estado_de_trabajo.replace("_", " ")}
                    </Badge>
                  </td>
                  <td>
                    <div className="max-width-300">
                      <p className="mb-0 text-truncate">
                        {tarea.detalles_de_tarea}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="max-width-300">
                      <p className="mb-0 text-muted text-truncate">
                        {tarea.notificacion_al_cliente}
                      </p>
                    </div>
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
                      >
                        <i className="bi bi-trash"></i>
                        <span className="d-none d-md-inline">Eliminar</span>
                      </Button>
                    </Stack>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Empty State */}
      {tareas.length === 0 && (
        <div className="text-center py-5">
          <i className="bi bi-clipboard-x fs-1 text-muted"></i>
          <p className="text-muted mt-3">No hay tareas registradas</p>
        </div>
      )}
      {/* Modal
      <ModalCrearTarea
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      /> */}
    </div>
  );
};
