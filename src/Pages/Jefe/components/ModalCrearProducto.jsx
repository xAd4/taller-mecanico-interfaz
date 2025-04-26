import { useState } from "react";
import { Form, Modal, Button, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { useSelectorCategorias } from "../hooks/useSelectorCategorias";

export const ModalCrearProducto = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    categoria: "",
    nombre: "",
    detalles: "",
    marca: "",
    stock: "",
    precio: "",
    disponibilidad: "",
  });

  const { opcionesAgrupadas, handleCategoriaChange, setSearchTerm } =
    useSelectorCategorias();

  const handleInputChangeCheckbox = (e) => {
    const { name, type, checked } = e.target;
    // Para checkboxes usamos 'checked', de lo contrario 'value'
    const value = type === "checkbox" ? checked : e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

    console.log("Datos enviados:", formData);
    handleClose();
  };

  return (
    <>
      {/* Modal para agregar nueva orden */}
      <Modal show={showModal} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo producto</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Categoria</Form.Label>
              <div className="mb-2">
                <InputGroup className="mb-2">
                  <InputGroup.Text>
                    <i className="bi bi-search"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Buscar categoria..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </InputGroup>

                <Select
                  options={opcionesAgrupadas}
                  onChange={(selected) =>
                    handleCategoriaChange(selected, setFormData)
                  }
                  placeholder="Seleccione una categoria"
                  noOptionsMessage={() => "No se encontraron categorias"}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                placeholder="Nombre del producto"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Detalles</Form.Label>
              <Form.Control
                type="text"
                name="detalles"
                value={formData.detalles}
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
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="disponibilidad"
                label="Estado"
                value={formData.disponibilidad}
                onChange={handleInputChangeCheckbox}
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
