import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";

export const ModalCrearCategoria = ({
  showModal,
  handleClose,
  handleCreate,
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    disponibilidad: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "disponibilidad" ? e.target.checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(formData);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Crear Nueva Categoría</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la Categoría</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="disponibilidad"
              label="Disponible"
              checked={formData.disponibilidad}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" type="submit">
            Crear Categoría
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
