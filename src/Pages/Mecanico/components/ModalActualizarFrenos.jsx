import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useFrenoStore } from "../hooks/useFrenoStore";

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
  frenosData,
}) => {
  const [formData, setFormData] = useState(
    frenosData || {
      delanteros: "",
      traseros: "",
      estacionamiento: "",
      numero_cricket: "",
    }
  );

  const { startSavingFrenos } = useFrenoStore();

  useEffect(() => {
    if (frenosData) {
      setFormData(frenosData);
    }
  }, [frenosData]);

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
    startSavingFrenos(formData);
    handleClose();
  };

  if (!frenosData) return null;

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
