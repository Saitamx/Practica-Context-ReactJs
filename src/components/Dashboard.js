import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const { stUsuario, fnCerrarSesion } = authContext;

  return (
    <>
      <h1>Dashbard</h1>
      <h1>Hola {stUsuario !== null && stUsuario.nombre}</h1>

      <button type="button" onClick={() => fnCerrarSesion()}>
        Cerrar Sesión
      </button>

      {stUsuario === null && <Redirect to="/" />}
    </>
  );
}
