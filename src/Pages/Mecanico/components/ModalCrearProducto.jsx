import { useState } from "react";
import { Form, Modal, Button, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { useSelectorProductos } from "../hooks/useSelectorProductos";

export const ModalCrearProducto = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    producto_id: "",
    cantidad: "",
  });

  const { opcionesAgrupadas, handleProductoChange, setSearchTerm } =
    useSelectorProductos();

  // Manejar cambios en otros campos
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
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Crear Producto Usado</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Producto</Form.Label>
            <div className="mb-2">
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Buscar producto..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>

              <Select
                options={opcionesAgrupadas}
                onChange={(selected) =>
                  handleProductoChange(selected, setFormData)
                }
                placeholder="Seleccione un producto"
                noOptionsMessage={() => "No se encontraron productos"}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleInputChange}
              required
              min="1"
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button className="btn btn-success" variant="primary" type="submit">
            Crear Producto
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
