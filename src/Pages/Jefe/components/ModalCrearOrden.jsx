import { useState } from "react";
import { Form, Modal, Button, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { useSelectorClientes } from "../hooks/useSelectorClientes";
import { useSelectorVehiculos } from "../hooks/useSelectorVehiculos";

export const ModalCrearOrden = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    cliente_id: "",
    vehiculo_id: "",
    detalles_de_trabajos_a_realizar: "",
    recepcion: "",
    prometido: "",
    cambio_de_aceite: "",
    cambio_de_filtro: "",
    detalles_de_entrada_del_vehiculo: "",
  });

  const { opcionesAgrupadas, handleClienteChange, setSearchTerm } =
    useSelectorClientes();

  const {
    opcionesAgrupadas: opcionesAgrupadasVehiculos,
    handleVehiculoChange,
    setSearchTerm: setSearchTermVehiculo,
  } = useSelectorVehiculos();

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChangeCheckbox = (e) => {
    const { name, type, checked } = e.target;
    // Para checkboxes usamos 'checked', de lo contrario 'value'
    const value = type === "checkbox" ? checked : e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Datos enviados:", formData);
    handleClose();
  };
  return (
    <>
      {/* Modal para agregar nueva orden */}
      <Modal show={showModal} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo cliente</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Cliente</Form.Label>
              <div className="mb-2">
                <InputGroup className="mb-2">
                  <InputGroup.Text>
                    <i className="bi bi-search"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Buscar cliente..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </InputGroup>

                <Select
                  options={opcionesAgrupadas}
                  onChange={(selected) =>
                    handleClienteChange(selected, setFormData)
                  }
                  placeholder="Seleccione un cliente"
                  noOptionsMessage={() => "No se encontraron clientes"}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehiculo</Form.Label>
              <div className="mb-2">
                <InputGroup className="mb-2">
                  <InputGroup.Text>
                    <i className="bi bi-search"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Buscar vehiculo..."
                    onChange={(e) => setSearchTermVehiculo(e.target.value)}
                  />
                </InputGroup>

                <Select
                  options={opcionesAgrupadasVehiculos}
                  onChange={(selected) =>
                    handleVehiculoChange(selected, setFormData)
                  }
                  placeholder="Seleccione un vehiculo"
                  noOptionsMessage={() => "No se encontraron vehiculos"}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Detalles de trabajos a realizar</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="detalles_de_trabajos_a_realizar"
                value={formData.detalles_de_trabajos_a_realizar}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha de Recepción</Form.Label>
              <Form.Control
                type="date"
                name="recepcion"
                value={formData.recepcion}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha Prometida (Opcional)</Form.Label>
              <Form.Control
                type="date"
                name="prometido"
                value={formData.prometido}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="cambio_de_aceite"
                label="Cambio de aceite"
                checked={formData.cambio_de_aceite}
                onChange={handleInputChangeCheckbox}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="cambio_de_filtro"
                label="Cambio de filtro"
                checked={formData.cambio_de_filtro}
                onChange={handleInputChangeCheckbox}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Detalles de entrada de vehiculo</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="detalles_de_entrada_del_vehiculo"
                value={formData.detalles_de_entrada_del_vehiculo}
                onChange={handleInputChange}
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
    </>
  );
};
