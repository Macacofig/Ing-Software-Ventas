function calcularTotal(cantidad, precio)
{
    return cantidad * precio;
}

function calcularTotalImpuesto(cantidad, precio, estado)
{
    const estados = {'UT': 6.65/100}
    let porcentajeimpuesto = 0;
    let calc = 0;
    if(estado === 'UT')
    {
        porcentajeimpuesto = estados['UT']
    }
    calc = cantidad * precio * porcentajeimpuesto
    return (cantidad * precio) + calc ;
}

function calcularDescuentos(cantidad, precio) {
  const total = cantidad * precio;
  let descuento = 0;

  if (cantidad >= 1000 && cantidad <= 2999) {
    descuento = 0.03;
  }

  const montoDescuento = total * descuento;
  return total - montoDescuento;
}

export {calcularTotal, calcularTotalImpuesto, calcularDescuentos};