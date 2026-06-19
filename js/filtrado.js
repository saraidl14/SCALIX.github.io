

// Base de datos de animales
    //Descripciones creadas con Chat GPT

const animalData = {
    
        "1": {
            "name": "Camaleón de Yemen",
            "scientificName": "Chamaeleo calyptratus",
            "price": "€150",
            "description": "El camaleón de Yemen es originario de la península arábiga. Es conocido por su espectacular cresta y su habilidad para cambiar de color.",
            "habitat": "Requiere un terrario vertical con buena ventilación, plantas naturales, y niveles de humedad entre 50-70%. La temperatura debe oscilar entre 25-30°C con un punto cálido de 35°C.",
            "care": "Se alimenta de insectos vivos como grillos, cucarachas y gusanos, suplementados con calcio. Necesita iluminación UVB y agua por goteo o vaporización.",
            "stores": [
                { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "in-stock" },
                { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "low-stock" },
                { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "in-stock" }
            ]
        },
        "2": {
            "name": "Camaleón Pantera",
            "scientificName": "Furcifer pardalis",
            "price": "€180",
            "description": "Es uno de los camaleones más coloridos del mundo, originario de Madagascar. Muy apreciado por sus vivos colores y carácter curioso.",
            "habitat": "Terrario alto con mucha vegetación, humedad del 60-80% y temperatura diurna entre 25-30°C. Necesita buena ventilación e iluminación UVB.",
            "care": "Insectívoro estricto, se alimenta de grillos, cucarachas y larvas. Requiere suplementos de calcio y una rutina de vaporización diaria.",
            "stores": [
                { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "low-stock" },
                { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "in-stock" }
            ]
        },
        "3": {
            "name": "Gecko Crestado Dalmatian Red",
            "scientificName": "Correlophus ciliatus",
            "price": "€120",
            "description": "Este gecko originario de Nueva Caledonia es muy popular por su facilidad de manejo y apariencia única, incluyendo su patrón moteado.",
            "habitat": "Terrario vertical con ramas, plantas y humedad entre 60-80%. Temperatura entre 22-26°C. No requiere UVB pero se recomienda.",
            "care": "Omnívoro. Se alimenta de preparados comerciales para geckos crestados, frutas trituradas e insectos. No necesita calefacción excesiva.",
            "stores": [
                { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "in-stock" },
                { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "low-stock" }
            ]
        },
        "4": {
            "name": "Gecko Crestado Dalmatian",
            "scientificName": "Correlophus ciliatus",
            "price": "€100",
            "description": "Con su cresta característica y variedad de patrones, este gecko es ideal para principiantes.",
            "habitat": "Terrario vertical con plantas, ramas y buena ventilación. Temperatura entre 22-26°C y humedad del 60-80%.",
            "care": "Omnívoro. Dieta de papillas especializadas y ocasionalmente insectos vivos. Fácil de mantener.",
            "stores": [
                { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "in-stock" }
            ]
        },
        "5": {
            "name": "Gecko Leopardo Albino",
            "scientificName": "Eublepharis macularius",
            "price": "€130",
            "description": "Una variante albina del clásico gecko leopardo. Muy dócil y fácil de cuidar, ideal para iniciarse en los reptiles.",
            "habitat": "Terrario horizontal con escondites, zona cálida entre 30-32°C y zona fresca de 24°C. No necesita humedad alta.",
            "care": "Insectívoro. Dieta basada en grillos y gusanos espolvoreados con calcio y vitaminas. No requiere UVB.",
            "stores": [
                { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "in-stock" }
            ]
            
        },
        "6": {
            "name": "Gecko Leopardo High Yellow",
            "scientificName": "Eublepharis macularius",
            "price": "€110",
            "description": "Este morfo se distingue por sus colores más intensos. Muy resistente y fácil de cuidar.",
            "habitat": "Terrario de base cálida, sin humedad elevada. Zona caliente entre 30-32°C y escondites en ambos extremos térmicos.",
            "care": "Alimentación con insectos vivos, sin necesidad de UVB. Cambio regular de sustrato.",
            "stores": [
                { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "in-stock" }
            ]
        },
        "7": { 
                    name: "Gecko Leopardo",
                    scientificName: "Eublepharis macularius",
                    price: "€85",
                    description: "El gecko leopardo es una especie de reptil originaria de Afganistán, Pakistán y el noroeste de India. Son mascotas populares por su tamaño manejable, su docilidad y sus bajos requerimientos de mantenimiento.",
                    habitat: "Requiere un terrario de al menos 60x40x30 cm para un adulto. Debe contar con un sustrato adecuado, escondites, y un gradiente térmico entre 25-30°C con un punto caliente de 32-35°C. No requiere iluminación UVB específica.",
                    care: "Son insectívoros y se alimentan principalmente de grillos, gusanos de la harina y cucarachas dubia, todos espolvoreados con suplementos de calcio y vitaminas. Mudan la piel regularmente y pueden vivir hasta 15-20 años con los cuidados adecuados.",
                    stores: [
                        { name: "Scales Madrid Centro", address: "C/ Gran Vía 42, Madrid", availability: "in-stock" },
                        { name: "Scales Barcelona", address: "Av. Diagonal 352, Barcelona", availability: "in-stock" },
                        { name: "Scales Valencia", address: "C/ Colón 22, Valencia", availability: "low-stock" }
                    ]
                },
        "8": {
            "name": "Pogona Roja",
            "scientificName": "Pogona vitticeps",
            "price": "€115",
            "description": "Esta variante destaca por su coloración rojiza. Son reptiles sociables y fáciles de manejar.",
            "habitat": "Terrario amplio (mínimo 90x45x45 cm) con iluminación UVB y temperatura entre 35-40°C en el punto caliente.",
            "care": "Omnívoros. Dieta a base de verduras, frutas y insectos. Necesita suplemento de calcio y exposición diaria a luz UVB.",
            "stores": [
                { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "in-stock" }
            ]
        },
        "9": {
            "name": "Pogona",
            "scientificName": "Pogona vitticeps",
            "price": "€110",
            "description": "Reptil originario de Australia, muy popular como mascota por su carácter amigable.",
            "habitat": "Terrario espacioso con ramas y zonas para tomar el sol. Requiere UVB y temperatura diurna alta.",
            "care": "Dieta mixta: vegetales, frutas y grillos. Limpieza regular del terrario y buena hidratación.",
            "stores": [
                { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "low-stock" }
            ]
        },
        "10": {
            "name": "Serpiente del Maíz",
            "scientificName": "Pantherophis guttatus",
            "price": "€95",
            "description": "Una de las serpientes más recomendadas para principiantes. Tranquila y fácil de alimentar.",
            "habitat": "Terrario horizontal con escondites, ramas y control de temperatura (25-30°C).",
            "care": "Alimentación cada 5-7 días con presas descongeladas del tamaño adecuado. Higiene del terrario es clave.",
            "stores": [
                { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "in-stock" }
            ]
        },
        "11": {
            "name": "Serpiente Texana Leucística",
            "scientificName": "Pantherophis obsoletus",
            "price": "€100",
            "description": "Especie de serpiente de aspecto fantasmal por su color blanco. Muy activa y curiosa.",
            "habitat": "Terrario seguro con buena ventilación, escondites y temperatura de 26-30°C.",
            "care": "Se alimenta cada semana con ratones descongelados. Muy fácil de mantener.",
            "stores": [
                { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "low-stock" }
            ]
        },
        "12": {
            "name": "Lampropeltis Albina Roja",
            "scientificName": "Lampropeltis triangulum",
            "price": "€105",
            "description": "Especie de serpiente del maíz de colores vivos y contraste llamativo. Muy resistente.",
            "habitat": "Terrario con escondites, ramas y sustrato suelto. Temperatura entre 25-30°C.",
            "care": "Se alimenta de presas del tamaño de su grosor, una vez a la semana. Muy dócil.",
            "stores": [
                { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "in-stock" }
            ]
        },
        "13": {
            "name": "Tortuga de Agua",
            "scientificName": "Trachemys scripta elegans",
            "price": "€110",
            "description": "Tortuga semiacuática muy común. Activa y fácil de observar en acuarios bien cuidados.",
            "habitat": "Acuaterrario con zona seca para tomar el sol. Agua filtrada y temperatura entre 25-28°C.",
            "care": "Omnívora. Se alimenta con pellets, vegetales y proteína animal. Necesita luz UVB y calefacción.",
            "stores": [
                { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "low-stock" }
            ]
        },
        "14": {
            "name": "Tortuga Mediterránea",
            "scientificName": "Testudo hermanni",
            "price": "€130",
            "description": "Tortuga terrestre originaria del sur de Europa. Longeva, tranquila y herbívora.",
            "habitat": "Zona exterior o terrario seco con suelo natural. Temperatura entre 22-28°C y luz UVB constante.",
            "care": "Dieta vegetal rica en fibra. Necesita hibernar en invierno. Muy resistente a enfermedades.",
            "stores": [
                { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "in-stock" }
            ]
        },
        "15": {
            "name": "Tortuga Rusa",
            "scientificName": "Agrionemys horsfieldii",
            "price": "€135",
            "description": "Tortuga terrestre pequeña, robusta y muy popular. De hábitos diurnos y fácil manejo.",
            "habitat": "Terrario seco con sustrato profundo. Luz solar o UVB y temperatura diurna entre 25-30°C.",
            "care": "100% herbívora. Come hojas verdes, flores y raíces. Necesita hibernación anual.",
            "stores": [
                { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "in-stock" }
            ]
        },
        //Animales Anfibios
        "16": {
        "name": "Ajolote Nominal",
        "scientificName": "Ambystoma mexicanum",
        "price": "€45",
        "description": "El ajolote nominal es una de las variantes más comunes de esta fascinante especie neoténica originaria de México. Es popular en acuarios por su aspecto único y su capacidad regenerativa.",
        "habitat": "Requiere un acuario espacioso con agua dulce fría (16-20°C), sustrato suave y una filtración eficiente. No tolera temperaturas altas.",
        "care": "Se alimenta de lombrices, pellets especiales y pequeños peces. Es importante evitar objetos punzantes o sustratos que puedan ser ingeridos.",
        "stores": [
            { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "in-stock" },
            { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "low-stock" },
            { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "in-stock" }
        ]
    },
        "17": {
        "name": "Ajolote Albino",
        "scientificName": "Ambystoma mexicanum",
        "price": "€55",
        "description": "El ajolote albino destaca por su coloración clara y ojos rosados. Al igual que otras variantes, conserva características larvarias durante toda su vida.",
        "habitat": "Necesita un acuario de al menos 60 litros con agua fría, sin corrientes fuertes y con escondites. La temperatura ideal es de 16-20°C.",
        "care": "Come lombrices, alimento congelado y pellets. La limpieza del agua es esencial para prevenir infecciones.",
        "stores": [
            { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "in-stock" },
            { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "in-stock" },
            { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "low-stock" }
        ]
    },
        "18": {
        "name": "Rana Arborícola",
        "scientificName": "Litoria caerulea",
        "price": "€60",
        "description": "La rana arborícola es conocida por su docilidad y su piel brillante. Es una excelente opción para principiantes en anfibios.",
        "habitat": "Requiere un terrario vertical con mucha humedad, plantas naturales y ramas para trepar. Temperatura: 24-28°C durante el día.",
        "care": "Alimentación basada en grillos, langostas y larvas. Es sensible a contaminantes en el agua, por lo que se recomienda agua tratada o destilada.",
        "stores": [
            { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "low-stock" },
            { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "in-stock" },
            { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "in-stock" }
        ]
    },
        "19": {
        "name": "Rana Flecha Azul",
        "scientificName": "Dendrobates tinctorius",
        "price": "€65",
        "description": "La rana flecha azul es famosa por sus colores intensos y su comportamiento activo. Aunque en la naturaleza son tóxicas, en cautiverio pierden esa capacidad.",
        "habitat": "Terrario húmedo con mucha vegetación, musgo y escondites. Temperatura entre 22-27°C y humedad por encima del 80%.",
        "care": "Se alimentan de microgrillos, colémbolos y drosophilas. Necesitan alimentación frecuente y ambientes muy limpios.",
        "stores": [
            { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "in-stock" },
            { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "low-stock" },
            { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "in-stock" }
        ]
    },
        "20": {
        "name": "Rana Flecha Verde",
        "scientificName": "Dendrobates auratus",
        "price": "€65",
        "description": "La rana flecha verde combina belleza y facilidad de cuidado. Es ideal para bio terrarios tropicales bien plantados.",
        "habitat": "Terrario húmedo y tropical, con temperatura entre 24-27°C y humedad constante por encima del 80%.",
        "care": "Come pequeños insectos vivos. Necesita ser alimentada a diario y mantener una limpieza estricta del hábitat.",
        "stores": [
            { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "low-stock" },
            { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "in-stock" },
            { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "in-stock" }
        ]
    }, 
    // Animales Artrópodos
        "21": {
        "name": "Araña Saltarina",
        "scientificName": "Phidippus regius",
        "price": "€40",
        "description": "Conocida por su comportamiento curioso y movimientos rápidos, esta araña es ideal para quienes se inician en el mundo de los artrópodos.",
        "habitat": "Pequeños terrarios bien ventilados, decorados con ramas, corcho y hojas. Necesita luz indirecta y humedad moderada.",
        "care": "Se alimenta de moscas, microgrillos y otros insectos pequeños. No requiere manipulación frecuente.",
        "stores": [
            { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "in-stock" },
            { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "low-stock" },
            { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "in-stock" }
        ]
    },
        "22": {
        "name": "Avicularia Versicolor",
        "scientificName": "Caribena versicolor",
        "price": "€75",
        "description": "Una de las tarántulas más coloridas y tranquilas. Es arborícola y famosa por sus tonos azules, verdes y morados.",
        "habitat": "Terrario vertical con buena ventilación, ramas para trepar y humedad controlada. Temperatura ideal de 24-27°C.",
        "care": "Come grillos y otros insectos medianos. No se debe manipular con frecuencia. Necesita humedad constante sin encharcamiento.",
        "stores": [
            { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "low-stock" },
            { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "in-stock" },
            { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "in-stock" }
        ]
    },
        "23": {
        "name": "Tarántula Brasileña",
        "scientificName": "Nhandu chromatus",
        "price": "€65",
        "description": "Esta especie terrestre es conocida por su tamaño imponente y su contraste de colores entre blanco y negro.",
        "habitat": "Terrario horizontal con sustrato profundo para excavar, refugios y temperatura de 22-26°C.",
        "care": "Come grillos, cucarachas y otros insectos. Necesita baja humedad y no se recomienda manipularla.",
        "stores": [
            { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "in-stock" },
            { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "in-stock" },
            { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "low-stock" }
        ]
    },
        "24": {
        "name": "Tarántula de Rodillas Doradas",
        "scientificName": "Brachypelma smithi",
        "price": "€70",
        "description": "Es una de las tarántulas más populares por su temperamento tranquilo y su apariencia llamativa.",
        "habitat": "Terrario seco con escondites y sustrato. Temperatura: 24-28°C con baja humedad.",
        "care": "Come grillos y larvas. Fácil de cuidar y longeva, perfecta para principiantes.",
        "stores": [
            { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "low-stock" },
            { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "in-stock" },
            { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "in-stock" }
        ]
    },
        "25": {
        "name": "Tarántula de Rodillas Rojas",
        "scientificName": "Brachypelma emilia",
        "price": "€68",
        "description": "Tranquila, longeva y de apariencia exótica, esta tarántula es ideal para aficionados.",
        "habitat": "Terrario de tipo desértico con sustrato seco, refugios y buena ventilación. Temperatura de 24-27°C.",
        "care": "Come insectos medianos como grillos. Necesita un ambiente limpio y seco. Evitar el estrés por manipulación.",
        "stores": [
            { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "in-stock" },
            { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "low-stock" },
            { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "in-stock" }
        ]
    },
        "26": {
        "name": "Tarántula Morada Dominicana",
        "scientificName": "Cyriocosmus ritae",
        "price": "€80",
        "description": "Pequeña, tímida y exótica, esta tarántula enana es ideal para coleccionistas. Su coloración púrpura es muy atractiva.",
        "habitat": "Terrario compacto con sustrato húmedo, escondites y temperatura templada (22-26°C).",
        "care": "Come presas pequeñas como microgrillos. No requiere manipulación y prefiere espacios tranquilos.",
        "stores": [
            { "name": "Scales Madrid Centro", "address": "C/ Gran Vía 42, Madrid", "availability": "in-stock" },
            { "name": "Scales Barcelona", "address": "Av. Diagonal 352, Barcelona", "availability": "in-stock" },
            { "name": "Scales Valencia", "address": "C/ Colón 22, Valencia", "availability": "low-stock" }
        ]
    }

    };

    

