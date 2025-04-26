import { useState, useMemo } from "react";
import { Form, Modal, Button, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { productos } from "../../jefe/helpers/productos";

export const ModalCrearProducto = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    producto_id: "",
    cantidad: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Opciones agrupadas y filtradas
  const opcionesAgrupadas = useMemo(() => {
    const grupos = {};

    productos.forEach((producto) => {
      const categoriaNombre = producto.categoria.nombre;

      if (!grupos[categoriaNombre]) {
        grupos[categoriaNombre] = {
          label: categoriaNombre,
          options: [],
        };
      }

      if (producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())) {
        grupos[categoriaNombre].options.push({
          value: producto.id,
          label: `${producto.nombre} - ${producto.marca}`,
          stock: producto.stock,
          precio: producto.precio,
        });
      }
    });

    return Object.values(grupos);
  }, [searchTerm]);

  // Manejar cambios en el selector de productos
  const handleProductoChange = (selectedOption) => {
    setFormData({
      ...formData,
      producto_id: selectedOption ? selectedOption.value : "",
    });
  };

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
                onChange={handleProductoChange}
                placeholder="Seleccione un producto"
                noOptionsMessage={() => "No se encontraron productos"}
                formatGroupLabel={(group) => (
                  <div className="d-flex justify-content-between">
                    <span>{group.label}</span>
                    <span className="badge bg-secondary">
                      {group.options.length} items
                    </span>
                  </div>
                )}
                getOptionLabel={(option) => (
                  <div>
                    <div>{option.label}</div>
                    <div className="text-muted small">
                      Stock: {option.stock} | Precio: ${option.precio}
                    </div>
                  </div>
                )}
                styles={{
                  control: (base) => ({
                    ...base,
                    border: "1px solid #ced4da",
                    borderRadius: "0.375rem",
                    minHeight: "38px",
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                }}
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
