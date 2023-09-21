// Definición de una función llamada 'calc'
function calc() {
    // Solicitar al usuario que seleccione una opción
    var opc = parseInt(prompt("Selecciona una opción:\n1. Cuadrado\n2. Rectángulo\n3. Triángulo"));

    // Usar una estructura switch para manejar diferentes opciones
    switch (opc) {
        case 1:
            // Si la opción es 1 (cuadrado), solicitar el lado y calcular el área del cuadrado
            var lado = parseFloat(prompt("Ingrese el lado"));
            var area = lado * lado;
            alert("El área es: " + area);
            break;
        case 2:
            // Si la opción es 2 (rectángulo), solicitar el largo y el ancho, y calcular el área del rectángulo
            var largo = parseFloat(prompt("Ingrese el largo"));
            var ancho = parseFloat(prompt("Ingrese el ancho"));
            var area = largo * ancho;
            alert("El área es: " + area);
            break;
        case 3:
            // Si la opción es 3 (triángulo), solicitar la base y la altura, y calcular el área del triángulo
            var base = parseFloat(prompt("Ingrese la base"));
            var altura = parseFloat(prompt("Ingrese la altura"));
            var area = (base * altura) / 2;
            alert("El área es: " + area);
            break;
        default:
            // Si la opción no coincide con ninguna de las opciones anteriores, mostrar un mensaje de "opción no válida"
            alert("Opción no válida");
            break;
    }
}