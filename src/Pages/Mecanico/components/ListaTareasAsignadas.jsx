import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Collapse,
  Table,
  Row,
  Col,
  Stack,
  ButtonGroup,
} from "react-bootstrap";

export const ListaTareasAsignadas = ({ tasks, components, materials }) => {
  const [expandedTaskId, setExpandedTaskId] = useState(null);
  const [activeTab, setActiveTab] = useState("components");

  const toggleTask = (taskId) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
    setActiveTab("components");
  };

  const filterComponentsByTask = (taskId) => {
    return {
      trenDelantero: components.trenDelantero.filter(
        (item) => item.tarea_id === taskId
      ),
      trenTrasero: components.trenTrasero.filter(
        (item) => item.tarea_id === taskId
      ),
      frenos: components.frenos.filter((item) => item.tarea_id === taskId),
      estadoNeumaticos: components.estadoNeumaticos.filter(
        (item) => item.tarea_id === taskId
      ),
    };
  };

  const filterMaterialsByTask = (taskId) => {
    return materials.filter((material) => material.tarea_id === taskId);
  };

  const renderComponentSection = (title, items, icon) => (
    <div className="mb-4">
      <h5 className="d-flex align-items-center gap-2 text-primary">
        <i className={`bi bi-${icon}`}></i>
        {title}
      </h5>
      <Row>
        {Object.entries(items[0]).map(
          ([key, value], idx) =>
            value && (
              <Col key={idx} md={6} lg={4} className="mb-2">
                <div className="bg-light p-3 rounded">
                  <strong className="text-capitalize">
                    {key.replace(/_/g, " ")}:
                  </strong>
                  <span className="ms-2">{value.toString()}</span>
                </div>
              </Col>
            )
        )}
      </Row>
      <Button>Editar</Button>
      <Button>Borrar</Button>
      <hr />
    </div>
  );

  const renderMaterials = (materials) => (
    <div className="mt-4">
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="bg-primary text-white">
          <tr>
            <th>Producto ID</th>
            <th className="text-center">Cantidad</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material, idx) => (
            <tr key={idx}>
              <td>{material.producto_id}</td>
              <td className="text-center">{material.cantidad}</td>
              <td>
                <Button>Editar</Button>
                <Button>Borrar</Button>
              </td>
            </tr>
          ))}
          {/* campo de precio total */}
          <tr>
            <td colSpan="2" className="text-end fw-bold">
              Precio Total:
            </td>
            <td className="text-center fw-bold">70$</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );

  return (
    <div className="container-fluid px-4 py-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2 fw-bold text-primary">Tareas Asignadas</h1>
        <Badge bg="light" text="dark" className="fs-6">
          <i className="bi bi-list-task me-2"></i>
          {tasks.length} Tareas
        </Badge>
      </div>

      {tasks.map((task) => {
        const taskComponents = filterComponentsByTask(task.id);
        const taskMaterials = filterMaterialsByTask(task.id);

        return (
          <>
            <Card key={task.id} className="mb-3 shadow-lg hover-shadow">
              <Card.Header
                className="d-flex justify-content-between align-items-center bg-light cursor-pointer"
                onClick={() => toggleTask(task.id)}
              >
                <Stack gap={2}>
                  <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-car-front fs-4 text-primary"></i>
                    <div>
                      <h5 className="mb-0">Orden #{task.orden_id}</h5>
                      <h6 className="mb-0">
                        Notifacion al cliente: {task.notificacion_al_cliente}
                      </h6>
                      <small className="text-muted">
                        Mecánico: {task.mecanico_id}
                      </small>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Badge
                      bg="dark"
                      className="d-flex align-items-center gap-1"
                    >
                      <i className="bi bi-person-workspace"></i>
                      {task.estado_de_trabajo}
                    </Badge>
                  </div>
                </Stack>
              </Card.Header>

              <Collapse in={expandedTaskId === task.id}>
                <Card.Body>
                  <p className="lead">{task.detalles_de_tarea}</p>

                  <div className="mb-4">
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant={
                          activeTab === "components"
                            ? "primary"
                            : "outline-primary"
                        }
                        onClick={() => setActiveTab("components")}
                      >
                        <i className="bi bi-gear-wide-connected me-2"></i>
                        Componentes
                      </Button>
                      <Button
                        variant={
                          activeTab === "materials"
                            ? "primary"
                            : "outline-primary"
                        }
                        onClick={() => setActiveTab("materials")}
                      >
                        <i className="bi bi-box-seam me-2"></i>
                        Materiales
                      </Button>
                    </ButtonGroup>
                  </div>

                  {activeTab === "components" && (
                    <div className="technical-details">
                      {renderComponentSection(
                        "Tren Delantero",
                        taskComponents.trenDelantero,
                        "pc-horizontal"
                      )}
                      {renderComponentSection(
                        "Tren Trasero",
                        taskComponents.trenTrasero,
                        "pc"
                      )}
                      {renderComponentSection(
                        "Sistema de Frenos",
                        taskComponents.frenos,
                        "brake-front"
                      )}
                      {renderComponentSection(
                        "Estado de Neumáticos",
                        taskComponents.estadoNeumaticos,
                        "truck-front"
                      )}
                    </div>
                  )}

                  {activeTab === "materials" && renderMaterials(taskMaterials)}
                </Card.Body>
              </Collapse>
            </Card>
            <Button className="mb-5">Editar</Button>
          </>
        );
      })}
    </div>
  );
};
