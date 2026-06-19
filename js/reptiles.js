// Enhanced JavaScript for Scales - Reptiles section

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

document.addEventListener('DOMContentLoaded', function() {
    // Añadir botones de favoritos
    setTimeout(() => {
        addFavoriteButtons();
        console.log("Botones de favoritos añadidos en reptiles");
    }, 100);
    // Base de datos de información de animales
        //Descripciones creadas con Chat GPT

    const animalesInfo = {
        "1": {
        nombre: "Camaleón de Yemen",
        cientifico: "Chamaeleo calyptratus",
        imagen: "img/mascotas/reptiles/camaleones/camaleon de yemen.jpg",
        precio: 150,
        descripcion: "El camaleón de Yemen es originario de la península arábiga. Es conocido por su espectacular cresta y su habilidad para cambiar de color.",
        habitat: "Requiere un terrario vertical con buena ventilación, plantas naturales, y niveles de humedad entre 50-70%. La temperatura debe oscilar entre 25-30°C con un punto cálido de 35°C.",
        cuidados: "Se alimenta de insectos vivos como grillos, cucarachas y gusanos, suplementados con calcio. Necesita iluminación UVB y agua por goteo o vaporización.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 5
            },
            {
                nombre: "Scales Barcelona",
                direccion: "Av. Diagonal 352, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 2
            },
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 22, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 4
            }
        ]
    },
    "2": {
        nombre: "Camaleón Pantera",
        cientifico: "Furcifer pardalis",
        imagen: "img/mascotas/reptiles/camaleones/camaleon pantera.jpg",
        precio: 180,
        descripcion: "Es uno de los camaleones más coloridos del mundo, originario de Madagascar. Muy apreciado por sus vivos colores y carácter curioso.",
        habitat: "Terrario alto con mucha vegetación, humedad del 60-80% y temperatura diurna entre 25-30°C. Necesita buena ventilación e iluminación UVB.",
        cuidados: "Insectívoro estricto, se alimenta de grillos, cucarachas y larvas. Requiere suplementos de calcio y una rutina de vaporización diaria.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 2
            },
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 22, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 4
            }
        ]
    },
    "3": {
        nombre: "Gecko Crestado Dalmatian Red",
        cientifico: "Correlophus ciliatus",
        imagen: "img/mascotas/reptiles/geckos/gecko crestado dalmatian red.jpg",
        precio: 120,
        descripcion: "Este gecko originario de Nueva Caledonia es muy popular por su facilidad de manejo y apariencia única, incluyendo su patrón moteado.",
        habitat: "Terrario vertical con ramas, plantas y humedad entre 60-80%. Temperatura entre 22-26°C. No requiere UVB pero se recomienda.",
        cuidados: "Omnívoro. Se alimenta de preparados comerciales para geckos crestados, frutas trituradas e insectos. No necesita calefacción excesiva.",
        tiendas: [
            {
                nombre: "Scales Barcelona",
                direccion: "Av. Diagonal 352, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 5
            },
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 22, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 2
            }
        ]
    },
    "4": {
        nombre: "Gecko Crestado Dalmatian",
        cientifico: "Correlophus ciliatus",
        imagen: "img/mascotas/reptiles/geckos/gecko crestado dalmatian.jpg",
        precio: 100,
        descripcion: "Con su cresta característica y variedad de patrones, este gecko es ideal para principiantes.",
        habitat: "Terrario vertical con plantas, ramas y buena ventilación. Temperatura entre 22-26°C y humedad del 60-80%.",
        cuidados: "Omnívoro. Dieta de papillas especializadas y ocasionalmente insectos vivos. Fácil de mantener.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 6
            }
        ]
    },
    "5": {
        nombre: "Gecko Leopardo Albino",
        cientifico: "Eublepharis macularius",
        imagen: "img/mascotas/reptiles/geckos/gecko leopardo albino.jpg",
        precio: 130,
        descripcion: "Una variante albina del clásico gecko leopardo. Muy dócil y fácil de cuidar, ideal para iniciarse en los reptiles.",
        habitat: "Terrario horizontal con escondites, zona cálida entre 30-32°C y zona fresca de 24°C. No necesita humedad alta.",
        cuidados: "Insectívoro. Dieta basada en grillos y gusanos espolvoreados con calcio y vitaminas. No requiere UVB.",
        tiendas: [
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 22, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 4
            }
        ]
    },
    "6": {
        nombre: "Gecko Leopardo High Yellow",
        cientifico: "Eublepharis macularius",
        imagen: "img/mascotas/reptiles/geckos/gecko leopardo high yellow.jpg",
        precio: 110,
        descripcion: "Este morfo se distingue por sus colores más intensos. Muy resistente y fácil de cuidar.",
        habitat: "Terrario de base cálida, sin humedad elevada. Zona caliente entre 30-32°C y escondites en ambos extremos térmicos.",
        cuidados: "Alimentación con insectos vivos, sin necesidad de UVB. Cambio regular de sustrato.",
        tiendas: [
            {
                nombre: "Scales Barcelona",
                direccion: "Av. Diagonal 352, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 5
            }
        ]
    },
    "7": {
        nombre: "Gecko Leopardo",
        cientifico: "Eublepharis macularius",
        imagen: "img/mascotas/reptiles/geckos/gecko leopardo nominal.jpg",
        precio: 85,
        descripcion: "El gecko leopardo es una especie de reptil originaria de Afganistán, Pakistán y el noroeste de India. Son mascotas populares por su tamaño manejable, su docilidad y sus bajos requerimientos de mantenimiento.",
        habitat: "Requiere un terrario de al menos 60x40x30 cm para un adulto. Debe contar con un sustrato adecuado, escondites, y un gradiente térmico entre 25-30°C con un punto caliente de 32-35°C. No requiere iluminación UVB específica.",
        cuidados: "Son insectívoros y se alimentan principalmente de grillos, gusanos de la harina y cucarachas dubia, todos espolvoreados con suplementos de calcio y vitaminas. Mudan la piel regularmente y pueden vivir hasta 15-20 años con los cuidados adecuados.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 7
            },
            {
                nombre: "Scales Barcelona",
                direccion: "Av. Diagonal 352, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 5
            },
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 22, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 2
            }
        ]
    },
    "8": {
        nombre: "Pogona Roja",
        cientifico: "Pogona vitticeps",
        imagen: "img/mascotas/reptiles/pogonas/pogona roja.jpg",
        precio: 115,
        descripcion: "Esta variante destaca por su coloración rojiza. Son reptiles sociables y fáciles de manejar.",
        habitat: "Terrario amplio (mínimo 90x45x45 cm) con iluminación UVB y temperatura entre 35-40°C en el punto caliente.",
        cuidados: "Omnívoros. Dieta a base de verduras, frutas y insectos. Necesita suplemento de calcio y exposición diaria a luz UVB.",
        tiendas: [
            {
                nombre: "Scales Barcelona",
                direccion: "Av. Diagonal 352, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 3
            }
        ]
    },
    "9": {
        nombre: "Pogona",
        cientifico: "Pogona vitticeps",
        imagen: "img/mascotas/reptiles/pogonas/pogona.jpg",
        precio: 110,
        descripcion: "Reptil originario de Australia, muy popular como mascota por su carácter amigable.",
        habitat: "Terrario espacioso con ramas y zonas para tomar el sol. Requiere UVB y temperatura diurna alta.",
        cuidados: "Dieta mixta: vegetales, frutas y grillos. Limpieza regular del terrario y buena hidratación.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 2
            }
        ]
    },
    "10": {
        nombre: "Serpiente del Maíz",
        cientifico: "Pantherophis guttatus",
        imagen: "img/mascotas/reptiles/serpientes/serpiente del maiz.jpg",
        precio: 95,
        descripcion: "Una de las serpientes más recomendadas para principiantes. Tranquila y fácil de alimentar.",
        habitat: "Terrario horizontal con escondites, ramas y control de temperatura (25-30°C).",
        cuidados: "Alimentación cada 5-7 días con presas descongeladas del tamaño adecuado. Higiene del terrario es clave.",
        tiendas: [
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 22, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 6
            }
        ]
    },
    "11": {
        nombre: "Serpiente Texana Leucística",
        cientifico: "Pantherophis obsoletus",
        imagen: "img/mascotas/reptiles/serpientes/serpiente texana leuicistica.jpg",
        precio: 100,
        descripcion: "Especie de serpiente de aspecto fantasmal por su color blanco. Muy activa y curiosa.",
        habitat: "Terrario seguro con buena ventilación, escondites y temperatura de 26-30°C.",
        cuidados: "Se alimenta cada semana con ratones descongelados. Muy fácil de mantener.",
        tiendas: [
            {
                nombre: "Scales Barcelona",
                direccion: "Av. Diagonal 352, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 1
            }
        ]
    },
    "12": {
        nombre: "Lampropeltis Albina Roja",
        cientifico: "Lampropeltis triangulum",
        imagen: "img/mascotas/reptiles/serpientes/lampropeltis albina roja.jpg",
        precio: 105,
        descripcion: "Especie de serpiente del maíz de colores vivos y contraste llamativo. Muy resistente.",
        habitat: "Terrario con escondites, ramas y sustrato suelto. Temperatura entre 25-30°C.",
        cuidados: "Se alimenta de presas del tamaño de su grosor, una vez a la semana. Muy dócil.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 3
            }
        ]
    },
    "13": {
        nombre: "Tortuga de Agua",
        cientifico: "Trachemys scripta elegans",
        imagen: "img/mascotas/reptiles/tortugas/tortuga de agua.jpg",
        precio: 110,
        descripcion: "Tortuga semiacuática muy común. Activa y fácil de observar en acuarios bien cuidados.",
        habitat: "Acuaterrario con zona seca para tomar el sol. Agua filtrada y temperatura entre 25-28°C.",
        cuidados: "Omnívora. Se alimenta con pellets, vegetales y proteína animal. Necesita luz UVB y calefacción.",
        tiendas: [
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 22, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 2
            }
        ]
    },
    "14": {
        nombre: "Tortuga Mediterránea",
        cientifico: "Testudo hermanni",
        imagen: "img/mascotas/reptiles/tortugas/tortuga mediterranea.jpg",
        precio: 130,
        descripcion: "Tortuga terrestre originaria del sur de Europa. Longeva, tranquila y herbívora.",
        habitat: "Zona exterior o terrario seco con suelo natural. Temperatura entre 22-28°C y luz UVB constante.",
        cuidados: "Dieta vegetal rica en fibra. Necesita hibernar en invierno. Muy resistente a enfermedades.",
        tiendas: [
            {
                nombre: "Scales Barcelona",
                direccion: "Av. Diagonal 352, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 4
            }
        ]
    },
    "15": {
        nombre: "Tortuga Rusa",
        cientifico: "Agrionemys horsfieldii",
        imagen: "img/mascotas/reptiles/tortugas/tortuga rusa.jpg",
        precio: 135,
        descripcion: "Tortuga terrestre pequeña, robusta y muy popular. De hábitos diurnos y fácil manejo.",
        habitat: "Terrario seco con sustrato profundo. Luz solar o UVB y temperatura diurna entre 25-30°C.",
        cuidados: "100% herbívora. Come hojas verdes, flores y raíces. Necesita hibernación anual.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 5
            }
        ]
    }
    };

    // ===== PARTE 1: CATEGORIZACIÓN Y FILTRADO =====
    // Asignar categorías a productos basado en el nombre del animal
    const productos = document.querySelectorAll('.producto');
    
    // Mapeo de animales a sus categorías
    productos.forEach(producto => {
        const nombre = producto.querySelector('h2').textContent.toLowerCase();
        let categoria;
        
        if (nombre.includes('gecko')) {
            categoria = 'Geckos';
        } else if (nombre.includes('lagarto') || nombre.includes('iguana') || nombre.includes('dragón') || nombre.includes('pogona')) {
            categoria = 'Lagartos';
        } else if (nombre.includes('camaleón')) {
            categoria = 'Camaleones';
        } else if (nombre.includes('serpiente') || nombre.includes('coral')) {
            categoria = 'Serpientes';
        } else if (nombre.includes('tortuga')) {
            categoria = 'Tortugas';
        } else {
            categoria = 'Otros';
        }
        
        producto.dataset.categoria = categoria;
    });
    
    // Configuración de enlaces de filtrado en la barra lateral
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener la categoría del texto del enlace
            const categoria = this.textContent;
            
            // Actualizar título de la página según categoría
            const tituloCategoriaElement = document.querySelector('.titulo-categoria');
            tituloCategoriaElement.textContent = categoria;
            
            // Marcar enlace como activo
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Si es "Mostrar todos", mostrar todos los productos
            if (categoria === 'Mostrar todos') {
                tituloCategoriaElement.textContent = "Reptiles";
                productos.forEach(producto => {
                    producto.style.display = '';
                });
            } else {
                // Filtrar por categoría
                productos.forEach(producto => {
                    if (producto.dataset.categoria === categoria) {
                        producto.style.display = '';
                    } else {
                        producto.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // Añadir enlace "Mostrar todos" si no existe
    let mostrarTodosExists = false;
    sidebarLinks.forEach(link => {
        if (link.textContent === 'Mostrar todos') {
            mostrarTodosExists = true;
        }
    });
    
    if (!mostrarTodosExists) {
        const sidebarUl = document.querySelector('.sidebar ul');
        const mostrarTodosLi = document.createElement('li');
        const mostrarTodosLink = document.createElement('a');
        mostrarTodosLink.href = '#';
        mostrarTodosLink.textContent = 'Mostrar todos';
        mostrarTodosLi.appendChild(mostrarTodosLink);
        sidebarUl.appendChild(mostrarTodosLi);
        
        // Configurar el enlace "Mostrar todos"
        mostrarTodosLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Actualizar título
            document.querySelector('.titulo-categoria').textContent = "Reptiles";
            
            // Marcar este enlace como activo
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar todos los productos
            productos.forEach(producto => {
                producto.style.display = '';
            });
        });
    }

    // ===== PARTE 2: FUNCIONALIDAD DEL CARRITO =====
    // Función para añadir productos al carrito
    window.addToCart = function(name, price) {
        // Recuperar carrito del almacenamiento local o inicializar
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        // Buscar si el producto ya está en el carrito
        let productIndex = cart.findIndex(item => item.name === name);
        
        if (productIndex !== -1) {
            // Si ya existe, incrementar cantidad
            cart[productIndex].quantity++;
        } else {
            // Si no existe, añadir nuevo producto
            cart.push({ name, price, quantity: 1 });
        }
        
        // Guardar carrito actualizado
        localStorage.setItem("cart", JSON.stringify(cart));
        
        // Informar al usuario
        alert(`${name} añadido al carrito`);
    };

    // ===== PARTE 3: MODAL DE DETALLES DE PRODUCTO =====
    // Elementos del modal
    const modal = document.getElementById("animalModal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");
    const modalScientific = document.getElementById("modal-scientific");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const modalHabitat = document.getElementById("modal-habitat");
    const modalCare = document.getElementById("modal-care");
    const modalStores = document.getElementById("modal-stores");
    const modalAddButton = document.getElementById("modal-add-button");
    const closeButton = document.querySelector(".close-button");

    // Configuración de las pestañas del modal
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Desactivar todas las pestañas
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));
            
            // Activar la pestaña seleccionada
            tab.classList.add("active");
            const tabContent = document.getElementById(`tab-${tab.dataset.tab}`);
            if (tabContent) {
                tabContent.classList.add("active");
            }
        });
    });

    // Configurar clics en las imágenes de productos para abrir modal
    document.querySelectorAll(".producto img").forEach(img => {
        img.style.cursor = "pointer"; // Asegurar que el cursor indique que es clickable
        
        img.addEventListener("click", () => {
            const animalId = img.getAttribute("data-id");
            const animal = animalesInfo[animalId];
            
            if (animal) {
                // Rellenar datos en el modal
                modalImage.src = animal.imagen;
                modalImage.alt = animal.nombre;
                modalName.textContent = animal.nombre;
                modalScientific.textContent = animal.cientifico;
                modalPrice.textContent = `€${animal.precio}`;
                modalDescription.textContent = animal.descripcion;
                modalHabitat.textContent = animal.habitat;
                modalCare.textContent = animal.cuidados;
                
                // Generar información de tiendas
                modalStores.innerHTML = "";
                animal.tiendas.forEach(tienda => {
                    const tiendaElement = document.createElement("div");
                    tiendaElement.className = "store-location";
                    
                    let stockStatus = "";
                    if (tienda.disponibilidad === "in-stock") {
                        stockStatus = `<span class="availability in-stock">En stock (${tienda.stock} disponibles)</span>`;
                    } else if (tienda.disponibilidad === "low-stock") {
                        stockStatus = `<span class="availability low-stock">Stock bajo (solo ${tienda.stock} disponibles)</span>`;
                    } else {
                        stockStatus = `<span class="availability out-of-stock">Agotado</span>`;
                    }
                    
                    tiendaElement.innerHTML = `
                        <h4>${tienda.nombre}</h4>
                        <label>${tienda.direccion}</label>
                        <label>Tel: ${tienda.telefono}</label>
                        <label>${tienda.horario}</label>
                        <label>${stockStatus}</label>
                    `;
                    
                    modalStores.appendChild(tiendaElement);
                });                
                // Mostrar modal
                modal.style.display = "block";
                
                // Activar pestaña de descripción por defecto
                tabs.forEach(t => t.classList.remove("active"));
                tabContents.forEach(content => content.classList.remove("active"));
                
                const descriptionTab = document.querySelector('.tab[data-tab="descripcion"]');
                const descriptionContent = document.getElementById("tab-descripcion");
                
                if (descriptionTab && descriptionContent) {
                    descriptionTab.classList.add("active");
                    descriptionContent.classList.add("active");
                }
            }
        });
    });

    // Cerrar modal con botón de cierre
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    
    // Cerrar modal al presionar la tecla Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
    
    // ===== PARTE 4: MEJORAS DE ACCESIBILIDAD =====
    // Añadir atributos de accesibilidad a elementos interactivos
    document.querySelectorAll(".producto img").forEach(img => {
        img.setAttribute("aria-label", `Ver detalles de ${img.alt}`);
        img.setAttribute("role", "button");
        img.setAttribute("tabindex", "0");
        
        // Permitir activación con teclado (Enter o Space)
        img.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                img.click();
            }
        });
    });
    // ===== PARTE 5: FUNCIONALIDAD DE BÚSQUEDA =====
    // Implementar la funcionalidad de búsqueda
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Si la búsqueda está vacía, mostrar todos los productos
            productos.forEach(producto => {
                producto.style.display = '';
            });
            return;
        }
        
        productos.forEach(producto => {
            const nombre = producto.querySelector('h2').textContent.toLowerCase();
            const precio = producto.querySelector('.precio').textContent.toLowerCase();
            const descripcionCorta = producto.querySelector('label').textContent.toLowerCase();
            
            // Buscar coincidencias en nombre, precio o descripción
            if (nombre.includes(searchTerm) || 
                precio.includes(searchTerm) || 
                descripcionCorta.includes(searchTerm)) {
                producto.style.display = '';
            } else {
                producto.style.display = 'none';
            }
        });
        
        // Actualizar título con resultados de búsqueda
        const tituloCategoriaElement = document.querySelector('.titulo-categoria');
        tituloCategoriaElement.textContent = `Resultados para: "${searchTerm}"`;
        
        // Desactivar enlaces activos en sidebar
        sidebarLinks.forEach(link => link.classList.remove('active'));
    }
    
    // Configurar eventos de búsqueda
    if (searchButton) {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            performSearch();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }
    
    // ===== PARTE 6: VISUALIZACIÓN DEL CARRITO =====
    // Implementar visualización del carrito
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const closeCartButton = document.querySelector('#cartModal .close-button');
    const clearCartButton = document.getElementById('clear-cart');
    const checkoutButton = document.getElementById('checkout-button');
    
    // Función para mostrar el carrito
    function showCart() {
        // Recuperar carrito del almacenamiento local
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        // Limpiar lista de productos
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            // Carrito vacío
            cartItems.innerHTML = '<tr><td colspan="4" class="empty-cart">Tu carrito está vacío</td></tr>';
            cartTotal.textContent = '€0';
        } else {
            // Calcular total
            let total = 0;
            
            // Añadir cada producto
            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>€${item.price}</td>
                    <td>
                        <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
                    </td>
                    <td>€${itemTotal}</td>
                    <td><button class="remove-btn" onclick="removeFromCart(${index})">×</button></td>
                `;
                
                cartItems.appendChild(row);
            });
            
            // Actualizar total
            cartTotal.textContent = `€${total}`;
        }
        
        // Mostrar modal
        cartModal.style.display = 'block';
    }
    
    // Configurar evento para mostrar carrito
    if (cartButton) {
        cartButton.addEventListener('click', (e) => {
            e.preventDefault();
            showCart();
        });
    }
    
    // Cerrar modal del carrito
    if (closeCartButton) {
        closeCartButton.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
    }
    
    // Funciones para manipular carrito
    window.increaseQuantity = function(index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart[index].quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        showCart();
    };
    
    window.decreaseQuantity = function(index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        showCart();
    };
    
    window.removeFromCart = function(index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        showCart();
    };
    
    // Limpiar carrito
    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
                localStorage.setItem("cart", JSON.stringify([]));
                showCart();
            }
        });
    }
    
    // Procesar checkout
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            
            if (cart.length === 0) {
                alert('Tu carrito está vacío');
            } else {
                alert('¡Gracias por tu compra! Serás redirigido al proceso de pago.');
                // Aquí normalmente redirigiríamos a una página de checkout
                // window.location.href = 'checkout.html';
            }
        });
    }
    
    // ===== PARTE 7: CONTADOR DEL CARRITO =====
    // Mostrar número de productos en el icono del carrito
    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            
            if (cart.length === 0) {
                cartCountElement.style.display = 'none';
            } else {
                // Calcular total de productos
                const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
                cartCountElement.textContent = itemCount;
                cartCountElement.style.display = 'block';
            }
        }
    }
    
    // Actualizar contador al cargar la página
    updateCartCount();
    
    // Sobreescribir función addToCart para actualizar contador
    const originalAddToCart = window.addToCart;
    window.addToCart = function(name, price) {
        originalAddToCart(name, price);
        updateCartCount();
    };
    
    // ===== PARTE 8: PERSISTENCIA DE ESTADO =====
    // Recordar la última categoría seleccionada
    function saveCurrentCategory(category) {
        localStorage.setItem("lastCategory", category);
    }
    
    function loadLastCategory() {
        const lastCategory = localStorage.getItem("lastCategory");
        if (lastCategory) {
            // Buscar el enlace correspondiente y simular clic
            const categoryLink = Array.from(sidebarLinks).find(
                link => link.textContent === lastCategory
            );
            
            if (categoryLink) {
                categoryLink.click();
            }
        }
    }
    
    // Modificar los enlaces para guardar categoría
    sidebarLinks.forEach(link => {
        const originalClick = link.onclick;
        link.addEventListener('click', function() {
            saveCurrentCategory(this.textContent);
        });
    });
    
    // Cargar última categoría seleccionada
    loadLastCategory();
    
    // ===== PARTE 9: MEJORAS DE RENDIMIENTO =====
    // Implementar lazy loading para imágenes
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    
                    observer.unobserve(img);
                }
            });
        });
        
        // Observar todas las imágenes con data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback para navegadores que no soportan IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
        });
    }
});