var canvas = document.getElementById('pizarra');/**Selecciona el elemento HTML con el ID "pizarra" y lo almacena en la variable canvas.
 Este elemento es un lienzo (canvas) en el cual se realizará el dibujo. */
var ctx = canvas.getContext('2d');/**Obtiene el contexto de representación bidimensional (2d) del lienzo canvas y lo almacena en la variable ctx.
 El contexto proporciona métodos y propiedades para dibujar en el lienzo. */
var painting = true;/**Esta variable booleana painting se utiliza para controlar si se está realizando un dibujo. 
Se establece inicialmente en true para indicar que se está dibujando. */
var colorPicker = document.getElementById('colorPicker')/**Selecciona el elemento HTML de tipo "color" con el ID "colorPicker" 
y lo almacena en la variable colorPicker. Este elemento permite al usuario seleccionar un color para dibujar en el lienzo. */

function draw(e){/**Define una función llamada draw que se ejecutará cuando ocurra un evento de dibujo. */
    if(!painting) return;/**Verifica si la variable painting es falsa. Si no se está dibujando 
    (es decir, si painting es falso), la función se detiene y no se realiza ninguna acción de dibujo. */
    ctx.strokeStyle = colorPicker.value;/**Establece el color de trazo (strokeStyle) del contexto de dibujo (ctx) 
    con el valor seleccionado en el elemento colorPicker. */
    ctx.lineWidth = 1;/**Establece el ancho de línea (lineWidth) del contexto de dibujo (ctx) en 1 píxel. */
    ctx.lineCap = "round";/** Establece el estilo de la línea (lineCap) del contexto de dibujo (ctx) en "round", 
    lo que hace que los extremos de las líneas dibujadas sean redondeados. */
    var rect = canvas.getBoundingClientRect();/**Obtiene el tamaño y la posición del lienzo canvas en relación 
    con la ventana del navegador y lo almacena en la variable rect. */
    var x = e.clientX - rect.left; /**Calcula la posición horizontal (x) del puntero del mouse dentro del lienzo 
    canvas restando la posición izquierda del lienzo en la ventana del navegador (rect.left) de la posición horizontal del puntero del mouse 
    en la ventana del navegador (e.clientX). */
    var y = e.clientY - rect.top; /**Calcula la posición vertical (y) del puntero del mouse dentro del lienzo canvas 
    restando la posición superior del lienzo en la ventana del navegador (rect.top) de la posición vertical del puntero del mouse 
    en la ventana del navegador (e.clientY). */
    ctx.lineTo(x, y);/**Dibuja una línea desde la posición actual del lápiz hasta las coordenadas (x, y) especificadas. */
    ctx.stroke();/**Dibuja el trazo actual del contexto de dibujo (ctx). */
    ctx.beginPath();/**Inicia un nuevo trazo en el contexto de dibujo (ctx). Esto significa que el próximo dibujo 
    se iniciará desde el punto actual sin conectarlo con el trazo anterior. */
    ctx.moveTo(x, y);/** Establece la posición de inicio del próximo trazo en el contexto de dibujo (ctx) en las coordenadas (x, y) especificadas. */
}

canvas.addEventListener('mousemove', draw); /**Agrega un evento de escucha para el evento "mousemove" al lienzo canvas. 
Cuando el mouse se mueve sobre el lienzo, la función draw se llama para realizar el dibujo. */