let contador1 = 0; // Variable para la cantidad de libros del primer tipo
let contador2 = 0; // Variable para la cantidad de libros del segundo tipo

// Incrementar la cantidad del tipo de libro actual seleccionado
function incremento(idElemento) {
    if (idElemento === 'valor1') {
        contador1++;
        document.getElementById(idElemento).textContent = contador1;
    } else if (idElemento === 'valor2') {
        contador2++;
        document.getElementById(idElemento).textContent = contador2;
    }
    calcularTotal(); // Actualizar el total cada vez que se incrementa y decrementa
}

// Decrementar la cantidad del tipo de libro seleccionado
function decremento(idElemento) {
    if (idElemento === 'valor1' && contador1 > 0) {
        contador1--;
        document.getElementById(idElemento).textContent = contador1;
    } else if (idElemento === 'valor2' && contador2 > 0) {
        contador2--;
        document.getElementById(idElemento).textContent = contador2;
    }
    calcularTotal(); // Actualizar el total cada vez que se decrementa y incrementa
}

// Función para resetear el contador del tipo de libro seleccionado
function resetear(idElemento) {
    if (idElemento === 'valor1') {
        contador1 = 0;
        document.getElementById(idElemento).textContent = contador1;
    } else if (idElemento === 'valor2') {
        contador2 = 0;
        document.getElementById(idElemento).textContent = contador2;
    }
    calcularTotal(); // Actualizar el total después de resetear
}

// Función para calcular el total a pagar
function calcularTotal() {
    var cantidadLibrosTipo1 = contador1;
    var precioPorLibroTipo1 = 20000;

    var cantidadLibrosTipo2 = contador2;
    var precioPorLibroTipo2 = 25000;

    var totalPagarTipo1 = cantidadLibrosTipo1 * precioPorLibroTipo1;
    var totalPagarTipo2 = cantidadLibrosTipo2 * precioPorLibroTipo2;

    document.getElementById('totalPagar1').textContent = '$' + totalPagarTipo1.toFixed(2);
    document.getElementById('totalPagar2').textContent = '$' + totalPagarTipo2.toFixed(2);

    var totalPagar = totalPagarTipo1 + totalPagarTipo2;

    document.getElementById('totalPagar').textContent = '$' + totalPagar.toFixed(2);
}