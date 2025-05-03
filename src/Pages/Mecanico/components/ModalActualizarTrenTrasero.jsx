import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTrenTraseroStore } from "../hooks/useTrenTraseroStore";
import Swal from "sweetalert2";

export const ModalActualizarTrenTrasero = ({
  showModal,
  handleClose,
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

  const { startSavingTrenTrasero } = useTrenTraseroStore();

  useEffect(() => {
    if (trenTraseroData) {
      setFormData(trenTraseroData);
    }
  }, [trenTraseroData]);

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
    startSavingTrenTrasero(formData);
    Swal.fire("Ok", "Tren trasero actualizado", "success");
    handleClose();
  };

  if (!trenTraseroData) return null;

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Tren Trasero</Modal.Title>
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
              label="Brazos Suspensión"
              name="brazos_susp"
              checked={formData.brazos_susp}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Articulaciones"
              name="articulaciones"
              checked={formData.articulaciones}
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
              label="Amortiguadores"
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
