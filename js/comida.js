// Base de datos de información de alimentos con precios actualizados para gramaje
    //Descriptiones creadas con Chat GPT
const alimentosInfo = {
    "1": {
        nombre: "Grillos Vivos", // nombre del producto
        imagen: "img/alimento/grillos/grillos.jpg", // ruta de la imagen
        precio: 0.2, // precio por unidad
        precioBase: 0.2, // precio base por unidad
        unidad: "unidades", // unidad de medida
        opcionesCantidad: [1,10, 20, 50, 100], // opciones de cantidad disponibles
        descripcion: "Grillos vivos de alta calidad, criados en nuestras instalaciones bajo condiciones óptimas de higiene y nutrición.", // descripción del producto
        detalles: "Envase con aproximadamente 50-60 grillos de tamaño mediano. Nuestros grillos son alimentados con una dieta rica en vitaminas y minerales para maximizar su valor nutricional.", // detalles adicionales
        paraQuien: "Ideales para lagartos, camaleones, ranas arborícolas y cualquier reptil o anfibio insectívoro de tamaño mediano a grande.", // para quién es el producto
        instrucciones: "Mantener en su contenedor original a temperatura ambiente (20-25°C). Proporcionar cartón de huevo para esconderse y zanahoria o patata para hidratación. Usar antes de 5-7 días para mayor frescura.", // instrucciones de uso
        categoria: "Insectos vivos" // categoría del producto
    },
    "2": {
        nombre: "Tenebrios",
        imagen: "img/alimento/gusanos/tenebrios.jpg",
        precio: 0.04,
        precioBase: 0.04,
        unidad: "unidades",
        opcionesCantidad: [50, 100, 150, 200, 250],
        descripcion: "Larvas de escarabajo de la harina (Tenebrio molitor) vivas, ricas en proteínas y fáciles de mantener.",
        detalles: "Envase con aproximadamente 100-120 larvas de tamaño mediano. Alto contenido proteico y bajo en grasa comparado con otros insectos alimenticios.",
        paraQuien: "Perfectos para geckos, lagartos pequeños, anfibios y arañas. También son excelentes para aves insectívoras y erizos.",
        instrucciones: "Mantener en su contenedor a temperatura ambiente con salvado de trigo como sustrato. Añadir ocasionalmente rodajas de zanahoria, patata o manzana para hidratación. Pueden conservarse durante semanas en condiciones adecuadas.",
        categoria: "Insectos vivos"
    },
    "3": {
        nombre: "Pienso para Geckos",
        imagen: "img/alimento/pienso.jpg",
        precio: 5,
        precioBase: 5,  // 4€ por 75g
        unidad: "g",
        opcionesCantidad: [75, 100, 150, 250, 500],
        descripcion: "Fórmula completa y equilibrada específicamente desarrollada para las necesidades nutricionales de los geckos.",
        detalles: "Bolsa con gránulos de tamaño adecuado. Contiene una mezcla científicamente formulada de proteínas, vitaminas y minerales esenciales, incluyendo calcio y vitamina D3 para prevenir problemas óseos.",
        paraQuien: "Especialmente desarrollado para geckos leopardo, geckos crestados y especies similares. Adecuado para ejemplares de todas las edades.",
        instrucciones: "Servir en un pequeño recipiente dentro del terrario. Para geckos adultos, alimentar 2-3 veces por semana. Los juveniles deben ser alimentados diariamente. Siempre proporcionar agua fresca.",
        getPrecio: function(cantidad) {
            return (5 / 75) * cantidad;
        },
        categoria: "Piensos"
    },
    "4": {
        nombre: "Ratones Congelados",
        imagen: "img/alimento/ratones.jpg",
        precio: 20,
        precioBase: 2,
        unidad: "unidades",
        opcionesCantidad: [1, 5, 10, 15, 20],
        descripcion: "Ratones de laboratorio de alta calidad, congelados individualmente para mantener su frescura y valor nutricional.",
        detalles: "Paquete de 10 ratones pequeños/medianos (15-20g cada uno), congelados individualmente. Criados en instalaciones controladas con estrictos protocolos de higiene y bienestar animal.",
        paraQuien: "Alimento básico para serpientes como pitones reales, serpientes de maíz y boas. También adecuados para lagartos grandes y monitores.",
        instrucciones: "Descongelar completamente antes de usar, preferiblemente a temperatura ambiente o en agua tibia (nunca calentar en microondas). Una vez descongelado, ofrecer inmediatamente a tu mascota usando pinzas. No recongelar después de descongelar.",
        categoria: "Alimentos congelados"
    },
    "5": {
        nombre: "Vitaminas para Reptiles",
        imagen: "img/alimento/vitaminas.jpg",
        precio: 7,
        precioBase: 7,  // 7€ por 75g
        unidad: "g",
        opcionesCantidad: [75, 100, 150, 250],
        descripcion: "Suplemento vitamínico y mineral completo en polvo para espolvorear sobre el alimento de reptiles y anfibios.",
        detalles: "Bote con dosificador. Contiene vitaminas A, D3, E, B-complex, calcio, fósforo y otros minerales esenciales en proporciones óptimas.",
        paraQuien: "Imprescindible para cualquier reptil o anfibio en cautividad. Especialmente importante para especies propensas a deficiencias como tortugas, iguanas y camaleones.",
        instrucciones: "Espolvorear ligeramente sobre los insectos vivos o alimentos frescos justo antes de alimentar a tu mascota. Para la mayoría de reptiles, usar 2-3 veces por semana. Para hembras gestantes y ejemplares jóvenes en crecimiento, puede usarse en cada comida.",
        getPrecio: function(cantidad) {
            return (7 / 75) * cantidad;
        },
        categoria: "Vitaminas y suplementos"
    },
    "6": {
        nombre: "Langostas",
        imagen: "img/alimento/langostas/langostas.jpg",
        precio: 14,
        precioBase: 0.7,
        unidad: "unidades",
        opcionesCantidad: [1, 10, 20, 30, 50],
        descripcion: "Langostas vivas de tamaño mediano, un alimento premium rico en proteínas para reptiles más grandes.",
        detalles: "Envase con 20-25 langostas de tamaño mediano (3-4cm). 14€ serían 20 langostas, es decir, un envase. Criadas en condiciones óptimas y alimentadas con dieta nutritiva a base de verduras frescas.",
        paraQuien: "Ideal para dragones barbudos adultos, camaleones grandes, lagartos monitor y otras especies que requieren presas de mayor tamaño en su dieta.",
        instrucciones: "Mantener en contenedor ventilado a temperatura ambiente. Proporcionar cartón de huevo para refugio y verduras frescas para alimentación. Ofrecer a tu mascota usando pinzas para evitar mordeduras accidentales. Consumir preferentemente en los 10 días posteriores a la recepción.",
        categoria: "Insectos vivos"
    },
    "7": {
        nombre: "Caracoles para Anfibios",
        imagen: "img/alimento/caracoles.jpg",
        precio: 9,
        precioBase: 0.3,
        unidad: "unidades",
        opcionesCantidad: [1, 10, 20, 30, 50],
        descripcion: "Pequeños caracoles vivos, ideales como alimento natural para una variedad de anfibios.",
        detalles: "Envase con aproximadamente 30-40 caracoles pequeños. Un envase son 9€. Criados en entornos libres de pesticidas y sustancias tóxicas.",
        paraQuien: "Perfectos para ranas acuáticas, salamandras, tritones y algunos sapos. Proporcionan un estímulo natural de caza y son ricos en calcio gracias a su concha.",
        instrucciones: "Mantener en recipiente húmedo con musgo o tierra vegetal. Alimentar con vegetales de hoja verde frescos. Introducir unos pocos a la vez en el acuaterrario de tu anfibio. Los no consumidos pueden sobrevivir en el hábitat durante días.",
        categoria: "Alimentos especiales"
    },
    "8": {
        nombre: "Comida en Gel para Anfibios",
        imagen: "img/alimento/gel.jpg",
        precio: 8,
        precioBase: 8,  // 8€ por 75ml
        unidad: "ml",
        opcionesCantidad: [75, 100, 150, 250, 500],
        descripcion: "Alimento completo en formato gel, especialmente formulado para las necesidades nutricionales de los anfibios.",
        detalles: "Envase con gel de consistencia temblorosa. Contiene proteínas de insectos, vitaminas, minerales y aminoácidos esenciales. Sin conservantes artificiales.",
        paraQuien: "Ideal para ranas acuáticas, ajolotes, salamandras y tritones. Especialmente útil para ejemplares en recuperación o con dificultades para cazar presas vivas.",
        instrucciones: "Extraer una porción con cuchara limpia y colocar en el acuaterrario. La mayoría de anfibios reconocerán el olor y comerán por sí mismos. Retirar cualquier resto no consumido después de 24 horas. Refrigerar después de abrir y consumir antes de 30 días.",
        getPrecio: function(cantidad) {
            return (8 / 75) * cantidad;
        },
        categoria: "Alimentos especiales"
    },
    "9": {
        nombre: "Mezcla de Proteínas para Artrópodos",
        imagen: "img/alimento/mezcla.jpg",
        precio: 7,
        precioBase: 7,  // 7€ por 75g
        unidad: "g",
        opcionesCantidad: [75, 100, 150, 250, 500],
        descripcion: "Mezcla seca de proteínas, carbohidratos y nutrientes especialmente formulada para alimentar artrópodos como escorpiones, tarántulas y ciempiés.",
        detalles: "Bote con mezcla en polvo. Formulada por especialistas en nutrición de invertebrados. Contiene proteínas de insectos, quitina, minerales y otros nutrientes específicos.",
        paraQuien: "Desarrollada para escorpiones, tarántulas, ciempiés, milpiés y otros artrópodos en cautividad. También útil como suplemento para insectos que servirán de alimento a reptiles.",
        instrucciones: "Mezclar una pequeña cantidad con agua para formar una pasta semisólida. Ofrecer en un pequeño recipiente dentro del terrario. Para la mayoría de artrópodos, alimentar una vez por semana. Almacenar en lugar fresco y seco.",
        getPrecio: function(cantidad) {
            return (7 / 75) * cantidad;
        },
        categoria: "Vitaminas y suplementos"
    }
};