// Funcionalidad del sidebar
// Funcionalidad del sidebar
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sidebar h2').forEach(header => {
        header.addEventListener('click', function() {
            const contentId = this.id.replace('-header', '-content');
            const content = document.getElementById(contentId);
            if (content) {
                this.classList.toggle('collapsed');
                content.classList.toggle('hidden');
            }
        });
    });
    
    // Funcionalidad del modal detallado
    const modal = document.getElementById("animalModal");
    const closeButton = document.querySelector(".close-button");
    const productImages = document.querySelectorAll(".producto img");
    const modalAddButton = document.getElementById("modal-add-button");
    
    // Solo configurar el modal si existe en el DOM
    if (modal) {
        // Abrir modal con detalles del animal
        productImages.forEach(img => {
            img.addEventListener("click", function() {
                const animalId = this.getAttribute("data-id");
                const productElement = this.parentElement;
                
                // Extraer datos de la base de datos o del DOM si no existe
                const animal = animalData[animalId] || {
                    name: productElement.querySelector("h2").textContent,
                    scientificName: productElement.querySelector("p").textContent,
                    price: productElement.querySelector("p:last-of-type").textContent,
                    description: "Este animal exótico requiere condiciones específicas de mantenimiento. Consulta con nuestros especialistas para obtener información detallada sobre su cuidado y alimentación.",
                    habitat: "Hábitat natural varía según la especie y región. Consulta con nuestros expertos para recrear las condiciones adecuadas en cautividad.",
                    care: "Se recomienda investigar las necesidades específicas de esta especie antes de adquirirla. Nuestro personal está disponible para asesorarte sobre terrarios, alimentación y cuidados.",
                    stores: [
                        { name: "Scales Madrid Centro", address: "C/ Gran Vía 42, Madrid", availability: "in-stock" },
                        { name: "Scales Barcelona", address: "Av. Diagonal 352, Barcelona", availability: "low-stock" },
                        { name: "Scales Valencia", address: "C/ Colón 22, Valencia", availability: "in-stock" }
                    ]
                };
                
                // Rellenar modal con datos - verificando que existan los elementos
                const modalImage = document.getElementById("modal-image");
                if (modalImage) modalImage.src = this.src;
                
                const modalName = document.getElementById("modal-name");
                if (modalName) modalName.textContent = animal.name;
                
                const modalScientific = document.getElementById("modal-scientific");
                if (modalScientific) modalScientific.textContent = animal.scientificName;
                
                const modalPrice = document.getElementById("modal-price");
                if (modalPrice) modalPrice.textContent = animal.price;
                
                const modalDescription = document.getElementById("modal-description");
                if (modalDescription) modalDescription.textContent = animal.description;
                
                const modalHabitat = document.getElementById("modal-habitat");
                if (modalHabitat) modalHabitat.textContent = animal.habitat;
                
                const modalCare = document.getElementById("modal-care");
                if (modalCare) modalCare.textContent = animal.care;
                
                // Rellenar tiendas
                const storesContainer = document.getElementById("modal-stores");
                if (storesContainer) {
                    storesContainer.innerHTML = "";
                    
                    if (animal.stores && animal.stores.length > 0) {
                        animal.stores.forEach(store => {
                            const storeDiv = document.createElement("div");
                            storeDiv.className = "store-location";
                            
                            const availabilityClass = store.availability || "in-stock";
                            let availabilityText = "En stock";
                            
                            if (availabilityClass === "low-stock") {
                                availabilityText = "Pocas unidades";
                            } else if (availabilityClass === "out-of-stock") {
                                availabilityText = "Agotado";
                            }
                            
                            storeDiv.innerHTML = `
                                <h4>${store.name}</h4>
                                <label>${store.address}</label>
                                <label>Disponibilidad: <span class="availability ${availabilityClass}">${availabilityText}</span></label>
                            `;
                            
                            storesContainer.appendChild(storeDiv);
                        });
                    } else {
                        storesContainer.textContent = "No hay información disponible sobre tiendas.";
                    }
                }
                
                // Mostrar primera pestaña por defecto
                document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
                document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
                
                const defaultTab = document.querySelector(".tab[data-tab='descripcion']");
                if (defaultTab) defaultTab.classList.add("active");
                
                const defaultContent = document.getElementById("tab-descripcion");
                if (defaultContent) defaultContent.classList.add("active");
                
                modal.style.display = "block";
            });
        });
        
        // Botón añadir al carrito
        if (modalAddButton) {
            modalAddButton.addEventListener("click", function() {
                const nombre = document.getElementById("modal-name")?.textContent || "Producto";
                const precio = document.getElementById("modal-price")?.textContent || "0€";
                addToCart(nombre, precio);
                modal.style.display = "none";
            });
        }
        
        // Cerrar modal
        if (closeButton) {
            closeButton.addEventListener("click", function() {
                modal.style.display = "none";
            });
        }
        
        // Cerrar si se hace clic fuera del modal
        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
        
        // Cambio de pestañas
        const tabs = document.querySelectorAll(".tab");
        
        tabs.forEach(tab => {
            tab.addEventListener("click", function() {
                // Desactivar todas las pestañas
                tabs.forEach(t => t.classList.remove("active"));
                
                // Ocultar todos los contenidos
                const tabContents = document.querySelectorAll(".tab-content");
                tabContents.forEach(content => content.classList.remove("active"));
                
                // Activar la pestaña actual
                this.classList.add("active");
                
                // Mostrar el contenido de la pestaña actual
                const tabId = this.getAttribute("data-tab");
                const tabContent = document.getElementById(`tab-${tabId}`);
                if (tabContent) tabContent.classList.add("active");
            });
        });
    }
    
    // Mostrar todos los productos al inicio
    showAllProducts();
    
    // Filtrado y categorización
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Manejar categorías principales
            const category = this.getAttribute('data-category');
            if (category) {
                if (category === 'all') {
                    showAllProducts();
                } else {
                    showCategory(category);
                }
            }
            
            // Manejar filtros de subcategoría
            const filter = this.getAttribute('data-filter');
            if (filter) {
                // Determinar a qué categoría pertenece este filtro
                // basado en la estructura del DOM
                let parentSection = this.closest('.sidebar-category');
                if (parentSection) {
                    let categoryHeader = parentSection.querySelector('h2');
                    if (categoryHeader) {
                        let categoryId = categoryHeader.id.replace('-header', '');
                        filterProductsByTypeInCategory(categoryId, filter);
                    }
                }
            }
        });
    });
    
    // Control deslizante del precio
    const priceSlider = document.getElementById('priceFilter');
    const priceValue = document.getElementById('priceValue');
    
    if (priceSlider && priceValue) {
        priceSlider.addEventListener('input', function() {
            priceValue.textContent = this.value + '€';
        });
    }
    
    // Aplicar filtros
    const applyFiltersButton = document.getElementById('applyFilters');
    if (applyFiltersButton) {
        applyFiltersButton.addEventListener('click', function() {
            const genderFilter = document.getElementById('genderFilter');
            const priceFilter = document.getElementById('priceFilter');
            const searchFilter = document.getElementById('searchFilter');
            
            const gender = genderFilter ? genderFilter.value : 'all';
            const maxPrice = priceFilter ? parseInt(priceFilter.value) : 200;
            const searchText = searchFilter ? searchFilter.value.toLowerCase() : '';
            
            // Determinar las categorías actualmente visibles
            const activeCategories = [];
            document.querySelectorAll('.category-section.active').forEach(section => {
                activeCategories.push(section.id);
            });
            
            document.querySelectorAll('.producto').forEach(producto => {
                const productCategory = producto.getAttribute('data-category');
                const productGender = producto.getAttribute('data-gender');
                const productPrice = parseInt(producto.getAttribute('data-price') || '0');
                
                const nameElement = producto.querySelector('h2');
                const speciesElement = producto.querySelector('label');
                
                const productName = nameElement ? nameElement.textContent.toLowerCase() : '';
                const productSpecies = speciesElement ? speciesElement.textContent.toLowerCase() : '';
                
                // Verificar si el producto pertenece a una categoría activa
                const isInActiveCategory = activeCategories.includes(productCategory);
                
                // Aplicar filtros
                let showByGender = gender === 'all' || productGender === gender || productGender === 'both';
                let showByPrice = productPrice <= maxPrice;
                let showBySearch = searchText === '' || 
                productName.includes(searchText) || 
                productSpecies.includes(searchText);
                
                if (isInActiveCategory && showByGender && showByPrice && showBySearch) {
                    producto.style.display = 'flex';
                } else {
                    producto.style.display = 'none';
                }
            });
        });
    }
    
    // Resetear filtros
    const resetFiltersButton = document.getElementById('resetFilters');
    if (resetFiltersButton) {
        resetFiltersButton.addEventListener('click', function() {
            const genderFilter = document.getElementById('genderFilter');
            const priceFilter = document.getElementById('priceFilter');
            const searchFilter = document.getElementById('searchFilter');
            
            if (genderFilter) genderFilter.value = 'all';
            if (priceFilter) priceFilter.value = 200;
            if (searchFilter) searchFilter.value = '';
            if (priceValue) priceValue.textContent = '200€';
            
            // Mostrar todos los productos en las categorías activas
            const activeCategories = [];
            document.querySelectorAll('.category-section.active').forEach(section => {
                activeCategories.push(section.id);
            });
            
            document.querySelectorAll('.producto').forEach(producto => {
                const productCategory = producto.getAttribute('data-category');
                if (activeCategories.includes(productCategory)) {
                    producto.style.display = 'flex';
                }
            });
        });
    }
});

