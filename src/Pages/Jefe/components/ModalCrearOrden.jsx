import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

export const ModalCrearOrden = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    cliente_id: "",
    vehiculo_id: "",
    detalles_de_trabajos_a_realizar: "",
    recepcion: "",
    prometido: "",
    cambio_de_aceite: "",
    cambio_de_filtro: "",
    detalles_de_entrada_del_vehiculo: "",
  });

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.cambio_de_aceite < 0 ||
      formData.cambio_de_aceite > 1 ||
      formData.cambio_de_filtro < 0 ||
      formData.cambio_de_filtro > 1
    ) {
      alert("Debe ser 0 o 1. 0 es No y 1 es Si");
      return;
    }

    console.log("Datos enviados:", formData);
    handleClose();
  };
  return (
    <>
      {/* Modal para agregar nueva orden */}
      <Modal show={showModal} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo cliente</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Cliente ID</Form.Label>
              <Form.Control
                type="number"
                name="cliente_id"
                value={formData.cliente_id}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehículo ID</Form.Label>
              <Form.Control
                type="number"
                name="vehiculo_id"
                value={formData.vehiculo_id}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Detalles de trabajos a realizar</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="detalles_de_trabajos_a_realizar"
                value={formData.detalles_de_trabajos_a_realizar}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha de Recepción</Form.Label>
              <Form.Control
                type="date"
                name="recepcion"
                value={formData.recepcion}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha Prometida (Opcional)</Form.Label>
              <Form.Control
                type="date"
                name="prometido"
                value={formData.prometido}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="cambio_de_aceite"
                label="Cambio de aceite"
                checked={formData.cambio_de_aceite}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="cambio_de_filtro"
                label="Cambio de filtro"
                checked={formData.cambio_de_filtro}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Detalles de entrada de vehiculo</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="detalles_de_entrada_del_vehiculo"
                value={formData.detalles_de_entrada_del_vehiculo}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button className="btn btn-success" variant="primary" type="submit">
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
