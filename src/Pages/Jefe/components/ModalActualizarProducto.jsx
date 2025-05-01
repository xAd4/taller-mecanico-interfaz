import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useProductoStore } from "../hooks/useProductoStore";

export const ModalActualizarProducto = ({
  showModal,
  handleClose,
  handleUpdate,
  productoData,
}) => {
  const [formData, setFormData] = useState(
    productoData || {
      categoria_id: "",
      nombre: "",
      detalles: "",
      marca: "",
      stock: "",
      precio: "",
      disponibilidad: "",
    }
  );

  const { startSavingProducto } = useProductoStore();

  // Actualizar el estado si productoData cambia
  useEffect(() => {
    if (productoData) {
      setFormData(productoData);
    }
  }, [productoData]);

  const handleInputChangeCheckbox = (e) => {
    const { name, type, checked } = e.target;
    // Para checkboxes usamos 'checked', de lo contrario 'value'
    const value = type === "checkbox" ? checked : e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startSavingProducto(formData);
    handleClose(); // Cierra el modal
  };

  if (!productoData) return null; // No renderizar nada si productoData es null

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Producto</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Categoria ID</Form.Label>
            <Form.Control
              type="number"
              name="categoria"
              value={formData.categoria_id}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Detalles</Form.Label>
            <Form.Control
              type="textarea"
              name="detalles"
              value={formData.detalles}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type="text"
              name="marca"
              value={formData.marca}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="precio"
              value={formData.precio}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="disponibilidad"
              label="Disponible"
              checked={formData.disponibilidad}
              onChange={handleInputChangeCheckbox}
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
