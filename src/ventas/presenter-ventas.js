import { calcularTotalImpuesto } from "./ventas.js";

const form = document.getElementById("formulario");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const estado = document.getElementById("estados");
const preciototal = document.getElementById("total");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadPresenter = parseFloat(cantidad.value);
  const precioPresenter = parseFloat(precio.value);
  const estadoPresenter = estado.value;

  const total = calcularTotalImpuesto(
    cantidadPresenter,
    precioPresenter,
    estadoPresenter
  );

  preciototal.textContent = total;
});