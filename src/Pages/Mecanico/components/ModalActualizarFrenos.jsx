import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export const ModalActualizarFrenos = ({
  showModal,
  handleClose,
  handleUpdate,
  frenos,
}) => {
  const [formData, setFormData] = useState(
    frenos || {
      delanteros: "",
      traseros: "",
      estacionamiento: "",
      numero_cricket: "",
    }
  );

  // Actualizar el estado si frenos cambia
  useEffect(() => {
    if (frenos) {
      setFormData(frenos);
    }
  }, [frenos]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData); // Llama a la función para actualizar los datos
    handleClose(); // Cierra el modal
  };

  if (!frenos) return null; // No renderizar nada si frenos es null

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Frenos</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {/* Campos del formulario */}
          <Form.Group className="mb-3">
            <Form.Label>Delanteros</Form.Label>
            <Form.Control
              type="number"
              name="delanteros"
              value={formData.delanteros}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Traseros</Form.Label>
            <Form.Control
              type="number"
              name="traseros"
              value={formData.traseros}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Estacionamiento</Form.Label>
            <Form.Control
              type="number"
              name="estacionamiento"
              value={formData.estacionamiento}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Número Cricket</Form.Label>
            <Form.Control
              type="number"
              name="numero_cricket"
              value={formData.numero_cricket}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
