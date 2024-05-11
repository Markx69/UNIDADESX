function verificarPrimo() {
    // Obtener el número ingresado por el usuario del elemento HTML con el id "numeroInput"
    let numero = parseInt(document.getElementById("numeroInput").value);
    // Inicializar una variable booleana que indicará si el número es primo, inicialmente como true
    let esPrimo = true;
    // Verificar si el número es menor o igual a 1
    if (numero <= 1) {
        // Si el número es menor o igual a 1, no es primo
        esPrimo = false;
    } else {
        // Si el número es mayor que 1, realizar un bucle para verificar si tiene algún divisor
        // Comenzar el bucle en 2 y continuar hasta la raíz cuadrada del número
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            // Verificar si el número es divisible por i
            if (numero % i === 0) {
                // Si el número es divisible por i, no es primo
                esPrimo = false;
                // Salir del bucle, ya que no es necesario continuar verificando más divisores
                break;
            }
        }
    }
    // Mostrar el resultado de si el número es primo o no en el elemento HTML con el id "resultado"
    if (esPrimo) {
        // Si es primo, establecer el texto del elemento como "El número es primo"
        document.getElementById("resultado").textContent = "El número es primo";
    } else {
        // Si no es primo, establecer el texto del elemento como "El número no es primo"
        document.getElementById("resultado").textContent = "El número no es primo";
    }
}
