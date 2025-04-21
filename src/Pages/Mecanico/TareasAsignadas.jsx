import { SidebarMecanico } from "../../Components/Layout/SidebarMecanico";
import { ListaTareasAsignadas } from "./components/ListaTareasAsignadas";

export const TareasAsignadas = () => {
  const tasks = [
    {
      id: 2,
      orden_id: 1,
      mecanico_id: 2,
      estado_de_trabajo: "pendiente",
      detalles_de_tarea: "El mecanico 1 tiene que hacer cosas",
      notificacion_al_cliente: "Esto lo dice el mecanico",
    },
    {
      id: 3,
      orden_id: 1,
      mecanico_id: 2,
      estado_de_trabajo: "pendiente",
      detalles_de_tarea: "El mecanico 1 tiene que hacer cosas",
      notificacion_al_cliente: "Esto lo dice el mecanico",
    },
  ];

  const components = {
    trenDelantero: [
      {
        tarea_id: 2,
        conv: true,
        comba: false,
        avance: true,
        rotulas: false,
        punteros: true,
        bujes: false,
        caja_direccion: true,
        conv2: false,
        comba2: true,
        avance2: false,
        amort: true,
      },
      {
        tarea_id: 3,
        conv: true,
        comba: false,
        avance: true,
        rotulas: false,
        punteros: true,
        bujes: false,
        caja_direccion: true,
        conv2: false,
        comba2: true,
        avance2: false,
        amort: true,
      },
    ],
    trenTrasero: [
      {
        tarea_id: 2,
        conv: true,
        comba: true,
        brazos_susp: true,
        articulaciones: true,
        conv2: false,
        comba2: false,
        amort: false,
      },
      {
        tarea_id: 3,
        conv: true,
        comba: true,
        brazos_susp: true,
        articulaciones: true,
        conv2: false,
        comba2: false,
        amort: false,
      },
    ],
    frenos: [
      {
        tarea_id: 2,
        delanteros: true,
        traseros: false,
        estacionamiento: false,
        numero_cricket: false,
      },
      {
        tarea_id: 3,
        delanteros: true,
        traseros: false,
        estacionamiento: false,
        numero_cricket: false,
      },
    ],
    estadoNeumaticos: [
      {
        tarea_id: 2,
        delanteros_derechos: true,
        delanteros_izquierdos: false,
        traseros_derechos: true,
        traseros_izquierdos: false,
      },
      {
        tarea_id: 3,
        delanteros_derechos: true,
        delanteros_izquierdos: false,
        traseros_derechos: true,
        traseros_izquierdos: false,
      },
    ],
  };

  const materials = [
    {
      tarea_id: 2,
      producto_id: "Aceite",
      cantidad: 70,
    },
    {
      tarea_id: 3,
      producto_id: "Aceite",
      cantidad: 70,
    },
    {
      tarea_id: 3,
      producto_id: "Filtro",
      cantidad: 70,
    },
    {
      tarea_id: 3,
      producto_id: "Grasa",
      cantidad: 70,
    },
  ];

  return (
    <>
      <SidebarMecanico>
        <div className="mt-5">
          <ListaTareasAsignadas
            tasks={tasks}
            components={components}
            materials={materials}
          />
        </div>
      </SidebarMecanico>
    </>
  );
};
