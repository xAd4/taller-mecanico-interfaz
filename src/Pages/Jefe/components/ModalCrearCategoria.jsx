import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import { useCategoriaStore } from "../hooks/useCategoriaStore";
import Swal from "sweetalert2";

const createCategoriaField = {
  nombre: "",
  disponibilidad: "",
};

export const ModalCrearCategoria = ({ showModal, handleClose }) => {
  const { nombre, disponibilidad, onInputChange } =
    useForm(createCategoriaField);

  const { startSavingCategoria } = useCategoriaStore();

  const handleInputChangeCheckbox = (e) => {
    const { name, checked } = e.target;
    onInputChange({ target: { name, value: checked } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startSavingCategoria({ nombre, disponibilidad });
    Swal.fire("Ok", "Cliente creado", "success");
    setTimeout(() => {
      location.reload();
    }, 1000);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Crear Nueva Categoría</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la Categoría</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={nombre}
              onChange={onInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="disponibilidad"
              label="Disponible"
              checked={disponibilidad}
              onChange={handleInputChangeCheckbox}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" type="submit">
            Crear Categoría
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
