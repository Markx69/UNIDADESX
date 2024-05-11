// Selecciona el elemento HTML con el id 'generar' y lo asigna a la variable botonFibonacci.
let botonFibonacci = document.getElementById('generar');
// Verifica si el elemento botonFibonacci existe.
if (botonFibonacci) {
    // Agrega un event listener al botón que escucha el evento 'click' y ejecuta una función anónima.
    botonFibonacci.addEventListener('click', function() {
        // Define una función llamada generarFibonacci que toma un parámetro n.
        function generarFibonacci(n) {
            // Crea un array llamado numeros con los primeros dos números de la secuencia de Fibonacci.
            let numeros = [0, 1];
            // Itera desde el tercer número hasta el número n en la secuencia de Fibonacci.
            for (let i = 2; i < n; i++) {
                // Agrega el siguiente número en la secuencia de Fibonacci al array numeros.
                numeros.push(numeros[i - 1] + numeros[i - 2]);
            }
            // Devuelve el array numeros que contiene los primeros n números de la secuencia de Fibonacci.
            return numeros;
        }
        // Actualiza el contenido del elemento HTML con el id 'fibonacci' con los primeros 20 números de la secuencia de Fibonacci.
        document.getElementById('fibonacci').innerText = generarFibonacci(20).join(', ');
    });
}
