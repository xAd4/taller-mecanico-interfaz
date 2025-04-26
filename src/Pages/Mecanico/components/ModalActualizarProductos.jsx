import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export const ModalActualizarProductos = ({
  showModal,
  handleClose,
  handleUpdate,
  productosData,
}) => {
  const [formData, setFormData] = useState(
    productosData || {
      producto_id: "",
      cantidad: "",
      total: "",
      producto: {
        id: "",
        categoria_id: "",
        nombre: "",
        detalles: "",
        marca: "",
        imagen: "",
        stock: "",
        precio: "",
        disponibilidad: "",
      },
    }
  );

  // Actualizar el estado si productosData cambia
  useEffect(() => {
    if (productosData) {
      setFormData(productosData);
    }
  }, [productosData]);

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

  if (!productosData) return null; // No renderizar nada si productosData es null

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Producto Usado</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {/* Mostrar el nombre del producto */}

          <Form.Group className="mb-3">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              name="cantidad"
              value={formData.cantidad}
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
