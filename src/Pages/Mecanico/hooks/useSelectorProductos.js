import { useMemo, useState } from "react";
import { productos } from "../../jefe/data/productos";

export const useSelectorProductos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const opcionesAgrupadas = useMemo(() => {
    const grupos = {};

    productos.forEach((producto) => {
      const categoriaNombre = "";

      if (!grupos[categoriaNombre]) {
        grupos[categoriaNombre] = {
          label: categoriaNombre,
          options: [],
        };
      }

      if (producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())) {
        grupos[categoriaNombre].options.push({
          value: producto.id,
          label: `${producto.nombre} - ${producto.marca}`,
          stock: producto.stock,
          precio: producto.precio,
        });
      }
    });

    return Object.values(grupos);
  }, [searchTerm]);

  // Recibimos setFormData como argumento
  const handleProductoChange = (selectedOption, setFormData) => {
    setFormData((prev) => ({
      ...prev,
      producto_id: selectedOption ? selectedOption.value : "",
    }));
  };

  return {
    opcionesAgrupadas,
    handleProductoChange,
    searchTerm,
    setSearchTerm,
  };
};
