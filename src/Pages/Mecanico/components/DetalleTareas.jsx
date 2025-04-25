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

  const handleUpdate = (updatedData) => {
    console.log("Datos actualizados:", updatedData);
    // Lógica para actualizar la API
  };

  const handleDelete = () => {
    console.log("Cliente eliminado");
    setShowDeleteModal(false);
    // Lógica para eliminar en la API
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

  // Nuevos datos actualizados
  const tareas = [
    {
      id: 44,
      orden_id: 1,
      mecanico_id: 5,
      estado_de_trabajo: "pendiente",
      notificacion_al_cliente: "Esto lo dice el mecanico",
      created_at: "2025-04-25T17:22:14.000000Z",
      updated_at: "2025-04-25T17:22:14.000000Z",
      mecanico: {
        id: 5,
        name: "Angel Estarita",
        email: "test@test.com",
        email_verified_at: null,
        created_at: "2025-04-25T17:19:28.000000Z",
        updated_at: "2025-04-25T17:19:28.000000Z",
        rol: "jefe",
      },
      orden: {
        id: 1,
        cliente_id: 7,
        vehiculo_id: 8,
        detalle_de_trabajos_a_realizar: "Omnis et minus voluptates blanditiis.",
        recepcion: "2025-04-15",
        prometido: "2025-05-21",
        cambio_de_aceite: 1,
        cambio_de_filtro: 0,
        detalles_de_entrada_del_vehiculo:
          "Sit dolor nemo ad quis pariatur. Consequatur quia fugit laboriosam laboriosam ab. Voluptatem sunt rem et et voluptatem quibusdam excepturi. Et atque sequi sed.",
        created_at: "2025-04-25T17:14:05.000000Z",
        updated_at: "2025-04-25T17:14:05.000000Z",
        cliente: {
          id: 7,
          nombre: "Ronaldo",
          email: "hackett.david@example.net",
          rut: "70544280",
          telefono: "(930) 410-6351",
          domicilio:
            "242 Estrella Ferry Suite 085\nWest Brittanystad, SC 37616-0197",
          created_at: "2025-04-25T17:14:05.000000Z",
          updated_at: "2025-04-25T17:14:05.000000Z",
        },
        vehiculo: {
          id: 8,
          modelo: "id",
          marca: "Mayer, Deckow and Wisozk",
          color: "Olive",
          matricula: "VX-1945",
          kilometraje: "6397",
          numero_de_serie: "B2RBH8P29GAXR6FGL",
          numero_de_motor: "6ZS6XP3F92",
          fecha_de_compra: "2022-07-31",
          created_at: "2025-04-25T17:14:05.000000Z",
          updated_at: "2025-04-25T17:14:05.000000Z",
        },
      },
      productos_usados: [
        {
          id: 37,
          tarea_id: 1,
          producto_id: 1,
          cantidad: 1,
          created_at: "2025-04-25T17:14:08.000000Z",
          updated_at: "2025-04-25T17:14:08.000000Z",
          total: 265.76,
          producto: {
            id: 1,
            categoria_id: 1,
            nombre: "Adipisci explicabo.",
            detalles:
              "Natus provident quibusdam omnis animi optio harum. Porro quos omnis quia in maiores temporibus. Doloribus quia quia voluptatem molestiae hic. Accusamus minima eaque modi et modi.",
            marca: "Upton, Wehner and Romaguera",
            stock: 45,
            precio: "265.76",
            disponibilidad: 1,
            created_at: "2025-04-25T17:14:04.000000Z",
            updated_at: "2025-04-25T17:14:04.000000Z",
          },
        },
        {
          id: 60,
          tarea_id: 1,
          producto_id: 19,
          cantidad: 2,
          created_at: "2025-04-25T17:14:08.000000Z",
          updated_at: "2025-04-25T17:14:08.000000Z",
          total: 183.68,
          producto: {
            id: 19,
            categoria_id: 3,
            nombre: "Ut deleniti excepturi.",
            detalles:
              "Accusamus praesentium nobis quia qui nihil totam. At ut modi alias quia rerum. Officia qui odio totam nemo reprehenderit. Placeat omnis est corrupti non in.",
            marca: "Stanton-McLaughlin",
            stock: 40,
            precio: "91.84",
            disponibilidad: 1,
            created_at: "2025-04-25T17:14:04.000000Z",
            updated_at: "2025-04-25T17:14:04.000000Z",
          },
        },
      ],
      tren_delantero: {
        id: 44,
        tarea_id: 44,
        conv: 0,
        comba: 0,
        avance: 0,
        rotulas: 0,
        punteros: 0,
        bujes: 0,
        caja_direccion: 0,
        conv2: 0,
        comba2: 0,
        avance2: 0,
        amort: 0,
        created_at: "2025-04-25T17:22:14.000000Z",
        updated_at: "2025-04-25T17:22:14.000000Z",
      },
      tren_trasero: {
        id: 44,
        tarea_id: 44,
        conv: 0,
        comba: 0,
        brazos_susp: 0,
        articulaciones: 0,
        conv2: 0,
        comba2: 0,
        amort: 0,
        created_at: "2025-04-25T17:22:14.000000Z",
        updated_at: "2025-04-25T17:22:14.000000Z",
      },
      frenos: {
        id: 44,
        tarea_id: 44,
        delanteros: 0,
        traseros: 0,
        estacionamiento: 0,
        numero_cricket: 0,
        created_at: "2025-04-25T17:22:14.000000Z",
        updated_at: "2025-04-25T17:22:14.000000Z",
      },
      estado_neumaticos: {
        id: 44,
        tarea_id: 44,
        delanteros_derechos: 0,
        delanteros_izquierdos: 0,
        traseros_derechos: 0,
        traseros_izquierdos: 0,
        created_at: "2025-04-25T17:22:14.000000Z",
        updated_at: "2025-04-25T17:22:14.000000Z",
      },
    },
  ];

  return (
    <Layout>
      <div className="container-fluid px-4 py-3 animate__animated animate__fadeIn">
        <div className="container-fluid px-4 py-3">
          {/* Encabezado principal actualizado */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
            {/* Título principal */}
            <div>
              <h1 className="h2 fw-bold text-primary mb-1">
                <i className="bi bi-clipboard-check me-2"></i>
                Detalles de la Tarea #{tareas[0].id}
              </h1>
              <p className="text-muted mb-0">
                Estado:{" "}
                <Badge
                  bg={
                    tareas[0].estado_de_trabajo === "pendiente"
                      ? "warning"
                      : "success"
                  }
                  className="text-capitalize"
                >
                  {tareas[0].estado_de_trabajo}
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
                <strong>Nombre:</strong> {tareas[0].orden.cliente.nombre}
              </p>
              <p className="mb-1">
                <strong>Email:</strong>{" "}
                <a href={`mailto:${tareas[0].orden.cliente.email}`}>
                  {tareas[0].orden.cliente.email}
                </a>
              </p>
              <p className="mb-1">
                <strong>Teléfono:</strong> {tareas[0].orden.cliente.telefono}
              </p>
              <p className="mb-0">
                <strong>Domicilio:</strong> {tareas[0].orden.cliente.domicilio}
              </p>
            </div>

            {/* Información del vehículo */}
            <div className="bg-light p-3 rounded shadow-sm">
              <h6 className="fw-bold mb-2">
                <i className="bi bi-car-front me-2"></i>
                Vehículo
              </h6>
              <p className="mb-1">
                <strong>Marca/Modelo:</strong> {tareas[0].orden.vehiculo.marca}{" "}
                {tareas[0].orden.vehiculo.modelo}
              </p>
              <p className="mb-1">
                <strong>Matrícula:</strong> {tareas[0].orden.vehiculo.matricula}
              </p>
              <p className="mb-1">
                <strong>Kilometraje:</strong>{" "}
                {tareas[0].orden.vehiculo.kilometraje} km
              </p>
              <p className="mb-1">
                <strong>Color:</strong> {tareas[0].orden.vehiculo.color}
              </p>
              <p className="mb-1">
                <strong>Nro Serie:</strong>{" "}
                {tareas[0].orden.vehiculo.numero_de_serie}
              </p>
              <p className="mb-0">
                <strong>Nro Motor:</strong>{" "}
                {tareas[0].orden.vehiculo.numero_de_motor}
              </p>
            </div>
          </div>

          {/* Sección de información principal actualizada */}
          <div className="card shadow-sm mb-4">
            {tareas.map((tarea) => (
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
                  <th>Brazos Susp</th>
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
                  <th>Numero Cricket</th>
                </tr>
              </thead>
              <tbody>
                {tareas.map((tarea) => (
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
                        tarea.tren_delantero.delanteros_derechos
                      )}
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
                      {renderStatusIcon(
                        tarea.tren_delantero.traseros_izquierdos
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
                      <th>Cantidad</th>
                      {/* <th className="text-end">P. Unitario</th> */}
                      {/* <th className="text-end">Total</th> */}
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tareas[0].productos_usados.map((producto) => (
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
                        {tareas[0].productos_usados
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
                {new Date(tareas[0].updated_at).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p className="mb-0">
                <strong>Responsable: </strong> ID #{tareas[0].mecanico_id} -{" "}
                {tareas[0].mecanico.name}
              </p>
            </Col>

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
    </Layout>
  );
};
