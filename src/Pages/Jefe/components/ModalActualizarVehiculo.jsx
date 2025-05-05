import { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useVehiculoStore } from "../hooks/useVehiculoStore";
import Swal from "sweetalert2";

export const ModalActualizarVehiculo = ({
  showModal,
  handleClose,
  vehiculoData,
}) => {
  const [formData, setFormData] = useState(
    vehiculoData || {
      modelo: "",
      marca: "",
      color: "",
      matricula: "",
      kilometraje: "",
      numero_de_serie: "",
      numero_de_motor: "",
      fecha_de_compra: "",
    }
  );

  const { startSavingVehiculo } = useVehiculoStore();

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
    startSavingVehiculo(formData);
    Swal.fire("Ok", "Vehiculo actualizado", "success");
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
              name="numero_de_serie"
              value={formData.numero_de_serie}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Numero de motor (Opcional)</Form.Label>
            <Form.Control
              type="text"
              name="numero_de_motor"
              value={formData.numero_de_motor}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de compra (Opcional)</Form.Label>
            <Form.Control
              type="date"
              name="fecha_de_compra"
              value={formData.fecha_de_compra}
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
