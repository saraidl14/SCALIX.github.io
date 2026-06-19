// Añadir al carrito los animales

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    let productIndex = cart.findIndex(item => item.name === name);
    if (productIndex !== -1) {
        cart[productIndex].quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Producto añadido:", JSON.parse(localStorage.getItem("cart"))); // Verificar si se guarda correctamente
    alert("Producto añadido al carrito");
}

// Sistema de favoritos
function toggleFavorite(name, price, image, category) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    let favoriteIndex = favorites.findIndex(item => item.name === name);
    if (favoriteIndex !== -1) {
        // Si ya está en favoritos, lo removemos
        favorites.splice(favoriteIndex, 1);
        alert("Producto removido de favoritos");
    } else {
        // Si no está en favoritos, lo añadimos
        favorites.push({ name, price, image, category });
        alert("Producto añadido a favoritos");
    }
    
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavoriteButton(name);
}

function updateFavoriteButton(name) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let isFavorite = favorites.some(item => item.name === name);
    
    let button = document.querySelector(`[onclick*="${name}"]`);
    if (button && button.textContent.includes("❤️")) {
        button.textContent = isFavorite ? "❤️" : "🤍";
        button.style.color = isFavorite ? "#e74c3c" : "#ccc";
    }
}

function isFavorite(name) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some(item => item.name === name);
}

// Función para añadir botones de favoritos a todas las tarjetas
function addFavoriteButtons() {
    const productos = document.querySelectorAll('.producto');
    
    productos.forEach(producto => {
        // Verificar si ya tiene botón de favorito
        if (producto.querySelector('.favorite-btn')) {
            return; // Ya tiene botón, saltar
        }
        
        const h2 = producto.querySelector('h2');
        const priceLabel = producto.querySelector('label:last-child');
        const img = producto.querySelector('img');
        const category = producto.getAttribute('data-category');
        
        if (h2 && priceLabel && img) {
            const name = h2.textContent;
            const price = parseInt(priceLabel.textContent.replace('€', ''));
            const imageSrc = img.src;
            
            // Crear botón de favorito
            const favoriteBtn = document.createElement('button');
            favoriteBtn.className = 'favorite-btn';
            favoriteBtn.innerHTML = isFavorite(name) ? '❤️' : '🤍';
            favoriteBtn.style.color = isFavorite(name) ? '#e74c3c' : '#ccc';
            favoriteBtn.onclick = () => toggleFavorite(name, price, imageSrc, category);
            
            // Insertar el botón al principio del producto
            producto.insertBefore(favoriteBtn, producto.firstChild);
        }
    });
}

// Ejecutar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Pequeño delay para asegurar que todo el contenido esté cargado
    setTimeout(() => {
        addFavoriteButtons();
        console.log("Botones de favoritos añadidos");
    }, 100);
});

console.log("Carrito actualizado:", JSON.parse(localStorage.getItem("cart")));
