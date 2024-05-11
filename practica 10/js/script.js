// Función para calcular la resistencia
function calcularResistencia(){
    // Obtener el valor del voltaje y la corriente desde los campos de entrada del HTML
    var voltaje = document.getElementById("voltaje").value;
    var corriente = document.getElementById("corriente").value;
    // Obtener el elemento donde se mostrará el resultado del cálculo
    var resultado = document.getElementById("lblResultado");
    var resistencia;

    // Verificar si se han ingresado valores en los campos de voltaje y corriente
    if (voltaje !== "" && corriente !== ""){
        // Calcular la resistencia utilizando la fórmula V = I * R (voltaje = corriente * resistencia)
        resistencia = voltaje / corriente;
        // Mostrar el resultado en el elemento HTML con formato adecuado
        resultado.innerHTML = "Resistencia: " + resistencia + " Ohms";
        // Mostrar el resultado en la consola para fines de depuración
        console.log("R =" + resistencia + " Ohms");
    } else {
        // Mostrar un mensaje de alerta si no se han ingresado datos en ambos campos
        alert("Por favor, ingresar datos.");
    }
}

// Función para calcular la corriente
function calcularCorriente(){
    // Obtener el valor del voltaje y la resistencia desde los campos de entrada del HTML
    var voltaje = document.getElementById("voltaje").value;
    var resistencia = document.getElementById("resistencia0").value;
    // Obtener el elemento donde se mostrará el resultado del cálculo
    var resultado = document.getElementById("lblcorrResultado");
    var corriente;

    // Verificar si se han ingresado valores en los campos de voltaje y resistencia
    if (voltaje !== "" && resistencia !== ""){
        // Calcular la corriente utilizando la fórmula I = V / R (corriente = voltaje / resistencia)
        corriente = voltaje / resistencia;
        // Mostrar el resultado en el elemento HTML con formato adecuado
        resultado.innerHTML = "Corriente: " + corriente + " Amperes";
        // Mostrar el resultado en la consola para fines de depuración
        console.log("I =" + corriente + " Amperes");
    } else {
        // Mostrar un mensaje de alerta si no se han ingresado datos en ambos campos
        alert("Por favor, ingresar datos.");
    }
}

// Función para calcular el voltaje
function calcularVoltaje(){
    // Obtener el valor de la resistencia y la corriente desde los campos de entrada del HTML
    var resistencia = document.getElementById("resistencia1").value;
    var corriente = document.getElementById("corriente").value;
    // Obtener el elemento donde se mostrará el resultado del cálculo
    var resultado = document.getElementById("IbiVoltResultado");
    var voltaje;
    // Verificar si se han ingresado valores en los campos de resistencia y corriente
    if (corriente !== "" && resistencia !== ""){
        // Calcular el voltaje utilizando la fórmula V = I * R (voltaje = corriente * resistencia)
        voltaje = resistencia * corriente;
        // Mostrar el resultado en el elemento HTML con formato adecuado
        resultado.innerHTML = "Voltaje: " + voltaje + " Voltios";
        // Mostrar el resultado en la consola para fines de depuración
        console.log("V =" + voltaje + " Voltios");
    } else {
        // Mostrar un mensaje de alerta si no se han ingresado datos en ambos campos
        alert("Por favor, ingresar datos.");
    }
}
