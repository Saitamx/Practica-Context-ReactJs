import React, { useReducer } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";
import { LOGIN_EXITOSO, CERRAR_SESION } from "../../types";
import Axios from "axios";

const AuthState = (props) => {
  const initialState = {
    stUsuario: null,
    stMensaje: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // SERIE DE FUNCIONES QUE MODIFICAN EL STATE

  // iniciar sesión
  const fnIniciarSesion = async (datos) => {
    try {

      // INVESTIGAR USO DE AXIOS
      const respuesta = await Axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
      console.log(respuesta)
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta,
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
