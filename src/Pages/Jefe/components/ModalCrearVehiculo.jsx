/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

export const ModalCrearVehiculo = ({ showModal, handleShow, handleClose }) => {
  const [formData, setFormData] = useState({
    modelo: "",
    marca: "",
    color: "",
    matricula: "",
    kilometraje: "",
    numero_de_serie: "",
    numero_de_motor: "",
    fecha_de_compra: "",
  });

  // Manejar apertura/cierre del modal

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    console.log("Datos enviados:", formData);
    handleClose();
  };

  return (
    <>
      {/* Modal para agregar nuevo veiculo */}
      <Modal show={showModal} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo vehiculo</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                type="text"
                name="modelo"
                value={formData.modelo}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Matricula</Form.Label>
              <Form.Control
                type="text"
                name="matricula"
                value={formData.matricula}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Kilometraje (Opcional)</Form.Label>
              <Form.Control
                type="text"
                name="kilometraje"
                value={formData.kilometraje}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Numero de serie (Opcional)</Form.Label>
              <Form.Control
                type="text"
                name="numero_de_serie"
                value={formData.numero_de_serie}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Numero de motor (Opcional)</Form.Label>
              <Form.Control
                type="text"
                name="numero_de_motor"
                value={formData.numero_de_motor}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha de compra (Opcional)</Form.Label>
              <Form.Control
                type="date"
                name="fecha_de_compar"
                value={formData.fecha_de_compra}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button className="btn btn-dark" variant="primary" type="submit">
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
