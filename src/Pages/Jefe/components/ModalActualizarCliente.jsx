import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useClienteStore } from "../hooks/useClienteStore";
import Swal from "sweetalert2";
import { useAuthStore } from "../../../hooks/useAuthStore";

export const ModalActualizarCliente = ({
  showModal,
  handleClose,
  clienteData,
}) => {
  const [formData, setFormData] = useState(
    clienteData || {
      nombre: "",
      email: "",
      rut: "",
      telefono: "",
      domicilio: "",
    }
  );

  const { startSavingEvent } = useClienteStore();

  // Actualizar el estado si clienteData cambia
  useEffect(() => {
    if (clienteData) {
      setFormData(clienteData);
    }
  }, [clienteData]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startSavingEvent(formData);
    Swal.fire("Ok", "Cliente actualizado", "success");
    handleClose();
  };

  if (!clienteData) return null; // No renderizar nada si clienteData es null

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Cliente</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>RUT</Form.Label>
            <Form.Control
              type="text"
              name="rut"
              value={formData.rut}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control
              type="text"
              name="domicilio"
              value={formData.domicilio}
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
