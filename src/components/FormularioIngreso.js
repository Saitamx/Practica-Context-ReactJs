import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import useValidacion from "../hooks/useValidation";
import Dashboard from "./Dashboard";
import { arrayPlaceholder } from "./Helper";
import validarIngreso from "./validarIngreso";

const FormularioIngreso = () => {
  const initialState = {
    nombre: "",
    apellido: "",
    edad: 0,
    rut: "",
    email: "",
    password: "",
  };

  const authContext = useContext(AuthContext);
  const { fnIniciarSesion, stUsuario } = authContext;

  const iniciarSesion = () => {
    fnIniciarSesion(valores);
  };

  const { valores, handleChange, handleSubmit } = useValidacion(
    initialState,
    validarIngreso,
    iniciarSesion,
  );

  const { nombre, apellido, edad, rut, email, password } = valores;

  const arrayValores = [nombre, apellido, edad, rut, email, password];

  return (
    <>
      {stUsuario !== null ? (
        <Redirect to="/dashboard" />
      ) : (
        <form onSubmit={handleSubmit}>
          {arrayPlaceholder.map((copia, i) => (
            <input
              key={i}
              onChange={handleChange}
              name={copia}
              value={arrayValores[i]}
              type="text"
              placeholder={copia}
            />
          ))}
          <button type="submit">Enviar</button>
        </form>
      )}
    </>
  );
};

export default FormularioIngreso;
