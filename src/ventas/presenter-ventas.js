import { calcularTotal, calcularDescuentos, calcularTotalImpuesto } from "./ventas.js";

const form = document.getElementById("formulario");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const region = document.getElementById("estados");
const precioNeto = document.getElementById("precioNeto");
const totalConDescuento = document.getElementById("totalConDescuento");
const totalConImpuesto = document.getElementById("totalConImpuesto");
const tipoDescuento = document.getElementById("tipoDescuento");
const tipoImpuesto = document.getElementById("tipoImpuesto");
const total = document.getElementById("total");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadPresenter = parseFloat(cantidad.value);
  const precioPresenter = parseFloat(precio.value);
  const regionPresenter = region.value;
  // precio neto
  const neto = calcularTotal(cantidadPresenter, precioPresenter);
  precioNeto.textContent = neto;

  // total con descuento
  const totalydescuento = calcularDescuentos(cantidadPresenter, precioPresenter);
  totalConDescuento.textContent = totalydescuento[1];

  const totalyimpuestos = calcularTotalImpuesto(totalydescuento[0],regionPresenter);
  totalConImpuesto.textContent = totalyimpuestos[1];

  // mostrar porcentaje
  if (neto <= 1000){
    tipoDescuento.textContent = "0%";
  }
  if (neto >= 1000 && neto <= 2999) {
    tipoDescuento.textContent = "3%";
  } 
  if (neto >= 3000 && neto <= 6999){
    tipoDescuento.textContent = "5%";
  }
  if (neto >= 7000 && neto <= 9999){
    tipoDescuento.textContent = "7%";
  }
  if (neto >= 10000 && neto <= 29999){
    tipoDescuento.textContent = "10%";
  }
  if (neto >= 30000){
    tipoDescuento.textContent = "15%";
  }
  if (regionPresenter == 'UT')
  {
    tipoImpuesto.textContent = "6.25%";
  }
  total.textContent = totalyimpuestos[0];
});