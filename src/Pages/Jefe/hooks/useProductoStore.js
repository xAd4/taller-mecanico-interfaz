import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewProducto,
  onDeleteProducto,
  onLoadProductos,
  onSetActiveProducto,
  onStartLoading,
  onUpdateProducto,
} from "../../../store/jefe/inventario/productoSlice";
import tallerMecanicoApi from "../../../api/tallerMecanicoApi";
import Swal from "sweetalert2";

export const useProductoStore = () => {
  const dispatch = useDispatch();
  const { productos, activeProducto, isLoadingProducto } = useSelector(
    (state) => state.producto
  );

  const { user } = useSelector((state) => state.auth);

  const setActiveProducto = (producto) => {
    dispatch(onSetActiveProducto(producto));
  };

  const startLoadingProducto = async (page = 1) => {
    try {
      dispatch(onStartLoading());
      const { data } = await tallerMecanicoApi.get(`/productos?page=${page}`);
      dispatch(onLoadProductos([...data.data.data]));
    } catch (error) {
      console.log("Error al cargar", error);
    }
  };

  const startSavingProducto = async (producto) => {
    try {
      if (producto.id) {
        await tallerMecanicoApi.put(`/productos/${producto.id}`, producto);
        dispatch(onUpdateProducto({ ...producto, user }));
        return;
      } else {
        const { data } = await tallerMecanicoApi.post("/productos", producto);
        console.log({ data });
        dispatch(onAddNewProducto({ ...data }));
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error al guardar", "Error", "error");
    }
  };

  const startDeletingProducto = async (producto) => {
    try {
      await tallerMecanicoApi.delete(`/productos/${producto.id}`);
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
    hasClienteSelected: !!activeProducto,

    //* Metodos
    setActiveProducto,
    startLoadingProducto,
    startSavingProducto,
    startDeletingProducto,
  };
};
