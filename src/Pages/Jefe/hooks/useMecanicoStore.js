import { useDispatch, useSelector } from "react-redux";
import {
  onLoadMecanicos,
  onSetActiveMecanico,
} from "../../../store/jefe/usuarios/mecanicoSlice";
import tallerMecanicoApi from "../../../api/tallerMecanicoApi";

export const useMecanicoStore = () => {
  const dispatch = useDispatch();
  const { mecanicos, activeMecanico } = useSelector((state) => state.mecanico);

  const setActiveMecanico = (mecanico) => {
    dispatch(onSetActiveMecanico(mecanico));
  };

  const startLoadingMecanico = async (page = 1) => {
    try {
      const { data } = await tallerMecanicoApi.get(`/mecanicos?page=${page}`);
      dispatch(onLoadMecanicos([...data.data.data]));
    } catch (error) {
      console.log("Error al cargar", error);
    }
  };

  return {
    //* Propiedades
    activeMecanico,
    mecanicos,
    hasMecanicoClient: !!activeMecanico,

    //* Metodos
    setActiveMecanico,
    startLoadingMecanico,
  };
};
