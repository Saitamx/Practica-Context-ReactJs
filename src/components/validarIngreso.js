export default function validarIngreso(valores) {
  let errores = {};

  if (valores.nombre.trim() === "") {
    errores.completar = alert("El nombre no puede estar vacio");
  } else if (valores.email.trim() === "") {
    errores.email = alert("Ingresa un email");
  }
  return errores;
}
