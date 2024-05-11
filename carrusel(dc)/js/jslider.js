document.addEventListener("DOMContentLoaded", function() {/**Espera a que se cargue completamente el DOM 
antes de ejecutar el código dentro de esta función.*/
    const slides = document.querySelectorAll(".slide");/**Selecciona todos los elementos con la clase 
    "slide" y los almacena en la variable `slides`. */
    const texts = document.querySelectorAll(".text-slide");/** Selecciona todos los elementos con la 
    clase "text-slide" y los almacena en la variable `texts`.*/
  
    let currentIndex = 0;/** Declara una variable `currentIndex` e inicialízala en 0. Esta variable 
    se utiliza para realizar un seguimiento del índice de la diapositiva actual.*/
  
    function showSlide(index) {/**  Declara una función llamada `showSlide` que toma un parámetro
     `index` que representa el índice de la diapositiva que se mostrará.*/
      // Ocultar todas las diapositivas y textos
      slides.forEach((slide, i) => {/** Itera sobre cada elemento de la lista `slides`*/
        if (i == index) {/**Verifica si el índice actual del bucle es igual al índice pasado como argumento. */
          slide.style.transform = "translateY(0)"; // Muestra la imagen actual
        } else {/**Si el índice actual no es igual al índice pasado como argumento. */
          slide.style.transform = "translateY(100%)"; // Oculta las otras imágenes
        }
      });
      texts.forEach((text, i) => {/** Itera sobre cada elemento de la lista `texts`*/
        if (i == index) {/**Verifica si el índice actual del bucle es igual al índice pasado como argumento. */
          text.style.transform = "translateY(0)"; // Muestra el texto actual
        } else {/**  Si el índice actual no es igual al índice pasado como argumento.*/
          text.style.transform = "translateY(-100%)"; // Oculta los otros textos
        }
      });
    }
  
    function nextSlide() {/**  Declara una función llamada `nextSlide` que avanza al siguiente slide.*/
      currentIndex++;/** Incrementa el índice de la diapositiva actual. */
      if (currentIndex >= slides.length) {/**Verifica si el índice de la diapositiva actual es 
      mayor o igual al número total de diapositivas. */
        currentIndex = 0;/**Si el índice de la diapositiva actual es mayor o igual al número total de diapositivas, vuelve al principio. */
      }
      showSlide(currentIndex);/**Llama a la función `showSlide` para mostrar la diapositiva actual. */
    }
  
    showSlide(currentIndex);/** Llama a la función `showSlide` para mostrar la diapositiva actual al cargar la página.
    */
  
    setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos
  });