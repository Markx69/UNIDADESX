// Función para alternar la visibilidad de las opciones de una fórmula
function toggleOptions(formula) {
    // Obtener el elemento de las opciones de la fórmula
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

// Función para calcular la fuerza de Coulomb
function calcularCoulomb() {
    // Obtener los valores de carga y distancia del usuario
    const carga = parseFloat(document.getElementById('cargaCoulomb').value);
    const distancia = parseFloat(document.getElementById('distanciaCoulomb').value);
    // Calcular la fuerza de Coulomb utilizando la fórmula y los valores proporcionados
    const k = 8.99; // Constante de Coulomb
    const fuerza = k * (carga ** 2) / (distancia ** 2);

    // Mostrar el resultado del cálculo de la fuerza de Coulomb
    mostrarResultadoCoulomb(fuerza);
}

// Función para mostrar el resultado del cálculo de la fuerza de Coulomb
function mostrarResultadoCoulomb(resultado) {
    const coulombResult = document.getElementById('coulombResult');

    // Verificar si el resultado es un número válido
    if (!isNaN(resultado)) {
        // Mostrar el resultado con dos decimales y la unidad de medida 'N'
        coulombResult.innerText = `Resultado: ${resultado.toFixed(2)} N`;
        coulombResult.style.display = 'block'; // Mostrar el elemento
    } else {
        // Mostrar un mensaje de error si los valores ingresados no son válidos
        coulombResult.innerText = "Por favor, ingresa valores válidos.";
    }
}

// Función para mostrar los campos de entrada de una fórmula y actualizar los placeholders
function mostrarCampos(formula, campo) {
    // Ocultar todos los elementos que tienen la clase 'data'
    document.querySelectorAll('.data').forEach(function(elemento) {
        elemento.classList.add('hidden');
    });

    // Obtener el elemento que contiene los campos de entrada específicos para la fórmula
    const dataElement = document.getElementById(`${formula}Data`);
    if (dataElement) {
        // Mostrar los campos de entrada eliminando la clase 'hidden'
        dataElement.classList.remove('hidden');
        // Obtener los elementos de entrada para actualizar los placeholders
        const input1 = document.getElementById(`${formula}Input1`);
        const input2 = document.getElementById(`${formula}Input2`);
        const input3 = document.getElementById(`${formula}Input3`);

        // Actualizar los placeholders con el nombre del campo proporcionado
        if (input1) input1.placeholder = `Introduce ${campo}`;
        if (input2) input2.placeholder = `Introduce ${campo}`;
        if (input3) input3.classList.add('hidden'); // Ocultar el tercer campo de entrada si existe
    }
}
