import { calcularTotal } from "./ventas";

const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const buttonCalcular = document.getElementById("botonCalcular");
const preciototal = document.getElementById("total"); 

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadPresenter = Number.parseInt(cantidad.value);
  const precioPresenter = Number.parseInt(precio.value);

  preciototal.innerHTML = calcularTotal(cantidadPresenter,precioPresenter);
});
