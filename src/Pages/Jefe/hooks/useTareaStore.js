import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewTarea,
  onDeleteTarea,
  onLoadTareas,
  onSetactiveTarea,
  onUpdateTarea,
} from "../../../store/jefe/tareas/tareaSlice";
import tallerMecanicoApi from "../../../api/tallerMecanicoApi";
import Swal from "sweetalert2";

export const useTareaStore = () => {
  const dispatch = useDispatch();
  const { tareas, activeTarea } = useSelector((state) => state.tarea);
  const { user } = useSelector((state) => state.auth);

  const setActiveOrden = (orden) => {
    dispatch(onSetactiveTarea(orden));
  };

  const startLoadingTareas = async (page = 1) => {
    try {
      const { data } = await tallerMecanicoApi.get(`/tareas?page=${page}`);
      dispatch(onLoadTareas([...data.data.data]));
    } catch (error) {
      console.log("Error al cargar", error);
    }
  };

  const startSavingTarea = async (tarea) => {
    try {
      if (tarea.id) {
        await tallerMecanicoApi.put(`/tareas/${tarea.id}`, tarea);
        dispatch(onUpdateTarea({ ...tarea, user }));
        return;
      } else {
        const { data } = await tallerMecanicoApi.post("/tareas", tarea);
        dispatch(onAddNewTarea({ ...data }));
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error al guardar", "Error extra;o", "error");
    }
  };

  const startDeletingTarea = async (tarea) => {
    try {
      await tallerMecanicoApi.delete(`/tareas/${tarea.id}`);
      dispatch(onDeleteTarea());
    } catch (error) {
      console.log(error);
      Swal.fire("Error al borrar", error.response.data?.message, "error");
    }
  };

  return {
    //* Propiedades
    activeTarea,
    tareas,
    hasClienteSelected: !!activeTarea,

    //* Metodos
    setActiveOrden,
    startLoadingTareas,
    startSavingTarea,
    startDeletingTarea,
  };
};
