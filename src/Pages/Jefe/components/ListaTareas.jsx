import { useState } from "react";
import { Button, Form, Stack, Badge } from "react-bootstrap";
import { ModalCrearTarea } from "./ModalCrearTarea";
import { ModalEliminarTarea } from "./ModalEliminarTarea";
import { ModalActualizarTarea } from "./ModalActualizarTarea";
import { useNavigate } from "react-router-dom";

export const ListaTareas = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedTarea, setSelectedTarea] = useState(null);

  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("Cliente eliminado");
    setShowDeleteModal(false);
    // Aquí iría la lógica para hacer el DELETE a la API
  };

  const handleUpdate = (updatedData) => {
    console.log("Datos actualizados:", updatedData);
    // Aquí iría la lógica para hacer el PUT o PATCH a la API
  };

  const tareas = [
    {
      id: 1,
      orden_id: 1,
      mecanico_id: 1,
      estado_de_trabajo: "completado",
      notificacion_al_cliente: "Esto lo dice el mecanico",
      created_at: "2025-04-22T17:31:04.000000Z",
      updated_at: "2025-04-22T17:31:04.000000Z",
      orden: {
        id: 1,
        cliente_id: 1,
        vehiculo_id: 1,
        detalleDeTrabajosARealizar:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut natus dolorum accusantium molestiae qui tenetur vel nemo ratione, in modi voluptates similique blanditiis, illo et quos quod, tempora harum.",
        recepcion: "2025-03-15",
        prometido: null,
        cambio_de_aceite: 0,
        cambio_de_filtro: 1,
        detallesDeEntradaDelVehiculo:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut natus dolorum accusantium molestiae qui tenetur vel nemo ratione, in modi voluptates similique blanditiis, illo et quos quod, tempora harum.",
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
        },
      },
      productos_usados: [
        {
          id: 1,

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
        conv: 0,
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
        delanteros: 0,
        traseros: 1,
        estacionamiento: 1,
        numero_cricket: 1,
        created_at: "2025-04-22T18:24:46.000000Z",
        updated_at: "2025-04-22T18:24:46.000000Z",
      },
      estado_neumaticos: {
        id: 1,
        delanteros_derechos: 1,
        delanteros_izquierdos: 0,
        traseros_derechos: 1,
        traseros_izquierdos: 0,
        created_at: "2025-04-22T18:25:02.000000Z",
        updated_at: "2025-04-22T18:25:02.000000Z",
      },
    },
  ];

  tareas.map((tarea) => {
    console.log({ orden: tarea.orden.cliente.nombre });
  });

  const getEstadoColor = (estado) => {
    switch (estado) {
      case "pendiente":
        return "danger";
      case "en_proceso":
        return "secondary";
      case "pendiente_por_pagar":
        return "warning";
      case "completado":
        return "success";
      default:
        return "secondary";
    }
  };

  return (
    <div className="container-fluid px-4 py-3 animate__animated animate__fadeIn">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <h1 className="h2 mb-1 fw-bold text-primary">Gestión de Tareas</h1>
          <p className="text-muted mb-0">Seguimiento de trabajos en taller</p>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
          className="d-flex align-items-center gap-2"
        >
          <i className="bi bi-clipboard-plus"></i>
          Nueva Tarea
        </Button>
      </div>
      {/* Buscador */}
      <div className="mb-4">
        <div className="input-group input-group-lg shadow-sm">
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search text-muted"></i>
          </span>
          <Form.Control
            type="search"
            placeholder="Buscar tareas..."
            className="border-start-0"
          />
        </div>
      </div>
      {/* Tabla Responsive */}
      <div className="card shadow-sm border-0 overflow-hidden">
        <div className="table-responsive rounded-3">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col">ID</th>
                <th scope="col" className="ps-4">
                  Orden ID
                </th>
                <th scope="col">Mecánico ID</th>
                <th scope="col">Estado</th>
                <th scope="col">Notificación al Cliente</th>
                <th scope="col" className="text-end pe-4">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {tareas.map((tarea) => (
                <tr key={tarea.id} className="transition-all">
                  <td className="ps-4 fw-semibold"># {tarea.id}</td>
                  <td className="ps-4 fw-semibold"># {tarea.orden_id}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-person-workspace"></i>
                      <span className="font-monospace">
                        {tarea.mecanico_id} - {tarea.mecanico.name}
                      </span>
                    </div>
                  </td>
                  <td>
                    <Badge
                      bg={getEstadoColor(tarea.estado_de_trabajo)}
                      className="text-capitalize"
                    >
                      {tarea.estado_de_trabajo.replace("_", " ")}
                    </Badge>
                  </td>
                  <td>
                    <div className="max-width-300">
                      <p className="mb-0 text-muted text-truncate">
                        {tarea.notificacion_al_cliente}
                      </p>
                    </div>
                  </td>
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
                          setSelectedTarea(tarea);
                          setShowUpdateModal(true);
                        }}
                      >
                        <i className="bi bi-pencil"></i>
                        <span className="d-none d-md-inline">Editar</span>
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="d-flex align-items-center gap-2"
                        onClick={() => setShowDeleteModal(true)}
                      >
                        <i className="bi bi-trash"></i>
                        <span className="d-none d-md-inline">Eliminar</span>
                      </Button>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="d-flex align-items-center gap-2"
                        onClick={() =>
                          navigate(`/jefe/tarea/${tarea.id}`, {
                            state: { tarea },
                          })
                        }
                      >
                        <i className="bi bi-eye"></i>
                        <span className="d-none d-lg-inline">Detalles</span>
                      </Button>
                    </Stack>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-lg">
            <li className="page-item disabled">
              <button className="page-link">Anterior</button>
            </li>
            <li className="page-item active">
              <button className="page-link">1</button>
            </li>
            <li className="page-item">
              <button className="page-link">2</button>
            </li>
            <li className="page-item">
              <button className="page-link">3</button>
            </li>
            <li className="page-item">
              <button className="page-link">Siguiente</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Modal */}
      <ModalCrearTarea
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />
      {/* Modal de eliminación */}
      <ModalEliminarTarea
        showModal={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={handleDelete}
      />
      {/* Modal de actualización */}
      <ModalActualizarTarea
        showModal={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        handleUpdate={handleUpdate}
        tareaData={selectedTarea}
      />
    </div>
  );
};
