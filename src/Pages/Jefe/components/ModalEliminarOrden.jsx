import { Modal, Button } from "react-bootstrap";
import { useOrdenStore } from "../hooks/useOrdenStore";
import Swal from "sweetalert2";

export const ModalEliminarOrden = ({ showModal, handleClose, ordenData }) => {
  const { startDeletingOrden } = useOrdenStore();

  const handleDeleteOrden = () => {
    startDeletingOrden(ordenData);
    Swal.fire("Ok", "Orden eliminada.", "success");
    setTimeout(() => {
      location.reload();
    }, 1000);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Orden</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          ¿Estás seguro de que deseas eliminar este orden? Esta acción no se
          puede deshacer.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDeleteOrden}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
