import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

export const ModalCrearOrden = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    cliente_id: "",
    vehiculo_id: "",
    datos_extras: "",
    recepcion: "",
    prometido: "",
    cambio_de_aceite: "",
    cambio_de_filtro: "",
    detalles: "",
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
                type="text"
                name="cliente_id"
                placeholder="Coloca el numero de ID del cliente"
                value={formData.cliente_id}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehículo ID</Form.Label>
              <Form.Control
                type="text"
                name="vehiculo_id"
                placeholder="Coloca el numero de ID del vehiculo"
                value={formData.vehiculo_id}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Datos Extras</Form.Label>
              <Form.Control
                type="text"
                name="datos_extras"
                placeholder="Coloca los datos extras del vehiculo al entrar al taller"
                value={formData.datos_extras}
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
              <Form.Label>Cambio de Aceite</Form.Label>
              <Form.Control
                type="number"
                name="cambio_de_aceite"
                placeholder="Coloca 0 si es falso. Coloca 1 si es verdadero"
                value={formData.cambio_de_aceite}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cambio de Filtro</Form.Label>
              <Form.Control
                type="number"
                name="cambio_de_filtro"
                placeholder="Coloca 0 si es falso. Coloca 1 si es verdadero"
                value={formData.cambio_de_filtro}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Detalles</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="detalles"
                placeholder="Detalles para dar al mecanico"
                value={formData.detalles}
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
