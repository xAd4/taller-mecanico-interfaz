import { createSlice } from "@reduxjs/toolkit";

// const tempCliente = {
//   nombre: "Cliente numero 2",
//   apellido: "Apellido de Cliente numero 2",
//   email: "cliente@test.com",
//   dni: "45678910",
//   rut: "78945610",
//   telefono: "1234578944",
//   domicilio: "Domicilio del cliente numero 2",
// };

export const clienteSlice = createSlice({
  name: "clientes",
  initialState: {
    isLoadingClientes: true,
    clientes: [
      //tempCliente
    ],
    activeCliente: null,
  },
  reducers: {
    onSetActiveCliente: (state, { payload }) => {
      state.activeCliente = payload;
    },
    onLoadClientes: (state, { payload = [] }) => {
      state.isLoadingClientes = false;
      //state.clientes = payload;
      payload.forEach((cliente) => {
        const exists = state.clientes.some(
          (dbCliente) => dbCliente.id === cliente.id
        );

        if (!exists) {
          state.clientes.push(cliente);
        }
      });
    },
    onAddNewCliente: (state, { payload }) => {
      state.clientes.push(payload);
      state.activeCliente = null;
    },
    onUpdateCliente: (state, { payload }) => {
      state.clientes = state.clientes.map((cliente) => {
        if (cliente.id === payload.id) {
          return payload;
        }
        return cliente;
      });
    },
    onDeleteCliente: (state) => {
      if (state.activeCliente) {
        state.clientes = state.clientes.filter(
          (cliente) => cliente.id !== state.activeCliente.id
        );
        state.activeCliente = null;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetActiveCliente,
  onLoadClientes,
  onAddNewCliente,
  onUpdateCliente,
  onDeleteCliente,
} = clienteSlice.actions;
