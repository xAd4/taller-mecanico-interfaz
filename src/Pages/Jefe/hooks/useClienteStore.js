import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewCliente,
  onDeleteCliente,
  onLoadClientes,
  onSetActiveCliente,
  onUpdateCliente,
} from "../../../store/jefe/clientes/clienteSlice";
import tallerMecanicoApi from "../../../api/tallerMecanicoApi";
import Swal from "sweetalert2";

export const useClienteStore = () => {
  const dispatch = useDispatch();
  const { clientes, activeCliente } = useSelector((state) => state.cliente);
  const { user } = useSelector((state) => state.auth);

  const setActiveCliente = (cliente) => {
    dispatch(onSetActiveCliente(cliente));
  };

  const startLoadingClientes = async (page = 1) => {
    try {
      const { data } = await tallerMecanicoApi.get(`/clientes?page=${page}`);
      dispatch(onLoadClientes([...data.data.data]));
    } catch (error) {
      console.log("Error al cargar", error);
    }
  };

  const startSavingEvent = async (cliente) => {
    try {
      if (cliente.id) {
        await tallerMecanicoApi.put(`/clientes/${cliente.id}`, cliente);
        dispatch(onUpdateCliente({ ...cliente, user }));
        return;
      } else {
        const { data } = await tallerMecanicoApi.post("/clientes", cliente);
        console.log({ data });
        dispatch(onAddNewCliente({ ...data }));
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error al guardar", error.response.data?.message, "error");
    }
  };

  const startDeletingCliente = async (cliente) => {
    try {
      await tallerMecanicoApi.delete(`/clientes/${cliente.id}`);
      dispatch(onDeleteCliente());
    } catch (error) {
      console.log(error);
      Swal.fire("Error al borrar", error.response.data?.message, "error");
    }
  };

  return {
    //* Propiedades
    activeCliente,
    clientes,
    hasClienteSelected: !!activeCliente,

    //* Metodos
    setActiveCliente,
    startLoadingClientes,
    startSavingEvent,
    startDeletingCliente,
  };
};
