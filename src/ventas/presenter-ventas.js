import { calcularTotal, calcularDescuentos, calcularTotalImpuesto, calcularCategoria } from "./ventas.js";

const form = document.getElementById("formulario");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const region = document.getElementById("estados");
const categoria = document.getElementById("categorias");

const precioNeto = document.getElementById("precioNeto");

const totalConDescuento = document.getElementById("totalConDescuento");
const totalConImpuesto = document.getElementById("totalConImpuesto");
const totalConDescuentocategoria = document.getElementById("totalConDescuentocategoria");
const totalConImpuestocategoria = document.getElementById("totalConImpuestocategoria");

const tipoDescuento = document.getElementById("tipoDescuento");
const tipoImpuesto = document.getElementById("tipoImpuesto");
const tipoDescuentocategoria = document.getElementById("tipoDescuentocategoria");
const tipoImpuestocategoria = document.getElementById("tipoImpuestocategoria");

const total = document.getElementById("total");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadPresenter = parseFloat(cantidad.value);
  const precioPresenter = parseFloat(precio.value);
  const regionPresenter = region.value;
  const categoriaPresenter = categoria.value;

  // precio neto
  const neto = calcularTotal(cantidadPresenter, precioPresenter);
  precioNeto.textContent = neto;

  // total con descuento
  const totalydescuento = calcularDescuentos(cantidadPresenter, precioPresenter);
  totalConDescuento.textContent = totalydescuento[1];

  const totalyimpuestos = calcularTotalImpuesto(totalydescuento[0],regionPresenter);
  totalConImpuesto.textContent = totalyimpuestos[1];

  const totalcategoria = calcularCategoria(totalyimpuestos[0], categoriaPresenter);
  totalConDescuentocategoria.textContent = totalcategoria[1];
  totalConImpuestocategoria.textContent = totalcategoria[2];

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

  //mostrar porcentaje para impuestos
  if (regionPresenter === 'UT')
  {
    tipoImpuesto.textContent = "6.25%";
  }
  if (regionPresenter === 'NV')
  {
    tipoImpuesto.textContent = "8%";
  }
  if (regionPresenter === 'TX')
  {
    tipoImpuesto.textContent = "6.25%";
  }
  if (regionPresenter === 'AL')
  {
    tipoImpuesto.textContent = "4%";
  }
  if (regionPresenter === 'CA')
  {
    tipoImpuesto.textContent = "8.25%";
  }
  //mostrar catgoria
  if(categoriaPresenter === 'Alimentos')
  {
    tipoDescuentocategoria.textContent = "0%";
    tipoImpuestocategoria.textContent = "2%";
  }
  if(categoriaPresenter === 'Bebidas alcoholicas')
  {
    tipoDescuentocategoria.textContent = "7%";
    tipoImpuestocategoria.textContent = "0%";
  }
  if(categoriaPresenter === 'Material de escritorio')
  {
    tipoDescuentocategoria.textContent = "0%";
    tipoImpuestocategoria.textContent = "1.5%";
  }
  if(categoriaPresenter === 'Electronicos')
  {
    tipoDescuentocategoria.textContent = "4%";
    tipoImpuestocategoria.textContent = "1%";
  }
  if(categoriaPresenter === 'Vestimenta')
  {
    tipoDescuentocategoria.textContent = "2%";
    tipoImpuestocategoria.textContent = "0%";
  }
  total.textContent = totalcategoria[0];
});