// Función para añadir productos al carrito
function addToCart(nombre, precio) {
    alert(`¡${nombre} añadido al carrito!`);
    // Aquí se implementaría la lógica real para añadir al carrito
}

// Mostrar todos los productos
function showAllProducts() {
    document.querySelectorAll('.category-section').forEach(section => {
        section.classList.add('active');
    });
    document.querySelectorAll('.producto').forEach(producto => {
        producto.style.display = 'flex';
    });
}

// Mostrar categoría específica
function showCategory(category) {
    document.querySelectorAll('.category-section').forEach(section => {
        if (section.id === category) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
    
    // Mostrar todos los productos de esa categoría
    document.querySelectorAll('.producto').forEach(producto => {
        if (producto.getAttribute('data-category') === category) {
            producto.style.display = 'flex';
        } else {
            producto.style.display = 'none';
        }
    });
}

// Filtrar productos por tipo dentro de una categoría
function filterProductsByTypeInCategory(category, type) {
    // Primero mostrar la categoría
    showCategory(category);
    
    // Luego aplicar el filtro dentro de esa categoría
    document.querySelectorAll('.producto').forEach(producto => {
        const isInCategory = producto.getAttribute('data-category') === category;
        const matchesType = producto.getAttribute('data-type') === type;
        
        if (isInCategory && matchesType) {
            producto.style.display = 'flex';
        } else if (isInCategory) {
            // Esto asegura que solo ocultamos productos dentro de la categoría actual
            producto.style.display = 'none';
        }
        // No tocamos productos de otras categorías
    });
}

    document.querySelectorAll('.sidebar h2').forEach(header => {
    header.addEventListener('click', function() {
        const contentId = this.id.replace('-header', '-content');
        const content = document.getElementById(contentId);
        if (content) {  // Verificar que el elemento existe
            this.classList.toggle('collapsed');
            content.classList.toggle('hidden');
        }
    });
});