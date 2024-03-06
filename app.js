//todas las variables siempre van hasta arriba por buena practica y para que tengan alcance global
let numeroSecreto = generarNumeroSecreto();

//funcion para acceder al elemento(objeto) del DOM por medio de su selector y asignar su valor a una variable para poder cambiar su valor
//le asigno el valor al objeto mediante el metodo innerHTML
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento); 
  elementoHTML.innerHTML = texto;
  //esta función no retorna nada, solo asigna un valor al elemento HTML, pero es buena practica siempre poner return a las funciones.
  return;
}
//llamamos a la funcion y se le asignan los valores a los parametros para cambiar el texto
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');

//función para generar el número secreto
function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

//función para obtener el número que el usuario ingresa en el input
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  //console.log(typeof(numeroDeUsuario));
  //console.log(typeof(numeroSecreto));
  console.log(numeroSecreto);
  //console.log(numeroDeUsuario);
  //console.log(numeroSecreto === numeroDeUsuario);
  if(numeroSecreto === numeroDeUsuario){
   asignarTextoElemento('p','¡Felicidades! Acertaste el número.');
  } else {
    if(numeroDeUsuario > numeroSecreto){
      asignarTextoElemento('p','El número secreto es menor');
    } else {
      asignarTextoElemento('p','El número secreto es mayor');
    }
  }
  return;
}

