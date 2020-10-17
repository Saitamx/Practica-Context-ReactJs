import { LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
      return {
        ...state,
        stUsuario: action.payload,
      };

    case CERRAR_SESION:
      return {
        ...state,
        stUsuario: null,
      };

    case LOGIN_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
};
