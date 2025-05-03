import { useEffect, useState } from "react";
import { Button, Form, Stack, Badge, Spinner } from "react-bootstrap";
import { ModalCrearOrden } from "./ModalCrearOrden";
import { ModalEliminarOrden } from "./ModalEliminarOrden";
import { ModalActualizarOrden } from "./ModalActualizarOrden";
import { useNavigate } from "react-router-dom";
import { useOrdenStore } from "../hooks/useOrdenStore";
import { SpinnerComponent } from "../../../components/SpinnerComponent";
import { useSearch } from "../../../hooks/useSearch";

export const ListaOrdenes = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedOrden, setSelectedOrden] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleIncrementPaginate = (paginate) => {
    setCurrentPage((prev) => prev + paginate);
  };

  const navigate = useNavigate();

  const { ordenes, startLoadingOrdenes, isLoadingOrdenes } = useOrdenStore();

  const { filteredData, searchTerm, handleSearchChange } = useSearch(ordenes, [
    "recepcion",
    "cliente.nombre",
    "vehiculo.modelo",
    "vehiculo.matricula",
  ]);

  const handleUpdate = (updatedData) => {
    console.log("Datos actualizados:", updatedData);
    // Aquí iría la lógica para hacer el PUT o PATCH a la API
  };

  const handleDelete = () => {
    console.log("Orden eliminada");
    setShowDeleteModal(false);
    // Aquí iría la lógica para hacer el DELETE a la API
  };

  useEffect(() => {
    startLoadingOrdenes(currentPage);
  }, [currentPage]);

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
                  Cliente
                </th>
                <th scope="col">Vehículo</th>
                <th scope="col">Trabajos a realizar</th>
                <th scope="col">Fechas</th>
                <th scope="col">Filtros y aceite</th>
                <th scope="col">Entrada del vehiculo</th>
                <th scope="col" className="text-end pe-4">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoadingOrdenes ? (
                <SpinnerComponent colSpan={12} />
              ) : (
                filteredData.map((orden, index) => (
                  <tr key={index} className="transition-all">
                    <td className="ps-4">
                      <div className="d-flex align-items-center gap-3">
                        <div>
                          <h6 className="mb-0 fw-semibold">{orden?.id}</h6>
                        </div>
                      </div>
                    </td>
                    <td className="ps-4">
                      <div className="d-flex align-items-center gap-3">
                        <div>
                          <h6 className="mb-0 fw-semibold">
                            ID del cliente: {orden?.cliente.id}
                          </h6>
                          <br />
                          <h6 className="mb-0 fw-semibold">
                            Nombre del cliente: {orden?.cliente.nombre}
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-car-front fs-4 text-muted"></i>
                        <div>
                          <h6 className="mb-0 fw-semibold">
                            ID del Vehiculo: {orden?.vehiculo.id}
                          </h6>
                          <br />
                          <h6 className="mb-0 fw-semibold">
                            Info del Vehiculo: {orden?.vehiculo.modelo} -{" "}
                            {orden?.vehiculo.marca}
                          </h6>
                          <ul className="list-unstyled mb-0">
                            <li>
                              <code className="text-muted">Matrícula:</code>
                              {orden?.vehiculo.matricula}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column gap-2">
                        <div>
                          <small className="text-muted d-block">
                            Detalles de trabajos a realizar
                          </small>
                          <span
                            className="d-inline-block text-truncate"
                            style={{ maxWidth: "250px" }}
                          >
                            <i className="bi bi-calendar-check me-2"></i>
                            {orden?.detalle_de_trabajos_a_realizar}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column gap-2">
                        <div>
                          <small className="text-muted d-block">
                            Recepción:
                          </small>
                          <span className="text-nowrap">
                            <i className="bi bi-calendar-check me-2"></i>
                            {orden?.recepcion}
                          </span>
                        </div>
                        <div>
                          <small className="text-muted d-block">
                            Prometida:
                          </small>
                          <span className="text-nowrap">
                            <i className="bi bi-calendar-event me-2"></i>
                            {orden?.prometido}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column gap-2">
                        <small
                          className={
                            orden?.cambio_de_aceite
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {orden?.cambio_de_aceite ? (
                            <i className="bi bi-check-circle-fill"> Aceite</i>
                          ) : (
                            <i className="bi bi-x-circle-fill"> Aceite</i>
                          )}
                        </small>
                        <small
                          className={
                            orden?.cambio_de_filtro
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {orden?.cambio_de_filtro ? (
                            <i className="bi bi-check-circle-fill"> Filtro</i>
                          ) : (
                            <i className="bi bi-x-circle-fill"> Filtro</i>
                          )}
                        </small>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column gap-2">
                        <div>
                          <small className="text-muted d-block">
                            Detalles de entrada de vehiculo
                          </small>
                          <span
                            className="d-inline-block text-truncate"
                            style={{ maxWidth: "250px" }}
                          >
                            <i className="bi bi-calendar-check me-2"></i>
                            {orden?.detalles_de_entrada_del_vehiculo}
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
                          onClick={() => {
                            setSelectedOrden(orden);
                            setShowDeleteModal(true);
                          }}
                        >
                          <i className="bi bi-trash"></i>
                          <span className="d-none d-lg-inline">Borrar</span>
                        </Button>
                        <Button
                          variant="outline-success"
                          size="sm"
                          className="d-flex align-items-center gap-2"
                          onClick={() =>
                            navigate(`/jefe/orden/${orden?.id}`, {
                              state: { orden },
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
            Cargar siguientes ordenes <i className="bi bi-arrow-right"></i>
          </Button>
        </Stack>
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
        ordenData={selectedOrden}
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
