import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { clienteSlice } from "./jefe/clientes/clienteSlice";
import { vehiculoSlice } from "./jefe/vehiculos/vehiculoSlice";
import { ordenSlice } from "./jefe/ordenes/ordenSlice";
import { tareaSlice } from "./jefe/tareas/tareaSlice";
import { mecanicoSlice } from "./jefe/usuarios/mecanicoSlice";

export const store = configureStore({
  reducer: {
    // Autenticacion para empleados
    auth: authSlice.reducer,

    // Acciones del dashboard del jefe
    cliente: clienteSlice.reducer,
    vehiculo: vehiculoSlice.reducer,
    orden: ordenSlice.reducer,
    tarea: tareaSlice.reducer,
    mecanico: mecanicoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
