// Sistema de favoritos común para todas las páginas

// Sistema de favoritos
function toggleFavorite(name, price, image, category) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    let favoriteIndex = favorites.findIndex(item => item.name === name);
    if (favoriteIndex !== -1) {
        favorites.splice(favoriteIndex, 1);
        alert("Producto removido de favoritos");
    } else {
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
        if (producto.querySelector('.favorite-btn')) {
            return;
        }
        
        const h2 = producto.querySelector('h2');
        const priceLabel = producto.querySelector('label:last-child');
        const img = producto.querySelector('img');
        const category = producto.getAttribute('data-category');
        
        if (h2 && priceLabel && img) {
            const name = h2.textContent;
            const price = parseInt(priceLabel.textContent.replace('€', ''));
            const imageSrc = img.src;
            
            const favoriteBtn = document.createElement('button');
            favoriteBtn.className = 'favorite-btn';
            favoriteBtn.innerHTML = isFavorite(name) ? '❤️' : '🤍';
            favoriteBtn.style.color = isFavorite(name) ? '#e74c3c' : '#ccc';
            favoriteBtn.onclick = () => toggleFavorite(name, price, imageSrc, category);
            
            producto.insertBefore(favoriteBtn, producto.firstChild);
        }
    });
}

// Función para añadir botones de favoritos a productos de comida
function addFavoriteButtonsComida() {
    const productos = document.querySelectorAll('.producto-comida');
    
    productos.forEach(producto => {
        if (producto.querySelector('.favorite-btn')) {
            return;
        }
        
        const h3 = producto.querySelector('h3');
        const priceSpan = producto.querySelector('.precio');
        const img = producto.querySelector('img');
        
        if (h3 && priceSpan && img) {
            const name = h3.textContent;
            const price = parseInt(priceSpan.textContent.replace('€', ''));
            const imageSrc = img.src;
            
            const favoriteBtn = document.createElement('button');
            favoriteBtn.className = 'favorite-btn';
            favoriteBtn.innerHTML = isFavorite(name) ? '❤️' : '🤍';
            favoriteBtn.style.color = isFavorite(name) ? '#e74c3c' : '#ccc';
            favoriteBtn.onclick = () => toggleFavorite(name, price, imageSrc, 'comida');
            
            producto.insertBefore(favoriteBtn, producto.firstChild);
        }
    });
}

// Ejecutar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        addFavoriteButtons();
        addFavoriteButtonsComida();
        console.log("Botones de favoritos añadidos");
    }, 100);
});

