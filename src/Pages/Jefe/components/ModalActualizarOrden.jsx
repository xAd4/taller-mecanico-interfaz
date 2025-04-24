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
      cliente_id: "",
      vehiculo_id: "",
      detalleDeTrabajosARealizar: "",
      recepcion: "",
      prometido: "",
      cambioDeAceite: "",
      cambioDeFiltro: "",
      detallesDeEntradaDelVehiculo: "",
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
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Vehículo</Form.Label>
            <Form.Control
              type="number"
              name="vehiculoId"
              value={formData.vehiculoId}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Detalles de trabajos a realizar</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="detalleDeTrabajosARealizar"
              value={formData.detalleDeTrabajosARealizar}
              onChange={handleInputChange}
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
            <Form.Check
              type="checkbox"
              name="cambioDeAceite"
              label="Cambio de aceite"
              checked={formData.cambioDeAceite}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="cambioDeFiltro"
              label="Cambio de filtro"
              checked={formData.cambioDeFiltro}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Detalles de entrada de vehiculo</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="detallesDeEntradaDelVehiculo"
              value={formData.detallesDeEntradaDelVehiculo}
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
