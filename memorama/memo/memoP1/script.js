const cards = document.querySelectorAll(".card");/**Selecciona todos los elementos HTML con la clase "card" y los almacena 
en la variable cards. Estos elementos probablemente representan las cartas del juego. */

let matched = 0;/** Declara una variable matched e inicializa su valor en 0. Esta variable se utilizará para rastrear 
el número de cartas que se han emparejado correctamente. */
let cardOne, cardTwo;/**Declara dos variables cardOne y cardTwo sin asignarles ningún valor inicial. Estas variables 
se utilizarán para almacenar las cartas que se están comparando. */
let disableDeck = false;/**Declara una variable disableDeck e inicializa su valor en false. 
Esta variable se utiliza para deshabilitar temporalmente la interacción del jugador con las cartas mientras se están comparando.*/

function flipCard({target: clickedCard}) {/**Define una función llamada flipCard que se activa cuando una carta se voltea. */
    if(cardOne !== clickedCard && !disableDeck) {/** Verifica si la carta clicada no es igual a cardOne y si el mazo no está deshabilitado. */
        clickedCard.classList.add("flip");/**Agrega la clase "flip" a la carta clicada, lo que la voltea para revelar su contenido. */
        if(!cardOne) {
            return cardOne = clickedCard;/** Si cardOne aún no tiene un valor asignado, asigna la carta clicada a cardOne y sale de la función. */
        }
        cardTwo = clickedCard;/** Asigna la carta clicada a la variable cardTwo. */
        disableDeck = true;/**Establece la variable disableDeck en true para deshabilitar temporalmente la interacción con las cartas. */
        let cardOneImg = cardOne.querySelector(".back-view img").src,/**Obtiene la ruta de la imagen de la carta cardOne. */
        cardTwoImg = cardTwo.querySelector(".back-view img").src;/**Obtiene la ruta de la imagen de la carta cardTwo. */
        matchCards(cardOneImg, cardTwoImg);/** Llama a la función matchCards y pasa las rutas de las imágenes de las dos cartas 
        para verificar si son iguales. */
    }
}

function matchCards(img1, img2) {/**Define una función llamada matchCards que recibe dos parámetros: img1 y img2,
 que representan las rutas de las imágenes de las dos cartas que se están comparando. */
    if(img1 === img2) {/**Comprueba si las rutas de las imágenes img1 e img2 son iguales, lo que indica que las dos cartas son iguales. */
        matched++;/** Incrementa el contador de cartas emparejadas matched. */
        if(matched == 8) {/**Verifica si todas las cartas han sido emparejadas (cuando matched es igual a 8), 
        lo que significa que el juego ha sido completado. */
            setTimeout(() => {
                return shuffleCard();
            }, 1000);/**Utiliza la función setTimeout para retrasar la ejecución de la función shuffleCard durante 1000 milisegundos 
            (1 segundo). shuffleCard probablemente se utiliza para barajar las cartas nuevamente después de completar el juego. */
        }
        cardOne.removeEventListener("click", flipCard);/**Elimina el evento de clic de la carta cardOne para evitar que se voltee nuevamente. */
        cardTwo.removeEventListener("click", flipCard);/**Elimina el evento de clic de la carta cardTwo para evitar que se voltee nuevamente. */
        cardOne = cardTwo = "";/**Restablece las variables cardOne y cardTwo a una cadena vacía para indicar que no hay cartas seleccionadas actualmente. */
        return disableDeck = false;/**Habilita nuevamente la interacción con las cartas estableciendo disableDeck en false. */
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);/**Utiliza la función setTimeout para agregar la clase "shake" a las cartas cardOne y cardTwo 
    después de un retraso de 400 milisegundos (0.4 segundos). Esto probablemente indica una animación 
    de sacudida para indicar que las cartas no son iguales. */

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);/**Utiliza la función setTimeout para restablecer las clases "shake" y "flip" de las cartas cardOne y cardTwo 
    después de un retraso de 1200 milisegundos (1.2 segundos). Esto probablemente indica que las cartas se volvieron a su estado original 
    después de una breve animación. Además, restablece las variables cardOne y cardTwo a una cadena vacía y habilita nuevamente la interacción 
    con las cartas. */
}

function shuffleCard() {/** Define una función llamada shuffleCard. 
Esta función se utiliza para reiniciar el estado del juego, barajando las cartas. */
    matched = 0;/**Restablece el contador de cartas emparejadas (matched) a 0. Esto indica que no se ha emparejado ninguna carta. */
    disableDeck = false;/** Habilita la interacción con las cartas estableciendo la variable disableDeck en false. 
    Esto permite que las cartas se vuelvan a voltear y se pueda hacer clic en ellas. */
    cardOne = cardTwo = "";/**Restablece las variables cardOne y cardTwo a una cadena vacía. 
    Esto indica que no hay cartas seleccionadas actualmente. */
    
}

shuffleCard();/** Llama a la función shuffleCard para iniciar el proceso de barajado de cartas. 
Esto se hace al comienzo del juego o después de completar un juego. */
    
cards.forEach(card => {/**Itera sobre cada elemento en la lista de cartas (cards). */
    card.addEventListener("click", flipCard);/** Agrega un evento de clic a cada carta. 
    Cuando se hace clic en una carta, se llama a la función flipCard para voltearla. */
});