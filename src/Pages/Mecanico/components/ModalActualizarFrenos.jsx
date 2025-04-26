import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const initialFormState = {
  delanteros: "",
  traseros: "",
  estacionamiento: "",
  numero_cricket: "",
};

export const ModalActualizarFrenos = ({
  showModal,
  handleClose,
  handleUpdate,
  frenos,
}) => {
  const [formData, setFormData] = useState(initialFormState);

  // Convierte los datos del backend (0/1) a booleanos
  useEffect(() => {
    if (frenos) {
      const convertedData = {};
      Object.entries(frenos).forEach(([key, value]) => {
        convertedData[key] = typeof value === "number" ? value === 1 : value;
      });
      setFormData(convertedData);
    } else {
      setFormData(initialFormState);
    }
  }, [frenos]);

  const handleInputChange = (e) => {
    const { name, type, checked } = e.target;
    const value = type === "checkbox" ? checked : e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData);
    handleClose();
  };

  if (!frenos) return null;

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Frenos</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Delanteros"
              name="delanteros"
              checked={formData.delanteros}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Traseros"
              name="traseros"
              checked={formData.traseros}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Estacionamiento"
              name="estacionamiento"
              checked={formData.estacionamiento}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Número Cricket"
              name="numero_cricket"
              checked={formData.numero_cricket}
              onChange={handleInputChange}
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
