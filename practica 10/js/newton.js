// Función para alternar la visibilidad de las opciones de una fórmula
function toggleOptions(formula) {
    // Obtener el elemento que contiene las opciones de la fórmula
    const options = document.getElementById(formula + 'Options');
    // Alternar la clase 'hidden' para mostrar u ocultar las opciones
    options.classList.toggle('hidden');
}

// Función para mostrar los campos de entrada de una fórmula y actualizar los placeholders
function mostrarCampos(formula, option1, option2) {
    // Obtener el elemento que contiene los campos de entrada para la fórmula
    const data = document.getElementById(formula + 'Data');
    // Mostrar los campos de entrada eliminando la clase 'hidden'
    data.classList.remove('hidden');
    // Obtener todos los elementos <p> dentro de las opciones y quitarles la clase 'selected'
    const options = document.querySelectorAll('.options p');
    options.forEach(option => option.classList.remove('selected'));
    // Actualizar los placeholders de los campos de entrada con los nombres de las opciones
    document.getElementById(formula + 'Input1').placeholder = `Ingrese ${option1}`;
    document.getElementById(formula + 'Input2').placeholder = `Ingrese ${option2}`;
    // Agregar la clase 'selected' al elemento que activó la función (evento)
    event.target.classList.add('selected');
}

// Función para calcular la fuerza de Newton
function calcularNewtonFuerza() {
    // Obtener el valor de la fuerza y la masa desde los campos de entrada del HTML
    const fuerza = parseFloat(document.getElementById('fuerzaNewton').value);
    const masa = parseFloat(document.getElementById('masaNewton').value);
    // Calcular la aceleración utilizando la fórmula F = ma (fuerza = masa * aceleración)
    const aceleracion = fuerza / masa;
    // Mostrar el resultado de la aceleración utilizando la función mostrarResultadoNewton
    mostrarResultadoNewton(aceleracion, 'N');
}

// Función para calcular la masa de Newton
function calcularNewtonMasa() {
    // Obtener el valor de la fuerza y la aceleración desde los campos de entrada del HTML
    const fuerza = parseFloat(document.getElementById('fuerzaNewtonMasa').value);
    const aceleracion = parseFloat(document.getElementById('aceleracionNewtonMasa').value);
    // Calcular la masa utilizando la fórmula m = F / a (masa = fuerza / aceleración)
    const masa = fuerza / aceleracion;
    // Mostrar el resultado de la masa utilizando la función mostrarResultadoNewton
    mostrarResultadoNewton(masa, 'kg');
}

// Función para seleccionar una opción de cálculo de Newton
function seleccionarOpcion(elemento) {
    // Quitar la clase 'selected' de todos los elementos de opción
    document.querySelectorAll('.options p').forEach(function(opcion) {
        opcion.classList.remove('selected');
    });
    // Agregar la clase 'selected' al elemento que se ha seleccionado
    elemento.classList.add('selected');
    // Obtener el texto del elemento seleccionado y convertirlo a minúsculas para usarlo como argumento en mostrarCampos
    const opcion = elemento.textContent.toLowerCase();
    // Llamar a la función mostrarCampos con el nombre de la fórmula (newton) y la opción seleccionada
    mostrarCampos('newton', opcion);
}

// Función para calcular Newton según la opción seleccionada
function calcularNewton() {
    // Obtener la opción seleccionada
    const opcionSeleccionada = document.querySelector('.options p.selected');
    // Verificar si se ha seleccionado una opción
    if (!opcionSeleccionada) {
        console.error('No se ha seleccionado una opción.');
        return;
    }
    // Convertir el texto de la opción seleccionada a minúsculas para usarlo en la lógica de cálculo
    const formula = opcionSeleccionada.textContent.toLowerCase();
    // Declarar variables para el resultado y las unidades
    let resultado, unidades;

    // Realizar cálculos según la opción seleccionada
    switch (formula) {
        case 'fuerza':
            // Obtener los valores de los campos de entrada para la fórmula de fuerza
            const fuerzaInput1 = parseFloat(document.getElementById('newtonInput1').value);
            const fuerzaInput2 = parseFloat(document.getElementById('newtonInput2').value);
            // Verificar si los valores ingresados son números válidos y realizar el cálculo
            if (!isNaN(fuerzaInput1) && !isNaN(fuerzaInput2)) {
                resultado = fuerzaInput1 * fuerzaInput2;
                unidades = 'newtons';
            }
            break;
        case 'masa':
            // Obtener los valores de los campos de entrada para la fórmula de masa
            const masaInput1 = parseFloat(document.getElementById('newtonInput1').value);
            const masaInput2 = parseFloat(document.getElementById('newtonInput2').value);
            // Verificar si los valores ingresados son números válidos y realizar el cálculo
            if (!isNaN(masaInput1) && !isNaN(masaInput2)) {
                resultado = masaInput1 / masaInput2;
                unidades = 'kilos';
            }
            break;
        case 'aceleración':
            // Obtener los valores de los campos de entrada para la fórmula de aceleración
            const aceleracionInput1 = parseFloat(document.getElementById('newtonInput1').value);
            const aceleracionInput2 = parseFloat(document.getElementById('newtonInput2').value);
            // Verificar si los valores ingresados son números válidos y realizar el cálculo
            if (!isNaN(aceleracionInput1) && !isNaN(aceleracionInput2)) {
                resultado = aceleracionInput1 / aceleracionInput2;
                unidades = 'metros sobre segundo al cuadrado';
            }
            break;
        default:
            console.error('Fórmula no reconocida.');
            return;
    }
    // Mostrar el resultado utilizando la función mostrarResultadoNewton
    mostrarResultadoNewton(resultado, unidades);
}

// Función para mostrar el resultado del cálculo de Newton
function mostrarResultadoNewton(resultado, unidades) {
    // Obtener el elemento donde se mostrará el resultado
    const newtonResult = document.getElementById('newtonResult');

    // Verificar si el resultado es un número válido
    if (!isNaN(resultado)) {
        // Mostrar el resultado con las unidades en el elemento HTML
        newtonResult.innerText = `Resultado: ${resultado.toFixed(2)} ${unidades}`;
        // Mostrar el elemento resultante eliminando la clase 'hidden'
        newtonResult.classList.remove('hidden');
    } else {
        // Mostrar un mensaje de error si los valores ingresados no son válidos
        newtonResult.innerText = "Por favor, ingresa valores válidos.";
    }
}

// Función para mostrar los campos de entrada según la opción seleccionada
function mostrarCampos(formula, campo) {
    // Ocultar todos los elementos con la clase 'data'
    document.querySelectorAll('.data').forEach(function(elemento) {
        elemento.classList.add('hidden');
    });
    // Obtener el elemento de datos correspondiente a la fórmula y mostrarlo
    const dataElement = document.getElementById(`${formula}Data`);
    if (dataElement) {
        dataElement.classList.remove('hidden');
        // Obtener los elementos de entrada y establecer los placeholders según el campo ingresado
        const input1 = document.getElementById(`${formula}Input1`);
        const input2 = document.getElementById(`${formula}Input2`);
        const input3 = document.getElementById(`${formula}Input3`);
        if (input1) input1.placeholder = `Introduce ${campo}`;
        if (input2) input2.placeholder = `Introduce ${campo}`;
        if (input3) input3.classList.add('hidden');
    }
}
