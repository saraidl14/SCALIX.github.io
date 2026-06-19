document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartTable = document.getElementById("cart-table");
    
    // Si no estamos en la página del carrito, solo actualizar contador
    if (!cartTable) {
        actualizarContadorCarrito();
        return;
    }
    
    // Borra el contenido anterior (excepto encabezado)
    cartTable.innerHTML = `<tr>
        <th>Producto</th>
        <th>Precio unitario</th>
        <th>Cantidad</th>
        <th>Unidades</th>
        <th>Total</th>
        <th>Eliminar</th>
    </tr>`;
    
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        let total = item.precio * item.unidades;
        subtotal += total;
        
        let row = `<tr>
            <td>${item.nombre} (${item.cantidad} ${item.unidad})</td>
            <td>${item.precio.toFixed(2)}€</td>
            <td>
                <button onclick="updateQuantity(${index}, -1)">-</button>
                ${item.unidades}
                <button onclick="updateQuantity(${index}, 1)">+</button>
            </td>
            <td>${item.cantidad * item.unidades} ${item.unidad}</td>
            <td>${total.toFixed(2)}€</td>
            <td><button onclick="removeItem(${index})" style="color: red;">❌ Eliminar</button></td>
        </tr>`;
        cartTable.innerHTML += row;
    });
    
    // Añadir fila de totales si existe
    if (document.getElementById("subtotal")) {
        document.getElementById("subtotal").innerText = `${subtotal.toFixed(2)}€`;
        document.getElementById("grand-total").innerText = `${subtotal.toFixed(2)}€`;
    }
    
    // Actualizar contador del carrito
    actualizarContadorCarrito();
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index].unidades + change > 0) {
        cart[index].unidades += change;
    } else {
        cart.splice(index, 1); // Elimina si la cantidad llega a 0
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

function actualizarContadorCarrito() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = 0;
    
    // Sumar todas las unidades de todos los productos
    cart.forEach(item => {
        totalItems += (item.unidades || 0);
    });
    
    // Actualizar el contador visual (buscamos por la clase 'cart-count')
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
    
    // También intentamos actualizar por ID (cart-counter) para compatibilidad
    const cartCounter = document.getElementById('cart-counter');
    if (cartCounter) {
        cartCounter.textContent = totalItems;
    }
}

function checkout() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Añade productos antes de finalizar la compra.");
        return;
    }
    
    alert("Redirigiendo al pago...");
    window.location.href = "pago.html";
}

console.log("Carrito actualizado:", JSON.parse(localStorage.getItem("cart")));
