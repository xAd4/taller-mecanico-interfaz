import { useMemo, useState } from "react";
import { mecanicos } from "../data/mecanicos";

export const useSelectorMecanicos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const opcionesAgrupadas = useMemo(() => {
    const grupos = {};

    mecanicos.forEach((mecanico) => {
      const categoriaNombre = mecanico.rol;

      if (!grupos[categoriaNombre]) {
        grupos[categoriaNombre] = {
          label: categoriaNombre,
          options: [],
        };
      }

      if (mecanico.rol.toLowerCase().includes(searchTerm.toLowerCase())) {
        grupos[categoriaNombre].options.push({
          value: mecanico.id,
          label: `${mecanico.name}`,
        });
      }
    });

    return Object.values(grupos);
  }, [searchTerm]);

  // Recibimos setFormData como argumento
  const handleMecanicoChange = (selectedOption, setFormData) => {
    setFormData((prev) => ({
      ...prev,
      mecanico_id: selectedOption ? selectedOption.value : "",
    }));
  };

  return {
    opcionesAgrupadas,
    handleMecanicoChange,
    searchTerm,
    setSearchTerm,
  };
};
