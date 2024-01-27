
let NumeroVariable = 3;
let numeroSecreto = 0;
let intento = 0;
let listaNumeroSorteados = [];
condicionesIniciales();
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${intento} ${(intento === 1 ) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // el usauario no acerto
        if(numeroDeUsuario> numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        }else
        asignarTextoElemento("p","El numero secreto es mayor");
        intento++;
        limpiarCaja();
    }
}
function condicionesIniciales(){
    asignarTextoElemento('p',`Indica un número del 1 al ${NumeroVariable}`);
    asignarTextoElemento('h1',"Juego del número secreto");
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()* NumeroVariable)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);

    if(listaNumeroSorteados.length == NumeroVariable)
    {
        asignarTextoElemento('p','Ya se sortearon todos los elementos posibles')

    }else{

        //si el numero generado está incluido en la lista 
    if(listaNumeroSorteados.includes(numeroGenerado))
    {
        return generarNumeroSecreto();
        //recursividad utilizar la misma funcion     
    }else
    {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
        
    }
    

}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = "";   
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //generar condicionesIniciales
    condicionesIniciales();     
    // restablecer el atriburo disabled al boton
    document.getElementById('reiniciar').setAttribute('disabled',true);  
    document.querySelector("#reiniciar").setAttribute('disabled',true) ;
}



