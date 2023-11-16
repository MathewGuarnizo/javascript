function calcularTotal() {
    // Obtener los valores del formulario
    const cantidadPlatos = parseInt(document.getElementById("cantidadPlatos").value);
    const cantidadBebidas = parseInt(document.getElementById("cantidadBebidas").value);
    const tipoPlatosSelect = document.getElementById("tipoPlato");
    const tipoBebidaSelect = document.getElementById("tipoBebida");
    const platoEjecutivo = document.getElementById("platoEjecutivo").checked;
    const resultado = document.getElementById("factura");

    // Definir los precios de los platos y bebidas
    const menu = {
        "Entrada": 10000,
        "Plato Principal": 20000,
        "Postre": 8000,
        "Plato Ejecutivo": 25000,
    };

    const precioBebida = {
        "Limonada": 0,
        "Refresco": 2000,
        "Agua": 1000
    };

    // Inicializar variables para calcular el total de platos y bebidas
    let totalPlatos = 0;
    const platosSeleccionados = [];
    const bebidasSeleccionadas = [];

    // Calcular el costo de los platos seleccionados
    for (let i = 0; i < tipoPlatosSelect.options.length; i++) {
        if (tipoPlatosSelect.options[i].selected) {
            const plato = tipoPlatosSelect.options[i].value;
            totalPlatos += menu[plato];
            platosSeleccionados.push(plato);
        }
    }

    // Calcular el costo de las bebidas seleccionadas
    for (let i = 0; i < tipoBebidaSelect.options.length; i++) {
        if (tipoBebidaSelect.options[i].selected) {
            const bebida = tipoBebidaSelect.options[i].value;
            totalPlatos += precioBebida[bebida];
            bebidasSeleccionadas.push(bebida);
        }
    }

    // Si se selecciona "Plato Ejecutivo", agregarlo a la factura y calcular su costo
    if (platoEjecutivo) {
        platosSeleccionados.push("Plato Ejecutivo");
        totalPlatos += menu["Plato Ejecutivo"];
    }

    // Calcular el costo total de las bebidas
    const totalBebidas = cantidadBebidas * precioBebida["Refresco"]; 

    // Calcular el costo total del pedido
    const totalPedido = (totalPlatos * cantidadPlatos) + totalBebidas;

    // Mostrar la factura en el elemento "factura"
    resultado.style.display = "block";
    resultado.innerHTML = `Pedido:<br>${platosSeleccionados.join(", ")}<br>${bebidasSeleccionadas.join(", ")}<br><br>Total a pagar: $${totalPedido}`;
    resultado.style.color = "green";
}
