export const ListaClientes = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Clientes</h2>
        <button className="btn btn-dark">+ Nuevo Cliente</button>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar clientes..."
        />
      </div>
      <table className="table table-hover shadow-sm">
        <thead className="table-light">
          <tr>
            <th scope="col">Cliente</th>
            <th scope="col">RUT</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Vehículos</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="bi bi-person"></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0 fw-bold">Juan Pérez</p>
                  <p className="mb-0 text-muted">juan.perez@email.com</p>
                </div>
              </div>
            </td>
            <td>12.345.678-9</td>
            <td>+56 9 1234 5678</td>
            <td>2 vehículos</td>
            <td>
              <button className="btn btn-outline-primary btn-sm me-2">
                Editar
              </button>
              <button className="btn btn-outline-danger btn-sm">Borrar</button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="bi bi-person"></i>
                </div>
                <div className="ms-3">
                  <p className="mb-0 fw-bold">María López</p>
                  <p className="mb-0 text-muted">maria.lopez@email.com</p>
                </div>
              </div>
            </td>
            <td>98.765.432-1</td>
            <td>+56 9 8765 4321</td>
            <td>1 vehículo</td>
            <td>
              <button className="btn btn-outline-primary btn-sm me-2">
                Editar
              </button>
              <button className="btn btn-outline-danger btn-sm">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center mt-4">
          <li className="page-item disabled">
            <button className="page-link">Anterior</button>
          </li>
          <li className="page-item active">
            <button className="page-link">1</button>
          </li>
          <li className="page-item">
            <button className="page-link">2</button>
          </li>
          <li className="page-item">
            <button className="page-link">3</button>
          </li>
          <li className="page-item">
            <button className="page-link">Siguiente</button>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};
