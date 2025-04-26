import { useState } from "react";
import { Button, Badge, Table, Stack, Row, Col } from "react-bootstrap";
import { ModalActualizarTarea } from "./ModalActualizarTarea";
import { ModalActualizarTrenDelantero } from "./ModalActualizarTrenDelantero";
import { ModalActualizarTrenTrasero } from "./ModalActualizarTrenTrasero";
import { ModalActualizarFrenos } from "./ModalActualizarFrenos";
import { ModalActualizarNeumaticos } from "./ModalActualizarNeumaticos";
import { ModalActualizarProductos } from "./ModalActualizarProductos";
import { ModalCrearProducto } from "./ModalCrearProducto";
import { ModalEliminarProducto } from "./ModalEliminarProducto";
import { Layout } from "./common/Layout";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const DetalleTareas = () => {
  const [activeTab, setActiveTab] = useState("delantero");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showTrenDelanteroModal, setShowTrenDelanteroModal] = useState(false);
  const [showTrenTraseroModal, setShowTrenTraseroModal] = useState(false);
  const [showFrenosModal, setShowFrenosModal] = useState(false);
  const [showNeumaticosModal, setShowNeumaticosModal] = useState(false);
  const [showProductosModal, setShowProductosModal] = useState(false);
  const [selectedTarea, setSelectedTarea] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const tarea = state?.tarea;

  const handleUpdate = (updatedData) => {
    console.log("Datos actualizados:", updatedData);
    // Lógica para actualizar la API
  };

  const handleDelete = () => {
    console.log("Cliente eliminado");
    setShowDeleteModal(false);
    // Lógica para eliminar en la API
  };

  const onBack = () => {
    navigate(-1);
  };

  const renderStatusIcon = (status) => (
    <span className={`fs-5 ${status ? "text-success" : "text-danger"}`}>
      {status ? (
        <i className="bi bi-check-circle-fill" />
      ) : (
        <i className="bi bi-x-circle-fill" />
      )}
    </span>
  );

  const TabButton = ({ id, title, icon }) => (
    <Button
      variant={activeTab === id ? "primary" : "outline-primary"}
      onClick={() => setActiveTab(id)}
      className="d-flex align-items-center gap-2"
    >
      <i className={`bi bi-${icon}`}></i>
      {title}
    </Button>
  );

  return (
    <Layout>
      <div className="container-fluid px-4 py-3 animate__animated animate__fadeIn">
        <Button
          variant="outline-primary"
          size="sm"
          className="mb-4 d-flex align-items-center gap-2"
          onClick={onBack}
        >
          <i className="bi bi-arrow-left"></i>
          <span className="d-none d-md-inline">Regresar</span>
        </Button>
        <div className="container-fluid px-4 py-3">
          {/* Encabezado principal actualizado */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
            {/* Título principal */}
            <div>
              <h1 className="h2 fw-bold text-primary mb-1">
                <i className="bi bi-clipboard-check me-2"></i>
                Detalles de la Tarea #{tarea.id}
              </h1>
              <p className="text-muted mb-0">
                Estado:{" "}
                <Badge
                  bg={
                    tarea.estado_de_trabajo === "pendiente"
                      ? "warning"
                      : "success"
                  }
                  className="text-capitalize"
                >
                  {tarea.estado_de_trabajo}
                </Badge>
              </p>
            </div>
            {/* Información del cliente */}
            <div className="bg-light p-3 rounded shadow-sm">
              <h6 className="fw-bold mb-2">
                <i className="bi bi-person me-2"></i>
                Cliente
              </h6>
              <p className="mb-1">
                <strong>Nombre:</strong> {tarea.orden.cliente.nombre}
              </p>
              <p className="mb-1">
                <strong>Email:</strong>{" "}
                <a href={`mailto:${tarea.orden.cliente.email}`}>
                  {tarea.orden.cliente.email}
                </a>
              </p>
              <p className="mb-1">
                <strong>Teléfono:</strong> {tarea.orden.cliente.telefono}
              </p>
              <p className="mb-0">
                <strong>Domicilio:</strong> {tarea.orden.cliente.domicilio}
              </p>
            </div>

            {/* Información del vehículo */}
            <div className="bg-light p-3 rounded shadow-sm">
              <h6 className="fw-bold mb-2">
                <i className="bi bi-car-front me-2"></i>
                Vehículo
              </h6>
              <p className="mb-1">
                <strong>Marca/Modelo:</strong> {tarea.orden.vehiculo.marca}{" "}
                {tarea.orden.vehiculo.modelo}
              </p>
              <p className="mb-1">
                <strong>Matrícula:</strong> {tarea.orden.vehiculo.matricula}
              </p>
              <p className="mb-1">
                <strong>Kilometraje:</strong> {tarea.orden.vehiculo.kilometraje}{" "}
                km
              </p>
              <p className="mb-1">
                <strong>Color:</strong> {tarea.orden.vehiculo.color}
              </p>
              <p className="mb-1">
                <strong>Nro Serie:</strong>{" "}
                {tarea.orden.vehiculo.numero_de_serie}
              </p>
              <p className="mb-0">
                <strong>Nro Motor:</strong>{" "}
                {tarea.orden.vehiculo.numero_de_motor}
              </p>
            </div>
          </div>

          {/* Sección de información principal actualizada */}
          <div className="card shadow-sm mb-4">
            <div className="card-body" key={tarea.id}>
              <Row>
                <Col md={6}>
                  <p className="mb-2">
                    <strong>Detalles de trabajos a realizar: </strong>
                    {tarea.orden.detalle_de_trabajos_a_realizar}
                  </p>
                  <p className="mb-2">
                    <strong>Detalles de entrada del vehículo: </strong>
                    {tarea.orden.detalles_de_entrada_del_vehiculo}
                  </p>
                </Col>
                <Col md={6}>
                  <p className="mb-2">
                    <strong>Recepción:</strong> {tarea.orden.recepcion}
                  </p>
                  <p className="mb-2">
                    <strong>Fecha prometida:</strong>
                    {tarea.orden.prometido || "Sin fecha definida"}
                  </p>
                  <p className="mb-2">
                    <strong>Cambio de aceite:</strong>
                    {tarea.orden.cambio_de_aceite ? "Sí" : "No"}
                  </p>
                  <p className="mb-2">
                    <strong>Cambio de filtro:</strong>
                    {tarea.orden.cambio_de_filtro ? "Sí" : "No"}
                  </p>
                </Col>
              </Row>

              {/* Notificación al cliente */}
              {tarea.notificacion_al_cliente && (
                <div className="mt-3 p-3 bg-light rounded">
                  <h6 className="text-primary mb-2">
                    <i className="bi bi-chat-left-text me-2"></i>
                    Notificación al Cliente
                  </h6>
                  <p className="mb-0">{tarea.notificacion_al_cliente}</p>
                </div>
              )}

              {/* Botón Editar */}
              <div className="text-end mt-3">
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedTarea(tarea);
                    setShowUpdateModal(true);
                  }}
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  Editar
                </Button>
              </div>
            </div>
          </div>

          {/* Sección de estado general */}
          <div className="mt-4 p-4 bg-light rounded-3 shadow-sm">
            <Row className="align-items-center">
              <Col md={8}>
                <h5 className="mb-3 d-flex align-items-center gap-2">
                  <i className="bi bi-info-circle text-primary"></i>
                  Estado General de la Tarea
                </h5>
                <p className="mb-2">
                  <strong>Última actualización: </strong>
                  {new Date(tarea.updated_at).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="mb-0">
                  <strong>Responsable: </strong> ID #{tarea.mecanico_id} -{" "}
                  {tarea.mecanico.name}
                </p>
              </Col>
            </Row>
          </div>

          {/* Botones de navegación */}
          <div className="mb-4 mt-5">
            <Stack direction="horizontal" gap={3} className="flex-wrap">
              <TabButton
                id="delantero"
                title="Tren Delantero"
                icon="gear-wide-connected"
              />
              <TabButton id="trasero" title="Tren Trasero" icon="gear" />
              <TabButton id="frenos" title="Frenos" icon="brake-front" />
              <TabButton id="neumaticos" title="Neumáticos" icon="tire" />
              <TabButton id="productos" title="Productos" icon="box-seam" />
            </Stack>
          </div>
        </div>

        {/* Contenido de las pestañas */}
        {activeTab === "delantero" && (
          <>
            <Table striped bordered hover responsive className="shadow-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Componente</th>
                  <th>Conv</th>
                  <th>Comba</th>
                  <th>Avance</th>
                  <th>Rótulas</th>
                  <th>Punteros</th>
                  <th>Bujes</th>
                  <th>Caja Dirección</th>
                  <th>Conv2</th>
                  <th>Comba2</th>
                  <th>Avance2</th>
                  <th>Amort</th>
                </tr>
              </thead>
              <tbody>
                <tr key={tarea.id}>
                  <td>Estado</td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.conv)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.comba)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.avance)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.rotulas)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.punteros)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.bujes)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.caja_direccion)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.conv2)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.comba2)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.avance2)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.amort)}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Stack
              direction="horizontal"
              gap={2}
              className="justify-content-end"
            >
              <Button
                variant="outline-primary"
                size="sm"
                className="d-flex align-items-center gap-2"
                onClick={() => {
                  setSelectedData(tarea.tren_delantero);
                  setShowTrenDelanteroModal(true);
                }}
              >
                <i className="bi bi-pencil"></i>
                <span className="d-none d-md-inline">Editar</span>
              </Button>
            </Stack>
          </>
        )}
        {activeTab === "trasero" && (
          <>
            <Table striped bordered hover responsive className="shadow-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Componente</th>
                  <th>Conv</th>
                  <th>Comba</th>
                  <th>Brazos Susp</th>
                  <th>Articulaciones</th>
                  <th>Conv2</th>
                  <th>Comba2</th>
                  <th>Amort</th>
                </tr>
              </thead>
              <tbody>
                <tr key={tarea.id}>
                  <td>Estado</td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.conv)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.comba)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.brazos_susp)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.articulaciones)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.conv2)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.comba2)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.amort)}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Stack
              direction="horizontal"
              gap={2}
              className="justify-content-end"
            >
              <Button
                variant="outline-primary"
                size="sm"
                className="d-flex align-items-center gap-2"
                onClick={() => {
                  setSelectedData(tarea.tren_trasero);
                  setShowTrenTraseroModal(true);
                }}
              >
                <i className="bi bi-pencil"></i>
                <span className="d-none d-md-inline">Editar</span>
              </Button>
            </Stack>
          </>
        )}
        {activeTab === "frenos" && (
          <>
            <Table striped bordered hover responsive className="shadow-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Componente</th>
                  <th>Delanteros</th>
                  <th>Traseros</th>
                  <th>Estacionamiento</th>
                  <th>Numero Cricket</th>
                </tr>
              </thead>
              <tbody>
                <tr key={tarea.id}>
                  <td>Estado</td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.delanteros)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.traseros)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.estacionamiento)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.numero_cricket)}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Stack
              direction="horizontal"
              gap={2}
              className="justify-content-end"
            >
              <Button
                variant="outline-primary"
                size="sm"
                className="d-flex align-items-center gap-2"
                onClick={() => {
                  setSelectedData(tarea.frenos);
                  setShowFrenosModal(true);
                }}
              >
                <i className="bi bi-pencil"></i>
                <span className="d-none d-md-inline">Editar</span>
              </Button>
            </Stack>
          </>
        )}
        {activeTab === "neumaticos" && (
          <>
            <Table striped bordered hover responsive className="shadow-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Delanteros derechos</th>
                  <th>Delanteros izquierdos</th>
                  <th>Traseros derechos</th>
                  <th>Traseros izquierdos</th>
                </tr>
              </thead>
              <tbody>
                <tr key={tarea.id}>
                  <td>Estado</td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.delanteros_derechos)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(
                      tarea.tren_delantero.delanteros_izquierdos
                    )}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.traseros_derechos)}
                  </td>
                  <td className="text-center">
                    {renderStatusIcon(tarea.tren_delantero.traseros_izquierdos)}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Stack
              direction="horizontal"
              gap={2}
              className="justify-content-end"
            >
              <Button
                variant="outline-primary"
                size="sm"
                className="d-flex align-items-center gap-2"
                onClick={() => {
                  setSelectedData(tarea.estado_neumaticos);
                  setShowNeumaticosModal(true);
                }}
              >
                <i className="bi bi-pencil"></i>
                <span className="d-none d-md-inline">Editar</span>
              </Button>
            </Stack>
          </>
        )}
        {activeTab === "productos" && (
          <>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-4">
                  <i className="bi bi-box-seam me-2"></i>
                  Productos Utilizados
                </h5>
                <Table hover className="mb-0">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      {/* <th className="text-end">P. Unitario</th> */}
                      {/* <th className="text-end">Total</th> */}
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tarea.productos_usados.map((producto) => (
                      <tr key={producto.id}>
                        <td>{producto.producto.nombre}</td>
                        <td>{producto.cantidad}</td>
                        {/* <td className="text-end">
                          ${producto.producto.precio}
                        </td> */}
                        {/* <td className="text-end fw-bold">
                          ${producto.total.toFixed(2)}
                        </td> */}
                        <td className="pe-4">
                          <td className="pe-4">
                            <Stack
                              direction="horizontal"
                              gap={2}
                              className="justify-content-end"
                            >
                              <Button
                                variant="outline-primary"
                                size="sm"
                                className="d-flex align-items-center gap-2"
                                onClick={() => {
                                  setSelectedData(producto);
                                  setShowProductosModal(true);
                                }}
                              >
                                <i className="bi bi-pencil"></i>
                                <span className="d-none d-md-inline">
                                  Editar
                                </span>
                              </Button>
                              <Button
                                variant="outline-danger"
                                size="sm"
                                className="d-flex align-items-center gap-2"
                                onClick={() => setShowDeleteModal(true)}
                              >
                                <i className="bi bi-trash"></i>
                                <span className="d-none d-md-inline">
                                  Eliminar
                                </span>
                              </Button>
                            </Stack>
                          </td>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {/* <tfoot className="fw-bold">
                    <tr>
                      <td colSpan="3" className="text-end">
                        Total General
                      </td>
                      <td className="text-end">
                        $
                        {tarea.productos_usados
                          .reduce((acc, curr) => acc + curr.total, 0)
                          .toFixed(2)}
                      </td>
                    </tr>
                  </tfoot> */}
                </Table>
              </div>
            </div>
            <Stack
              direction="horizontal"
              gap={2}
              className="justify-content-end"
            >
              <Button
                variant="outline-success"
                size="sm"
                className="d-flex align-items-center gap-2 mt-2"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <i className="bi bi-pencil"></i>
                <span className="d-none d-md-inline">Agregar producto</span>
              </Button>
            </Stack>
          </>
        )}

        {/* Resto de las pestañas se mantienen igual... */}

        {/* Modal Actualizar Tarea */}
        <ModalActualizarTarea
          showModal={showUpdateModal}
          handleClose={() => setShowUpdateModal(false)}
          handleUpdate={handleUpdate}
          tareaData={selectedTarea}
        />

        <ModalActualizarTrenDelantero
          showModal={showTrenDelanteroModal}
          handleClose={() => setShowTrenDelanteroModal(false)}
          handleUpdate={handleUpdate}
          trenDelanteroData={selectedData}
        />
        <ModalActualizarTrenTrasero
          showModal={showTrenTraseroModal}
          handleClose={() => setShowTrenTraseroModal(false)}
          handleUpdate={handleUpdate}
          trenTraseroData={selectedData}
        />
        <ModalActualizarFrenos
          showModal={showFrenosModal}
          handleClose={() => setShowFrenosModal(false)}
          handleUpdate={handleUpdate}
          frenos={selectedData}
        />
        <ModalActualizarNeumaticos
          showModal={showNeumaticosModal}
          handleClose={() => setShowNeumaticosModal(false)}
          handleUpdate={handleUpdate}
          neumaticosData={selectedData}
        />
        <ModalActualizarProductos
          showModal={showProductosModal}
          handleClose={() => setShowProductosModal(false)}
          handleUpdate={handleUpdate}
          productosData={selectedData}
        />
        <ModalCrearProducto
          showModal={showModal}
          handleClose={() => setShowModal(false)}
        />
        <ModalEliminarProducto
          showModal={showDeleteModal}
          handleClose={() => setShowDeleteModal(false)}
          handleDelete={handleDelete}
        />
      </div>
    </Layout>
  );
};
