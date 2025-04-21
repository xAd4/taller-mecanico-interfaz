import { useState } from "react";
import { Button, Badge, Table, Stack, Row, Col } from "react-bootstrap";

export const ListaTareasAsignadas2 = () => {
  const [activeTab, setActiveTab] = useState("delantero");

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
      <div className="container-fluid px-4 py-3">
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
            <div className="card-body">
              <Row>
                <Col md={6}>
                  <p className="mb-2">
                    <strong>Estado de trabajo actual:</strong> Pendiente
                  </p>
                  <p className="mb-2">
                    <strong>Detalles de la tarea:</strong> Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Itaque, quas ullam
                    maxime soluta fugiat atque id unde temporibus culpa
                    perspiciatis labore illum quia nesciunt corporis eos est
                    aliquid natus quis!.
                  </p>
                </Col>
                <Col md={6}>
                  <p className="mb-2">
                    <strong>Notificación al cliente:</strong> Eaque, nisi sint
                    quam enim provident tempore hic aliquid vitae magnam
                    assumenda, repellat doloribus illum tempora minima porro!
                    Debitis necessitatibus veritatis praesentium?
                  </p>
                </Col>
              </Row>
              {/* Botón Editar */}
              <div className="text-end mt-3">
                <Button variant="primary">
                  <i className="bi bi-pencil-square me-2"></i>
                  Editar
                </Button>
              </div>
            </div>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Estado</td>
                <td className="text-center">{renderStatusIcon(true)}</td>
                <td className="text-center">{renderStatusIcon(true)}</td>
                <td className="text-center">{renderStatusIcon(true)}</td>
                <td className="text-center">{renderStatusIcon(false)}</td>
                <td className="text-center">{renderStatusIcon(true)}</td>
                <td className="text-center">{renderStatusIcon(false)}</td>
                <td className="text-center">{renderStatusIcon(true)}</td>
              </tr>
            </tbody>
          </Table>
        )}

        {activeTab === "trasero" && (
          <Table striped bordered hover responsive className="shadow-sm">
            {/* Similar estructura para Tren Trasero */}
          </Table>
        )}

        {activeTab === "frenos" && (
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
              <tr>
                <td>Estado</td>
                <td className="text-center">{renderStatusIcon(true)}</td>
                <td className="text-center">{renderStatusIcon(true)}</td>
                <td className="text-center">{renderStatusIcon(false)}</td>
                <td className="text-center">{renderStatusIcon(false)}</td>
              </tr>
            </tbody>
          </Table>
        )}

        {activeTab === "neumaticos" && (
          <Table striped bordered hover responsive className="shadow-sm">
            {/* Estructura para Neumáticos */}
          </Table>
        )}

        {activeTab === "productos" && (
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mexlub 4T</td>
                    <td className="text-end">12</td>
                    <td className="text-end">$8.00</td>
                    <td className="text-end fw-bold">$96.00</td>
                  </tr>
                  {/* Más filas */}
                </tbody>
                <tfoot className="fw-bold">
                  <tr>
                    <td colSpan="3" className="text-end">
                      Total General
                    </td>
                    <td className="text-end">$96.00</td>
                  </tr>
                </tfoot>
              </Table>
            </div>
          </div>
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
      </div>
    </>
  );
};
