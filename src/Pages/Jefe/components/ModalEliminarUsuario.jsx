import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useUsuarioStore } from "../hooks/useUsuarioStore";

export const ModalEliminarUsuario = ({
  showModal,
  handleClose,
  handleDelete,
  usuarioData,
}) => {
  const { startDeletingUsuario } = useUsuarioStore();

  const handleDeleteUsuario = () => {
    startDeletingUsuario(usuarioData);
    Swal.fire("Ok", "Usuario eliminado.", "success");
    setTimeout(() => {
      location.reload();
    }, 1000);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          ¿Estás seguro de que deseas eliminar este usuario? Esta acción no se
          puede deshacer.
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
