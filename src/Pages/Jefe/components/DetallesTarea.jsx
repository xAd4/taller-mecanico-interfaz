import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout } from "./common/Layout";
import { Button, Badge, Stack } from "react-bootstrap";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const DetallesTarea = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const tarea = state?.tarea;

  const [activeSection, setActiveSection] = useState("delantero");

  const onBack = () => {
    navigate(-1);
  };

  if (!tarea) {
    return (
      <Layout>
        <div className="container-fluid px-4 py-3">
          <div className="alert alert-danger">
            No se encontró la tarea solicitada
          </div>
          <Button onClick={onBack} variant="primary">
            Volver al listado
          </Button>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString) => {
    return format(new Date(dateString), "dd MMMM yyyy HH:mm", { locale: es });
  };

  const SectionButton = ({ sectionKey, title, icon }) => (
    <Button
      variant={activeSection === sectionKey ? "primary" : "outline-primary"}
      onClick={() => setActiveSection(sectionKey)}
      className="d-flex align-items-center gap-2"
    >
      <i className={`bi bi-${icon}`}></i>
      {title}
    </Button>
  );

  const renderTechnicalSection = (section, title, sectionKey) => {
    if (!section || activeSection !== sectionKey) return null;

    return (
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-primary text-white">
          <h3 className="h5 mb-0">
            <i className="bi bi-gear me-2"></i>
            {title}
          </h3>
        </div>
        <div className="card-body">
          <dl className="row mb-0">
            {Object.entries(section).map(([key, value]) => {
              if (key === "id" || key.includes("_at")) return null;
              return (
                <div className="row mb-2" key={key}>
                  <dt className="col-sm-6 text-capitalize">
                    {key.replace(/_/g, " ")}
                  </dt>
                  <dd className="col-sm-6">
                    {typeof value === "boolean" ||
                    value === 1 ||
                    value === 0 ? (
                      value ? (
                        <i className="bi bi-check-circle-fill text-success"></i>
                      ) : (
                        <i className="bi bi-x-circle-fill text-danger"></i>
                      )
                    ) : (
                      value || "N/A"
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    );
  };

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

        {/* Encabezado */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2 mb-0">Tarea #{tarea?.id}</h1>
          <Badge
            bg={
              tarea?.estado_de_trabajo === "pendiente" ? "warning" : "success"
            }
            className="text-capitalize fs-6"
          >
            {tarea?.estado_de_trabajo}
          </Badge>
        </div>

        {/* Sección principal */}
        <div className="row g-4">
          {/* Columna Izquierda - Detalles Tarea */}
          <div className="col-lg-6">
            {/* Tarjeta Detalles Tarea */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0">
                  <i className="bi bi-clipboard-check me-2"></i>
                  Detalles de la Tarea
                </h3>
              </div>
              <div className="card-body">
                <dl className="row mb-4">
                  <dt className="col-sm-4">Mecánico</dt>
                  <dd className="col-sm-8">
                    ID: <code>{tarea?.mecanico.id}</code> -{" "}
                    {tarea?.mecanico.name}
                  </dd>

                  <dt className="col-sm-4">Email</dt>
                  <dd className="col-sm-8">
                    <a href={`mailto:${tarea?.mecanico.email}`}>
                      {tarea?.mecanico.email}
                    </a>
                  </dd>

                  <dt className="col-sm-4">Creación de tarea</dt>
                  <dd className="col-sm-8">{formatDate(tarea?.created_at)}</dd>

                  <dt className="col-sm-4">Actualización de tarea</dt>
                  <dd className="col-sm-8">{formatDate(tarea?.updated_at)}</dd>
                </dl>

                <div>
                  <h4 className="h6 text-muted mb-3">
                    Notificación al Cliente
                  </h4>
                  <div className="bg-light p-3 rounded">
                    {tarea?.notificacion_al_cliente || "Sin notificación"}
                  </div>
                </div>
              </div>
            </div>
            {/* Botones de navegación */}
            <div className="mb-4">
              <Stack direction="horizontal" gap={3} className="flex-wrap">
                <SectionButton
                  sectionKey="delantero"
                  title="Tren Delantero"
                  icon="gear-wide-connected"
                />
                <SectionButton
                  sectionKey="trasero"
                  title="Tren Trasero"
                  icon="gear"
                />
                <SectionButton
                  sectionKey="frenos"
                  title="Frenos"
                  icon="brake-front"
                />
                <SectionButton
                  sectionKey="neumaticos"
                  title="Neumáticos"
                  icon="tire"
                />
                <SectionButton
                  sectionKey="productos"
                  title="Productos"
                  icon="box-seam"
                />
              </Stack>
            </div>

            {/* Secciones Técnicas */}
            {renderTechnicalSection(
              tarea?.tren_delantero,
              "Tren Delantero",
              "delantero"
            )}
            {renderTechnicalSection(
              tarea?.tren_trasero,
              "Tren Trasero",
              "trasero"
            )}
            {renderTechnicalSection(
              tarea?.frenos,
              "Sistema de Frenos",
              "frenos"
            )}
            {renderTechnicalSection(
              tarea?.estado_neumaticos,
              "Estado de Neumáticos",
              "neumaticos"
            )}

            {/* Sección de Productos */}
            {activeSection === "productos" && (
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-primary text-white">
                  <h3 className="h5 mb-0">
                    <i className="bi bi-box-seam me-2"></i>
                    Productos Utilizados
                  </h3>
                </div>
                <div className="card-body">
                  {tarea?.productos_usados?.length > 0 ? (
                    <>
                      <ul className="list-group mb-3">
                        {tarea.productos_usados.map((producto) => (
                          <li key={producto.id} className="list-group-item">
                            {producto?.producto.nombre} - Cantidad:{" "}
                            {producto?.cantidad} - Total: ${producto.total}
                          </li>
                        ))}
                      </ul>
                      <div className="alert alert-secondary text-end">
                        <strong>Total acumulado:</strong> $
                        {tarea?.productos_usados
                          .reduce((acc, producto) => acc + producto.total, 0)
                          .toFixed(2)}
                      </div>
                    </>
                  ) : (
                    <div className="alert alert-info mb-0">
                      No se registraron productos utilizados
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Columna Derecha - Información Técnica */}
          <div className="col-lg-6">
            {/* Orden Relacionada */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0">
                  <i className="bi bi-file-text me-2"></i># {tarea?.orden.id} -
                  Orden Asociada
                </h3>
              </div>
              <div className="card-body">
                <dl className="row mb-0">
                  <dt className="col-sm-4">Nombre del cliente</dt>
                  <dd className="col-sm-8">{tarea?.orden.cliente.nombre}</dd>

                  <dt className="col-sm-4">Email del cliente</dt>
                  <dd className="col-sm-8">{tarea?.orden.cliente.email}</dd>

                  <dt className="col-sm-4">RUT del cliente</dt>
                  <dd className="col-sm-8">{tarea?.orden.cliente.rut}</dd>

                  <dt className="col-sm-4">Telefono del cliente</dt>
                  <dd className="col-sm-8">{tarea?.orden.cliente.telefono}</dd>

                  <dt className="col-sm-4">Domicilio del cliente</dt>
                  <dd className="col-sm-8">{tarea?.orden.cliente.domicilio}</dd>

                  <hr />

                  <dt className="col-sm-4">Vehículo</dt>
                  <dd className="col-sm-8">
                    {tarea?.orden.vehiculo.marca} {tarea?.orden.vehiculo.modelo}
                  </dd>

                  <dt className="col-sm-4">Matrícula del vehiculo</dt>
                  <dd className="col-sm-8">
                    {tarea?.orden.vehiculo.matricula || "N/A"}
                  </dd>

                  <dt className="col-sm-4">Color del vehiculo</dt>
                  <dd className="col-sm-8">
                    {tarea?.orden.vehiculo.color || "N/A"}
                  </dd>

                  <dt className="col-sm-4">Kilometraje del vehiculo</dt>
                  <dd className="col-sm-8">
                    {tarea?.orden.vehiculo.kilometraje || "N/A"}
                  </dd>

                  <dt className="col-sm-4">N° Serie del vehiculo</dt>
                  <dd className="col-sm-8">
                    {tarea?.orden.vehiculo.numero_de_serie || "N/A"}
                  </dd>

                  <dt className="col-sm-4">N° Motor del vehiculo</dt>
                  <dd className="col-sm-8">
                    {tarea?.orden.vehiculo.numero_de_motor || "N/A"}
                  </dd>

                  <dt className="col-sm-4">Fecha de compra del vehiculo</dt>
                  <dd className="col-sm-8">
                    {tarea?.orden.vehiculo.fecha_de_compra
                      ? formatDate(tarea?.orden.vehiculo.fecha_de_compra)
                      : "N/A"}
                  </dd>

                  <dt className="col-sm-4 mt-2 mb-2">Prometido</dt>
                  <dd className="col-sm-8">
                    {formatDate(tarea?.orden.prometido)}
                  </dd>
                  <dt className="col-sm-4 mt-2 mb-2">Recepción</dt>
                  <dd className="col-sm-8">
                    {formatDate(tarea?.orden.recepcion)}
                  </dd>
                  <hr />
                  <dt className="col-sm-4 mt-2">
                    Detalles de entrada del vehiculo
                  </dt>
                  <dd className="col-sm-8">
                    {tarea?.orden.detalles_de_entrada_del_vehiculo || "N/A"}
                  </dd>

                  <dt className="col-sm-4 mt-2">
                    Detalles de trabajos a realizar
                  </dt>
                  <dd className="col-sm-8">
                    {tarea?.orden.detalle_de_trabajos_a_realizar || "N/A"}
                  </dd>
                  <div className="d-flex flex-column gap-2">
                    <small
                      className={
                        tarea?.orden.cambio_de_aceite
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {tarea?.orden.cambio_de_aceite ? (
                        <i className="bi bi-check-circle-fill">
                          Cambio de Aceite
                        </i>
                      ) : (
                        <i className="bi bi-x-circle-fill"> Cambio de Aceite</i>
                      )}
                    </small>
                    <small
                      className={
                        tarea?.orden.cambio_de_filtro
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {tarea?.orden.cambio_de_filtro ? (
                        <i className="bi bi-check-circle-fill">
                          Cambio de Filtro
                        </i>
                      ) : (
                        <i className="bi bi-x-circle-fill"> Cambio de Filtro</i>
                      )}
                    </small>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
