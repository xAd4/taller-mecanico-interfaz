import { Modal, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useUsuarioStore } from "../hooks/useUsuarioStore";
import Swal from "sweetalert2";

export const ModalActualizarUsuario = ({
  showModal,
  handleClose,
  usuarioData,
}) => {
  const [formData, setFormData] = useState(
    usuarioData || {
      name: "",
      email: "",
      password: "",
      rol: "",
      disponible: "",
    }
  );

  const { startSavingUsuario } = useUsuarioStore();

  // Actualizar el estado si usuarioData cambia
  useEffect(() => {
    if (usuarioData) {
      setFormData(usuarioData);
    }
  }, [usuarioData]);

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
    const { password, ...dataToSend } = formData;
    startSavingUsuario(dataToSend);
    Swal.fire("Ok", "Usuario actualizado", "success");
    handleClose(); // Cierra el modal
  };

  if (!usuarioData) return null; // No renderizar nada si usuarioData es null

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar usuario</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rol</Form.Label>
            <Form.Select
              name="rol"
              value={formData.rol}
              onChange={handleInputChange}
              required
            >
              <option value="jefe">Jefe</option>
              <option value="mecanico">Mecánico</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="disponible"
              label="Disponible"
              checked={formData.disponible}
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
