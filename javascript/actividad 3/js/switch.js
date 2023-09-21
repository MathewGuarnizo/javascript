// Definición de una función llamada 'calc'
function calc() {
    // Solicitar al usuario que seleccione una opción
    var opc = parseInt(prompt("Selecciona una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. ¿Cuál es mayor?"));

    // Usar una estructura switch para manejar diferentes opciones
    switch (opc) {
        case 1:
            // Si la opción es 1 (suma), solicitar dos números y calcular la suma
            var val1 = parseFloat(prompt("Ingrese un número"));
            var val2 = parseFloat(prompt("Ingrese otro número"));
            var suma = val1 + val2;
            alert("La suma es: " + suma);
            break;
        case 2:
            // Si la opción es 2 (resta), solicitar dos números y calcular la resta
            var val1 = parseFloat(prompt("Ingrese un número"));
            var val2 = parseFloat(prompt("Ingrese otro número"));
            var resta = val1 - val2;
            alert("La resta es: " + resta);
            break;
        case 3:
            // Si la opción es 3 (multiplicación), solicitar dos números y calcular la multiplicación
            var val1 = parseFloat(prompt("Ingrese un número"));
            var val2 = parseFloat(prompt("Ingrese otro número"));
            var multiplicacion = val1 * val2;
            alert("La multiplicación es: " + multiplicacion);
            break;
        case 4:
            // Si la opción es 4 (división), solicitar dos números y calcular la división
            var val1 = parseFloat(prompt("Ingrese un número"));
            var val2 = parseFloat(prompt("Ingrese otro número"));
            var division = val1 / val2;
            alert("La división es: " + division);
            break;
        case 5:
            // Si la opción es 5 (¿Cuál es mayor?), solicitar dos números y compararlos
            var val1 = parseFloat(prompt("Ingrese un número"));
            var val2 = parseFloat(prompt("Ingrese otro número"));
            if (val1 < val2) {
                alert("El número mayor es: " + val2);
            } else if (val1 > val2) {
                alert("El número mayor es: " + val1);
            } else if (val1 === val2) {
                alert("Los números son iguales");
            } else {
                alert("Ingresa algo válido");
            }
            break;
        default:
            // Si la opción no coincide con ninguna de las opciones anteriores, mostrar "opción no válida"
            alert("Opción no válida");
            break;
    }
}

// Llamar a la función 'calc' cuando se necesite
