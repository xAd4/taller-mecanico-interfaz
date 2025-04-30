import { Modal, Button } from "react-bootstrap";
import { useVehiculoStore } from "../hooks/useVehiculoStore";
import Swal from "sweetalert2";

export const ModalEliminarVehiculo = ({
  showModal,
  handleClose,
  vehiculoData,
}) => {
  const { startDeletingVehiculo } = useVehiculoStore();

  const handleDeleteVehiculo = () => {
    startDeletingVehiculo(vehiculoData);
    Swal.fire("Ok", "Usuario eliminado.", "success");
    setTimeout(() => {
      location.reload();
    }, 1000);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Vehiculo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          ¿Estás seguro de que deseas eliminar este vehiculo? Esta acción no se
          puede deshacer.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDeleteVehiculo}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
