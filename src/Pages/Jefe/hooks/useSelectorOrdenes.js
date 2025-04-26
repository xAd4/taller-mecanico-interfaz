import { useMemo, useState } from "react";
import { ordenes } from "../data/ordenes";

export const useSelectorOrdenes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const opcionesAgrupadas = useMemo(() => {
    const grupos = {};

    ordenes.forEach((orden) => {
      const categoriaNombre = orden.recepcion;

      if (!grupos[categoriaNombre]) {
        grupos[categoriaNombre] = {
          label: categoriaNombre,
          options: [],
        };
      }

      if (orden.recepcion.toLowerCase().includes(searchTerm.toLowerCase())) {
        grupos[categoriaNombre].options.push({
          value: orden.id,
          label: `${orden.id} - Orden para: ${orden.cliente.nombre}`,
        });
      }
    });

    return Object.values(grupos);
  }, [searchTerm]);

  // Recibimos setFormData como argumento
  const handleOrdenChange = (selectedOption, setFormData) => {
    setFormData((prev) => ({
      ...prev,
      orden_id: selectedOption ? selectedOption.value : "",
    }));
  };

  return {
    opcionesAgrupadas,
    handleOrdenChange,
    searchTerm,
    setSearchTerm,
  };
};
