import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export const ModalActualizarTrenTrasero = ({
  showModal,
  handleClose,
  handleUpdate,
  trenTraseroData,
}) => {
  const [formData, setFormData] = useState(
    trenTraseroData || {
      conv: "",
      comba: "",
      brazos_susp: "",
      articulaciones: "",
      conv2: "",
      comba2: "",
      amort: "",
    }
  );

  // Actualizar el estado si trenTraseroData cambia
  useEffect(() => {
    if (trenTraseroData) {
      setFormData(trenTraseroData);
    }
  }, [trenTraseroData]);

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

  if (!trenTraseroData) return null; // No renderizar nada si trenTraseroData es null

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Tren Trasero</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {/* Campos del formulario */}
          <Form.Group className="mb-3">
            <Form.Label>Conv</Form.Label>
            <Form.Control
              type="number"
              name="conv"
              value={formData.conv}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Comba</Form.Label>
            <Form.Control
              type="number"
              name="comba"
              value={formData.comba}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Brazos Suspensión</Form.Label>
            <Form.Control
              type="number"
              name="brazos_susp"
              value={formData.brazos_susp}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Articulaciones</Form.Label>
            <Form.Control
              type="number"
              name="articulaciones"
              value={formData.articulaciones}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Conv2</Form.Label>
            <Form.Control
              type="number"
              name="conv2"
              value={formData.conv2}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Comba2</Form.Label>
            <Form.Control
              type="number"
              name="comba2"
              value={formData.comba2}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amortiguadores</Form.Label>
            <Form.Control
              type="number"
              name="amort"
              value={formData.amort}
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
