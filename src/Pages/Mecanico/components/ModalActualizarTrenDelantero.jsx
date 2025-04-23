import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export const ModalActualizarTrenDelantero = ({
  showModal,
  handleClose,
  handleUpdate,
  trenDelanteroData,
}) => {
  const [formData, setFormData] = useState(
    trenDelanteroData || {
      conv: "",
      comba: "",
      avance: "",
      rotulas: "",
      punteros: "",
      bujes: "",
      caja_direccion: "",
      conv2: "",
      comba2: "",
      avance2: "",
      amort: "",
    }
  );

  // Actualizar el estado si trenDelanteroData cambia
  useEffect(() => {
    if (trenDelanteroData) {
      setFormData(trenDelanteroData);
    }
  }, [trenDelanteroData]);

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

  if (!trenDelanteroData) return null; // No renderizar nada si trenDelanteroData es null

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Tren Delantero</Modal.Title>
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
            <Form.Label>Avance</Form.Label>
            <Form.Control
              type="number"
              name="avance"
              value={formData.avance}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rótulas</Form.Label>
            <Form.Control
              type="number"
              name="rotulas"
              value={formData.rotulas}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Punteros</Form.Label>
            <Form.Control
              type="number"
              name="punteros"
              value={formData.punteros}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bujes</Form.Label>
            <Form.Control
              type="number"
              name="bujes"
              value={formData.bujes}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Caja Dirección</Form.Label>
            <Form.Control
              type="number"
              name="caja_direccion"
              value={formData.caja_direccion}
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
            <Form.Label>Avance2</Form.Label>
            <Form.Control
              type="number"
              name="avance2"
              value={formData.avance2}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amort</Form.Label>
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
