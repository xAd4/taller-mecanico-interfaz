import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useUsuarioStore } from "../hooks/useUsuarioStore";

export const ModalEliminarUsuario = ({
  showModal,
  handleClose,
  usuarioData,
}) => {
  const { startDeletingUsuario } = useUsuarioStore();

  const handleDeleteUsuario = () => {
    startDeletingUsuario(usuarioData);
    Swal.fire(
      "Ok",
      "Usuario eliminado. Se recargará la página para guardar los cambios.",
      "success"
    );
    setTimeout(() => {
      location.reload();
    }, 1500);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-danger fw-bold">
          ¿Estás seguro de que deseas eliminar este usuario? Si borras el
          usuario, todo rastro relacionado con él, como las tareas también serán
          eliminados.
          <br />
          <u>Esta acción no se puede deshacer.</u>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDeleteUsuario}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
