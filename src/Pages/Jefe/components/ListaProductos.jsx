import { useState } from "react";
import { Button, Form, Stack, Badge, Table } from "react-bootstrap";
import { ModalCrearProducto } from "./ModalCrearProducto";
import { ModalEliminarProducto } from "./ModalEliminarProducto";
import { ModalActualizarProducto } from "./ModalActualizarProducto";
import { ModalActualizarCategoria } from "./ModalActualizarCategoria";
import { ModalCrearCategoria } from "./ModalCrearCategoria";

export const ListaProductos = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState(null);

  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleUpdate = (updatedData) => {
    console.log("Datos actualizados:", updatedData);
    // Aquí iría la lógica para hacer el PUT o PATCH a la API
  };

  const handleCreateCategory = (newCategory) => {
    console.log("Nueva categoría creada:", newCategory);
    setShowCreateCategoryModal(false);
    // Aquí iría la lógica para hacer el POST a la API
  };

  const handleDelete = () => {
    console.log("Elemento eliminado");
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
    },
    {
      id: 2,
      categoria: "Filtros",
      nombre: "Filtro de aire",
      detalles: "Filtro de aire para motor",
      marca: "Bosch",
      stock: 30,
      precio: 15.0,
    },
  ];

  const categorias = [
    { nombre: "Aceites", disponibilidad: true },
    { nombre: "Filtros", disponibilidad: true },
    { nombre: "Lubricantes", disponibilidad: false },
  ];

  const getEstadoDisponibilidad = (disponibilidad) => {
    return disponibilidad
      ? { texto: "Disponible", color: "success" }
      : { texto: "No disponible", color: "danger" };
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
        <div className="d-flex gap-2">
          <Button
            variant="primary"
            onClick={() => setShowModal(true)}
            className="d-flex align-items-center gap-2"
          >
            <i className="bi bi-box-seam"></i>
            Nuevo Producto
          </Button>
          <Button
            variant="success"
            onClick={() => setShowCreateCategoryModal(true)}
            className="d-flex align-items-center gap-2"
          >
            <i className="bi bi-folder-plus"></i>
            Nueva Categoría
          </Button>
        </div>
      </div>

      {/* Tabla de Categorías */}
      <div className="card shadow-sm border-0 overflow-hidden mb-4">
        <div className="card-header bg-primary text-white">
          <h3 className="h5 mb-0">Categorías Disponibles</h3>
        </div>
        <div className="table-responsive">
          <Table striped bordered hover className="mb-0">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Disponibilidad</th>
                <th className="text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {categorias.map((categoria, index) => {
                const estado = getEstadoDisponibilidad(
                  categoria.disponibilidad
                );

                return (
                  <tr key={index}>
                    <td>{categoria.nombre}</td>
                    <td>
                      <Badge bg={estado.color} className="text-capitalize">
                        {estado.texto}
                      </Badge>
                    </td>
                    <td className="text-end">
                      <Stack direction="horizontal" gap={2}>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => {
                            setSelectedCategory(categoria);
                            setShowCategoryModal(true);
                          }}
                        >
                          <i className="bi bi-pencil"></i> Editar
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => {
                            setSelectedCategory(categoria);
                            setShowDeleteModal(true);
                          }}
                        >
                          <i className="bi bi-trash"></i> Borrar
                        </Button>
                      </Stack>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>

      {/* Tabla Responsive de Productos */}
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
                const estado = getEstadoDisponibilidad(producto.stock > 0);

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
                          onClick={() => {
                            setSelectedProducto(producto);
                            setShowUpdateModal(true);
                          }}
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

      {/* Modales */}
      <ModalCrearProducto
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />

      <ModalEliminarProducto
        showModal={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={handleDelete}
      />

      <ModalActualizarProducto
        showModal={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        handleUpdate={handleUpdate}
        productoData={selectedProducto}
      />

      <ModalActualizarCategoria
        showModal={showCategoryModal}
        handleClose={() => setShowCategoryModal(false)}
        handleUpdate={handleUpdate}
        categoriaData={selectedCategory}
      />

      <ModalCrearCategoria
        showModal={showCreateCategoryModal}
        handleClose={() => setShowCreateCategoryModal(false)}
        handleCreate={handleCreateCategory}
      />
    </div>
  );
};
