export const ListaProductos = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Productos</h2>
        <button className="btn btn-dark">+ Nuevo Producto</button>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar productos..."
        />
      </div>
      <table className="table table-hover shadow-sm">
        <thead className="table-light">
          <tr>
            <th scope="col">Categoría</th>
            <th scope="col">Nombre</th>
            <th scope="col">Detalles</th>
            <th scope="col">Marca</th>
            <th scope="col">Stock</th>
            <th scope="col">Precio</th>
            <th scope="col">Disponibilidad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lubricantes</td>
            <td>Aceite 5W-30</td>
            <td>Aceite sintético para motor</td>
            <td>Mobil</td>
            <td>50</td>
            <td>$25.00</td>
            <td>
              <span className="badge bg-success">Disponible</span>
            </td>
            <td>
              <button className="btn btn-outline-primary btn-sm me-2">
                Editar
              </button>
              <button className="btn btn-outline-danger btn-sm me-2">
                Borrar
              </button>
            </td>
          </tr>
          <tr>
            <td>Filtros</td>
            <td>Filtro de aire</td>
            <td>Filtro de aire para motor</td>
            <td>Bosch</td>
            <td>30</td>
            <td>$15.00</td>
            <td>
              <span className="badge bg-danger">No disponible</span>
            </td>
            <td>
              <button className="btn btn-outline-primary btn-sm me-2">
                Editar
              </button>
              <button className="btn btn-outline-danger btn-sm me-2">
                Borrar
              </button>
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
