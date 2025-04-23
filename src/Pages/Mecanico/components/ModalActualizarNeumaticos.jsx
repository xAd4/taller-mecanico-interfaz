import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export const ModalActualizarNeumaticos = ({
  showModal,
  handleClose,
  handleUpdate,
  neumaticosData,
}) => {
  const [formData, setFormData] = useState(
    neumaticosData || {
      delanteros_derechos: "",
      delanteros_izquierdos: "",
      traseros_derechos: "",
      traseros_izquierdos: "",
    }
  );

  // Actualizar el estado si neumaticosData cambia
  useEffect(() => {
    if (neumaticosData) {
      setFormData(neumaticosData);
    }
  }, [neumaticosData]);

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

  if (!neumaticosData) return null; // No renderizar nada si neumaticosData es null

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Estado de Neumáticos</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {/* Campos del formulario */}
          <Form.Group className="mb-3">
            <Form.Label>Delanteros Derechos</Form.Label>
            <Form.Control
              type="number"
              name="delanteros_derechos"
              value={formData.delanteros_derechos}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Delanteros Izquierdos</Form.Label>
            <Form.Control
              type="number"
              name="delanteros_izquierdos"
              value={formData.delanteros_izquierdos}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Traseros Derechos</Form.Label>
            <Form.Control
              type="number"
              name="traseros_derechos"
              value={formData.traseros_derechos}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Traseros Izquierdos</Form.Label>
            <Form.Control
              type="number"
              name="traseros_izquierdos"
              value={formData.traseros_izquierdos}
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
