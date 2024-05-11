var aleatorio=Math.floor(Math.random() * 100) + 1;/*Esta línea declara una variable llamada aleatorio 
y le asigna un número aleatorio entre 1 y 100 
(ambos inclusive) utilizando la función Math.random() y luego redondeándolo hacia abajo con Math.floor().*/
var cont=10;/*Esta línea declara una variable llamada cont y le asigna el valor 10. Esta variable se utiliza 
para llevar la cuenta de los intentos restantes del jugador.*/
var numero;/*Esta línea declara una variable llamada numero que se utilizará para almacenar el número ingresado por el usuario.*/
var container;/*Esta línea declara una variable llamada container que se utilizará para almacenar una referencia al primer elemento 
con la clase "container".*/
var comienzo;/**Esta línea declara una variable llamada comienzo que se utilizará para almacenar una referencia al primer elemento 
con la clase "comienzo". */
botonReset;/** Esta línea declara una variable llamada botonReset, pero no se inicializa con ningún valor. Parece ser un error y 
debería ser var botonReset;. */

function ShowHide(){/** Esta línea declara una variable llamada botonReset, 
pero no se inicializa con ningún valor. Parece ser un error y debería ser var botonReset;. */
var container = document.getElementsByClassName("container")[0];/**Esta línea declara una variable llamada container y asigna el primer 
elemento HTML que tiene la clase "container" dentro del documento. La sintaxis document.getElementsByClassName("container")[0] selecciona 
todos los elementos con la clase "container" y [0] accede al primer elemento de esa colección. */
if (container.style.visibility == "hidden"){/**Esta línea inicia una estructura condicional que verifica si el estilo de visibilidad del 
elemento container es "hidden" (oculto). */
  container.style.visibility = "hidden";/**Si el estilo de visibilidad del contenedor es "hidden", entonces esta línea establece el estilo 
  de visibilidad del contenedor como "hidden", es decir, lo oculta. */
}else{/** Este bloque de código se ejecuta si la condición del paso 2 no se cumple, es decir, si el estilo de visibilidad del contenedor no 
es "hidden". */
  container.style.visibility = "visible";/** Si el estilo de visibilidad del contenedor no es "hidden", esta línea establece el estilo de 
  visibilidad del contenedor como "visible", mostrándolo. */
} 
var comienzo = document.getElementsByClassName("comienzo")[0];/**Esta línea declara una variable llamada comienzo y asigna el primer elemento 
HTML que tiene la clase "comienzo" dentro del documento, de manera similar a la línea 1. */
  if (comienzo.style.visibility == "visible"){/**Esta línea inicia otra estructura condicional que verifica si el estilo de visibilidad del 
  elemento comienzo es "visible". */
    comienzo.style.visibility = "visible";/**Si el estilo de visibilidad de comienzo es "visible", esta línea establece explícitamente 
    el estilo de visibilidad del elemento como "visible", asegurando que esté visible. */
  }else{/**Este bloque de código se ejecuta si la condición del paso 7 no se cumple, es decir, si el estilo de visibilidad de comienzo 
  no es "visible". */
    comienzo.style.visibility = "hidden";/**Si el estilo de visibilidad de comienzo no es "visible", esta línea establece el estilo 
    de visibilidad del elemento como "hidden", ocultándolo. */
  } 
}
  


