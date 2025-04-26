import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

// Estado inicial con valores booleanos
const initialFormState = {
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
};

export const ModalActualizarTrenDelantero = ({
  showModal,
  handleClose,
  handleUpdate,
  trenDelanteroData,
}) => {
  const [formData, setFormData] = useState(initialFormState);

  // Convierte los datos del backend (0/1) a booleanos
  useEffect(() => {
    if (trenDelanteroData) {
      const convertedData = {};
      Object.entries(trenDelanteroData).forEach(([key, value]) => {
        convertedData[key] = typeof value === "number" ? value === 1 : value;
      });
      setFormData(convertedData);
    } else {
      setFormData(initialFormState);
    }
  }, [trenDelanteroData]);

  const handleInputChange = (e) => {
    const { name, type, checked } = e.target;
    // Para checkboxes usamos 'checked', de lo contrario 'value'
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

  if (!trenDelanteroData) return null;

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Tren Delantero</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {/* Campos convertidos a checkbox */}
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Conv"
              name="conv"
              checked={formData.conv}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Comba"
              name="comba"
              checked={formData.comba}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Avance"
              name="avance"
              checked={formData.avance}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Rótulas"
              name="rotulas"
              checked={formData.rotulas}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Punteros"
              name="punteros"
              checked={formData.punteros}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Bujes"
              name="bujes"
              checked={formData.bujes}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Caja Dirección"
              name="caja_direccion"
              checked={formData.caja_direccion}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Conv2"
              name="conv2"
              checked={formData.conv2}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Comba2"
              name="comba2"
              checked={formData.comba2}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Avance2"
              name="avance2"
              checked={formData.avance2}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Amort"
              name="amort"
              checked={formData.amort}
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
