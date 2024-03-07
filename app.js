//todas las variables siempre van hasta arriba por buena practica y para que tengan alcance global, la función condiciones inciales le dara el valor
let numeroSecreto = 0;
//variable para almacenar el número de intentos, la función condicionesIniciales le dara el valor
let intentos = 0;

//funcion para acceder al elemento(objeto) del DOM por medio de su selector y asignar su valor a una variable para poder cambiar su valor
//le asigno el valor al objeto mediante el metodo innerHTML
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento); 
  elementoHTML.innerHTML = texto;
  //esta función no retorna nada, solo asigna un valor al elemento HTML, pero es buena practica siempre poner return a las funciones.
  return;
}


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
  console.log(intentos);
  if(numeroSecreto === numeroDeUsuario){
    //se utiliza template string y operador ternario dentro del parametro para dar mensaje al usuario sobre los intentos
   asignarTextoElemento('p',`¡Felicidades! Acertaste el número en ${intentos} ${(intentos === 1) ? "intento." : "intentos."}`);
   //se remueve el disabled del DOM en el botón "nuevo juego" para que se active el botón de nuevo juego
   document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acertó.
    if(numeroDeUsuario > numeroSecreto){
      asignarTextoElemento('p','El número secreto es menor');
    } else {
      asignarTextoElemento('p','El número secreto es mayor');
    }
    //aumenta el numero de intentos
    intentos++;
    //se ejecuta la función para limpiar caja
    limpiarCaja();
  }
  return;
}

  //función para limpiar cada cada que el usuario ingrese un numero para intentar adivinar
  function limpiarCaja() {
    //querySelector también se puede usar para acceder a un id solamente hay que indicarselo con un # al inicio
    document.querySelector('#valorUsuario').value = '';
    
  }
  //función para iniciar el juego con las condiciones iniciales
  function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    //Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el número de intentos
    intentos = 1;

  }

  //función para reiniciar el juego
  function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //ejecutar la función con las condiciones iniciales del juego
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');


  }
  

//ejecutamos la funcion que tiene dentro la función a la que se asignan los valores a los parametros para cambiar el texto de inicio
condicionesIniciales();
