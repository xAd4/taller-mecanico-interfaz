import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { clienteSlice } from "./jefe/clientes/clienteSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cliente: clienteSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
