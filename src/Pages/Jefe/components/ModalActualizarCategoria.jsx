import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useCategoriaStore } from "../hooks/useCategoriaStore";
import Swal from "sweetalert2";

export const ModalActualizarCategoria = ({
  showModal,
  handleClose,
  categoriaData,
}) => {
  const [formData, setFormData] = useState(
    categoriaData || {
      nombre: "",
      disponibilidad: "",
    }
  );

  const { startSavingCategoria } = useCategoriaStore();

  // Actualizar el estado si categoriaData cambia
  useEffect(() => {
    if (categoriaData) {
      setFormData(categoriaData);
    }
  }, [categoriaData]);

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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "disponibilidad" ? e.target.checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startSavingCategoria(formData);
    Swal.fire("Ok", "Categoria actualizada", "success");

    handleClose();
  };

  if (!categoriaData) return null; // No renderizar nada si categoriaData es null

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Categoría</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {/* Campo para el nombre de la categoría */}
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la Categoría</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          {/* Campo para la disponibilidad */}
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
