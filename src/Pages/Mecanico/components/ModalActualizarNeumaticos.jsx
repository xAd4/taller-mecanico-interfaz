import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNeumaticoStore } from "../hooks/useNeumaticoStore";
import Swal from "sweetalert2";

const initialFormState = {
  delanteros_derechos: "",
  delanteros_izquierdos: "",
  traseros_derechos: "",
  traseros_izquierdos: "",
};

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

  const { startSavingNeumaticos } = useNeumaticoStore();

  useEffect(() => {
    if (neumaticosData) {
      setFormData(neumaticosData);
    }
  }, [neumaticosData]);

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
    startSavingNeumaticos(formData);
    Swal.fire("Ok", "Neumaticos actualizados", "success");

    handleClose();
  };

  if (!neumaticosData) return null;

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Estado de Neumáticos</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Delanteros Derechos"
              name="delanteros_derechos"
              checked={formData.delanteros_derechos}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Delanteros Izquierdos"
              name="delanteros_izquierdos"
              checked={formData.delanteros_izquierdos}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Traseros Derechos"
              name="traseros_derechos"
              checked={formData.traseros_derechos}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Traseros Izquierdos"
              name="traseros_izquierdos"
              checked={formData.traseros_izquierdos}
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
