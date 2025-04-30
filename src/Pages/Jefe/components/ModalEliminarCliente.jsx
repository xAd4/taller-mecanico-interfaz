import { Modal, Button } from "react-bootstrap";
import { useClienteStore } from "../hooks/useClienteStore";
import Swal from "sweetalert2";

export const ModalEliminarCliente = ({
  showModal,
  handleClose,
  clienteData,
}) => {
  const { startDeletingCliente } = useClienteStore();

  const handleDeleteCliente = () => {
    startDeletingCliente(clienteData);
    Swal.fire("Ok", "Usuario eliminado.", "success");
    setTimeout(() => {
      location.reload();
    }, 1000);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Eliminar al cliente {clienteData?.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          ¿Estás seguro de que deseas eliminar este cliente? Esta acción no se
          puede deshacer.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDeleteCliente}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