// Función para cargar los productos
function cargarProductos(categoria = "Todos los productos") {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = ''; // Limpiar contenedor
    
    // Iterar sobre todos los productos
    Object.keys(alimentosInfo).forEach(id => {
        const producto = alimentosInfo[id];
        
        // Filtrar por categoría si no es "Todos los productos"
        if (categoria !== "Todos los productos" && producto.categoria !== categoria) {
            return;
        }
        
        // Crear tarjeta de producto
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Calcular precio según la primera opción de cantidad
        let precioMostrar;
        if (producto.getPrecio) {
            precioMostrar = producto.getPrecio(producto.opcionesCantidad[0]).toFixed(2);
        } else if (producto.unidad === "unidades") {
            precioMostrar = (producto.precioBase * producto.opcionesCantidad[0]).toFixed(2);
        } else {
            precioMostrar = producto.precio.toFixed(2);
        }
        
        // Contenido de la tarjeta
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${producto.imagen}" alt="${producto.nombre}"> 
                <div class="product-favorite">❤</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-price">${precioMostrar}€</div>
            </div>
            <div class="product-selections">
                <div class="quantity-selector">
                    <label for="cantidad-${id}">Cantidad:</label>
                    <select id="cantidad-${id}" class="cantidad-select" data-producto-id="${id}">
                        ${producto.opcionesCantidad.map(cantidad => 
                            `<option value="${cantidad}">${cantidad} ${producto.unidad}</option>`
                        ).join('')}
                    </select>
                </div>
                <button class="add-to-cart" data-producto-id="${id}">Añadir al carrito</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Añadir event listeners a los selectores de cantidad
    document.querySelectorAll('.cantidad-select').forEach(select => {
        select.addEventListener('change', actualizarPrecio);
    });
    
    // Añadir event listeners a los botones de añadir al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Función para actualizar el precio cuando cambia la cantidad
function actualizarPrecio(event) {
    const select = event.target;
    const productoId = select.getAttribute('data-producto-id');
    const cantidad = parseInt(select.value);
    const producto = alimentosInfo[productoId];
    
    let precio;
    if (producto.getPrecio) {
        precio = producto.getPrecio(cantidad);
    } else if (producto.unidad === "unidades") {
        precio = producto.precioBase * cantidad;
    } else {
        precio = producto.precio;
    }
    
    // Actualizar el precio mostrado
    const precioElement = select.closest('.product-card').querySelector('.product-price');
    precioElement.textContent = `${precio.toFixed(2)}€`;
}
// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = 0;
    
    // Sumar todas las unidades de todos los productos
    cart.forEach(item => {
        totalItems += item.unidades;
    });
    
    // Actualizar el contador visual
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = totalItems;
}

// Función para añadir al carrito
// Función para añadir al carrito
function addToCart(event) {
    const button = event.target;
    const productoId = button.getAttribute('data-producto-id');
    const select = document.getElementById(`cantidad-${productoId}`);
    const cantidad = parseInt(select.value);
    const producto = alimentosInfo[productoId];
    
    // Calcular precio del producto según la cantidad
    let precio;
    if (producto.getPrecio) {
        precio = producto.getPrecio(cantidad);
    } else if (producto.unidad === "unidades") {
        precio = producto.precioBase * cantidad;
    } else {
        precio = producto.precio;
    }
    
    // Obtener carrito actual o inicializar uno nuevo
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Comprobar si el producto ya está en el carrito
    let itemIndex = cart.findIndex(item => 
        item.id === productoId && 
        item.cantidad === cantidad
    );
    
    if (itemIndex !== -1) {
        // Si ya existe exactamente este producto con esta cantidad, incrementar cantidad
        cart[itemIndex].unidades++;
    } else {
        // Si no existe, añadir nuevo item
        cart.push({
            id: productoId,
            nombre: producto.nombre,
            precio: precio,
            cantidad: cantidad,
            unidad: producto.unidad,
            unidades: 1,
            imagen: producto.imagen
        });
    }
    
    // Guardar carrito actualizado
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Actualizar contador visual del carrito
    actualizarContadorCarrito();
    
    // Mostrar mensaje de confirmación
    alert(`${cantidad} ${producto.unidad} de ${producto.nombre} añadido al carrito`);
}

// Añadir event listeners para la navegación de categorías
document.addEventListener('DOMContentLoaded', function() {
    // Cargar todos los productos al inicio
    cargarProductos();
    
    // Añadir event listeners a las categorías
    const categorias = document.querySelectorAll('#foodCategories li');
    categorias.forEach(categoria => {
        categoria.addEventListener('click', function() {
            // Quitar clase active de todas las categorías
            categorias.forEach(cat => cat.classList.remove('active'));
            
            // Añadir clase active a la categoría seleccionada
            this.classList.add('active');
            
            // Cargar productos de la categoría seleccionada
            cargarProductos(this.textContent);
        }); 
    });
});
// Añadir estilos CSS para el popup
const styleElement = document.createElement('style');
styleElement.textContent = `
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
    }
    
    .popup-overlay.active {
        opacity: 1;
        visibility: visible;
    }
    
    .product-popup {
        background-color: white;
        width: 80%;
        max-width: 800px;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        max-height: 90vh;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        transform: translateY(20px);
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
    }
    
    .popup-overlay.active .product-popup {
        transform: translateY(0);
        opacity: 1;
    }
    
    .popup-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        border-bottom: 1px solid #eee;
    }
    
    .popup-title {
        font-size: 1.8rem;
        color: #A94FC7;
        margin: 0;
    }
    
    .popup-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
    }
    
    .popup-content {
        display: flex;
        padding: 20px;
        overflow-y: auto;
    }
    
    .popup-image {
        width: 40%;
        padding-right: 20px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    
    .popup-image img {
        max-width: 100%;
        max-height: 300px;
        object-fit: contain;
    }
    
    .popup-details {
        width: 60%;
    }
    
    .popup-section {
        margin-bottom: 15px;
    }
    
    .popup-section h3 {
        color: #A94FC7;
        margin-bottom: 5px;
        font-size: 1.2rem;
    }
    
    .popup-section p {
        margin: 0;
        color: #333;
        line-height: 1.5;
    }
    
    .popup-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        background-color: #f9f9f9;
        border-top: 1px solid #eee;
    }
    
    .popup-price {
        font-size: 1.5rem;
        font-weight: bold;
        color: #A94FC7;
    }
    
    .popup-actions {
        display: flex;
        gap: 10px;
    }
    
    .popup-quantity {
        display: flex;
        align-items: center;
    }
    
    .popup-quantity label {
        margin-right: 10px;
        font-weight: bold;
    }
    
    .popup-quantity select {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    .popup-add-to-cart {
        padding: 10px 20px;
        background-color: #8ACF3A;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s;
    }
    
    .popup-add-to-cart:hover {
        background-color: #8ACF3A;
    }
    
    @media (max-width: 768px) {
        .popup-content {
            flex-direction: column;
        }
        
        .popup-image, .popup-details {
            width: 100%;
        }
        
        .popup-image {
            padding-right: 0;
            padding-bottom: 20px;
        }
    }
`;
document.head.appendChild(styleElement);

// Crear el popup
function crearPopup() {
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';
    
    const popupContent = document.createElement('div');
    popupContent.className = 'product-popup';
    popupContent.innerHTML = `
        <div class="popup-header">
            <h2 class="popup-title">Nombre del Producto</h2>
            <button class="popup-close">&times;</button>
        </div>
        <div class="popup-content">
            <div class="popup-image">
                <img src="" alt="Producto">
            </div>
            <div class="popup-details">
                <div class="popup-section">
                    <h3>Descripción</h3>
                    <p class="popup-descripcion"></p>
                </div>
                <div class="popup-section">
                    <h3>Detalles</h3>
                    <p class="popup-detalles"></p>
                </div>
                <div class="popup-section">
                    <h3>¿Para quién es?</h3>
                    <p class="popup-para-quien"></p>
                </div>
                <div class="popup-section">
                    <h3>Instrucciones</h3>
                    <p class="popup-instrucciones"></p>
                </div>
            </div>
        </div>
        <div class="popup-footer">
            <div class="popup-price">0.00€</div>
            <div class="popup-actions">
                <div class="popup-quantity">
                    <label for="popup-cantidad">Cantidad:</label>
                    <select id="popup-cantidad"></select>
                </div>
                <button class="popup-add-to-cart">Añadir al carrito</button>
            </div>
        </div>
    `;
    
    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);
    
    // Cerrar popup al hacer clic en el botón de cerrar o fuera del popup
    const closeButton = popupOverlay.querySelector('.popup-close');
    closeButton.addEventListener('click', () => {
        cerrarPopup();
    });
    
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            cerrarPopup();
        }
    });
    
    // Manejar cambio de cantidad en el popup
    const cantidadSelect = popupOverlay.querySelector('#popup-cantidad');
    cantidadSelect.addEventListener('change', (e) => {
        const productoId = popupOverlay.getAttribute('data-producto-id');
        const cantidad = parseInt(e.target.value);
        const producto = alimentosInfo[productoId];
        
        let precio;
        if (producto.getPrecio) {
            precio = producto.getPrecio(cantidad);
        } else if (producto.unidad === "unidades") {
            precio = producto.precioBase * cantidad;
        } else {
            precio = producto.precio;
        }
        
        popupOverlay.querySelector('.popup-price').textContent = `${precio.toFixed(2)}€`;
    });
    
    // Manejar clic en el botón de añadir al carrito
    // Manejar clic en el botón de añadir al carrito
    const addToCartButton = popupOverlay.querySelector('.popup-add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const productoId = popupOverlay.getAttribute('data-producto-id');
        const cantidad = parseInt(cantidadSelect.value);
        const producto = alimentosInfo[productoId];
        
        // Calcular precio
        let precio;
        if (producto.getPrecio) {
            precio = producto.getPrecio(cantidad);S
        } else if (producto.unidad === "unidades") {
            precio = producto.precioBase * cantidad;
        } else {
            precio = producto.precio;
        }
        
        // Obtener carrito actual
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        // Comprobar si el producto ya está en el carrito
        let itemIndex = cart.findIndex(item => 
            item.id === productoId && 
            item.cantidad === cantidad
        );
        
        if (itemIndex !== -1) {
            // Si ya existe exactamente este producto con esta cantidad, incrementar cantidad
            cart[itemIndex].unidades++;
        } else {
            // Si no existe, añadir nuevo item
            cart.push({
                id: productoId,
                nombre: producto.nombre,
                precio: precio,
                cantidad: cantidad,
                unidad: producto.unidad,
                unidades: 1,
                imagen: producto.imagen
            });
        }
        
        // Guardar carrito actualizado
        localStorage.setItem("cart", JSON.stringify(cart));
        
        // Actualizar contador visual
        actualizarContadorCarrito();
        
        // Mostrar mensaje y cerrar popup
        alert(`${cantidad} ${producto.unidad} de ${producto.nombre} añadido al carrito`);
        cerrarPopup();
    });
    return popupOverlay;
}

