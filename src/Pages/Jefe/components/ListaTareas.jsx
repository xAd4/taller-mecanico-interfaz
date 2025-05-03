import { useEffect, useState } from "react";
import { Button, Form, Stack, Badge, Spinner } from "react-bootstrap";
import { ModalCrearTarea } from "./ModalCrearTarea";
import { ModalEliminarTarea } from "./ModalEliminarTarea";
import { ModalActualizarTarea } from "./ModalActualizarTarea";
import { useNavigate } from "react-router-dom";
import { useTareaStore } from "../hooks/useTareaStore";
import { SpinnerComponent } from "../../../components/SpinnerComponent";
import { useSearch } from "../../../hooks/useSearch";

export const ListaTareas = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedTarea, setSelectedTarea] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleIncrementPaginate = (paginate) => {
    setCurrentPage((prev) => prev + paginate);
  };

  const { tareas, startLoadingTareas, isLoadingTareas } = useTareaStore();

  const { filteredData, searchTerm, handleSearchChange } = useSearch(tareas, [
    "mecanico.name",
    "estado_de_trabajo",
  ]);

  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("Cliente eliminado");
    setShowDeleteModal(false);
    // Aquí iría la lógica para hacer el DELETE a la API
  };

  const handleUpdate = (updatedData) => {
    console.log("Datos actualizados:", updatedData);
    // Aquí iría la lógica para hacer el PUT o PATCH a la API
  };

  useEffect(() => {
    startLoadingTareas(currentPage);
  }, [currentPage]);

  const getEstadoColor = (estado) => {
    switch (estado) {
      case "pendiente":
        return "danger";
      case "en_proceso":
        return "secondary";
      case "pendiente_de_facturacion":
        return "warning";
      case "completado":
        return "success";
      default:
        return "secondary";
    }
  };

  return (
    <div className="container-fluid px-4 py-3 animate__animated animate__fadeIn">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <h1 className="h2 mb-1 fw-bold text-primary">Gestión de Tareas</h1>
          <p className="text-muted mb-0">Seguimiento de trabajos en taller</p>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
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
                  Orden ID
                </th>
                <th scope="col">Mecánico ID</th>
                <th scope="col">Estado</th>
                <th scope="col">Notificación al Cliente</th>
                <th scope="col" className="text-end pe-4">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoadingTareas ? (
                <SpinnerComponent />
              ) : (
                filteredData.map((tarea, index) => (
                  <tr key={index} className="transition-all">
                    <td className="ps-4 fw-semibold"> {tarea?.id}</td>
                    <td className="ps-4 fw-semibold"> {tarea?.orden_id}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-person-workspace"></i>
                        {tarea?.mecanico ? (
                          <span className="font-monospace">
                            {tarea?.mecanico_id} - {tarea?.mecanico?.name}
                          </span>
                        ) : (
                          <span className="font-monospace">
                            Recarga la pagina...
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <Badge bg={getEstadoColor(tarea?.estado_de_trabajo)}>
                        {tarea?.estado_de_trabajo}
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex flex-column gap-2">
                        <div>
                          <span
                            className="d-inline-block text-truncate"
                            style={{ maxWidth: "250px" }}
                          >
                            <i className="bi bi-calendar-check me-2"></i>
                            {tarea?.notificacion_al_cliente}
                          </span>
                        </div>
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
                          onClick={() => {
                            setSelectedTarea(tarea);
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
                            setSelectedTarea(tarea);
                            setShowDeleteModal(true);
                          }}
                        >
                          <i className="bi bi-trash"></i>
                          <span className="d-none d-md-inline">Eliminar</span>
                        </Button>
                        <Button
                          variant="outline-success"
                          size="sm"
                          className="d-flex align-items-center gap-2"
                          onClick={() =>
                            navigate(`/jefe/tarea/${tarea.id}`, {
                              state: { tarea },
                            })
                          }
                        >
                          <i className="bi bi-eye"></i>
                          <span className="d-none d-lg-inline">Detalles</span>
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
            Cargar siguientes tareas <i className="bi bi-arrow-right"></i>
          </Button>
        </Stack>
      </div>

      {/* Modal */}
      <ModalCrearTarea
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />
      {/* Modal de eliminación */}
      <ModalEliminarTarea
        showModal={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={handleDelete}
        tareaData={selectedTarea}
      />
      {/* Modal de actualización */}
      <ModalActualizarTarea
        showModal={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        handleUpdate={handleUpdate}
        tareaData={selectedTarea}
      />
    </div>
  );
};
