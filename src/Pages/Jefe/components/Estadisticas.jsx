export const Estadisticas = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
            <div className="card-body text-center">
              <h5 className="card-title">Ordenes Activas</h5>
              <p className="card-text text-muted">54</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
            <div className="card-body text-center">
              <h5 className="card-title">Clientes</h5>
              <p className="card-text text-muted">102</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
            <div className="card-body text-center">
              <h5 className="card-title">Vehiculos</h5>
              <p className="card-text text-muted">106</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
