//funcion para acceder al elemento(objeto) del DOM por medio de su selector y asignar su valor a una variable para poder cambiar su valor
//le asigno el valor al objeto mediante el metodo innerHTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}
//llamamos a la funcion y se le asignan los valores a los parametros para cambiar el texto
asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", "Indica un número del 1 al 100");


function intentoDeUsuario(){

}
