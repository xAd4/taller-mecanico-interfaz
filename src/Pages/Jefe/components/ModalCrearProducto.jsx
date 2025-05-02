import { Form, Modal, Button, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { useSelectorCategorias } from "../hooks/useSelectorCategorias";
import { useForm } from "../../../hooks/useForm";
import { useProductoStore } from "../hooks/useProductoStore";
import Swal from "sweetalert2";

const createProductoField = {
  categoria_id: "",
  nombre: "",
  detalles: "",
  marca: "",
  stock: "",
  precio: "",
  disponibilidad: "",
};

export const ModalCrearProducto = ({ showModal, handleClose }) => {
  const {
    categoria_id,
    nombre,
    detalles,
    marca,
    stock,
    precio,
    disponibilidad,
    onInputChange,
  } = useForm(createProductoField);

  const { opcionesAgrupadas, setSearchTerm } = useSelectorCategorias(showModal);

  const { startSavingProducto } = useProductoStore();

  const handleInputChangeCheckbox = (e) => {
    const { name, checked } = e.target;
    onInputChange({ target: { name, value: checked } });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    startSavingProducto({
      categoria_id,
      nombre,
      detalles,
      marca,
      stock,
      precio,
      disponibilidad,
    });

    Swal.fire("Ok", "Producto creado", "success");
    setTimeout(() => {
      location.reload();
    }, 1000);

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
                    onInputChange({
                      target: { name: "categoria_id", value: selected.value },
                    })
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
                value={nombre}
                onChange={onInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Detalles</Form.Label>
              <Form.Control
                type="text"
                name="detalles"
                value={detalles}
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                name="marca"
                value={marca}
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={stock}
                onChange={onInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="precio"
                value={precio}
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="disponibilidad"
                label="Estado"
                value={disponibilidad}
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
