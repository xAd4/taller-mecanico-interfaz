import { Modal, Button } from "react-bootstrap";
import { useProductoStore } from "../hooks/useProductoStore";
import Swal from "sweetalert2";

export const ModalEliminarProducto = ({
  showModal,
  handleClose,
  handleDelete,
  productoData,
}) => {
  const { startDeletingProducto } = useProductoStore();

  const handleDeleteProducto = () => {
    startDeletingProducto(productoData);
    Swal.fire("Ok", "Producto eliminado.", "success");
    setTimeout(() => {
      location.reload();
    }, 1000);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Producto</Modal.Title>
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
        <Button variant="danger" onClick={handleDeleteProducto}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
