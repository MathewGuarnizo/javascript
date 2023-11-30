const precios = {
    papel: 200,
    cartulina: 2000,
    lapicero: 1000,
};

function calcularTotal() {
    const checkboxes = document.querySelectorAll('.papeleria-checkbox');

    const pedido = document.getElementById('pedido');
    const totalElement = document.getElementById('total');

    let total = 0;

    pedido.innerHTML = `
        <tr>
            <th>Cantidad</th>
            <th>Nombre</th>
            <th>Precio Unitario</th>
            <th>Precio Total</th>
        </tr>
    `;

    function agregarAlPedido(item, precio, cantidad) {
        const row = document.createElement('tr');
        const precioTotal = cantidad * precio;

        row.innerHTML = `
            <td>${cantidad}</td>
            <td>${item}</td>
            <td>${precio} COP</td>
            <td>${precioTotal} COP</td>
        `;

        pedido.appendChild(row);
        total += precioTotal;
    }

    checkboxes.forEach((checkbox) => {
        const cantidadInput = document.getElementById(`${checkbox.value}-cantidad`);
        const cantidad = parseInt(cantidadInput.value);

        if (checkbox.checked && cantidad > 0) {
            const item = checkbox.value;
            const precio = precios[item];
            agregarAlPedido(item, precio, cantidad);
        }
    });

    totalElement.textContent = total + ' COP';
    pedido.style.display = 'table';
}