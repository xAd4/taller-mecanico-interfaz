import React, { useState } from "react";
import {
  Form,
  Button,
  Card,
  ListGroup,
  Spinner,
  Alert,
  Badge,
} from "react-bootstrap";
import { Layout } from "./components/common/Layout";

export const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Simulamos datos para la demostración
  const sampleData = {
    status: true,
    data: {
      results: [
        {
          id: 1,
          datos_extras:
            "Renault Twingo viene con choque en la puerta izquierda...",
          recepcion: "2025-03-15",
          cliente: {
            nombre: "Carlos",
            apellido: "Estarita",
            telefono: "1234578944",
          },
          vehiculo: {
            modelo: "Renault Twingo",
            color: "Rojo",
            matricula: "AB456CR",
          },
          tareas: [
            {
              estado_de_trabajo: "pendiente",
              detalles_de_tarea: "El mecanico 1 tiene que hacer cosas",
            },
          ],
        },
      ],
    },
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");

      // TODO: Implementar la llamada HTTP
      // const response = await fetch(`${base_url}/search/ordenes/${searchTerm}`);
      // const data = await response.json();

      // Simulación temporal
      setResults(sampleData.data.results);
    } catch (err) {
      setError("Error al realizar la búsqueda");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="p-4 bg-light min-vh-100 animate__animated animate__fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <Card className="shadow">
                <Card.Body>
                  <h2 className="mb-4 text-center">
                    Consulta el estado de tu vehículo
                  </h2>

                  {/* Buscador */}
                  <div className="d-flex gap-2 mb-4">
                    <Form.Control
                      type="text"
                      placeholder="Ingresa la matrícula de su vehiculo (ej: AB456CR)"
                      value={searchTerm}
                      onChange={(e) =>
                        setSearchTerm(e.target.value.toUpperCase())
                      }
                      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    />
                    <Button
                      variant="primary"
                      onClick={handleSearch}
                      disabled={loading || !searchTerm}
                    >
                      {loading ? <Spinner size="sm" /> : "Buscar"}
                    </Button>
                  </div>

                  {error && <Alert variant="danger">{error}</Alert>}

                  {/* Resultados */}
                  {results &&
                    results.map((orden) => (
                      <Card key={orden.id} className="mb-4">
                        <Card.Header className="d-flex justify-content-between align-items-center">
                          <h4 className="mb-0">Orden #{orden.id}</h4>
                          <Badge bg="info">
                            Matrícula: {orden.vehiculo.matricula}
                          </Badge>
                        </Card.Header>

                        <Card.Body>
                          <ListGroup variant="flush">
                            <ListGroup.Item>
                              <strong>Vehículo:</strong> {orden.vehiculo.modelo}{" "}
                              - {orden.vehiculo.color}
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <strong>Matricula:</strong>{" "}
                              {orden.vehiculo.matricula}
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <strong>Cliente:</strong> {orden.cliente.nombre}{" "}
                              {orden.cliente.apellido}
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <strong>Teléfono:</strong>{" "}
                              {orden.cliente.telefono}
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <strong>Recepción:</strong>{" "}
                              {new Date(orden.recepcion).toLocaleDateString()}
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <strong>Detalles adicionales:</strong>{" "}
                              {orden.datos_extras}
                            </ListGroup.Item>
                          </ListGroup>

                          <h5 className="mt-4">Tareas en curso</h5>
                          {orden.tareas.map((tarea, index) => (
                            <Card key={index} className="mb-3">
                              <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <Badge
                                      bg={
                                        tarea.estado_de_trabajo === "pendiente"
                                          ? "warning"
                                          : tarea.estado_de_trabajo ===
                                            "en_progreso"
                                          ? "primary"
                                          : "success"
                                      }
                                    >
                                      {tarea.estado_de_trabajo.replace(
                                        "_",
                                        " "
                                      )}
                                    </Badge>
                                    <p className="mt-2 mb-0">
                                      {tarea.detalles_de_tarea}
                                    </p>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          ))}
                        </Card.Body>
                      </Card>
                    ))}

                  {results && results.length === 0 && (
                    <Alert variant="info">
                      No se encontraron resultados para esta matrícula
                    </Alert>
                  )}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
