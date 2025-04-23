import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { Layout } from "./components/common/Layout";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de validación y autenticación aquí
    console.log({ email, password, rememberMe });
  };

  return (
    <Layout>
      <>
        <div
          style={{
            padding: "2rem",
          }}
        >
          <Container>
            <Row className="justify-content-center mt-5">
              <Col md={8} lg={6}>
                <Card
                  className="border-0 shadow-lg"
                  style={{ borderRadius: "1rem" }}
                >
                  <Card.Body className="p-5">
                    {/* Encabezado */}
                    <div className="text-center mb-5">
                      <h2 className="fw-bold mb-3">¿Eres empleado?</h2>
                      <p className="text-muted">Inicia sesión para continuar</p>
                    </div>

                    {/* Formulario */}
                    <Form onSubmit={handleSubmit}>
                      {/* Email */}
                      <Form.Group className="mb-4" controlId="formEmail">
                        <Form.Label className="fw-medium">
                          Correo electrónico
                        </Form.Label>
                        <Form.Control
                          type="email"
                          size="lg"
                          placeholder="nombre@ejemplo.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </Form.Group>

                      {/* Contraseña */}
                      <Form.Group className="mb-4" controlId="formPassword">
                        <Form.Label className="fw-medium">
                          Contraseña
                        </Form.Label>
                        <Form.Control
                          type="password"
                          size="lg"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </Form.Group>

                      {/* Botón de login */}
                      <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        className="w-100 mb-4"
                      >
                        Iniciar sesión
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    </Layout>
  );
};
