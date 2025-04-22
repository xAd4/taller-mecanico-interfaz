import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Layout } from "./common/Layout";
import { Button } from "react-bootstrap";

export const DetallesOrden = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const orden = state?.orden;

  const onBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Layout>
        <div className="container-fluid px-4 py-3 animate__animated animate__fadeIn">
          <Button
            variant="outline-primary"
            size="sm"
            className="d-flex align-items-center gap-2"
            onClick={onBack}
          >
            <i className="bi bi-back"></i>
            <span className="d-none d-md-inline">Regresar</span>
          </Button>
          <h1 className="text-center mb-4">Detalles de la Orden {id}</h1>
          <div className="row mb-4">
            <div className="col-md-6">
              <h2>Información del Cliente</h2>
              <div>
                <h1>Detalles de la orden #{orden.id}</h1>
                <p>
                  <strong>Cliente:</strong> {orden.clienteId}
                </p>
                <p>
                  <strong>Vehículo:</strong> {orden.vehiculoId}
                </p>
                <p>
                  <strong>Recepción:</strong> {orden.fechaRecepcion}
                </p>
                <p>
                  <strong>Prometida:</strong> {orden.fechaPrometida}
                </p>
                <p>
                  <strong>Estado:</strong> {orden.estado}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <h2>Información del Vehículo</h2>
              {/* Aquí iría la información del vehículo */}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-12">
              <h2>Detalles de la Orden</h2>
              {/* Aquí iría la información de la orden */}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-12">
              <h2>Tareas Asignadas</h2>
              {/* Aquí iría la lista de tareas asignadas */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
