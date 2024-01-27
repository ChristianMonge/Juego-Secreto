/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function masaCorporal(altura,peso){
    let imc = peso/(altura^2)
    return imc;
}
let altura = prompt("ingrese su altura en metros");
let peso  = prompt("ingrese su peso en kilogramos");

alert(masaCorporal(altura,peso));
*/

let colones = prompt("ingrese la cantidad de dolares Costarricense a cambiar");
let tipoCambio = 500;
function cambioDivisas(Colones,tipoCambio){
    let dolares = (colones/tipoCambio)
    return dolares 
}

dolares = cambioDivisas(colones,tipoCambio)
alert(`al tipo de cambio de hoy, la cantidad ingresas es un total de ${dolares} ${dolares > 1 ? 'dolares':'dolar'}`)