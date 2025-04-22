import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Layout } from "./common/Layout";
import { Button, Badge, Stack } from "react-bootstrap";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const DetallesOrden = () => {
  const navigate = useNavigate();
  // const { id } = useParams();
  const { state } = useLocation();
  const orden = state?.orden;

  const onBack = () => {
    navigate(-1);
  };

  if (!orden) {
    return (
      <Layout>
        <div className="container-fluid px-4 py-3">
          <div className="alert alert-danger">
            No se encontró la orden solicitada
          </div>
          <Button onClick={onBack} variant="primary">
            Volver al listado
          </Button>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString) => {
    return format(new Date(dateString), "dd MMMM yyyy", { locale: es });
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
          <h1 className="h2 mb-0">Orden #{orden.id}</h1>
        </div>

        {/* Sección principal */}
        <div className="row g-4">
          {/* Columna Izquierda - Cliente y Vehículo */}
          <div className="col-lg-6">
            {/* Tarjeta Cliente */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0">
                  <i className="bi bi-person-circle me-2"></i>
                  Información del Cliente
                </h3>
              </div>
              <div className="card-body">
                <dl className="row mb-0">
                  <dt className="col-sm-4">Nombre completo</dt>
                  <dd className="col-sm-8">
                    {orden.cliente.nombre} {orden.cliente.apellido}
                  </dd>

                  <dt className="col-sm-4">RUT</dt>
                  <dd className="col-sm-8">{orden.cliente.rut}</dd>

                  <dt className="col-sm-4">DNI</dt>
                  <dd className="col-sm-8">{orden.cliente.dni}</dd>

                  <dt className="col-sm-4">Teléfono</dt>
                  <dd className="col-sm-8">{orden.cliente.telefono}</dd>

                  <dt className="col-sm-4">Email</dt>
                  <dd className="col-sm-8">
                    <a href={`mailto:${orden.cliente.email}`}>
                      {orden.cliente.email}
                    </a>
                  </dd>

                  <dt className="col-sm-4">Domicilio</dt>
                  <dd className="col-sm-8">{orden.cliente.domicilio}</dd>
                </dl>
              </div>
            </div>

            {/* Tarjeta Vehículo */}
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0">
                  <i className="bi bi-car-front me-2"></i>
                  Información del Vehículo
                </h3>
              </div>
              <div className="card-body">
                <dl className="row mb-0">
                  <dt className="col-sm-4">Marca/Modelo</dt>
                  <dd className="col-sm-8">
                    {orden.vehiculo.marca} {orden.vehiculo.modelo}
                  </dd>

                  <dt className="col-sm-4">Matrícula</dt>
                  <dd className="col-sm-8">{orden.vehiculo.matricula}</dd>

                  <dt className="col-sm-4">Color</dt>
                  <dd className="col-sm-8">{orden.vehiculo.color}</dd>

                  <dt className="col-sm-4">Kilometraje</dt>
                  <dd className="col-sm-8">
                    {orden.vehiculo.kilometraje || "N/A"}
                  </dd>

                  <dt className="col-sm-4">N° Serie</dt>
                  <dd className="col-sm-8">
                    {orden.vehiculo.numero_de_serie || "N/A"}
                  </dd>

                  <dt className="col-sm-4">N° Motor</dt>
                  <dd className="col-sm-8">
                    {orden.vehiculo.numero_de_motor || "N/A"}
                  </dd>

                  <dt className="col-sm-4">Fecha compra</dt>
                  <dd className="col-sm-8">
                    {orden.vehiculo.fecha_de_compra
                      ? formatDate(orden.vehiculo.fecha_de_compra)
                      : "N/A"}
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Detalles Orden */}
          <div className="col-lg-6">
            {/* Tarjeta Detalles Orden */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0">
                  <i className="bi bi-clipboard-data me-2"></i>
                  Detalles de la Orden
                </h3>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <h4 className="h6 text-muted mb-3">Fechas importantes</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Recepción</label>
                        <div className="fw-semibold">
                          {formatDate(orden.fechaRecepcion)}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Prometida</label>
                        <div className="fw-semibold">
                          {formatDate(orden.fechaPrometida)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="h6 text-muted mb-3">Descripción</h4>
                  <div className="bg-light p-3 rounded">
                    {orden.datosExtras}
                  </div>
                </div>

                <div>
                  <h4 className="h6 text-muted mb-3">Trabajos a realizar</h4>
                  <div className="bg-light p-3 rounded">{orden.cambios}</div>
                </div>
              </div>
            </div>

            {/* Sección Tareas */}
            {/* <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0">
                  <i className="bi bi-list-task me-2"></i>
                  Tareas Asignadas
                </h3>
              </div>
              <div className="card-body">
                <div className="alert alert-info mb-0">
                  Actualmente no hay tareas asignadas a esta orden
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Botones de acción */}
        {/* <Stack direction="horizontal" gap={3} className="mt-4">
          <Button
            variant="outline-primary"
            onClick={() =>
              navigate(`/jefe/orden/editar/${id}`, { state: { orden } })
            }
          >
            <i className="bi bi-pencil me-2"></i>
            Editar Orden
          </Button>
          <Button variant="outline-danger">
            <i className="bi bi-trash me-2"></i>
            Eliminar Orden
          </Button>
        </Stack> */}
      </div>
    </Layout>
  );
};
