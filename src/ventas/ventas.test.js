import {calcularTotal, calcularTotalImpuesto , calcularDescuentos} from './ventas.js'

describe('Sistema de ventas', () => {
  it('Deberia mostrar 300 al ingresar cantidad = 100 y precio = 3', () => {
    expect(calcularTotal(100,3)).toEqual(300);
  });
  /*------IMPUESTOS------*/
  it('Deberia mostrar al ingresar cantidad = 400, precio = 100 y estado = UT', () => {
    expect(calcularTotalImpuesto(4000,'UT')).toEqual(4266);
  });
  
  /*-----DESCUENTOS-----*/
  it('Deberia mostrar total con un descuento del 3% cantidad >= 1000 <= 2999', () => {
    expect(calcularDescuentos(100,15)).toEqual([1455,45]);
  });
  it('Deberia mostrar total con un descuento del 5% cantidad >= 3000 <= 6999', () => {
    expect(calcularDescuentos(3000,2)).toEqual([5700,300]);
  });
  it('Deberia mostrar total con un descuento del 7% cantidad >= 7000 <= 9999', () => {
    expect(calcularDescuentos(1000,7)).toEqual([6510,490]);
  });
  it('Deberia mostrar total con un descuento del 10% cantidad >= 10000 <= 29999', () => {
    expect(calcularDescuentos(1000,10)).toEqual([9000,1000]);
  });
    it('Deberia mostrar total con un descuento del 15% cantidad >= 30000', () => {
    expect(calcularDescuentos(2000,20)).toEqual([34000,6000]);
  });
});