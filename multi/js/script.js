function multip() {
    // Obtiene el valor del número ingresado por el usuario
    num = document.getElementById("num").value;
    // Convierte el valor a un número entero
    num = parseInt(num);
    // Inicia un bucle que va desde 1 hasta 10
    for (var i = 1; i <= 10; i++) {
        // Calcula el resultado de la multiplicación
        multi = num * i;
        // Imprime el resultado en el documento HTML
        document.write(num + "x" + i + "=" + multi + "<br>");
    }
}
