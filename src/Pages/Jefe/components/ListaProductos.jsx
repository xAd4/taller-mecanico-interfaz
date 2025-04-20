import { useState } from "react";
import { Button, Form, Stack, Badge } from "react-bootstrap";
import { ModalCrearProducto } from "./ModalCrearProducto";
import { ModalEliminarProducto } from "./ModalEliminarProducto";

export const ListaProductos = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    console.log("Cliente eliminado");
    setShowDeleteModal(false);
    // Aquí iría la lógica para hacer el DELETE a la API
  };

  const productos = [
    {
      id: 1,
      categoria: "Lubricantes",
      nombre: "Aceite 5W-30",
      detalles: "Aceite sintético para motor",
      marca: "Mobil",
      stock: 50,
      precio: 25.0,
      minimoStock: 20,
    },
    {
      id: 2,
      categoria: "Filtros",
      nombre: "Filtro de aire",
      detalles: "Filtro de aire para motor",
      marca: "Bosch",
      stock: 30,
      precio: 15.0,
      minimoStock: 15,
    },
  ];

  const getEstadoStock = (stock, minimo) => {
    if (stock === 0) return { texto: "Agotado", color: "danger" };
    if (stock <= minimo) return { texto: "Bajo stock", color: "warning" };
    return { texto: "Disponible", color: "success" };
  };

  return (
    <div className="container-fluid px-4 py-3 animate__animated animate__fadeIn">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <h1 className="h2 mb-1 fw-bold text-primary">
            Inventario de Productos
          </h1>
          <p className="text-muted mb-0">Gestión de stock y precios</p>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
          className="d-flex align-items-center gap-2"
        >
          <i className="bi bi-box-seam"></i>
          Nuevo Producto
        </Button>
      </div>

      {/* Buscador */}
      <div className="mb-4">
        <div className="input-group input-group-lg shadow-sm">
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search text-muted"></i>
          </span>
          <Form.Control
            type="search"
            placeholder="Buscar productos..."
            className="border-start-0"
          />
        </div>
      </div>

      {/* Tabla Responsive */}
      <div className="card shadow-sm border-0 overflow-hidden">
        <div className="table-responsive rounded-3">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col" className="ps-4">
                  Categoría
                </th>
                <th scope="col">Producto</th>
                <th scope="col">Marca</th>
                <th scope="col" className="text-end">
                  Stock
                </th>
                <th scope="col" className="text-end">
                  Precio
                </th>
                <th scope="col">Estado</th>
                <th scope="col" className="text-end pe-4">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => {
                const estado = getEstadoStock(
                  producto.stock,
                  producto.minimoStock
                );

                return (
                  <tr key={producto.id} className="transition-all">
                    <td className="ps-4">
                      <div className="d-flex align-items-center gap-3">
                        <i
                          className={`bi ${
                            producto.categoria === "Lubricantes"
                              ? "bi-droplet"
                              : "bi-filter"
                          } fs-4 text-muted`}
                        ></i>
                        <span className="fw-semibold">
                          {producto.categoria}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="max-width-300">
                        <h6 className="mb-1 fw-semibold">{producto.nombre}</h6>
                        <small className="text-muted text-truncate d-block">
                          {producto.detalles}
                        </small>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-light text-dark border">
                        {producto.marca}
                      </span>
                    </td>
                    <td className="text-end font-monospace">
                      {producto.stock}
                      <small className="text-muted ms-2">unid.</small>
                    </td>
                    <td className="text-end font-monospace">
                      ${producto.precio.toFixed(2)}
                    </td>
                    <td>
                      <Badge bg={estado.color} className="text-capitalize">
                        {estado.texto}
                      </Badge>
                    </td>
                    <td className="pe-4">
                      <Stack
                        direction="horizontal"
                        gap={2}
                        className="justify-content-end"
                      >
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="d-flex align-items-center gap-2"
                        >
                          <i className="bi bi-pencil"></i>
                          <span className="d-none d-lg-inline">Editar</span>
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="d-flex align-items-center gap-2"
                          onClick={() => setShowDeleteModal(true)}
                        >
                          <i className="bi bi-trash"></i>
                          <span className="d-none d-lg-inline">Borrar</span>
                        </Button>
                      </Stack>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-lg">
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
        </nav>
      </div>

      {/* Modal */}
      <ModalCrearProducto
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />

      {/* Modal de eliminación */}
      <ModalEliminarProducto
        showModal={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={handleDelete}
      />
    </div>
  );
};
