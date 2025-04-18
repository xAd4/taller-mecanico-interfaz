export const OrdenesRecientes = () => {
  return (
    <div className="text-center">
      <h2 className="mb-4">Órdenes Recientes</h2>
      <div className="list-group d-flex align-items-center">
        <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center w-75">
          <div>
            <h5 className="mb-1">Toyota Corolla</h5>
            <p className="mb-0 text-muted">Cliente: Juan Pérez</p>
          </div>
        </div>
        <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center w-75 mt-3">
          <div>
            <h5 className="mb-1">Honda Civic</h5>
            <p className="mb-0 text-muted">Cliente: María López</p>
          </div>
        </div>
      </div>
    </div>
  );
};