// Función para mostrar el popup con la información del producto
function mostrarPopup(productoId) {
    const producto = alimentosInfo[productoId];
    if (!producto) return;
    
    let popupOverlay = document.querySelector('.popup-overlay');
    if (!popupOverlay) {
        popupOverlay = crearPopup();
    }
    
    // Actualizar atributo del producto actual
    popupOverlay.setAttribute('data-producto-id', productoId);
    
    // Actualizar contenido del popup
    popupOverlay.querySelector('.popup-title').textContent = producto.nombre;
    popupOverlay.querySelector('.popup-image img').src = producto.imagen;
    popupOverlay.querySelector('.popup-image img').alt = producto.nombre;
    popupOverlay.querySelector('.popup-descripcion').textContent = producto.descripcion;
    popupOverlay.querySelector('.popup-detalles').textContent = producto.detalles;
    popupOverlay.querySelector('.popup-para-quien').textContent = producto.paraQuien;
    popupOverlay.querySelector('.popup-instrucciones').textContent = producto.instrucciones;
    
    // Actualizar opciones de cantidad
    const cantidadSelect = popupOverlay.querySelector('#popup-cantidad');
    cantidadSelect.innerHTML = '';
    producto.opcionesCantidad.forEach(cantidad => {
        const option = document.createElement('option');
        option.value = cantidad;
        option.textContent = `${cantidad} ${producto.unidad}`;
        cantidadSelect.appendChild(option);
    });
    
    // Calcular precio inicial
    let precioInicial;
    if (producto.getPrecio) {
        precioInicial = producto.getPrecio(producto.opcionesCantidad[0]);
    } else if (producto.unidad === "unidades") {
        precioInicial = producto.precioBase * producto.opcionesCantidad[0];
    } else {
        precioInicial = producto.precio;
    }
    popupOverlay.querySelector('.popup-price').textContent = `${precioInicial.toFixed(2)}€`;
    
    // Mostrar popup con animación
    popupOverlay.classList.add('active');
}