function verificar(){/** Esto inicia la definición de una función llamada verificar(). Esta función se ejecutará cuando el usuario haga 
clic en un botón o realice alguna acción específica en la interfaz de usuario. */
  var numero=Number(document.getElementById("caja").value);/**Esta línea obtiene el valor del elemento de entrada (input) con el id "caja" 
  del documento HTML. Luego, convierte este valor en un número utilizando la función Number() y lo asigna a la variable numero. */
  document.getElementById("mostrar").textContent += numero + ', ';/**Aquí se actualiza el contenido del elemento HTML con el id "mostrar". 
  Se agrega el valor de numero seguido de una coma y un espacio al contenido existente del elemento. */

  if(numero!=aleatorio && numero<aleatorio){/** Esta línea inicia una estructura condicional. Comprueba si el número ingresado por el usuario 
  (numero) es diferente del número aleatorio (aleatorio) y si es menor que el número aleatorio. */

    document.getElementById("medir").innerHTML='Casi pana rabbit';/** Si la condición del paso 4 es verdadera, se actualiza el contenido del 
    elemento HTML con el id "medir" para mostrar el mensaje "Casi pana rabbit". */
    document.getElementById("medir").style.color = 'white';/**Aquí se establece el color del texto del elemento con el id "medir" en blanco. */
    document.getElementById("medir").style.backgroundColor = 'blue';/**Esta línea establece el color de fondo del elemento con el id "medir" en azul. */

    }else if(numero<=aleatorio){/**Esta línea inicia otra parte de la estructura condicional. Comprueba si el número ingresado por el 
    usuario (numero) es menor o igual al número aleatorio (aleatorio). */

      document.getElementById("medir").innerHTML='Tibio';/**Si la condición del paso 8 es verdadera, se actualiza el contenido del elemento HTML 
      con el id "medir" para mostrar el mensaje "Tibio". */
      document.getElementById("medir").style.color = 'black';/**Aquí se establece el color del texto del elemento con el id "medir" en negro. */
      document.getElementById("medir").style.backgroundColor = 'orange';/**Esta línea establece el color de fondo del elemento con el 
      id "medir" en naranja. */

    }else if(numero!=aleatorio && numero>aleatorio){/** Esta línea inicia una nueva condición dentro de la función verificar(). Verifica si el 
    número ingresado por el usuario (numero) no es igual al número aleatorio (aleatorio) y si es mayor que el número aleatorio.
    */

      document.getElementById("medir").innerHTML='Te pasaste mi loco';/** Si la condición del paso 1 es verdadera, esta línea actualiza 
      el contenido del elemento HTML con el id "medir" para mostrar el mensaje "Te pasaste mi loco". */
      document.getElementById("medir").style.color = 'white';/**Establece el color del texto del elemento con el id "medir" en blanco. */
      document.getElementById("medir").style.backgroundColor = 'red';/**Esta línea establece el color de fondo del elemento 
      con el id "medir" en rojo. */

     }else if(numero==aleatorio){/**Esta línea inicia otra condición dentro de la función verificar(). Comprueba si el número ingresado 
     por el usuario (numero) es igual al número aleatorio (aleatorio). */

        document.getElementById("medir").innerHTML= "Felicidades lo conseguiste mi pana rabbit";/**Si la condición del paso 5 es verdadera, 
        esta línea actualiza el contenido del elemento HTML con el id "medir" para mostrar el mensaje "Felicidades lo conseguiste mi pana rabbit". */
        document.getElementById("medir").style.backgroundColor = 'green';/**Establece el color de fondo del elemento con el id "medir" en verde. */
        document.getElementById("medir").style.color = 'white';/** Aquí se establece el color del texto del elemento con el id "medir" en blanco. */
        document.getElementById("btnveri").disabled=true;/**Deshabilita el botón de verificación de adivinanza, identificado por el id "btnveri". */
        document.getElementById("caja").disabled=true;/**Deshabilita el campo de entrada de la caja, identificado por el id "caja". */
        botonReset = document.createElement('button');/** Esta línea crea un nuevo elemento de botón en el documento utilizando el método createElement() 
        y lo asigna a la variable botonReset. */
        botonReset.textContent = 'Reiniciar Game';/**Establece el texto dentro del botón recién creado como "Reiniciar Game" utilizando la propiedad 
        textContent. */
        botonReset.id = 'Reiniciar';/**Asigna al botón el id "Reiniciar" utilizando la propiedad id. */
        document.body.appendChild(botonReset);/**Agrega el botón recién creado al final del cuerpo del documento utilizando el método appendChild()
         en el elemento body. */
        botonReset.addEventListener('click', reiniciarJuego);/**Agrega un event listener al botón recién creado que escucha el evento de clic. 
        Cuando el botón se hace clic, se llamará a la función reiniciarJuego(). */

      }

 if(cont==0){/**Esta línea inicia una nueva condición fuera del bloque anterior. Verifica si la variable cont es igual a 0. */

   document.getElementById("medir").innerHTML= 'Perdiste, suerte pa la próxima';/**Esta línea actualiza el contenido del elemento HTML con el id "medir" 
   para mostrar el mensaje "Perdiste, suerte pa la próxima". */
   document.getElementById("medir").style.backgroundColor = 'red';/**Establece el color de fondo del elemento con el id "medir" en rojo. */
   document.getElementById("btnveri").disabled=true;/**Deshabilita el botón de verificación de adivinanza, identificado por el id "btnveri". */
   document.getElementById("caja").disabled=true;/**Deshabilita el campo de entrada de la caja, identificado por el id "caja". */
   document.getElementById("mostrar").textContent += ' El número era: ' + aleatorio;
   /**Agrega al contenido del elemento HTML con el id "mostrar" el texto " El número era: " seguido del valor de la variable aleatorio. */
   botonReset = document.createElement('button');/**Esta línea crea un nuevo elemento de botón en el documento utilizando el método createElement()
    y lo asigna a la variable botonReset. */
   botonReset.textContent = '¿De nuez?';/**Establece el texto dentro del botón recién creado como "¿De nuez?" utilizando la propiedad textContent. */
   botonReset.id = 'Reiniciar';/**Asigna al botón el id "Reiniciar" utilizando la propiedad id. */
   document.body.appendChild(botonReset);/**Agrega el botón recién creado al final del cuerpo del documento utilizando el método appendChild()
    en el elemento body. */
   botonReset.addEventListener('click', reiniciarJuego);/**Agrega un event listener al botón recién creado que escucha el evento de clic. 
   Cuando el botón se hace clic, se llamará a la función reiniciarJuego(). */
   document.getElementById("caja").focus();/** Establece el foco en el campo de entrada de la caja, identificado por el id "caja". */
  }

   document.getElementById("caja").value= ' ';/**Esta línea establece el valor del campo de entrada de la caja, identificado por el 
   id "caja", como una cadena vacía. Esto borra el contenido del campo de entrada después de que se haya verificado un número. */
   cont--;/** Esta línea decrementa la variable cont en 1. La variable cont se utiliza para llevar la cuenta de los intentos restantes del jugador. */
 }
 function reiniciarJuego(){/**Esta línea inicia la definición de una función llamada  */
  location.reload(true);/**Esta línea recarga la página actual. El argumento true indica que la recarga debe ser desde el servidor, lo que significa 
  que se ignorará la caché del navegador y se solicitará al servidor una nueva versión de la página. */

}

