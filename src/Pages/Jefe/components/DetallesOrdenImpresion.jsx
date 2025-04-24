import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useLocation, useNavigate } from "react-router-dom";

export const DetallesOrdenImpresion = () => {
  const navigate = useNavigate();
  // const { id } = useParams();
  const location = useLocation();
  const { orden } = location.state || {};

  const formatDate = (dateString) => {
    return format(new Date(dateString), "dd MMMM yyyy", { locale: es });
  };

  if (!orden) return null;

  return (
    <div className="container-fluid p-4 print-view">
      <style>
        {`
          @media print {
            body { -webkit-print-color-adjust: exact; }
            .print-view { padding: 0 !important; }
            .section-title { border-bottom: 2px solid #000 !important; }
            .signature-line { border-bottom: 1px solid #000; width: 70%; }
          }
          .company-header { margin-bottom: 2rem; }
          .legal-text { font-size: 0.9rem; line-height: 1.4; }
          .section-title { color: #2c3e50; font-weight: 600; }
        `}
      </style>

      {/* Encabezado de la empresa */}
      <div className="company-header text-center mb-4">
        <h1 className="mb-1" style={{ fontSize: "2.2rem", fontWeight: "700" }}>
          Taller Mecánico Automotriz
        </h1>
        <p className="mb-0">Av. Principal 1234, Ciudad, País</p>
        <p className="mb-0">Tel: (123) 456-7890 | Email: contacto@taller.com</p>
        <p className="mb-0">RUT: 12.345.678-9</p>
      </div>

      {/* Encabezado del documento */}
      <div className="d-flex justify-content-between align-items-start mb-1">
        <div>
          <h2 className="mb-0">Orden de Trabajo #{orden.id}</h2>
          <p className="text-muted mb-0">
            Fecha de emisión: {formatDate(new Date())}
          </p>
        </div>
        <div className="text-end">
          <div className="alert alert-light border">
            <strong>Fecha Recepcion:</strong> {formatDate(orden.fechaRecepcion)}
            <br />
            <strong>Fecha Prometida:</strong> {formatDate(orden.fechaPrometida)}
          </div>
        </div>
      </div>

      {/* Sección Cliente */}
      <div className="mb-4">
        <h3 className="section-title pb-2">Datos del Cliente</h3>
        <div className="row">
          <div className="col-6">
            <p className="mb-1">
              <strong>Nombre:</strong> {orden.cliente.nombre}
            </p>
            <p className="mb-1">
              <strong>RUT:</strong> {orden.cliente.rut}
            </p>
          </div>
          <div className="col-6">
            <p className="mb-1">
              <strong>Teléfono:</strong> {orden.cliente.telefono}
            </p>
            <p className="mb-1">
              <strong>Email:</strong> {orden.cliente.email}
            </p>
          </div>
          <div className="col-12">
            <p className="mb-0">
              <strong>Domicilio:</strong> {orden.cliente.domicilio}
            </p>
          </div>
        </div>
      </div>

      {/* Sección Vehículo */}
      <div className="mb-4">
        <h3 className="section-title pb-2">Datos del Vehículo</h3>
        <div className="row">
          <div className="col-4">
            <p className="mb-1">
              <strong>Marca/Modelo:</strong> {orden.vehiculo.marca}{" "}
              {orden.vehiculo.modelo}
            </p>
            <p className="mb-1">
              <strong>Matrícula:</strong> {orden.vehiculo.matricula}
            </p>
          </div>
          <div className="col-4">
            <p className="mb-1">
              <strong>Color:</strong> {orden.vehiculo.color}
            </p>
            <p className="mb-1">
              <strong>Kilometraje:</strong>{" "}
              {orden.vehiculo.kilometraje || "N/A"}
            </p>
          </div>
          <div className="col-4">
            <p className="mb-1">
              <strong>N° Serie:</strong>{" "}
              {orden.vehiculo.numero_de_serie || "N/A"}
            </p>
            <p className="mb-1">
              <strong>N° Motor:</strong>{" "}
              {orden.vehiculo.numero_de_motor || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Detalles del Trabajo */}
      <div className="mb-4">
        <h3 className="section-title pb-2">Descripción del Trabajo</h3>
        <div className="mb-3">
          <h4 className="h6">Estado del vehículo al ingreso:</h4>
          <p className="ps-3">{orden.detallesDeEntradaDelVehiculo}</p>
        </div>
        <div>
          <h4 className="h6">Trabajos a realizar:</h4>
          <p className="ps-3">{orden.detalleDeTrabajosARealizar}</p>
        </div>
      </div>

      {/* Términos y Condiciones */}
      <div className="mt-1">
        <h3 className="section-title pb-2">Términos y Condiciones</h3>
        <div className="legal-text">
          <p>
            1. El cliente autoriza expresamente la realización de las
            reparaciones descritas y el uso de materiales necesarios para las
            mismas.
          </p>
          <p>
            2. El taller queda autorizado a realizar pruebas de circulación
            necesarias para la verificación de las reparaciones.
          </p>
          <p>
            3. El pago total deberá realizarse al momento de la entrega del
            vehículo.
          </p>
          <p>
            4. El taller no se responsabiliza por objetos personales dejados en
            el vehículo.
          </p>

          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <div>
                <p className="mb-1">Firma del Cliente:</p>
                <div
                  className="signature-line"
                  style={{ height: "30px" }}
                ></div>
              </div>
              <div>
                <p className="mb-1">Firma del Responsable:</p>
                <div
                  className="signature-line"
                  style={{ height: "30px" }}
                ></div>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Nombre: {orden.cliente.nombre}</span>
              <span>Fecha: {formatDate(new Date())}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
