import {calcularTotal, calcularTotalImpuesto , calcularDescuentos, calcularCategoria} from './ventas.js'

describe('Sistema de ventas', () => {
  it('Deberia mostrar 300 al ingresar cantidad = 100 y precio = 3', () => {
    expect(calcularTotal(100,3)).toEqual(300);
  });
  /*------IMPUESTOS------*/
  it('Deberia mostrar 4266 al ingresar cantidad = 400, precio = 100 y estado = UT', () => {
    expect(calcularTotalImpuesto(4000,'UT')).toEqual([4266,266]);
  });
  it('Deberia mostrar 8640 al ingresar  cantidad = 80, precio = 100 y estado = NV', () => {
    expect(calcularTotalImpuesto(8000,'NV')).toEqual([8640,640]);
  });
  it('Deberia mostrar 850 al ingresar cantidad = 10, precio = 80 y estado = TX', () => {
    expect(calcularTotalImpuesto(800,'TX')).toEqual([850,50]);
  });
  it('Deberia mostrar 4160 al ingresar cantidad = 40, precio = 100, estado = AL', () => {
    expect(calcularTotalImpuesto(4000,'AL')).toEqual([4160,160]);
  });
  it('Deberia mostrar 16237 al ingresar cantidad = 150, precio = 100, estado = CA', () => {
    expect(calcularTotalImpuesto(15000,'CA')).toEqual([16237.5,1237.5]);
  });
  /*-----DESCUENTOS-----*/
  it('Deberia mostrar total con un descuento del 3% totalingresado >= 1000 <= 2999', () => {
    expect(calcularDescuentos(100,15)).toEqual([1455,45]);
  });
  it('Deberia mostrar total con un descuento del 5% totalingresado >= 3000 <= 6999', () => {
    expect(calcularDescuentos(3000,2)).toEqual([5700,300]);
  });
  it('Deberia mostrar total con un descuento del 7% totalingresado >= 7000 <= 9999', () => {
    expect(calcularDescuentos(1000,7)).toEqual([6510,490]);
  });
  it('Deberia mostrar total con un descuento del 10% totalingresado >= 10000 <= 29999', () => {
    expect(calcularDescuentos(1000,10)).toEqual([9000,1000]);
  });
  it('Deberia mostrar total con un descuento del 15% totalingresado >= 30000', () => {
    expect(calcularDescuentos(2000,20)).toEqual([34000,6000]);
  });
  /*-----CATEGORIA-----*/
  it('Deberia mostrar total con un calculo de Aliento totalingresado', () => {
    expect(calcularCategoria(2000,'Alimentos')).toEqual([2040,0,40]);
  });
});