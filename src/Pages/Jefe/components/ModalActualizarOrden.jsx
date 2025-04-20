import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export const ModalActualizarOrden = ({
  showModal,
  handleClose,
  handleUpdate,
  ordenData,
}) => {
  const [formData, setFormData] = useState(
    ordenData || {
      clienteId: "",
      vehiculoId: "",
      datosExtras: "",
      fechaRecepcion: "",
      fechaPrometida: "",
      cambios: "",
      estado: "",
    }
  );

  // Actualizar el estado si ordenData cambia
  useEffect(() => {
    if (ordenData) {
      setFormData(ordenData);
    }
  }, [ordenData]);

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

  if (!ordenData) return null; // No renderizar nada si ordenData es null

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Orden</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Cliente</Form.Label>
            <Form.Control
              type="number"
              name="clienteId"
              value={formData.clienteId}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Vehículo</Form.Label>
            <Form.Control
              type="number"
              name="vehiculoId"
              value={formData.vehiculoId}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="datosExtras"
              value={formData.datosExtras}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha Recepcion</Form.Label>
            <Form.Control
              type="date"
              name="fechaRecepcion"
              value={formData.fechaRecepcion}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha Prometida</Form.Label>
            <Form.Control
              type="date"
              name="fechaPrometida"
              value={formData.fechaPrometida}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cambios</Form.Label>
            <Form.Control
              type="text"
              name="cambios"
              value={formData.cambios}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              name="estado"
              value={formData.estado}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar estado</option>
              <option value="Pendiente">Pendiente</option>
              <option value="En Proceso">En Proceso</option>
              <option value="Completada">Completada</option>
            </Form.Select>
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
