function mostrar() {
    event.preventDefault(); // Evita el recargue de la página

    // Precios Material de Escritura
    const preciosMaterialEscritura = [0, 11000, 10000, 12000, 15000, 5000];

    // Precios Cuadernos y Papel
    const preciosCuadernosPapel = [0, 1000, 2000, 3000, 4000, 5000];

    // Precios Artículos de Escritorio
    const preciosArticulosEscritorio = [0, 5000, 3000, 8000, 10000, 15000];

    // Precios Material de Arte
    const preciosMaterialArte = [0, 5000, 8000, 12000, 15000, 10000];

    // Precios Electrónica de Oficina
    const preciosElectronicaOficina = [0, 10000, 5000, 2000];

    // Obtener la cantidad y las opciones seleccionadas
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let menu = parseInt(document.getElementById("menu").value);
    let cantidad2 = parseInt(document.getElementById("cantidad2").value);
    let menu2 = parseInt(document.getElementById("menu2").value);
    let cantidad3 = parseInt(document.getElementById("cantidad3").value);
    let menu3 = parseInt(document.getElementById("menu3").value);
    let cantidad4 = parseInt(document.getElementById("cantidad4").value);
    let menu4 = parseInt(document.getElementById("menu4").value);
    let cantidad5 = parseInt(document.getElementById("cantidad5").value);
    let menu5 = parseInt(document.getElementById("menu5").value);


    if ((cantidad > 0 && menu > 0) || (cantidad2 > 0 && menu2 > 0) || (cantidad3 > 0 && menu3 > 0) || (cantidad4 > 0 && menu4 > 0) || (cantidad5 > 0 && menu5 > 0)) { // hace validacion apra que si o si un menu tenga una opcion valida y un cantidad valida
        respuesta.style.display = "block"; //  respuesta o acción visual que se debe mostrar en la interfaz de usuario


        const pedido = document.getElementById("pedido");
        const totalElement = document.getElementById("resultado");

        // Inicializar el total del pedido
        let total = 0;

        // Inicializar la tabla de pedido en el HTML
        pedido.innerHTML = `
            <tr>
                <th>Cantidad</th>
                <th>Nombre</th>
                <th>Precio Unitario</th>
                <th>Precio Total</th>
            </tr>
        `;

        // Función para agregar un elemento al pedido y actualizar el total
        function agregarAlPedido(item, precio, cantidad) {
            const row = document.createElement("tr");
            const precioTotal = cantidad * precio; // Dar resultado del valor total de la cantidad de un producto

            // Agregar la información del producto al pedido
            row.innerHTML = `
                <td>${cantidad}</td>
                <td>${item}</td>
                <td>${precio} COP</td>
                <td>${precioTotal} COP</td>
            `;

            pedido.appendChild(row);
            total += precioTotal;
        }


        // Agregar cada producto al pedido si la cantidad es mayor que 0
        if (cantidad > 0) {
            const nombreProducto = document.getElementById("menu").options[menu].text;
            agregarAlPedido(nombreProducto, preciosMaterialEscritura[menu], cantidad);
        }

        if (cantidad2 > 0) {
            const nombreProducto = document.getElementById("menu2").options[menu2].text;
            agregarAlPedido(nombreProducto, preciosCuadernosPapel[menu2], cantidad2);
        }

        if (cantidad3 > 0) {
            const nombreProducto = document.getElementById("menu3").options[menu3].text;
            agregarAlPedido(nombreProducto, preciosArticulosEscritorio[menu3], cantidad3);
        }

        if (cantidad4 > 0) {
            const nombreProducto = document.getElementById("menu4").options[menu4].text;
            agregarAlPedido(nombreProducto, preciosMaterialArte[menu4], cantidad4);
        }

        if (cantidad5 > 0) {
            const nombreProducto = document.getElementById("menu5").options[menu5].text;
            agregarAlPedido(nombreProducto, preciosElectronicaOficina[menu5], cantidad5);
        }

        // Mostrar el total del pedido en la página
        totalElement.textContent = `Total : ${total} COP`;

        // Mostrar el apartado de pedido en la página
        pedido.style.display = "table";
    } else {
        respuesta.style.display = "block";
        document.getElementById("resultado").innerHTML = `Error, Valide los Datos Ingresados`;
    }
}