document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.getElementById("login-link");
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario) {
        loginLink.textContent = `${usuario.nombre} ${usuario.apellido}`;
        loginLink.href = "Crear_Cuenta.html"; // Redirige a la cuenta en lugar de iniciar sesión
    } else {
        loginLink.textContent = "Iniciar Sesión";
        loginLink.href = "Crear_Cuenta.html"; // Redirige a la creación de cuenta
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const userMenu = document.querySelector(".user-menu");
    const userIcon = document.getElementById("user-icon");
    const dropdown = document.getElementById("user-dropdown");
    const usernameDisplay = document.getElementById("username");
    const logoutBtn = document.getElementById("logout-btn");

    // Cargar datos del usuario desde localStorage
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario) {
        usernameDisplay.textContent = `${usuario.nombre} ${usuario.apellido}`;
    } else {
        usernameDisplay.textContent = "Iniciar Sesión";
    }

    // Mostrar u ocultar el menú al hacer clic en el icono de usuario
    userMenu.addEventListener("click", () => {
        userMenu.classList.toggle("active");
    });

    // Cerrar sesión
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("usuario");
            alert("Has cerrado sesión correctamente.");
            window.location.href = "Home.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("JS de Home cargado");
});

function addToCart(name, price, quantity = 1, unit = '') {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Asegurar que price es un número
    price = parseFloat(price);
    
    let fullProductName = unit ? `${name} (${quantity} ${unit})` : name;
    let totalPrice = price;  // Ya no multiplicamos por quantity aquí
    
    // Buscamos si el producto ya existe en el carrito
    let productIndex = cart.findIndex(item => item.name === fullProductName);
    
    if (productIndex !== -1) {
        // Si existe, incrementamos la cantidad
        cart[productIndex].quantity++;
    } else {
        // Si no existe, lo añadimos como nuevo producto
        cart.push({ 
            name: fullProductName, 
            price: totalPrice,
            basePrice: price,
            productQuantity: quantity, 
            unit: unit || '',
            quantity: 1  // Cantidad en el carrito, siempre empezamos con 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(`Producto añadido: ${fullProductName}, Precio: ${totalPrice}€`);
    alert("Producto añadido al carrito");
}


function loadCart() {
    const cartTable = document.getElementById("cart-table");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Restablecer el encabezado de la tabla
    cartTable.innerHTML = `
    <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Total</th>
        <th>Eliminar</th>
    </tr>`;
    
    // Añadir cada producto del carrito a la tabla
    cart.forEach((item, index) => {
        const row = cartTable.insertRow();
        // Usamos el precio tal como está almacenado
        const price = parseFloat(item.price);
        const quantity = parseInt(item.quantity);
        const total = price * quantity;
        
        row.innerHTML = `
        <td>${item.name}</td>
        <td>${price.toFixed(2)}€</td>
        <td class="quantity">
            <button onclick="updateQuantity(-1, ${index})">-</button>
            <span id="qty${index}">${quantity}</span>
            <button onclick="updateQuantity(1, ${index})">+</button>
        </td>
        <td id="total${index}">${total.toFixed(2)}€</td>
        <td><button onclick="removeItem(${index})">Eliminar</button></td>
        `;
    });
    
    updateTotal();
}

function updateTotal() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let subtotal = cart.reduce(
      (sum, item) => sum + (parseFloat(item.price) * parseInt(item.quantity)),0);
    
    document.getElementById("subtotal").innerText = `${subtotal.toFixed(2)}€`;
    document.getElementById("grand-total").innerText = `${subtotal.toFixed(2)}€`;
}

// Esta función parece estar intentando corregir algo que no está claro.
// Recomendación: eliminarla o simplificarla para que no modifique los precios.
function normalizePrice(price) {
    // Convertir a número si es string
    let numPrice = typeof price === 'string' ? 
    parseFloat(price.replace(/[$€]/g, '')) : 
    parseFloat(price);
    // No normalizar los precios, eliminar la división por 10
    return numPrice;
}

// FUNCIONES AUXILIARES CORREGIDAS:
function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1); // Eliminar si la cantidad llega a 0
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

// Función para depurar problemas de precio (para añadir temporalmente)
// Función para depurar problemas de precio (para añadir temporalmente)
function debugCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.table(cart);
    alert("Revisa la consola para ver los detalles del carrito");
}
console.log("Carrito actualizado:", JSON.parse(localStorage.getItem("cart")));
