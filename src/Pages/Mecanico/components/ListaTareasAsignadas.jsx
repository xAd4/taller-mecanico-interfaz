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

export const ListaTareasAsignadas = () => {
  const [expandedTaskId, setExpandedTaskId] = useState(null);
  const [activeTab, setActiveTab] = useState("components");

  const toggleTask = (taskId) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
    setActiveTab("components");
  };

  const tasks = [
    {
      id: 1,
      vehicleName: "Toyota Corolla",
      licensePlate: "ABC-123",
      client: "Juan Pérez",
      status: "En progreso",
      deadline: "2023-05-15",
      technician: "Carlos Rodríguez",
      description: "Revisión general y cambio de aceite",
      priority: "Alta",
      components: {
        trenDelantero: [
          {
            conv: "Amortiguadores delanteros",
            comba: "Requiere cambio",
            avance: "Desgaste excesivo",
            rotulas: "Desgaste excesivo",
            punteros: "Desgaste excesivo",
            bujes: "Desgaste excesivo",
            caja_direccion: "Desgaste excesivo",
            conv2: "Desgaste excesivo",
            comba2: "Desgaste excesivo",
            avance2: "Desgaste excesivo",
            amort: "Desgaste excesivo",
          },
        ],
        trenTrasero: [
          {
            conv: "Amortiguadores traseros",
            comba: "Requiere cambio",
            brazos_susp: "",
            articulaciones: "",
            conv2: "",
            comba2: "",
            amort: "",
          },
        ],
        frenos: [
          {
            delanteros: "Pastillas de freno",
            traseros: "Desgaste crítico",
            estacionamiento: "Cambio inmediato",
            numero_cricket: "Cambio inmediato",
          },
        ],
        estadoNeumaticos: [
          {
            delanteros_derechos: "Neumático delantero izquierdo",
            delanteros_izquierdos: "50% vida útil",
            traseros_derechos: "",
            traseros_izquierdos: "",
          },
        ],
      },
      materials: [
        {
          id: 1,
          name: "Aceite de motor 5W-30",
          quantity: 5,
          price: 12.5,
          total: 62.5,
        },
        {
          id: 2,
          name: "Filtro de aceite",
          quantity: 1,
          price: 8.75,
          total: 8.75,
        },
        {
          id: 3,
          name: "Amortiguadores delanteros",
          quantity: 2,
          price: 85.0,
          total: 170.0,
        },
        {
          id: 4,
          name: "Amortiguadores traseros",
          quantity: 2,
          price: 75.0,
          total: 150.0,
        },
        {
          id: 5,
          name: "Pastillas de freno",
          quantity: 1,
          price: 45.0,
          total: 45.0,
        },
      ],
      totalPrice: 436.25,
    },
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      "en progreso": { bg: "primary", icon: "gear-wide-connected" },
      pendiente: { bg: "warning", icon: "clock-history" },
      completado: { bg: "success", icon: "check-circle" },
      default: { bg: "secondary", icon: "question-circle" },
    };

    const { bg, icon } =
      statusConfig[status.toLowerCase()] || statusConfig.default;

    return (
      <Badge bg={bg} className="d-flex align-items-center gap-2">
        <i className={`bi bi-${icon}`}></i>
        {status}
      </Badge>
    );
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
                  <span className="ms-2">{value}</span>
                </div>
              </Col>
            )
        )}
      </Row>
    </div>
  );

  const renderMaterials = (materials, totalPrice) => (
    <div className="mt-4">
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="bg-primary text-white">
          <tr>
            <th>Material</th>
            <th className="text-center">Cantidad</th>
            <th className="text-end">P. Unitario</th>
            <th className="text-end">Total</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <td>{material.name}</td>
              <td className="text-center">{material.quantity}</td>
              <td className="text-end">${material.price.toFixed(2)}</td>
              <td className="text-end">${material.total.toFixed(2)}</td>
            </tr>
          ))}
          <tr className="fw-bold">
            <td colSpan="3" className="text-end">
              Total General
            </td>
            <td className="text-end">${totalPrice.toFixed(2)}</td>
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

      {tasks.map((task) => (
        <Card key={task.id} className="mb-3 shadow-lg hover-shadow">
          <Card.Header
            className="d-flex justify-content-between align-items-center bg-light cursor-pointer"
            onClick={() => toggleTask(task.id)}
          >
            <Stack gap={2}>
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-car-front fs-4 text-primary"></i>
                <div>
                  <h5 className="mb-0">{task.vehicleName}</h5>
                  <small className="text-muted">
                    {task.licensePlate} • {task.client}
                  </small>
                </div>
              </div>
              <div className="d-flex gap-2">
                <Badge bg="dark" className="d-flex align-items-center gap-1">
                  <i className="bi bi-person-workspace"></i>
                  {task.technician}
                </Badge>
                <Badge
                  bg={task.priority === "Alta" ? "danger" : "warning"}
                  className="text-capitalize"
                >
                  {task.priority}
                </Badge>
              </div>
            </Stack>
            <Stack gap={2} className="align-items-end">
              {getStatusBadge(task.status)}
              <small className="text-muted">
                <i className="bi bi-calendar-check me-2"></i>
                {task.deadline}
              </small>
            </Stack>
          </Card.Header>

          <Collapse in={expandedTaskId === task.id}>
            <Card.Body>
              <p className="lead">{task.description}</p>

              <div className="mb-4">
                <ButtonGroup aria-label="Basic example">
                  <Button
                    variant={
                      activeTab === "components" ? "primary" : "outline-primary"
                    }
                    onClick={() => setActiveTab("components")}
                  >
                    <i className="bi bi-gear-wide-connected me-2"></i>
                    Detalles Técnicos
                  </Button>
                  <Button
                    variant={
                      activeTab === "materials" ? "primary" : "outline-primary"
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
                    task.components.trenDelantero,
                    "pc-horizontal"
                  )}
                  {renderComponentSection(
                    "Tren Trasero",
                    task.components.trenTrasero,
                    "pc"
                  )}
                  {renderComponentSection(
                    "Sistema de Frenos",
                    task.components.frenos,
                    "brake-front"
                  )}
                  {renderComponentSection(
                    "Estado de Neumáticos",
                    task.components.estadoNeumaticos,
                    "truck-front"
                  )}
                </div>
              )}

              {activeTab === "materials" &&
                renderMaterials(task.materials, task.totalPrice)}
            </Card.Body>
          </Collapse>
        </Card>
      ))}
    </div>
  );
};
