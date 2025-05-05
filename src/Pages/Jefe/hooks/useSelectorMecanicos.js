import { useEffect, useMemo, useState } from "react";
import { useMecanicoStore } from "./useMecanicoStore";

export const useSelectorMecanicos = (showModal) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { mecanicos, startLoadingMecanico } = useMecanicoStore();

  useEffect(() => {
    startLoadingMecanico();
  }, [showModal]);

  const opcionesAgrupadas = useMemo(() => {
    const grupos = {};

    mecanicos.forEach((mecanico) => {
      const categoriaNombre = "";

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
  }, [mecanicos, searchTerm]);

  return {
    opcionesAgrupadas,
    searchTerm,
    setSearchTerm,
  };
};
