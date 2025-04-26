import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export const ModalActualizarTarea = ({
  showModal,
  handleClose,
  handleUpdate,
  tareaData,
}) => {
  const [formData, setFormData] = useState(
    tareaData || {
      estado_de_trabajo: "",
      notificacion_al_cliente: "",
    }
  );

  // Actualizar el estado si tareaData cambia
  useEffect(() => {
    if (tareaData) {
      setFormData(tareaData);
    }
  }, [tareaData]);

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

  if (!tareaData) return null; // No renderizar nada si tareaData es null

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Usuario</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Estado de trabajo</Form.Label>
            <Form.Select
              name="estado_de_trabajo"
              value={formData.estado_de_trabajo}
              onChange={handleInputChange}
            >
              <option value="pendiente">Pendiente</option>
              <option value="en_proceso">En proceso</option>
              <option value="pendiente_de_facturacion">Por facturar</option>
              <option value="completado">Completado</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Detalles de Tarea</Form.Label>
            <Form.Control
              as="textarea"
              name="notificacion_al_cliente"
              value={formData.notificacion_al_cliente}
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
