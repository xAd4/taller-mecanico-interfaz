import { useMemo, useState } from "react";
import { categorias } from "../data/categorias";

export const useSelectorCategorias = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const opcionesAgrupadas = useMemo(() => {
    const grupos = {};

    categorias.forEach((cliente) => {
      const categoriaNombre = "";

      if (!grupos[categoriaNombre]) {
        grupos[categoriaNombre] = {
          label: categoriaNombre,
          options: [],
        };
      }

      if (cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase())) {
        grupos[categoriaNombre].options.push({
          value: cliente.id,
          label: `${cliente.nombre}`,
        });
      }
    });

    return Object.values(grupos);
  }, [searchTerm]);

  // Recibimos setFormData como argumento
  const handleCategoriaChange = (selectedOption, setFormData) => {
    setFormData((prev) => ({
      ...prev,
      cliente_id: selectedOption ? selectedOption.value : "",
    }));
  };

  return {
    opcionesAgrupadas,
    handleCategoriaChange,
    searchTerm,
    setSearchTerm,
  };
};
