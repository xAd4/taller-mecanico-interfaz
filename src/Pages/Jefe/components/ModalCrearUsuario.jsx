import { Form, Modal, Button } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import Swal from "sweetalert2";
import { useAuthStore } from "../../../hooks/useAuthStore";
import { useEffect } from "react";

const registerFormFields = {
  registerName: "",
  registerEmail: "",
  registerPassword: "",
  registerPasswordConfirmation: "",
};

export const ModalCrearUsuario = ({ showModal, handleClose }) => {
  const {
    registerName,
    registerEmail,
    registerPassword,
    registerPasswordConfirmation,
    onInputChange,
  } = useForm(registerFormFields);

  const { startRegister, errorMessage } = useAuthStore();

  // Manejar envío del formulario
  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error", errorMessage, "error");
    }
  }, [errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (registerPassword !== registerPasswordConfirmation) {
      Swal.fire("Error", "Las contraseñas no coinciden", "error");
      return;
    }

    startRegister({
      name: registerName,
      email: registerEmail,
      password: registerPassword,
      password_confirmation: registerPasswordConfirmation,
    });
    handleClose();
  };

  return (
    <>
      {/* Modal para agregar nueva orden */}
      <Modal show={showModal} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo cliente</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                name="registerName"
                value={registerName}
                onChange={onInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="registerEmail"
                value={registerEmail}
                onChange={onInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="registerPassword"
                value={registerPassword}
                onChange={onInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                name="registerPasswordConfirmation"
                value={registerPasswordConfirmation}
                onChange={onInputChange}
                required
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
