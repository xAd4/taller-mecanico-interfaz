import { useDispatch, useSelector } from "react-redux";
import tallerMecanicoApi from "../api/tallerMecanicoApi";
import {
  onChecking,
  onClearErrorMessage,
  onLogin,
  onAuthError,
  onRegister,
  onLogout,
} from "../store/auth/authSlice";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  //* Login

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await tallerMecanicoApi.post("/iniciar-sesion", {
        email,
        password,
      });

      localStorage.setItem("token", data.access_token);

      localStorage.setItem("token-init-date", new Date().getTime());

      console.log(data);

      dispatch(onLogin({ ...data.user }));
    } catch (error) {
      dispatch(onAuthError(error.response.data.message || "Error inesperado"));
      setTimeout(() => {
        dispatch(onClearErrorMessage());
      }, 10);
    }
  };

  //* Registro

  const startRegister = async ({
    name,
    email,
    password,
    password_confirmation,
  }) => {
    dispatch(onChecking());
    try {
      const { data } = await tallerMecanicoApi.post("/registro", {
        name,
        email,
        password,
        password_confirmation,
      });
      console.log(data);
      dispatch(onRegister({ ...data.user }));
    } catch (error) {
      dispatch(onAuthError(error.response.data.message || "Error inesperado"));
      setTimeout(() => {
        dispatch(onClearErrorMessage());
      }, 10);
    }
  };

  //* Persistencia al recargar

  const checkAuthToken = async () => {
    dispatch(onChecking());
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(onAuthError("No hay token"));
      return;
    }

    try {
      const { data } = await tallerMecanicoApi.get("/usuario");
      dispatch(onLogin(data));
    } catch (error) {
      localStorage.removeItem("token");
      dispatch(onAuthError("Token inválido o expirado", error));
    }
  };

  //* Logout

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //* Propiedades
    status,
    user,
    errorMessage,
    //* Metodos
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
  };
};
