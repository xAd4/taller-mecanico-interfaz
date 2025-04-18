import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { ModalCrearOrden } from "./ModalCrearOrden";

export const ListaOrdenes = () => {
  const [showModal, setShowModal] = useState(false);
  // Manejar apertura/cierre del modal
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Órdenes</h2>
        <Button
          className="btn btn-dark"
          type="button"
          variant="primary"
          onClick={handleShow}
        >
          + Nueva Orden
        </Button>
      </div>

      {/* Modal para crear nueva orden */}
      <ModalCrearOrden showModal={showModal} handleClose={handleClose} />

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar órdenes..."
        />
      </div>
      <table className="table table-hover shadow-sm">
        <thead className="table-light">
          <tr>
            <th scope="col">Cliente ID</th>
            <th scope="col">Vehículo ID</th>
            <th scope="col">Datos Extras</th>
            <th scope="col">Fecha de Recepción</th>
            <th scope="col">Fecha Prometida</th>
            <th scope="col">Cambios</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>67890</td>
            <td>Revisión general</td>
            <td>2025-04-01</td>
            <td>2025-04-10</td>
            <td>Cambio de aceite y filtros</td>
            <td>
              <button className="btn btn-outline-primary btn-sm me-2">
                Editar
              </button>
              <button className="btn btn-outline-danger btn-sm me-2">
                Borrar
              </button>
              <button className="btn btn-outline-success btn-sm">
                Ver mas
              </button>
            </td>
          </tr>
          <tr>
            <td>54321</td>
            <td>09876</td>
            <td>Reparación de frenos</td>
            <td>2025-04-05</td>
            <td>2025-04-15</td>

            <td>Revisión de frenos y suspensión</td>
            <td>
              <button className="btn btn-outline-primary btn-sm me-2">
                Editar
              </button>
              <button className="btn btn-outline-danger btn-sm me-2">
                Borrar
              </button>
              <button className="btn btn-outline-success btn-sm">
                Ver mas
              </button>
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
