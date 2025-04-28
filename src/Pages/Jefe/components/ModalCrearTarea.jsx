import { Modal, Form, Button, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { useState } from "react";
import { useSelectorOrdenes } from "../hooks/useSelectorOrdenes";
import { useSelectorMecanicos } from "../hooks/useSelectorMecanicos";

export const ModalCrearTarea = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    orden_id: "",
    mecanico_id: "",
    estado_de_trabajo: "pendiente",
    notificacion_al_cliente: "",
  });

  const { opcionesAgrupadas, handleOrdenChange, setSearchTerm } =
    useSelectorOrdenes();

  const {
    opcionesAgrupadas: opcionesAgrupadasMecanico,
    handleMecanicoChange,
    setSearchTerm: setSearchTermMecanico,
  } = useSelectorMecanicos();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Crear Nueva Tarea</Modal.Title>
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
                  placeholder="Buscar orden..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>

              <Select
                options={opcionesAgrupadas}
                onChange={(selected) =>
                  handleOrdenChange(selected, setFormData)
                }
                placeholder="Seleccione una orden"
                noOptionsMessage={() => "No se encontraron ordenes"}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mecanico</Form.Label>
            <div className="mb-2">
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Buscar mecanico..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>

              <Select
                options={opcionesAgrupadasMecanico}
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
              <option value="pendiente_de_facturacion">Por Facturar</option>
              <option value="completado">Completado</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Notificación al Cliente</Form.Label>
            <Form.Control
              type="text"
              name="notificacion_al_cliente"
              value={formData.notificacion_al_cliente}
              onChange={handleInputChange}
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
  );
};
