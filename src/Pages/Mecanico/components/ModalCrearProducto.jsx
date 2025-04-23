import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

export const ModalCrearProducto = ({
  showModal,
  handleClose,
  handleCreate,
}) => {
  const [formData, setFormData] = useState({
    tarea_id: "",
    producto_id: "",
    cantidad: "",
  });

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
    console.log("Datos enviados:", formData);
    handleCreate(formData); // Llama a la función para crear el producto
    handleClose(); // Cierra el modal
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Crear Producto Usado</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {/* Campos del formulario */}
          <Form.Group className="mb-3">
            <Form.Label>Tarea ID</Form.Label>
            <Form.Control
              type="text"
              name="tarea_id"
              value={formData.tarea_id}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Producto ID</Form.Label>
            <Form.Control
              type="text"
              name="producto_id"
              value={formData.producto_id}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button className="btn btn-success" variant="primary" type="submit">
            Crear Producto
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
