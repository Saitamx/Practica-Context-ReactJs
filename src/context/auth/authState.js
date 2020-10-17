import React, { useReducer } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";
import { LOGIN_EXITOSO, CERRAR_SESION } from "../../types";

const AuthState = (props) => {
  const initialState = {
    stUsuario: null,
    stMensaje: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // SERIE DE FUNCIONES QUE MODIFICAN EL STATE

  // iniciar sesión
  const fnIniciarSesion = (datos) => {
    try {
      dispatch({
        type: LOGIN_EXITOSO,
        payload: datos,
      });
    } catch (error) {
      console.log("hubo un error");
    }
  };

  const fnCerrarSesion = () => {
    dispatch({
        type: CERRAR_SESION,
      });
  }

  return (
    <AuthContext.Provider
      value={{
        // TODAS LAS FUNCIONES O ESTADOS QUE MODIFICAN EL CONTEXTO
        stUsuario: state.stUsuario,
        fnIniciarSesion,
        fnCerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
