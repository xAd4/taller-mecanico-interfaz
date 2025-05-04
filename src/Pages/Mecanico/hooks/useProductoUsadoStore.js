import { useDispatch, useSelector } from "react-redux";
import {
  onDeleteProducto,
  onLoadProductos,
  onSetActiveProducto,
  onStartLoading,
  onUpdateProducto,
} from "../../../store/mecanico/productoUsado/productoUsadoSlice";
import tallerMecanicoApi from "../../../api/tallerMecanicoApi";
import Swal from "sweetalert2";

export const useProductoUsadoStore = () => {
  const dispatch = useDispatch();
  const { productos, activeProducto, isLoadingProducto } = useSelector(
    (state) => state.productoUsado
  );

  const { user } = useSelector((state) => state.auth);

  const setActiveProducto = (producto) => {
    dispatch(onSetActiveProducto(producto));
  };

  const startLoadingProducto = async (tareaAsignada) => {
    try {
      dispatch(onStartLoading());
      const { data } = await tallerMecanicoApi.get(
        `/productos-usados/${tareaAsignada}`
      );
      dispatch(onLoadProductos([{ ...data.data }]));
    } catch (error) {
      console.log("Error al cargar", error);
      Swal.fire("Error al borrar", error.response.data?.message, "error");
    }
  };

  const startSavingProducto = async (producto) => {
    try {
      await tallerMecanicoApi.put(`/productos-usados/${producto.id}`, producto);
      dispatch(onUpdateProducto({ ...producto, user }));
    } catch (error) {
      console.log(error);
      Swal.fire("Error al guardar", "Error", "error");
    }
  };

  const startDeletingProducto = async (producto) => {
    try {
      await tallerMecanicoApi.delete(`/productos-usados/${producto.id}`);
      dispatch(onDeleteProducto());
    } catch (error) {
      console.log(error);
      Swal.fire("Error al borrar", error.response.data?.message, "error");
    }
  };

  return {
    //* Propiedades
    activeProducto,
    productos,
    isLoadingProducto,
    hasProductoSelected: !!activeProducto,

    //* Metodos
    setActiveProducto,
    startLoadingProducto,
    startSavingProducto,
    startDeletingProducto,
  };
};
