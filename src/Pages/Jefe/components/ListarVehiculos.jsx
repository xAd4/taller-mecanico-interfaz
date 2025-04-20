import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { ModalCrearVehiculo } from "./ModalCrearVehiculo";
import { ModalEliminarVehiculo } from "./ModalEliminarVehiculo";
import { ModalActualizarVehiculo } from "./ModalActualizarVehiculo";

export const ListaVehiculos = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedVehiculo, setSelectedVehiculo] = useState(null);

  const handleUpdate = (updatedData) => {
    console.log("Datos actualizados:", updatedData);
    // Aquí iría la lógica para hacer el PUT o PATCH a la API
  };

  const handleDelete = () => {
    console.log("Vehiculo eliminado");
    setShowDeleteModal(false);
    // Aquí iría la lógica para hacer el DELETE a la API
  };

  const vehiculos = [
    {
      id: 1,
      modelo: "Toyota Corolla",
      marca: "Toyota",
      color: "Blanco",
      matricula: "ABC-1234",
      kilometraje: "50,000 km",
      serie: "1234567890",
      motor: "9876543210",
      fechaCompra: "2020-05-15",
    },
    {
      id: 2,
      modelo: "Honda Civic",
      marca: "Honda",
      color: "Negro",
      matricula: "XYZ-5678",
      kilometraje: "30,000 km",
      serie: "0987654321",
      motor: "1234567890",
      fechaCompra: "2021-03-10",
    },
  ];

  return (
    <div className="container-fluid px-4 py-3 animate__animated animate__fadeIn">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <h1 className="h2 mb-1 fw-bold text-primary">Vehículos</h1>
          <p className="text-muted mb-0">Gestión de vehículos registrados</p>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
          className="d-flex align-items-center gap-2"
        >
          <i className="bi bi-plus-lg"></i>
          Nuevo Vehículo
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
            placeholder="Buscar vehículos..."
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
                  Modelo
                </th>
                <th scope="col">Marca</th>
                <th scope="col">Color</th>
                <th scope="col">Matrícula</th>
                <th scope="col">Kilometraje</th>
                <th scope="col">N° Serie</th>
                <th scope="col">N° Motor</th>
                <th scope="col">Compra</th>
                <th scope="col" className="text-end pe-4">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {vehiculos.map((vehiculo) => (
                <tr key={vehiculo.id} className="transition-all">
                  <td className="ps-4 fw-semibold">{vehiculo.modelo}</td>
                  <td>
                    <span className="badge bg-light text-dark border">
                      {vehiculo.marca}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-capitalize">{vehiculo.color}</span>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-dark text-white">
                      {vehiculo.matricula}
                    </span>
                  </td>
                  <td className="text-nowrap">{vehiculo.kilometraje}</td>
                  <td>
                    <small className="text-muted font-monospace">
                      {vehiculo.serie}
                    </small>
                  </td>
                  <td>
                    <small className="text-muted font-monospace">
                      {vehiculo.motor}
                    </small>
                  </td>
                  <td>
                    <span className="text-nowrap">
                      <i className="bi bi-calendar me-2"></i>
                      {vehiculo.fechaCompra}
                    </span>
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
                          setSelectedVehiculo(vehiculo);
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
      <ModalCrearVehiculo
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />
      {/* Modal de eliminación */}
      <ModalEliminarVehiculo
        showModal={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={handleDelete}
      />
      {/* Modal de actualización */}
      <ModalActualizarVehiculo
        showModal={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        handleUpdate={handleUpdate}
        vehiculoData={selectedVehiculo}
      />
    </div>
  );
};
