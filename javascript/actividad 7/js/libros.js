let contador1 = 0; // Variable para la cantidad de libros del primer tipo
let contador2 = 0; // Variable para la cantidad de libros del segundo tipo
let libroActual = 1; // Variable para rastrear el tipo de libro actual (1 o 2)

// Cambiar el tipo de libro a incrementar
function cambiarTipoLibro() {
    libroActual = (libroActual === 1) ? 2 : 1; // Alternar entre libro 1 y libro 2
    console.log(`Tipo de libro actual cambiado a: ${libroActual}`);
}

// Incrementar la cantidad del tipo de libro seleccionado
function incremento() {
    if (libroActual === 1) {
        contador1++;
        document.getElementById('valor1').textContent = contador1;
    } else {
        contador2++;
        document.getElementById('valor2').textContent = contador2;
    }
    calcularTotal(); // Actualizar el total cada vez que se incrementa y decrementa
}

// Decrementar la cantidad del tipo de libro seleccionado
function decremento() {
    if (libroActual === 1 && contador1 > 0) {
        contador1--;
        document.getElementById('valor1').textContent = contador1;
    } else if (libroActual === 2 && contador2 > 0) {
        contador2--;
        document.getElementById('valor2').textContent = contador2;
    }
    calcularTotal(); // Actualizar el total cada vez que se decrementa y incrementa
}

// Función para resetear el contador del tipo de libro seleccionado
function resetear() {
    if (libroActual === 1) {
        contador1 = 0;
        document.getElementById('valor1').textContent = contador1;
    } else {
        contador2 = 0;
        document.getElementById('valor2').textContent = contador2;
    }
    calcularTotal(); // Actualizar el total después de resetear
}

// Función para calcular el total a pagar
function calcularTotal() {
    var cantidadLibrosTipo1 = parseInt(document.getElementById('valor1').innerText); // Cantidad de libros del tipo 1
    var precioPorLibroTipo1 = 20000; // Precio por libro del tipo 1

    var cantidadLibrosTipo2 = parseInt(document.getElementById('valor2').innerText); // Cantidad de libros del tipo 2
    var precioPorLibroTipo2 = 25000; // Precio por libro del tipo 2

    var totalPagarTipo1 = cantidadLibrosTipo1 * precioPorLibroTipo1; // Total a pagar por libros del tipo 1
    var totalPagarTipo2 = cantidadLibrosTipo2 * precioPorLibroTipo2; // Total a pagar por libros del tipo 2

    var totalPagar = totalPagarTipo1 + totalPagarTipo2; // Suma total de ambos tipos de libros

    document.getElementById('totalPagar').textContent = '$' + totalPagar.toFixed(2); // Mostrar el total en el elemento correspondiente
}

// Evento para detectar teclas presionadas (cambio de tipo de libro, aumento y disminución de cantidad)
document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key === "Shift") {
        cambiarTipoLibro();
    } else if (e.key === "+" ) {
        incremento();
    } else if (e.key === "-") {
        decremento();
    } else if (e.key === "Backspace") {
        resetear();
    }
})