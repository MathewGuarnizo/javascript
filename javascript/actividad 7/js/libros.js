let contador = 0; // Variable que almacenará la cantidad de libros seleccionados
const valor = document.getElementById("valor"); // Se obtiene el elemento donde se mostrará el contador

// Función para incrementar la cantidad de libros
function incremento() {
    contador += 1;
    valor.innerHTML = contador;
}

// Función para decrementar la cantidad de libros
function decremento() {
    if (contador > 0) {
        contador -= 1;
    } else {
        contador = 0;
    }
    valor.innerHTML = contador;
}

// Función para reiniciar el contador
function resetear(){
    contador = 0;
    valor.innerHTML = contador;
}

// Función para calcular el total a pagar
function calcularTotal() {
    var cantidadLibros = parseInt(document.getElementById('valor').innerHTML); // Se obtiene la cantidad de libros del contador
    var precioPorLibro = 15000; // Precio fijo por libro
    var totalPagar = cantidadLibros * precioPorLibro; // Se calcula el total multiplicando la cantidad por el precio
    document.getElementById('totalPagar').textContent = '$' + totalPagar.toFixed(2); // Se muestra el total en el elemento correspondiente
}

// Evento para detectar teclas presionadas (suma, resta, reinicio, cálculo)
document.addEventListener("keydown", (e) => {
    if (e.key === "+") {
        incremento();
    } else if (e.key === "-") {
        decremento();
    } else if (e.key === "Backspace") {
        resetear();
    } else if (e.key === "Enter") {
        calcularTotal();
    }
});
