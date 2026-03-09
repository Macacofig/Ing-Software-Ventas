import { calcularTotal, calcularDescuentos, calcularTotalImpuesto, calcularCategoria, calcularPesoVolumetrico } from "./ventas.js";

const form = document.getElementById("formulario");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const region = document.getElementById("estados");
const categoria = document.getElementById("categorias");
const pesovolumetrico = document.getElementById("pesovolumetrico");
const cliente = document.getElementById("cliente");

const precioNeto = document.getElementById("precioNeto");

const totalConDescuento = document.getElementById("totalConDescuento");
const totalConImpuesto = document.getElementById("totalConImpuesto");
const totalConDescuentocategoria = document.getElementById("totalConDescuentocategoria");
const totalConImpuestocategoria = document.getElementById("totalConImpuestocategoria");
const totalpesovolumetrico = document.getElementById("totalpesovolumetrico");
const totalTipoCliente = document.getElementById("totalTipoCliente");


const tipoDescuento = document.getElementById("tipoDescuento");
const tipoImpuesto = document.getElementById("tipoImpuesto");
const tipoDescuentocategoria = document.getElementById("tipoDescuentocategoria");
const tipoImpuestocategoria = document.getElementById("tipoImpuestocategoria");
const tipoCliente = document.getElementById("tipoCliente");

const total = document.getElementById("total");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadPresenter = parseFloat(cantidad.value);
  const precioPresenter = parseFloat(precio.value);
  const regionPresenter = region.value;
  const categoriaPresenter = categoria.value;
  const pesovolumetricoPresenter = parseFloat(pesovolumetrico.value);
  const clientePresenter = cliente.value;

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

  const totalypeso = calcularPesoVolumetrico(totalcategoria[0],cantidadPresenter, pesovolumetricoPresenter);
  totalpesovolumetrico.textContent = totalypeso[1];
  total.textContent = totalypeso[0];

  const totalcliente =calculoTipoCliente(totalypeso[0],clientePresenter);
  totalTipoCliente.textContent = totalcliente[1];

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
  if(categoriaPresenter === 'Varios')
  {
    tipoDescuentocategoria.textContent = "0%";
    tipoImpuestocategoria.textContent = "0%";
  }

  //mostrar cliente
  if(clientePresenter === 'Normal')
  {
    tipoCliente.textContent = "0%";
  }
  if(clientePresenter === 'Recurrente')
  {
    tipoCliente.textContent = "0.5%";
  }
  if(clientePresenter === 'Antiguo Recurrente')
  {
    tipoCliente.textContent = "1%";
  }
  if(clientePresenter === 'Especial')
  {
    tipoCliente.textContent = "1.5%";
  }

  total.textContent = totalcliente[0];
});