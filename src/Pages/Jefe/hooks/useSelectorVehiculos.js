import { useMemo, useState } from "react";
import { vehiculos } from "../data/vehiculos";

export const useSelectorVehiculos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const opcionesAgrupadas = useMemo(() => {
    const grupos = {};

    vehiculos.forEach((vehiculo) => {
      const categoriaNombre = vehiculo.nombre;

      if (!grupos[categoriaNombre]) {
        grupos[categoriaNombre] = {
          label: categoriaNombre,
          options: [],
        };
      }

      if (vehiculo.modelo.toLowerCase().includes(searchTerm.toLowerCase())) {
        grupos[categoriaNombre].options.push({
          value: vehiculo.id,
          label: `${vehiculo.modelo} - ${vehiculo.marca} - ${vehiculo.matricula}`,
        });
      }
    });

    return Object.values(grupos);
  }, [searchTerm]);

  // Recibimos setFormData como argumento
  const handleVehiculoChange = (selectedOption, setFormData) => {
    setFormData((prev) => ({
      ...prev,
      vehiculo_id: selectedOption ? selectedOption.value : "",
    }));
  };

  return {
    opcionesAgrupadas,
    handleVehiculoChange,
    searchTerm,
    setSearchTerm,
  };
};
