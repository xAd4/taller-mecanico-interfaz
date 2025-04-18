import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { ModalCrearCliente } from "./ModalCrearCliente";

export const ListaClientes = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-4 ">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Clientes</h2>
        <Button
          className="btn btn-dark"
          type="button"
          variant="primary"
          onClick={handleShow}
        >
          + Nuevo Cliente
        </Button>
      </div>

      {/* Modal para crear nuevo cliente */}
      <ModalCrearCliente
        handleShow={handleShow}
        handleClose={handleClose}
        showModal={showModal}
      />

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar clientes..."
        />
      </div>
      <table className="table table-hover shadow-sm">
        <thead className="table-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Cliente</th>
            <th scope="col">RUT</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="ms-3">
                  <p className="mb-0 fw-bold">Juan Pérez</p>
                  <p className="mb-0 text-muted">juan.perez@email.com</p>
                  <p className="mb-0 text-muted">DNI: 123456</p>
                  <p className="mb-0 text-muted">
                    Domicilio: La casa de las madres Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Expedita veniam perferendis
                    dolorem impedit in nemo nobis laboriosam quibusdam atque.
                    Sequi numquam nesciunt, labore soluta rem iure hic!
                    Temporibus, consequuntur illo?
                  </p>
                </div>
              </div>
            </td>
            <td>12.345.678-9</td>
            <td>+56 9 1234 5678</td>

            <td>
              <button className="btn btn-outline-primary btn-sm me-2">
                Editar
              </button>
              <button className="btn btn-outline-danger btn-sm mt-2">
                Borrar
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="ms-3">
                  <p className="mb-0 fw-bold">María López</p>
                  <p className="mb-0 text-muted">maria.lopez@email.com</p>
                  <p className="mb-0 text-muted">DNI: 123456</p>
                  <p className="mb-0 text-muted">
                    Domicilio: La casa de las madres Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Expedita veniam perferendis
                    dolorem impedit in nemo nobis laboriosam quibusdam atque.
                    Sequi numquam nesciunt, labore soluta rem iure hic!
                    Temporibus, consequuntur illo?
                  </p>
                </div>
              </div>
            </td>
            <td>98.765.432-1</td>
            <td>+56 9 8765 4321</td>

            <td>
              <button className="btn btn-outline-primary btn-sm me-2">
                Editar
              </button>
              <button className="btn btn-outline-danger btn-sm mt-2">
                Borrar
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
