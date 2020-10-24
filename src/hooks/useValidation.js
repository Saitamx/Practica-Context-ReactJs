import { useState, useEffect } from "react";

export default function useValidacion(
  stateInicial,
  validar,
  fnFecth,
  estadoModal
) {
  const [valores, guardarValores] = useState(stateInicial);
  const [errores, guardarErrores] = useState({});
  const [submitForm, guardarSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;
      if (noErrores) {
        fnFecth();
      }
    }
    if (estadoModal && !submitForm) {
      guardarValores(stateInicial);
    }
    guardarSubmitForm(false);
  }, [errores, estadoModal]);

  const handleChange = (e) => {
    guardarValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
    guardarSubmitForm(true);
  };

  return {
    valores,
    errores,
    handleSubmit,
    handleChange,
  };
}