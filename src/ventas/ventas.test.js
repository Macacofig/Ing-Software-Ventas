import {calcularTotal, calcularTotalImpuesto , calcularDescuentos} from './ventas.js'

describe('Sistema de ventas', () => {
  it('Deberia mostrar 300 al ingresar cantidad = 100 y precio = 3', () => {
    expect(calcularTotal(100,3)).toEqual(300);
  });
  it('Deberia mostrar al ingresar cantidad = 400, precio = 100 y estado = UT', () => {
    expect(calcularTotalImpuesto(400,100,'UT')).toEqual(42660);
  });
  
  /*-----DESCUENTOS-----*/
  it('Deberia mostrar total con un descuento del 3% cantidad >= 1000 <= 2999', () => {
    expect(calcularDescuentos(1000,150)).toEqual(145500);
  });
});