// Función para cerrar el popup
function cerrarPopup() {
    const popupOverlay = document.querySelector('.popup-overlay');
    if (popupOverlay) {
        popupOverlay.classList.remove('active');
        // Opcional: eliminar el popup después de la animación
        setTimeout(() => {
            if (!popupOverlay.classList.contains('active')) {
                popupOverlay.remove();
            }
        }, 300);
    }
}

// Llamar a la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarContadorCarrito();
});

// Añadir evento de clic a las tarjetas de productos para mostrar el popup
document.addEventListener('DOMContentLoaded', function() {
    // Modificar la función cargarProductos para añadir event listeners a las imágenes y nombres de productos
    const originalCargarProductos = cargarProductos;
    
    cargarProductos = function(categoria = "Todos los productos") {
        // Llamar a la función original
        originalCargarProductos(categoria);
        
        // Añadir nuevos event listeners para los clics en las tarjetas
        document.querySelectorAll('.product-card .product-image, .product-card .product-name').forEach(element => {
            element.style.cursor = 'pointer';
            element.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const productoId = productCard.querySelector('.add-to-cart').getAttribute('data-producto-id');
                mostrarPopup(productoId);
            });
        });
    };
    
    // Cargar productos para aplicar los nuevos event listeners
    cargarProductos();
});