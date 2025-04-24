import { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export const ModalActualizarVehiculo = ({
  showModal,
  handleClose,
  handleUpdate,
  vehiculoData,
}) => {
  const [formData, setFormData] = useState(
    vehiculoData || { marca: "", modelo: "", anio: "", placa: "" }
  );

  // Actualizar el estado si vehiculoData cambia
  useEffect(() => {
    if (vehiculoData) {
      setFormData(vehiculoData);
    }
  }, [vehiculoData]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData);
    handleClose();
  };

  if (!vehiculoData) {
    return null; // No renderizar nada si vehiculoData es null
  }

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Vehículo</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              type="text"
              name="modelo"
              value={formData.modelo}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type="text"
              name="marca"
              value={formData.marca}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Matricula</Form.Label>
            <Form.Control
              type="text"
              name="matricula"
              value={formData.matricula}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Kilometraje</Form.Label>
            <Form.Control
              type="text"
              name="kilometraje"
              value={formData.kilometraje}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Numero de serie (Opcional)</Form.Label>
            <Form.Control
              type="text"
              name="serie"
              value={formData.serie}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Numero de motor (Opcional)</Form.Label>
            <Form.Control
              type="text"
              name="motor"
              value={formData.motor}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de compra (Opcional)</Form.Label>
            <Form.Control
              type="date"
              name="fechaCompra"
              value={formData.fechaCompra}
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
