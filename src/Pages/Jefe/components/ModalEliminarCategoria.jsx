import { Modal, Button } from "react-bootstrap";
import { useCategoriaStore } from "../hooks/useCategoriaStore";
import Swal from "sweetalert2";

export const ModalEliminarCategoria = ({
  showModal,
  handleClose,
  categoriaData,
}) => {
  const { startDeletingCategoria } = useCategoriaStore();

  const handleDeleteCategory = () => {
    startDeletingCategoria(categoriaData);
    Swal.fire("Ok", "Categoria eliminada.", "success");
    setTimeout(() => {
      location.reload();
    }, 1000);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Categoria</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          ¿Estás seguro de que deseas eliminar este producto? Esta acción no se
          puede deshacer.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDeleteCategory}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
