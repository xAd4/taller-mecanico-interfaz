import { Modal, Button } from "react-bootstrap";

export const ModalEliminarTarea = ({
  showModal,
  handleClose,
  handleDelete,
}) => {
  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          ¿Estás seguro de que deseas eliminar este tarea? Esta acción no se
          puede deshacer.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
