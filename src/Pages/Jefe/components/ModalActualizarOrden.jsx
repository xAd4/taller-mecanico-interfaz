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
      id: "",
      cliente_id: "",
      vehiculo_id: "",
      detalle_de_trabajos_a_realizar: "",
      recepcion: "",
      prometido: "",
      cambio_de_aceite: "",
      cambio_de_filtro: "",
      detalles_de_entrada_del_vehiculo: "",
    }
  );

  // Convierte los datos del backend (0/1) a booleanos

  const handleInputChangeCheckbox = (e) => {
    const { name, type, checked } = e.target;
    // Para checkboxes usamos 'checked', de lo contrario 'value'
    const value = type === "checkbox" ? checked : e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
              name="cliente_id"
              value={formData.cliente_id}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Vehículo</Form.Label>
            <Form.Control
              type="number"
              name="vehiculo_id"
              value={formData.vehiculo_id}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Detalles de trabajos a realizar</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="detalle_de_trabajos_a_realizar"
              value={formData.detalle_de_trabajos_a_realizar}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha Recepcion</Form.Label>
            <Form.Control
              type="date"
              name="recepcion"
              value={formData.recepcion}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha Prometida</Form.Label>
            <Form.Control
              type="date"
              name="prometido"
              value={formData.prometido}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="cambio_de_aceite"
              label="Cambio de aceite"
              checked={formData.cambio_de_aceite}
              onChange={handleInputChangeCheckbox}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="cambio_de_filtro"
              label="Cambio de filtro"
              checked={formData.cambio_de_filtro}
              onChange={handleInputChangeCheckbox}
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
          <Button variant="primary" type="submit">
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
