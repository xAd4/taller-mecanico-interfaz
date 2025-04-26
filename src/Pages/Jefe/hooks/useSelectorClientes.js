import { useMemo, useState } from "react";
import { clientes } from "../data/clientes";

export const useSelectorClientes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const opcionesAgrupadas = useMemo(() => {
    const grupos = {};

    clientes.forEach((cliente) => {
      const categoriaNombre = cliente.nombre;

      if (!grupos[categoriaNombre]) {
        grupos[categoriaNombre] = {
          label: categoriaNombre,
          options: [],
        };
      }

      if (cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase())) {
        grupos[categoriaNombre].options.push({
          value: cliente.id,
          label: `${cliente.nombre} - ${cliente.email}`,
        });
      }
    });

    return Object.values(grupos);
  }, [searchTerm]);

  // Recibimos setFormData como argumento
  const handleClienteChange = (selectedOption, setFormData) => {
    setFormData((prev) => ({
      ...prev,
      cliente_id: selectedOption ? selectedOption.value : "",
    }));
  };

  return {
    opcionesAgrupadas,
    handleClienteChange,
    searchTerm,
    setSearchTerm,
  };
};
