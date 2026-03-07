import { calcularTotal, calcularDescuentos } from "./ventas.js";

const form = document.getElementById("formulario");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");

const precioNeto = document.getElementById("precioNeto");
const totalConDescuento = document.getElementById("totalConDescuento");
const tipoDescuento = document.getElementById("tipoDescuento");
const total = document.getElementById("total");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadPresenter = parseFloat(cantidad.value);
  const precioPresenter = parseFloat(precio.value);

  // precio neto
  const neto = calcularTotal(cantidadPresenter, precioPresenter);
  precioNeto.textContent = neto;

  // total con descuento
  const conDescuento = calcularDescuentos(cantidadPresenter, precioPresenter);
  totalConDescuento.textContent = conDescuento;

  // mostrar porcentaje
  if (cantidadPresenter >= 1000 && cantidadPresenter <= 2999) {
    tipoDescuento.textContent = "3%";
  } 
  if (cantidadPresenter >= 3000 && cantidadPresenter <= 6999 ){
    tipoDescuento.textContent = "5%";
  }
  else {
    tipoDescuento.textContent = "0%";
  }

  total.textContent = conDescuento;
});