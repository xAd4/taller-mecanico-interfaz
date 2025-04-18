import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { ModalCrearVehiculo } from "./ModalCrearVehiculo";

export const ListaVehiculos = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Vehículos</h2>
        <Button className="btn btn-dark" onClick={handleShow}>
          + Nuevo Vehículo
        </Button>
      </div>

      {/* Modal para crear nuevo vehículo */}
      <ModalCrearVehiculo
        showModal={showModal}
        handleShow={handleShow}
        handleClose={handleClose}
      />

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar vehículos..."
        />
      </div>
      <table className="table table-hover shadow-sm">
        <thead className="table-light">
          <tr>
            <th scope="col">Modelo</th>
            <th scope="col">Marca</th>
            <th scope="col">Color</th>
            <th scope="col">Matrícula</th>
            <th scope="col">Kilometraje</th>
            <th scope="col">Número de Serie</th>
            <th scope="col">Número de Motor</th>
            <th scope="col">Fecha de Compra</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Toyota Corolla</td>
            <td>Toyota</td>
            <td>Blanco</td>
            <td>ABC-1234</td>
            <td>50,000 km</td>
            <td>1234567890</td>
            <td>9876543210</td>
            <td>2020-05-15</td>
            <td>
              <button className="btn btn-outline-primary btn-sm me-2">
                Editar
              </button>
              <button className="btn btn-outline-danger btn-sm">Borrar</button>
            </td>
          </tr>
          <tr>
            <td>Honda Civic</td>
            <td>Honda</td>
            <td>Negro</td>
            <td>XYZ-5678</td>
            <td>30,000 km</td>
            <td>0987654321</td>
            <td>1234567890</td>
            <td>2021-03-10</td>
            <td>
              <button className="btn btn-outline-primary btn-sm me-2">
                Editar
              </button>
              <button className="btn btn-outline-danger btn-sm">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center mt-4">
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
      </nav> */}
    </div>
  );
};
