import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Layout } from "./common/Layout";
import { Button } from "react-bootstrap";

export const DetallesTarea = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const tarea = state?.tarea;

  const onBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <div className="container-fluid px-4 py-3 animate__animated animate__fadeIn">
        <h1 className="text-center mb-4">Detalles de la Tarea {id}</h1>
        <Button
          variant="outline-primary"
          size="sm"
          className="d-flex align-items-center gap-2"
          onClick={onBack}
        >
          <i className="bi bi-back"></i>
          <span className="d-none d-md-inline">Regresar</span>
        </Button>
        <div className="row mb-4">
          <div className="col-md-6">
            <h2>Información de la Tarea</h2>
            <div>
              <h1>Detalles de la orden #{tarea.id}</h1>
              <p>
                <strong>Cliente:</strong> {tarea.orden_id}
              </p>
              <p>
                <strong>Vehículo:</strong> {tarea.mecanico_id}
              </p>
              <p>
                <strong>Recepción:</strong> {tarea.estado_de_trabajo}
              </p>
              <p>
                <strong>Prometida:</strong> {tarea.detalles_de_tarea}
              </p>
              <p>
                <strong>Estado:</strong> {tarea.notificacion_al_cliente}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Información del Mecánico</h2>
            {/* Aquí iría la información del mecánico */}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12">
            <h2>Comentarios y Observaciones</h2>
            {/* Aquí iría la sección de comentarios y observaciones */}
          </div>
        </div>
      </div>
    </Layout>
  );
};
