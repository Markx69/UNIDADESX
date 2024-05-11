function generatePDF() {
    // Crea un nuevo objeto jsPDF para generar el PDF
    var doc = new jsPDF();
    // Crea un nuevo objeto de imagen
    var img = new Image();
    // Establece la ruta de la imagen a cargar
    img.src = '../FORMULARIO/img/confundido.png';
    // Función que se ejecutará cuando la imagen se cargue correctamente
    img.onload = function() {
        // Agrega la imagen al PDF con la posición y dimensiones especificadas
        doc.addImage(img, 'PNG', 55, 100, 100, 100);  
        // Obtiene los valores de los campos del formulario
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var rfc = document.getElementById("rfc").value;
        // Define los márgenes y dimensiones de la página del PDF
        var margin = 10; // Margen en píxeles
        var pageWidth = doc.internal.pageSize.width;
        var pageHeight = doc.internal.pageSize.height;
        // Dibuja un rectángulo en el PDF como borde de la página
        doc.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin); 
        // Establece el color del texto y el tamaño de fuente
        doc.setTextColor(0, 0, 0); 
        doc.setFontSize(12);
        // Agrega texto al PDF con los datos del formulario
        doc.text("Datos Registrados correctamente: ", 55 ,20);
        doc.text("Nombre: " + fname, 15, 35);
        doc.text("Apellido: " + lname, 15, 45);
        doc.text("Direccion de correo Electronico: " + email, 15, 55);
        doc.text("Numero de registro federal de " + "Contribuyentes: " + rfc, 15, 65);
        // Guarda el PDF con el nombre "Formulario.pdf"
        doc.save("Formulario.pdf");
    }
}
