// Función para capturar las teclas presionadas
function capturarKeys(event) {
    // Obtener el elemento de entrada para las teclas presionadas
    var pressedKeys = document.getElementById("pressedKeys");
    // Obtener el elemento para mostrar las teclas presionadas
    var muestra = document.getElementById("lblPressedKeys");
    // Inicializar un array para almacenar las teclas presionadas
    var pressedKeysArray = [];
    // Obtener la tecla presionada
    var key = event.key;
    // Mostrar la tecla presionada en el elemento de muestra
    muestra.innerHTML += key;
    // Agregar la tecla presionada al array
    pressedKeysArray.push(key);
    // Actualizar el valor del campo de entrada de las teclas presionadas
    pressedKeys.value = pressedKeysArray;
}
// Agregar un evento 'submit' al formulario con id "keyForm"
document.getElementById("keyForm").addEventListener("submit", function (event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();
    // Obtener el elemento de entrada para las teclas presionadas
    var pressedKeysInput = document.getElementById("pressedKeys");
    // Mostrar un mensaje de alerta con las teclas presionadas
    alert("Teclas presionadas: " + pressedKeysInput.value);
});
