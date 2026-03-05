import { calcularTotal } from "./ventas.js";

const form = document.getElementById("formulario");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const preciototal = document.getElementById("total");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadPresenter = parseFloat(cantidad.value);
  const precioPresenter = parseFloat(precio.value);

  preciototal.textContent = calcularTotal(cantidadPresenter, precioPresenter);
});