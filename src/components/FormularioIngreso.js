import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import Dashboard from "./Dashboard";
import { arrayPlaceholder } from "./Helper";

const FormularioIngreso = () => {
  const [valor, setValor] = useState({
    nombre: "",
    apellido: "",
    edad: 0,
    rut: "",
    email: "",
    password: "",
  });

  const authContext = useContext(AuthContext);
  const { fnIniciarSesion, stUsuario } = authContext;

  const { nombre, apellido, edad, rut, email, password } = valor;

  const onChange = (e) => {
    setValor({
      ...valor,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // VALIDAR USUARIO
    if (nombre.trim() === "" || password.trim() === "") {
      alert("Todos los campos son obligatorios");
      return;
    }
    fnIniciarSesion(valor);
  };

  return (
    <>
      {stUsuario !== null ? (
        <Redirect to="/dashboard" />
      ) : (
        <form onSubmit={onSubmit}>
          {arrayPlaceholder.map((copia, i) => (
            <input
              key={i}
              onChange={onChange}
              name={copia}
              value={
                i === 0
                  ? nombre
                  : i === 1
                  ? apellido
                  : i === 2
                  ? edad
                  : i === 3
                  ? rut
                  : i === 4
                  ? email
                  : password
              }
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
