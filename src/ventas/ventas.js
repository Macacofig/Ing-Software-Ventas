function calcularTotal(cantidad, precio)
{
    return cantidad * precio;
}

function calcularTotalImpuesto(total, estado)
{
    const estados = {'UT': 6.65/100}
    let porcentajeimpuesto = 0;
    let calc = 0;
    if(estado === 'UT')
    {
        porcentajeimpuesto = estados['UT']
    }
    calc = total * porcentajeimpuesto
    return [parseInt(total + calc),parseInt(calc)] ;
}

function calcularDescuentos(cantidad, precio) {
  const total = cantidad * precio;
  let descuento = 0;

  if (total >= 1000 && total <= 2999) {
    descuento = 0.03;
  }

  if(total >= 3000 && total <= 6999) {
    descuento = 0.05;
  }

  if(total >= 7000 && total <= 9999) {
    descuento = 0.07;
  }

  if(total >= 10000 && total <= 29999) {
    descuento = 0.10;
  }

  if(total >= 30000) {
    descuento = 0.15;
  }

  const montoDescuento = total * descuento;
  return [parseInt(total-montoDescuento),parseInt(montoDescuento)];
}

export {calcularTotal, calcularTotalImpuesto, calcularDescuentos};