import { Modal, Form, Button, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTareaStore } from "../hooks/useTareaStore";
import Swal from "sweetalert2";
import Select from "react-select";
import { useSelectorOrdenes } from "../hooks/useSelectorOrdenes";
import { useSelectorMecanicos } from "../hooks/useSelectorMecanicos";

export const ModalActualizarTarea = ({ showModal, handleClose, tareaData }) => {
  const [formData, setFormData] = useState(
    tareaData || {
      orden_id: "",
      mecanico_id: "",
      estado_de_trabajo: "",
      notificacion_al_cliente: "",
    }
  );

  const { startSavingTarea } = useTareaStore();

  // Actualizar el estado si tareaData cambia
  useEffect(() => {
    if (tareaData) {
      setFormData(tareaData);
    }
  }, [tareaData]);

  // Usa los hooks para clientes y vehículos
  const {
    opcionesAgrupadas: opcionesOrdenes,
    setSearchTerm: setOrdenSearch,
    handleOrdenChange,
  } = useSelectorOrdenes(showModal);

  const {
    opcionesAgrupadas: opcionesMecanicos,
    setSearchTerm: setVehiculoSearchTerm,
    handleMecanicoChange,
  } = useSelectorMecanicos(showModal);

  // Encuentra las opciones seleccionadas iniciales
  const selectedOrden = opcionesOrdenes
    .flatMap((group) => group.options)
    .find((opt) => opt.value === formData.orden_id);

  const selectedMecanico = opcionesMecanicos
    .flatMap((group) => group.options)
    .find((opt) => opt.value === formData.mecanico_id);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.notificacion_al_cliente.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Los campos no pueden estar vacíos. En los campos opcionales, escriba 'N/A'.",
      });
      return; // Detener el envío del formulario
    }
    startSavingTarea(formData);
    Swal.fire("Ok", "Tarea actualizada", "success");
    handleClose();
  };

  if (!tareaData) return null; // No renderizar nada si tareaData es null

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Tarea</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Orden</Form.Label>
            <div className="mb-2">
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Buscar por nombre de cliente vinculado a una orden."
                  onChange={(e) => setOrdenSearch(e.target.value)}
                />
              </InputGroup>
              <Select
                options={opcionesOrdenes}
                value={selectedOrden}
                onChange={(selected) =>
                  handleOrdenChange(selected, setFormData)
                }
                placeholder="Seleccione una orden"
                noOptionsMessage={() => "No se encontraron ordenes"}
              />
            </div>
          </Form.Group>

          {/* Select para Vehículo */}
          <Form.Group className="mb-3">
            <Form.Label>Mecanicos</Form.Label>
            <div className="mb-2">
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Buscar por nombre del mecanico."
                  onChange={(e) => setVehiculoSearchTerm(e.target.value)}
                />
              </InputGroup>
              <Select
                options={opcionesMecanicos}
                value={selectedMecanico}
                onChange={(selected) =>
                  handleMecanicoChange(selected, setFormData)
                }
                placeholder="Seleccione un mecanico"
                noOptionsMessage={() => "No se encontraron mecanicos"}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Estado de Trabajo</Form.Label>
            <Form.Select
              name="estado_de_trabajo"
              value={formData.estado_de_trabajo}
              onChange={handleInputChange}
              required
            >
              <option value="pendiente">Pendiente</option>
              <option value="en_proceso">En Progreso</option>
              <option value="pendiente_de_facturacion">
                Pendiente por facturar
              </option>
              <option value="completado">Completado</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Notificación al Cliente (Opcional)</Form.Label>
            <Form.Control
              type="text"
              name="notificacion_al_cliente"
              value={formData.notificacion_al_cliente}
              onChange={handleInputChange}
            />
            <Form.Text className="text-muted">
              Este campo es opcional, al dejarse vacío se colocará por defecto
              un 'N/A'.
            </Form.Text>
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
