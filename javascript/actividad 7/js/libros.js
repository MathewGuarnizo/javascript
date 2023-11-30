let contador1 = 0;
let contador2 = 0;
let libroActual = 1;

function seleccionarLibro(libro) {
    libroActual = libro;
}

function incremento() {
    if (libroActual === 1) {
        contador1++;
        document.getElementById('valor1').textContent = contador1;
    } else {
        contador2++;
        document.getElementById('valor2').textContent = contador2;
    }
    calcularTotal();
}

function decremento() {
    if (libroActual === 1 && contador1 > 0) {
        contador1--;
        document.getElementById('valor1').textContent = contador1;
    } else if (libroActual === 2 && contador2 > 0) {
        contador2--;
        document.getElementById('valor2').textContent = contador2;
    }
    calcularTotal();
}

function resetear() {
    if (libroActual === 1) {
        contador1 = 0;
        document.getElementById('valor1').textContent = contador1;
    } else {
        contador2 = 0;
        document.getElementById('valor2').textContent = contador2;
    }
    calcularTotal();
}

function calcularTotal() {
    var cantidadLibrosTipo1 = parseInt(document.getElementById('valor1').textContent);
    var precioPorLibroTipo1 = 20000;

    var cantidadLibrosTipo2 = parseInt(document.getElementById('valor2').textContent);
    var precioPorLibroTipo2 = 25000;

    var totalPagarTipo1 = cantidadLibrosTipo1 * precioPorLibroTipo1;
    var totalPagarTipo2 = cantidadLibrosTipo2 * precioPorLibroTipo2;

    var totalPagar = totalPagarTipo1 + totalPagarTipo2;

    document.getElementById('totalPagarTipo1').textContent = '$' + totalPagarTipo1.toFixed(2);
    document.getElementById('totalPagarTipo2').textContent = '$' + totalPagarTipo2.toFixed(2);
    document.getElementById('totalPagar').textContent = '$' + totalPagar.toFixed(2);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "+") {
        incremento();
    } else if (e.key === "-") {
        decremento();
    } else if (e.key === "Backspace") {
        resetear();
    }
});
