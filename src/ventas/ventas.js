function calcularTotal(cantidad, precio)
{
    return cantidad * precio;
}

function calcularTotalImpuesto(total, estado)
{
    const estados = {'UT': 6.65/100, 'NV': 8/100, "TX": 6.25/100, "AL": 4/100, "CA": 8.25/100}
    let porcentajeimpuesto = 0;
    if(estado === 'UT')
    {
      porcentajeimpuesto = estados['UT']
    }
    if(estado === 'NV')
    {
      porcentajeimpuesto = estados['NV']
    }
    if(estado === 'TX')
    {
      porcentajeimpuesto = estados['TX']
    }
    if(estado === 'AL')
    {
      porcentajeimpuesto = estados['AL']
    }
    if(estado === "CA")
    {
      porcentajeimpuesto = estados['CA']
    }
    let calc = total * porcentajeimpuesto
    let totalconimpuesto = total + calc;
    return [Number((totalconimpuesto).toFixed(2)),Number((calc).toFixed(2))] ;
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
  return [Number((total-montoDescuento).toFixed(2)),Number((montoDescuento).toFixed(2))];
}

export {calcularTotal, calcularTotalImpuesto, calcularDescuentos};