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
export {calcularTotal, calcularTotalImpuesto};