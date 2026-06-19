// Script integrado para Scales - Anfibios
document.addEventListener("DOMContentLoaded", function () {
  // Base de datos de información de animales
  //Descripciones creadas con Chat GPT
    const anfibiosInfo = {
    1: {
        nombre: "Rana Flecha Azul",
        cientifico: "Dendrobates tinctorius",
        imagen: "img/mascotas/anfibios/ranas/rana flecha azul.jpg",
        precio: 90,
        descripcion:
            "Esta rana es conocida por su color azul vibrante y sus manchas negras. Es una especie venenosa en la naturaleza, aunque los ejemplares criados en cautividad no desarrollan toxinas.",
        habitat:
            "Bosques húmedos de Surinam, Brasil y Guyana Francesa. Viven principalmente en el suelo del bosque entre la hojarasca.",
        cuidados:
            "Requiere un terrario húmedo con temperatura entre 23-27°C y humedad del 80-100%. Necesita abundante vegetación, superficies para trepar y agua limpia. Se alimenta principalmente de pequeños insectos como moscas de la fruta y grillos pequeños.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 5,
            },
            {
                nombre: "Scales Barcelona",
                direccion: "Avda. Diagonal 305, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 2,
            },
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 80, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "out-of-stock",
                stock: 0,
            },
        ],
    },
    2: {
        nombre: "Rana Dardo Verde",
        cientifico: "Dendrobates auratus",
        imagen: "img/mascotas/anfibios/ranas/rana flecha verde.jpg",
        precio: 80,
        descripcion:
            "Esta hermosa rana presenta una coloración verde brillante con manchas o patrones negros. Es una especie diurna y muy activa que resulta fascinante de observar.",
        habitat:
            "Bosques tropicales de América Central y el norte de Sudamérica, especialmente en Panamá, Costa Rica, Nicaragua y Colombia.",
        cuidados:
            "Necesita un terrario con alta humedad (80-100%), buena ventilación y temperatura entre 22-26°C. Requiere abundante vegetación, troncos y hojas para esconderse. Se alimenta de pequeños insectos como moscas de la fruta y colémbolos.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 8,
            },
            {
                nombre: "Scales Barcelona",
                direccion: "Avda. Diagonal 305, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 6,
            },
            {
                nombre: "Scales Sevilla",
                direccion: "Avda. de la Constitución 10, Sevilla",
                telefono: "95 567 89 01",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 4,
            },
        ],
    },
    3: {
        nombre: "Rana de Cristal",
        cientifico: "Familia Centrolenidae",
        imagen: "img/mascotas/anfibios/ranas/rana cristal.jpg",
        precio: 85,
        descripcion:
            "Estas fascinantes ranas tienen la piel ventral transparente, permitiendo ver sus órganos internos. Son pequeñas y delicadas, con hermosos tonos verdosos en su parte dorsal.",
        habitat:
            "Viven cerca de arroyos y cascadas en bosques húmedos tropicales de Centro y Sudamérica. Suelen encontrarse en la vegetación que cuelga sobre el agua.",
        cuidados:
            "Requieren terrarios especializados con alta humedad (90-100%) y buena circulación de aire. La temperatura debe mantenerse entre 20-24°C. Necesitan agua corriente o en cascada. Son delicadas y recomendadas para cuidadores experimentados.",
        tiendas: [
            {
                nombre: "Scales Madrid Especializado",
                direccion: "C/ Alcalá 120, Madrid",
                telefono: "91 345 67 89",
                horario: "Lunes a Viernes: 10:00 - 20:00, Sábado: 10:00 - 14:00",
                disponibilidad: "low-stock",
                stock: 2,
            },
            {
                nombre: "Scales Barcelona",
                direccion: "Avda. Diagonal 305, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "out-of-stock",
                stock: 0,
            },
        ],
    },
    4: {
        nombre: "Salamandra Ibérica",
        cientifico: "Salamandra salamandra",
        imagen: "img/mascotas/anfibios/salamandras/salamandra.jpg",
        precio: 75,
        descripcion:
            "Esta salamandra presenta un llamativo patrón de colores negro y amarillo que advierte de su toxicidad. Es una especie robusta y longeva que puede vivir más de 20 años en cautividad.",
        habitat:
            "Bosques húmedos y zonas montañosas de la Península Ibérica. Prefiere áreas con buena cobertura vegetal y acceso a pequeños cuerpos de agua.",
        cuidados:
            "Necesita un terrario con sustrato húmedo, zonas de refugio y un pequeño estanque. La temperatura ideal es entre 15-20°C, evitando el calor excesivo. Se alimenta de pequeños invertebrados como lombrices, babosas y diversos insectos.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 6,
            },
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 80, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 4,
            },
            {
                nombre: "Scales Bilbao",
                direccion: "Gran Vía 26, Bilbao",
                telefono: "94 567 89 01",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 2,
            },
        ],
    },
    5: {
        nombre: "Tritón Alpino",
        cientifico: "Ichthyosaura alpestris",
        imagen: "img/mascotas/anfibios/triton/triton.jpg",
        precio: 70,
        descripcion:
            "Este pequeño tritón muestra colores brillantes durante la época de reproducción, con vientres naranja o rojos y dorsos azulados. Es una especie acuática durante gran parte del año.",
        habitat:
            "Lagos, estanques y charcas de montaña en Europa central y del sur. Puede encontrarse desde los valles hasta zonas alpinas de considerable altitud.",
        cuidados:
            "Requiere un acuaterrario con zona terrestre y acuática bien definidas. La temperatura del agua debe mantenerse entre 15-18°C. Se alimenta de pequeños crustáceos, larvas acuáticas e insectos. Durante la fase terrestre necesita un sustrato húmedo con refugios.",
        tiendas: [
            {
                nombre: "Scales Madrid Especializado",
                direccion: "C/ Alcalá 120, Madrid",
                telefono: "91 345 67 89",
                horario: "Lunes a Viernes: 10:00 - 20:00, Sábado: 10:00 - 14:00",
                disponibilidad: "in-stock",
                stock: 5,
            },
            {
                nombre: "Scales Barcelona",
                direccion: "Avda. Diagonal 305, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 3,
            },
        ],
    },
    6: {
        nombre: "Rana Arborícola",
        cientifico: "Litoria caerulea",
        imagen: "img/mascotas/anfibios/ranas/rana arboricola.jpg",
        precio: 65,
        descripcion:
            "Esta pequeña rana de color verde brillante posee discos adhesivos en los dedos que le permiten trepar con facilidad. Puede cambiar de color según las condiciones ambientales y su estado de ánimo. Es conocida por su docilidad y su piel brillante, siendo una excelente opción para principiantes en anfibios.",
        habitat:
            "Zonas húmedas con abundante vegetación en Europa y parte de Asia. Frecuenta árboles y arbustos cerca de charcas y humedales.",
        cuidados:
            "Necesita un terrario vertical con muchas ramas y plantas para trepar. La humedad debe ser moderada (60-80%) y la temperatura entre 20-25°C. Se alimenta principalmente de pequeños insectos voladores, grillos, langostas y larvas. Es sensible a contaminantes en el agua, por lo que se recomienda agua tratada o destilada.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 10,
            },
            {
                nombre: "Scales Barcelona",
                direccion: "Avda. Diagonal 305, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 8,
            },
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 80, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 7,
            },
        ],
    },
    7: {
        nombre: "Rana de Ojos Rojos",
        cientifico: "Agalychnis callidryas",
        imagen: "img/mascotas/anfibios/ranas/rana flecha roja y azul.jpg",
        precio: 95,
        descripcion:
            "Conocida por sus llamativos ojos rojos y su cuerpo verde brillante con laterales azules y amarillos. Es un icono entre los anfibios por su belleza y comportamiento principalmente nocturno.",
        habitat:
            "Bosques tropicales lluviosos de América Central. Vive en los estratos altos del bosque, bajando ocasionalmente para reproducirse en charcas temporales.",
        cuidados:
            "Requiere un terrario alto con abundante vegetación, ramas y zonas de agua. La temperatura debe estar entre 24-28°C durante el día y 20-22°C por la noche, con humedad del 70-90%. Se alimenta de grillos, polillas y otros insectos de tamaño medio.",
        tiendas: [
            {
                nombre: "Scales Madrid Especializado",
                direccion: "C/ Alcalá 120, Madrid",
                telefono: "91 345 67 89",
                horario: "Lunes a Viernes: 10:00 - 20:00, Sábado: 10:00 - 14:00",
                disponibilidad: "in-stock",
                stock: 4,
            },
            {
                nombre: "Scales Barcelona",
                direccion: "Avda. Diagonal 305, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 1,
            },
        ],
    },
    8: {
        nombre: "Salamandra de Fuego",
        cientifico: "Salamandra infraimmaculata",
        imagen: "img/mascotas/anfibios/salamandras/salamandra fuego.jpg",
        precio: 88,
        descripcion:
            "Esta salamandra presenta un brillante patrón de manchas amarillas o naranjas sobre fondo negro. Es una especie robusta y bastante grande en comparación con otras salamandras europeas.",
        habitat:
            "Regiones montañosas y boscosas del Medio Oriente, especialmente en Turquía, Siria, Irán e Iraq. Prefiere zonas húmedas con abundante cobertura vegetal.",
        cuidados:
            "Necesita un terrario con sustrato húmedo, muchos escondites y un pequeño estanque poco profundo. La temperatura debe mantenerse entre 15-22°C. Se alimenta de lombrices, babosas, caracoles y diversos insectos.",
        tiendas: [
            {
                nombre: "Scales Madrid Especializado",
                direccion: "C/ Alcalá 120, Madrid",
                telefono: "91 345 67 89",
                horario: "Lunes a Viernes: 10:00 - 20:00, Sábado: 10:00 - 14:00",
                disponibilidad: "in-stock",
                stock: 3,
            },
            {
                nombre: "Scales Barcelona",
                direccion: "Avda. Diagonal 305, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "out-of-stock",
                stock: 0,
            },
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 80, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 2,
            },
        ],
    },
    9: {
        nombre: "Rana de Río",
        cientifico: "Lithobates catesbeianus",
        imagen: "img/mascotas/anfibios/ranas/rana.jpg",
        precio: 100,
        descripcion:
            "También conocida como rana toro, es una de las ranas más grandes del mundo. Presenta un cuerpo robusto, cabeza ancha y un característico tímpano muy visible. Los machos emiten un sonoro croar que recuerda al mugido de un toro.",
        habitat:
            "Originaria de Norteamérica, habita en lagos, estanques, pantanos y ríos de corriente lenta con abundante vegetación acuática.",
        cuidados:
            "Requiere un acuaterrario amplio con zona de agua profunda y área terrestre. La temperatura del agua debe estar entre 20-25°C. Es voraz y se alimenta de insectos grandes, peces pequeños, otros anfibios y hasta pequeños mamíferos. No es recomendable mezclarla con otras especies.",
        tiendas: [
            { 
                nombre: "Scales Madrid Especializado",
                direccion: "C/ Alcalá 120, Madrid",
                telefono: "91 345 67 89",
                horario: "Lunes a Viernes: 10:00 - 20:00, Sábado: 10:00 - 14:00",
                disponibilidad: "low-stock",
                stock: 2,
            },
            {
                nombre: "Scales Barcelona",
                direccion: "Avda. Diagonal 305, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 3,
            },
        ],
    },
    10: {
        nombre: "Ajolote Nominal",
        cientifico: "Ambystoma mexicanum",
        imagen: "img/mascotas/anfibios/ajolotes/ajolote nominal.jpg",
        precio: 45,
        descripcion:
            "El ajolote nominal es una de las variantes más comunes de esta fascinante especie neoténica originaria de México. Es popular en acuarios por su aspecto único y su capacidad regenerativa.",
        habitat:
            "Requiere un acuario espacioso con agua dulce fría (16-20°C), sustrato suave y una filtración eficiente. No tolera temperaturas altas.",
        cuidados:
            "Se alimenta de lombrices, pellets especiales y pequeños peces. Es importante evitar objetos punzantes o sustratos que puedan ser ingeridos.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 6,
            },
            {
                nombre: "Scales Barcelona",
                direccion: "Avda. Diagonal 305, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 2,
            },
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 80, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 5,
            },
        ],
    },
    11: {
        nombre: "Ajolote Albino",
        cientifico: "Ambystoma mexicanum",
        imagen: "img/mascotas/anfibios/ajolotes/ajolote albino.jpg",
        precio: 55,
        descripcion:
            "El ajolote albino destaca por su coloración clara y ojos rosados. Al igual que otras variantes, conserva características larvarias durante toda su vida.",
        habitat:
            "Necesita un acuario de al menos 60 litros con agua fría, sin corrientes fuertes y con escondites. La temperatura ideal es de 16-20°C.",
        cuidados:
            "Come lombrices, alimento congelado y pellets. La limpieza del agua es esencial para prevenir infecciones.",
        tiendas: [
            {
                nombre: "Scales Madrid Centro",
                direccion: "C/ Gran Vía 42, Madrid",
                telefono: "91 234 56 78",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 5,
            },
            {
                nombre: "Scales Barcelona",
                direccion: "Avda. Diagonal 305, Barcelona",
                telefono: "93 876 54 32",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "in-stock",
                stock: 4,
            },
            {
                nombre: "Scales Valencia",
                direccion: "C/ Colón 80, Valencia",
                telefono: "96 345 67 89",
                horario: "Lunes a Sábado: 10:00 - 20:00",
                disponibilidad: "low-stock",
                stock: 2,
            },
        ],
    },
};
    

    // ===== PARTE 1: FILTRADO =====
    // Añadimos la categoría a cada producto según su tipo
    const productos = document.querySelectorAll(".producto");

    // Mapeo de animales a sus categorías
    productos.forEach((producto) => {
        const nombre = producto.querySelector("h2").textContent.toLowerCase();
        let categoria;

        if (nombre.includes("rana")) {
        categoria = "ranas";
        } else if (nombre.includes("salamandra")) {
        categoria = "salamandras";
        } else if (nombre.includes("tritón")) {
        categoria = "tritones";
        } else if (nombre.includes("ajolote")) {
        categoria = "ajolotes";
        } else {
        categoria = "Otros";
        }

        producto.dataset.categoria = categoria;
    });

     // ===== PARTE 1: ASIGNAR CATEGORÍAS CORRECTAMENTE =====
  // Mapa para asociar nombres de producto con sus categorías
  const categoriasAnfibios = {
    "Rana Flecha Azul": "ranas",
    "Rana Dardo Verde": "ranas",
    "Rana de Cristal": "ranas",
    "Salamandra Ibérica": "salamandras",
    "Tritón Alpino": "tritones",
    "Rana Arborícola": "ranas",
    "Rana de Ojos Rojos": "ranas",
    "Salamandra de Fuego": "salamandras",
    "Rana de Río": "ranas",
    "Ajolote Nominal": "ajolotes",
    "Ajolote Albino": "ajolotes"
    };

    // Asignar categorías a productos basadas en su nombre
    const productosDOM = document.querySelectorAll(".producto");
    
    productos.forEach((producto) => {
        const nombreProducto = producto.querySelector("h2").textContent;
        
        // Asignar categoría del mapa o 'otros' si no está en el mapa
        const categoria = categoriasAnfibios[nombreProducto] || "otros";
        
        // Asignar la categoría como un atributo data
        producto.dataset.categoria = categoria;
        
        // Para depuración - opcional
        console.log(`Producto: ${nombreProducto}, Categoría asignada: ${categoria}`);
    });

    // ===== PARTE 2: CONFIGURAR FILTRADO POR CATEGORÍA =====
    // Configuración de enlaces de filtrado en la barra lateral
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    
    sidebarLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
        e.preventDefault();

        // Obtener la categoría del texto del enlace
        const categoriaTexto = this.textContent.trim();
        let categoriaFiltro;

        // Mapear el texto visible a la categoría en data-categoria
        switch (categoriaTexto) {
            case "Ranas":
            categoriaFiltro = "ranas";
            break;
            case "Salamandras":
            categoriaFiltro = "salamandras";
            break;
            case "Tritones":
            categoriaFiltro = "tritones";
            break;
            case "Ajolotes":
            categoriaFiltro = "ajolotes";
            break;
            case "Mostrar todos":
            categoriaFiltro = "todos";
            break;
            default:
            categoriaFiltro = categoriaTexto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        // Actualizar título de la página según categoría
        const tituloCategoriaElement = document.querySelector(".titulo-categoria");
        
        if (categoriaFiltro === "todos") {
            tituloCategoriaElement.textContent = "Anfibios";
        } else {
            tituloCategoriaElement.textContent = categoriaTexto;
        }

        // Marcar enlace como activo
        sidebarLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");

        // Filtrado de productos
        productos.forEach((producto) => {
            if (categoriaFiltro === "todos") {
            producto.style.display = "";
            } else if (producto.dataset.categoria === categoriaFiltro) {
            producto.style.display = "";
            } else {
            producto.style.display = "none";
            }
        });

        // Guardar preferencia en localStorage
        localStorage.setItem("lastCategory", categoriaTexto);
        
        // Para depuración - opcional
        console.log(`Filtrado por: ${categoriaFiltro}`);
        });
    });

    // Añadir enlaces para las categorías de anfibios si no existen
    const sidebarUl = document.querySelector(".sidebar ul");
    const categoriasNecesarias = ["Mostrar todos", "Ranas", "Salamandras", "Tritones", "Ajolotes"];
    
    // Verificar qué categorías ya existen
    const categoriasExistentes = Array.from(sidebarLinks).map(link => link.textContent.trim());
    
    // Añadir las categorías que faltan
    categoriasNecesarias.forEach(categoria => {
        if (!categoriasExistentes.includes(categoria)) {
        const nuevaLi = document.createElement("li");
        const nuevoEnlace = document.createElement("a");
        nuevoEnlace.href = "#";
        nuevoEnlace.textContent = categoria;
        
        // Añadir el evento de clic al nuevo enlace
        nuevoEnlace.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Reutilizar la misma lógica de filtrado
            sidebarLinks.forEach((l) => l.classList.remove("active"));
            this.classList.add("active");
            
            const categoriaFiltro = categoria === "Mostrar todos" ? "todos" : categoria.toLowerCase();
            
            const tituloCategoriaElement = document.querySelector(".titulo-categoria");
            tituloCategoriaElement.textContent = categoria === "Mostrar todos" ? "Anfibios" : categoria;
            
            productos.forEach((producto) => {
            if (categoriaFiltro === "todos") {
                producto.style.display = "";
            } else if (producto.dataset.categoria === categoriaFiltro) {
                producto.style.display = "";
            } else {
                producto.style.display = "none";
            }
            });
            
            localStorage.setItem("lastCategory", categoria);
        });
        
        nuevaLi.appendChild(nuevoEnlace);
        
        // Insertar "Mostrar todos" al principio, otras categorías al final
        if (categoria === "Mostrar todos") {
            sidebarUl.insertBefore(nuevaLi, sidebarUl.firstChild);
        } else {
            sidebarUl.appendChild(nuevaLi);
        }
        }
    });

  // ===== PARTE 3: FUNCIONALIDAD DEL CARRITO =====
  // Función para añadir productos al carrito
    window.addToCart = function (name, price) {
    // Recuperar carrito del almacenamiento local o inicializar
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Buscar si el producto ya está en el carrito
    let productIndex = cart.findIndex((item) => item.name === name);

    if (productIndex !== -1) {
      // Si ya existe, incrementar cantidad
    cart[productIndex].quantity++;
    } else {
      // Si no existe, añadir nuevo producto
    cart.push({ name, price, quantity: 1 });
    }

    // Guardar carrito actualizado
    localStorage.setItem("cart", JSON.stringify(cart));

    // Actualizar contador del carrito si existe
    updateCartCount();

    // Informar al usuario
    alert(`${name} añadido al carrito`);
    };

    // Función para actualizar el contador del carrito
    function updateCartCount() {
        const cartCountElement = document.getElementById("cart-count");
        if (cartCountElement) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            cartCountElement.style.display = "none";
        } else {
            // Calcular total de productos
            const itemCount = cart.reduce(
            (total, item) => total + item.quantity,
            0
            );
            cartCountElement.textContent = itemCount;
            cartCountElement.style.display = "block";
        }
        }
    }

    // Actualizar contador al cargar la página
    updateCartCount();

  // ===== PARTE 4: MODAL DE DETALLES DEL PRODUCTO =====
  // Crear el modal si no existe
  if (!document.getElementById("animalModal")) {
    const modalHTML = `
            <div id="animalModal" class="modal">
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <div class="modal-header">
                        <img id="modal-image" src="" alt="">
                        <div class="modal-info">
                            <h2 id="modal-name"></h2>
                            <p id="modal-scientific"></label>
                            <p id="modal-price" class="precio"></label>
                        </div>
                    </div>
                    <div class="modal-tabs">
                        <button class="tab active" data-tab="descripcion">Descripción</button>
                        <button class="tab" data-tab="habitat">Hábitat</button>
                        <button class="tab" data-tab="cuidados">Cuidados</button>
                        <button class="tab" data-tab="tiendas">Disponibilidad</button>
                    </div>
                    <div class="tab-content active" id="tab-descripcion">
                        <p id="modal-description"></label>
                    </div>
                    <div class="tab-content" id="tab-habitat">
                        <p id="modal-habitat"></label>
                    </div>
                    <div class="tab-content" id="tab-cuidados">
                        <p id="modal-care"></label>
                    </div>
                    <div class="tab-content" id="tab-tiendas">
                        <div id="modal-stores"></div>
                    </div>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Añadir estilos CSS si es necesario
    if (!document.getElementById("modal-styles")) {
        const modalStyles = `
                <style id="modal-styles">
                    .modal {
                        display: none;
                        position: fixed;
                        z-index: 1000;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0,0,0,0.7);
                    }
                    .modal-content {
                        background-color: #fff;
                        margin: 5% auto;
                        padding: 20px;
                        width: 80%;
                        max-width: 800px;
                        border-radius: 8px;
                    }
                    .close-button {
                        color: #aaa;
                        float: right;
                        font-size: 28px;
                        font-weight: bold;
                        cursor: pointer;
                    }
                    .close-button:hover {
                        color: #000;
                    }
                    .modal-header {
                        display: flex;
                        margin-bottom: 20px;
                    }
                    .modal-header img {
                        width: 200px;
                        height: 200px;
                        object-fit: cover;
                        margin-right: 20px;
                    }
                    .modal-info {
                        flex-grow: 1;
                    }
                    .modal-tabs {
                        display: flex;
                        border-bottom: 1px solid #ddd;
                        margin-bottom: 20px;
                    }
                    .tab {
                        background: none;
                        border: none;
                        padding: 10px 20px;
                        cursor: pointer;
                        opacity: 0.6;
                    }
                    .tab.active {
                        opacity: 1;
                        border-bottom: 2px solid #A94FC7;
                    }
                    .tab-content {
                        display: none;
                    }
                    .tab-content.active {
                        display: block;
                    }
                    .store-location {
                        margin-bottom: 15px;
                        padding-bottom: 15px;
                        border-bottom: 1px solid #eee;
                    }
                    .availability {
                        font-weight: bold;
                    }
                    .in-stock {
                        color: green;
                    }
                    .low-stock {
                        color: orange;
                    }
                    .out-of-stock {
                        color: red;
                    }
                </style>
            `;
        document.head.insertAdjacentHTML("beforeend", modalStyles);
        }
    }

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

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
        // Desactivar todas las pestañas
        tabs.forEach((t) => t.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Activar la pestaña seleccionada
        tab.classList.add("active");
        const tabContent = document.getElementById(`tab-${tab.dataset.tab}`);
        if (tabContent) {
            tabContent.classList.add("active");
        }
        });
    });

    // Configurar clics en las imágenes de productos para abrir modal
    document.querySelectorAll(".producto img").forEach((img) => {
        img.style.cursor = "pointer"; // Asegurar que el cursor indique que es clickable

        img.addEventListener("click", () => {
        const animalId = img.getAttribute("data-id");
        const animal = anfibiosInfo[animalId];

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
            animal.tiendas.forEach((tienda) => {
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
            tabs.forEach((t) => t.classList.remove("active"));
            tabContents.forEach((content) => content.classList.remove("active"));

            const descriptionTab = document.querySelector(
            '.tab[data-tab="descripcion"]'
            );
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
    document.querySelectorAll(".producto img").forEach((img) => {
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
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        if (searchTerm === "") {
        // Si la búsqueda está vacía, mostrar todos los productos
        productos.forEach((producto) => {
            producto.style.display = "";
        });
        return;
        }

        productos.forEach((producto) => {
        const nombre = producto.querySelector("h2").textContent.toLowerCase();
        const precio = producto
            .querySelector(".precio")
            .textContent.toLowerCase();
        const descripcionCorta = producto
            .querySelector("p")
            .textContent.toLowerCase();

        // Buscar coincidencias en nombre, precio o descripción
        if (
            nombre.includes(searchTerm) ||
            precio.includes(searchTerm) ||
            descripcionCorta.includes(searchTerm)
        ) {
            producto.style.display = "";
        } else {
            producto.style.display = "none";
        }
        });

        // Actualizar título con resultados de búsqueda
        const tituloCategoriaElement = document.querySelector(".titulo-categoria");
        tituloCategoriaElement.textContent = `Resultados para: "${searchTerm}"`;

        // Desactivar enlaces activos en sidebar
        sidebarLinks.forEach((link) => link.classList.remove("active"));
    }

    // Configurar eventos de búsqueda
    if (searchButton) {
        searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        performSearch();
        });
    }

    if (searchInput) {
        searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            performSearch();
        }
        });
    }

  // ===== PARTE 6: VISUALIZACIÓN DEL CARRITO =====
  // Implementar visualización del carrito
    const cartButton = document.getElementById("cart-button");
    const cartModal = document.getElementById("cartModal");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const closeCartButton = document.querySelector("#cartModal .close-button");
    const clearCartButton = document.getElementById("clear-cart");
    const checkoutButton = document.getElementById("checkout-button");

    // Función para mostrar el carrito
    function showCart() {
    // Recuperar carrito del almacenamiento local
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Limpiar lista de productos
    cartItems.innerHTML = "";

    if (cart.length === 0) {
      // Carrito vacío
        cartItems.innerHTML =
        '<tr><td colspan="4" class="empty-cart">Tu carrito está vacío</td></tr>';
        cartTotal.textContent = "€0";
    } else {
      // Calcular total
        let total = 0;

      // Añadir cada producto
        cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement("tr");
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
        cartModal.style.display = "block";
    }

    // Configurar evento para mostrar carrito
    if (cartButton) {
        cartButton.addEventListener("click", (e) => {
        e.preventDefault();
        showCart();
        });
    }

    // Cerrar modal del carrito
    if (closeCartButton) {
        closeCartButton.addEventListener("click", () => {
        cartModal.style.display = "none";
        });
    }

    // Funciones para manipular carrito
    window.increaseQuantity = function (index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart[index].quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        showCart();
    };

    window.decreaseQuantity = function (index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart[index].quantity > 1) {
        cart[index].quantity--;
        } else {
        cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        showCart();
    };

    window.removeFromCart = function (index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        showCart();
    };

    // Limpiar carrito
    if (clearCartButton) {
        clearCartButton.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
            localStorage.setItem("cart", JSON.stringify([]));
            showCart();
        }
        });
    }

    // Procesar checkout
    if (checkoutButton) {
        checkoutButton.addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            alert("Tu carrito está vacío");
        } else {
            alert("¡Gracias por tu compra! Serás redirigido al proceso de pago.");
            // Aquí normalmente redirigiríamos a una página de checkout
            // window.location.href = 'checkout.html';
        }
        });
    }

    // ===== PARTE 7: CONTADOR DEL CARRITO =====
    // Mostrar número de productos en el icono del carrito
    function updateCartCount() {
        const cartCountElement = document.getElementById("cart-count");
        if (cartCountElement) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            cartCountElement.style.display = "none";
        } else {
            // Calcular total de productos
            const itemCount = cart.reduce(
            (total, item) => total + item.quantity,
            0
            );
            cartCountElement.textContent = itemCount;
            cartCountElement.style.display = "block";
        }
        }
    }

    // Actualizar contador al cargar la página
    updateCartCount();

    // Sobreescribir función addToCart para actualizar contador
    const originalAddToCart = window.addToCart;
    window.addToCart = function (name, price) {
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
            (link) => link.textContent === lastCategory
        );

        if (categoryLink) {
            categoryLink.click();
        }
        }
    }

    // Modificar los enlaces para guardar categoría
    sidebarLinks.forEach((link) => {
        const originalClick = link.onclick;
        link.addEventListener("click", function () {
        saveCurrentCategory(this.textContent);
        });
    });

    // Cargar última categoría seleccionada
    loadLastCategory();

    // ===== PARTE 9: MEJORAS DE RENDIMIENTO =====
    // Implementar lazy loading para imágenes
    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute("data-src");

            if (src) {
                img.src = src;
                img.removeAttribute("data-src");
            }

            observer.unobserve(img);
            }
        });
        });

        // Observar todas las imágenes con data-src
        document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img);
        });
    } else {
        // Fallback para navegadores que no soportan IntersectionObserver
        document.querySelectorAll("img[data-src]").forEach((img) => {
        img.src = img.getAttribute("data-src");
        });
    }
    });
