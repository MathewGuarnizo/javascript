window.addEventListener("keydown", (e) => {
    if (e.key == "+"){
        incremento(); // Llama a la función incremento() si se presiona la tecla "+"
    }
    else if(e.key == "-"){
        decremento(); // Llama a la función decremento() si se presiona la tecla "-"
    }
    else if(e.key == "r"){
        resetear(); // Llama a la función resetear() si se presiona la tecla "r"
    }
});

let contador = 0; // Variable para almacenar el contador de libros
const valor = document.getElementById("valor"); // Obtiene el elemento donde se mostrará el contador

function incremento(){
    contador += 1; // Incrementa el contador en 1
    valor.innerHTML = contador; // Actualiza el valor mostrado en la interfaz con el nuevo contador
}

function decremento(){
    if (contador > 0){
        contador -= 1; // Decrementa el contador en 1 si es mayor que 0
        valor.innerHTML = contador; // Actualiza el valor mostrado en la interfaz con el nuevo contador
    } else {
        contador = 0; // Establece el contador en 0 si ya es 0 para evitar valores negativos
        valor.innerHTML = contador; // Actualiza el valor mostrado en la interfaz con el nuevo contador
    }
}

function resetear(){
    contador = 0; // Reinicia el contador estableciéndolo en 0
    valor.innerHTML = contador; // Actualiza el valor mostrado en la interfaz con el nuevo contador
}