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

export const ListaTareasAsignadas = () => {
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

  const handleUpdate = (updatedData) => {
    console.log("Datos actualizados:", updatedData);
    // Aquí iría la lógica para hacer el PUT o PATCH a la API
  };

  const handleDelete = () => {
    console.log("Cliente eliminado");
    setShowDeleteModal(false);
    // Aquí iría la lógica para hacer el DELETE a la API
  };

  const tareas = [
    {
      id: 1,
      orden_id: 1,
      mecanico_id: 1,
      estado_de_trabajo: "pendiente",
      detalles_de_tarea: "El mecanico 1 tiene que hacer cosas",
      notificacion_al_cliente: "Esto lo dice el mecanico",
      created_at: "2025-04-22T17:31:04.000000Z",
      updated_at: "2025-04-22T17:31:04.000000Z",
      orden: {
        id: 1,
        cliente_id: 1,
        vehiculo_id: 1,
        datos_extras:
          "Renault Twingo viene con choque en la puerta izquierda. Inyectores sucios y buche de aceite en el motor.",
        recepcion: "2025-03-15",
        prometido: null,
        cambio_de_aceite: 1,
        cambio_de_filtro: 1,
        detalles: "El mecanico 1 debe hacer cosas",
        created_at: "2025-04-22T17:27:39.000000Z",
        updated_at: "2025-04-22T17:27:39.000000Z",
        cliente: {
          id: 1,
          nombre: "Cliente numero 2",
          apellido: "Apellido de Cliente numero 2",
          email: "cliente@test.com",
          dni: "45678910",
          rut: "78945610",
          telefono: "1234578944",
          domicilio: "Domicilio del cliente numero 2",
          created_at: "2025-04-22T17:27:17.000000Z",
          updated_at: "2025-04-22T17:27:17.000000Z",
        },
        vehiculo: {
          id: 1,
          modelo: "Renault",
          marca: "Twingo",
          color: "Rojo",
          matricula: "AB456CR",
          kilometraje: null,
          numero_de_serie: null,
          numero_de_motor: null,
          fecha_de_compra: null,
          created_at: "2025-04-22T17:27:30.000000Z",
          updated_at: "2025-04-22T17:27:30.000000Z",
        },
      },
      productos_usados: [
        {
          id: 1,
          tarea_id: 1,
          producto_id: 1,
          cantidad: 70,
          created_at: "2025-04-22T18:29:11.000000Z",
          updated_at: "2025-04-22T18:29:11.000000Z",
          total: 1119.3,
          producto: {
            id: 1,
            categoria_id: 2,
            nombre: "Producto de Filtros",
            detalles: "Detalles de Filtros",
            marca: "Millard",
            imagen: "imagen-de-filtros-wolf",
            stock: 30,
            precio: "15.99",
            disponibilidad: 1,
            created_at: "2025-04-22T18:28:52.000000Z",
            updated_at: "2025-04-22T18:29:11.000000Z",
          },
        },
        {
          id: 2,
          tarea_id: 1,
          producto_id: 2,
          cantidad: 70,
          created_at: "2025-04-22T18:36:05.000000Z",
          updated_at: "2025-04-22T18:36:05.000000Z",
          total: 1119.3,
          producto: {
            id: 2,
            categoria_id: 2,
            nombre: "Producto de Aceites",
            detalles: "Detalles de Aceites",
            marca: "Millard",
            imagen: "imagen-de-filtros-wolf",
            stock: 30,
            precio: "15.99",
            disponibilidad: 1,
            created_at: "2025-04-22T18:35:31.000000Z",
            updated_at: "2025-04-22T18:36:05.000000Z",
          },
        },
      ],
      mecanico: {
        id: 1,
        name: "Angel Estarita JEFE",
        email: "jefe@test.com",
        email_verified_at: null,
        created_at: "2025-04-17T13:55:18.000000Z",
        updated_at: "2025-04-17T13:55:18.000000Z",
        rol: "jefe",
      },
      tren_delantero: {
        id: 1,
        tarea_id: 1,
        conv: 1,
        comba: 0,
        avance: 1,
        rotulas: 0,
        punteros: 1,
        bujes: 0,
        caja_direccion: 1,
        conv2: 0,
        comba2: 1,
        avance2: 0,
        amort: 1,
        created_at: "2025-04-22T17:32:10.000000Z",
        updated_at: "2025-04-22T17:32:10.000000Z",
      },
      tren_trasero: {
        id: 1,
        tarea_id: 1,
        conv: 1,
        comba: 1,
        brazos_susp: 1,
        articulaciones: 1,
        conv2: 0,
        comba2: 0,
        amort: 0,
        created_at: "2025-04-22T18:24:29.000000Z",
        updated_at: "2025-04-22T18:24:29.000000Z",
      },
      frenos: {
        id: 1,
        tarea_id: 1,
        delanteros: 0,
        traseros: 1,
        estacionamiento: 1,
        numero_cricket: 1,
        created_at: "2025-04-22T18:24:46.000000Z",
        updated_at: "2025-04-22T18:24:46.000000Z",
      },
      estado_neumaticos: {
        id: 1,
        tarea_id: 1,
        delanteros_derechos: 1,
        delanteros_izquierdos: 0,
        traseros_derechos: 1,
        traseros_izquierdos: 0,
        created_at: "2025-04-22T18:25:02.000000Z",
        updated_at: "2025-04-22T18:25:02.000000Z",
      },
    },
  ];

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
    <>
      <div className="container-fluid px-4 py-3 animate__animated animate__fadeIn">
        <div className="container-fluid px-4 py-3">
          {/* Encabezado principal */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h2 fw-bold text-primary">
              <i className="bi bi-clipboard-check me-2"></i>
              Detalles de la Tarea #1
            </h1>
            <Badge bg="light" text="dark" className="fs-6">
              <i className="bi bi-car-front me-2"></i>
              Toyota Corolla - ABC123
            </Badge>
          </div>

          {/* Información adicional de la tarea */}
          <div className="card shadow-sm mb-4">
            {tareas.map((tarea) => (
              <div className="card-body" key={tarea.id}>
                <Row>
                  <Col md={6}>
                    <p className="mb-2">
                      <strong>Estado de trabajo actual:</strong>{" "}
                      {tarea.estado_de_trabajo}
                    </p>
                    <p className="mb-2">
                      <strong>Detalles de la tarea:</strong>{" "}
                      {tarea.detalles_de_tarea}
                    </p>
                  </Col>
                  <Col md={6}>
                    <p className="mb-2">
                      <strong>Notificación al cliente:</strong>{" "}
                      {tarea.notificacion_al_cliente}
                    </p>
                  </Col>
                </Row>
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
            ))}
          </div>

          {/* Botones de navegación */}
          <div className="mb-4">
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
                {tareas.map((tarea) => (
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
                ))}
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
                  setSelectedData(tareas[0].tren_delantero);
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
                  <th>Brazos susp</th>
                  <th>Articulaciones</th>
                  <th>Conv2</th>
                  <th>Comba2</th>
                  <th>Amort</th>
                </tr>
              </thead>
              <tbody>
                {tareas.map((tarea) => (
                  <tr key={tarea.id}>
                    <td>Estado</td>
                    <td className="text-center">
                      {renderStatusIcon(tarea.tren_trasero.conv)}
                    </td>
                    <td className="text-center">
                      {renderStatusIcon(tarea.tren_trasero.comba)}
                    </td>
                    <td className="text-center">
                      {renderStatusIcon(tarea.tren_trasero.brazos_susp)}
                    </td>
                    <td className="text-center">
                      {renderStatusIcon(tarea.tren_trasero.articulaciones)}
                    </td>
                    <td className="text-center">
                      {renderStatusIcon(tarea.tren_trasero.conv2)}
                    </td>
                    <td className="text-center">
                      {renderStatusIcon(tarea.tren_trasero.comba2)}
                    </td>
                    <td className="text-center">
                      {renderStatusIcon(tarea.tren_trasero.amort)}
                    </td>
                  </tr>
                ))}
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
                  setSelectedData(tareas[0].tren_trasero);
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
                  <th>N° Cricket</th>
                </tr>
              </thead>
              <tbody>
                {tareas.map((tarea) => (
                  <tr key={tarea.id}>
                    <td>Estado</td>
                    <td className="text-center">
                      {renderStatusIcon(tarea.frenos.delanteros)}
                    </td>
                    <td className="text-center">
                      {renderStatusIcon(tarea.frenos.traseros)}
                    </td>
                    <td className="text-center">
                      {renderStatusIcon(tarea.frenos.estacionamiento)}
                    </td>
                    <td className="text-center">
                      {renderStatusIcon(tarea.frenos.numero_cricket)}
                    </td>
                  </tr>
                ))}
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
                  setSelectedData(tareas[0].frenos);
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
                  <th>Componente</th>
                  <th>Delanteros derechos</th>
                  <th>Delanteros izquierdos</th>
                  <th>Traseros derechos</th>
                  <th>Traseros izquierdos</th>
                </tr>
              </thead>
              <tbody>
                {tareas.map((tarea) => (
                  <tr key={tarea.id}>
                    <td>Estado</td>
                    <td className="text-center">
                      {renderStatusIcon(
                        tarea.estado_neumaticos.delanteros_derechos
                      )}
                    </td>
                    <td className="text-center">
                      {renderStatusIcon(
                        tarea.estado_neumaticos.delanteros_izquierdos
                      )}
                    </td>
                    <td className="text-center">
                      {renderStatusIcon(
                        tarea.estado_neumaticos.traseros_derechos
                      )}
                    </td>
                    <td className="text-center">
                      {renderStatusIcon(
                        tarea.estado_neumaticos.traseros_izquierdos
                      )}
                    </td>
                  </tr>
                ))}
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
                  setSelectedData(tareas[0].estado_neumaticos);
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
                      <th className="text-end">Cantidad</th>
                      <th className="text-end">P. Unitario</th>
                      <th className="text-end">Total</th>
                      <th className="text-end">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tareas[0].productos_usados.map((producto) => (
                      <tr key={producto.id}>
                        <td>{producto.producto.nombre}</td>
                        <td className="text-end">{producto.cantidad}</td>
                        <td className="text-end">
                          ${producto.producto.precio}
                        </td>
                        <td className="text-end fw-bold">
                          ${producto.total.toFixed(2)}
                        </td>
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
                  <tfoot className="fw-bold">
                    <tr>
                      <td colSpan="3" className="text-end">
                        Total General
                      </td>
                      <td className="text-end">
                        $
                        {tareas[0].productos_usados
                          .reduce((acc, curr) => acc + curr.total, 0)
                          .toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
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

        {/* Sección de estado general */}
        <div className="mt-4 p-4 bg-light rounded-3 shadow-sm">
          <Row className="align-items-center">
            {/* Información del estado general */}
            <Col md={8}>
              <h5 className="mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-info-circle text-primary"></i>
                Estado General de la Tarea
              </h5>
              <p className="mb-2">
                <strong>Estado actual:</strong>{" "}
                <Badge bg="danger" className="text-capitalize">
                  Pendiente
                </Badge>
              </p>
              <p className="mb-2">
                <strong>Última actualización:</strong> 21 de abril de 2025,
                10:30 AM
              </p>
              <p className="mb-0">
                <strong>Responsable:</strong> Carlos Rodríguez
              </p>
            </Col>

            {/* Botones de acción */}
            <Col md={4} className="text-md-end mt-3 mt-md-0">
              <Button variant="secondary" className="me-2">
                <i className="bi bi-hourglass-split me-2"></i>
                Marcar como en proceso
              </Button>
              <Button variant="warning" className="me-2 mt-3">
                <i className="bi bi-currency-dollar"></i>
                Marcar como pendiente por pagar
              </Button>
              <Button variant="success" className="mt-3">
                <i className="bi bi-check-circle me-2"></i>
                Marcar como completado
              </Button>
            </Col>
          </Row>
        </div>

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
    </>
  );
};
