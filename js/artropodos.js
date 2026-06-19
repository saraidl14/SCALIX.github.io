// Script para Scales - Sección de Artrópodos
document.addEventListener("DOMContentLoaded", function () {
  // Base de datos de información de artrópodos
      //Descripciones creadas con Chat GPT

  const artropodosInfo = { 
    1: {
      nombre: "Araña Saltarina",
      cientifico: "Phidippus regius",
      imagen: "img/mascotas/artrópodos/araña saltarina/pexels-nietjuhart-2115608.jpg",
      precio: 40,
      genero: ["hembra"],
      categoria: "aracnidos",
      descripcion: "La araña saltarina es conocida por su excelente visión y capacidad para saltar grandes distancias en relación a su tamaño. Son cazadores diurnos activos que no tejen telarañas para capturar presas. Son relativamente pequeñas y tienen un aspecto peludo con colores llamativos.",
      habitat: "Se encuentran en diversas regiones tropicales y subtropicales. Habitan en vegetación, troncos de árboles y a veces en entornos urbanos. Prefieren ambientes cálidos con buena iluminación.",
      cuidados: "Necesita un terrario pequeño de al menos 20x15x20 cm con buena ventilación. Sustrato ligeramente húmedo, algunas ramas y plantas para trepar. Temperatura de 22-26°C y humedad moderada de 60-70%. Se alimenta de pequeños insectos vivos como moscas de la fruta y pequeños grillos. Requiere agua en forma de rocío en las paredes del terrario.",
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
    },
    2: {
      nombre: "Avicularia Versicolor",
      cientifico: "Caribena versicolor",
      imagen: "img/mascotas/artrópodos/avicularia versicolor/pexels-aibek-skakov-418917601-20954758.jpg",
      precio: 75,
      genero: ["hembra"],
      categoria: "aracnidos",
      descripcion: "La Avicularia Versicolor, ahora reclasificada como Caribena versicolor, es una tarántula arborícola conocida por sus impresionantes colores que cambian a medida que madura, pasando de un azul turquesa brillante en juveniles a tonos púrpura y verde en adultos. Es una especie de tamaño mediano con temperamento relativamente dócil.",
      habitat: "Nativa de Martinica y otras islas del Caribe. Vive en zonas boscosas húmedas donde construye sus refugios en la vegetación, generalmente entre el follaje de los árboles.",
      cuidados: "Requiere un terrario vertical de al menos 30x20x40 cm con buena ventilación. Necesita ramas, cortezas y plantas para trepar y construir sus refugios. Temperatura de 24-28°C y humedad relativamente alta (70-80%) pero con buena ventilación para evitar el estancamiento. Alimentación con grillos, cucarachas pequeñas o gusanos de la harina cada 7-10 días.",
      tiendas: [
        {
          nombre: "Scales Madrid Centro",
          direccion: "C/ Gran Vía 42, Madrid",
          telefono: "91 234 56 78",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 2
        },
        {
          nombre: "Scales Barcelona",
          direccion: "Avda. Diagonal 305, Barcelona",
          telefono: "93 876 54 32",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 3
        }
      ]
    },
    3: {
      nombre: "Tarántula Brasileña",
      cientifico: "Nhandu chromatus",
      imagen: "img/mascotas/artrópodos/tarantula brasileña/pexels-tyler-gresh-1165446157-23201014.jpg",
      precio: 65,
      genero: ["macho"],
      categoria: "aracnidos",
      descripcion: "La tarántula brasileña Nhandu chromatus es una especie terrestre de gran tamaño, conocida por sus distintivas rodillas blancas y abdomen con patrones rayados. Tiene un temperamento más defensivo que otras especies y puede lanzar pelos urticantes cuando se siente amenazada.",
      habitat: "Originaria de Brasil y otros países de América del Sur. Habita en regiones de pastizales y sabanas, donde excava madrigueras bajo rocas o troncos caídos.",
      cuidados: "Necesita un terrario amplio de al menos 40x30x30 cm con sustrato profundo (10-15 cm) para permitir la excavación. Temperatura de 24-28°C con un ligero gradiente térmico y humedad moderada de 60-70%. Alimentación con grillos grandes, cucarachas dubia o incluso pequeños roedores para ejemplares adultos cada 10-14 días. Manipulación no recomendada debido a su temperamento defensivo.",
      tiendas: [
        {
          nombre: "Scales Madrid Norte",
          direccion: "C/ Alcalá 342, Madrid",
          telefono: "91 345 67 89",
          horario: "Lunes a Viernes: 11:00 - 20:30, Sábados: 10:00 - 14:00",
          disponibilidad: "in-stock",
          stock: 3
        }
      ]
    },
    4: {
      nombre: "Tarántula de Rodillas Doradas",
      cientifico: "Brachypelma smithi",
      imagen: "img/mascotas/artrópodos/tarantula de rodillas doradas/pexels-ronja-meyer-257774864-12623121.jpg",
      precio: 70,
      genero: ["hembra"],
      categoria: "aracnidos",
      descripcion: "La tarántula de rodillas doradas es una especie icónica por sus distintivas rodillas de color naranja-dorado y su cuerpo negro. Es una tarántula terrestre de temperamento tranquilo y movimientos lentos, lo que la hace muy popular entre principiantes. Las hembras pueden vivir más de 25 años.",
      habitat: "Nativa de la costa del Pacífico de México. Habita en regiones semiáridas donde excava madrigueras profundas o utiliza refugios naturales bajo rocas.",
      cuidados: "Terrario de 40x30x30 cm con sustrato seco (mezcla de fibra de coco y arena) de al menos 10-15 cm de profundidad. Temperatura de 24-28°C y humedad baja a moderada (50-60%). Alimentación con grillos, cucarachas o tenebrios cada 7-10 días. Manipulación ocasional posible pero siempre con mucho cuidado.",
      tiendas: [
        {
          nombre: "Scales Madrid Centro",
          direccion: "C/ Gran Vía 42, Madrid",
          telefono: "91 234 56 78",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 4
        },
        {
          nombre: "Scales Valencia",
          direccion: "C/ Colón 82, Valencia",
          telefono: "96 354 78 91",
          horario: "Lunes a Viernes: 10:00 - 20:00, Sábados: 10:00 - 14:00",
          disponibilidad: "low-stock",
          stock: 1
        }
      ]
    },
    5: {
      nombre: "Tarántula de Rodillas Rojas",
      cientifico: "Brachypelma emilia",
      imagen: "img/mascotas/artrópodos/tarantula de rodillas rojas/pexels-marcusl-3234842.jpg",
      precio: 68,
      genero: ["macho"],
      categoria: "aracnidos",
      descripcion: "La tarántula de rodillas rojas es una especie terrestre con distintivas marcas rojas en sus patas. Es de temperamento tranquilo y movimientos pausados. Los machos tienen una vida más corta (4-5 años) que las hembras (más de 20 años) y presentan colores más vibrantes.",
      habitat: "Nativa del oeste de México. Habita en zonas semiáridas donde excava madrigueras bajo rocas o en suelos arcillosos.",
      cuidados: "Terrario de 40x30x30 cm con sustrato seco (mezcla de fibra de coco y tierra) de 10-15 cm de profundidad. Temperatura de 22-28°C y humedad baja (40-60%). Alimentación con grillos, cucarachas o gusanos de la harina cada 7-10 días. Manipulación ocasional posible pero siempre con precaución.",
      tiendas: [
        {
          nombre: "Scales Madrid Centro",
          direccion: "C/ Gran Vía 42, Madrid",
          telefono: "91 234 56 78",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 2
        },
        {
          nombre: "Scales Sevilla",
          direccion: "Avda. de la Constitución 20, Sevilla",
          telefono: "95 421 36 78",
          horario: "Lunes a Viernes: 10:00 - 20:00, Sábados: 10:00 - 14:00",
          disponibilidad: "in-stock",
          stock: 3
        }
      ]
    },
    6: {
      nombre: "Tarántula Morada Dominicana",
      cientifico: "Cyriocosmus ritae",
      imagen: "img/mascotas/artrópodos/tarantula morada dominicana/pexels-wwarby-19679351.jpg",
      precio: 80,
      genero: ["hembra"],
      categoria: "aracnidos",
      descripcion: "La tarántula morada dominicana es una especie de tamaño pequeño a mediano con un llamativo color púrpura iridiscente. Es conocida por su comportamiento tranquilo y su patrón de coloración único que incluye marcas claras en el abdomen.",
      habitat: "Nativa de la República Dominicana. Habita en bosques tropicales donde construye madrigueras en el suelo o utiliza huecos en troncos y entre raíces.",
      cuidados: "Terrario de 30x20x20 cm con sustrato húmedo (fibra de coco) de unos 8-10 cm de profundidad. Temperatura de 24-28°C y humedad relativamente alta (65-75%). Alimentación con pequeños grillos, cucarachas ninfas o moscas de la fruta para ejemplares jóvenes cada 5-7 días. Necesita escondites como cortezas o pequeñas macetas.",
      tiendas: [
        {
          nombre: "Scales Madrid Norte",
          direccion: "C/ Alcalá 342, Madrid",
          telefono: "91 345 67 89",
          horario: "Lunes a Viernes: 11:00 - 20:30, Sábados: 10:00 - 14:00",
          disponibilidad: "low-stock",
          stock: 1
        },
        {
          nombre: "Scales Barcelona",
          direccion: "Avda. Diagonal 305, Barcelona",
          telefono: "93 876 54 32",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 2
        }
      ]
    },
    7: {
      nombre: "Araña Cazadora",
      cientifico: "Familia Sparassidae",
      imagen:"img/mascotas/artrópodos/cazadora.jpg",
      precio: 40,
      genero: ["hembra", "macho"],
      categoria: "aracnidos",
      descripcion: "La araña cazadora es conocida por su velocidad y agilidad al cazar. No teje telarañas para atrapar presas, sino que las persigue activamente. Tiene patas largas y un cuerpo aplanado que le permite moverse rápidamente y esconderse en espacios estrechos.",
      habitat: "Zonas tropicales y subtropicales de todo el mundo. Se encuentran comúnmente en bosques, jardines y ocasionalmente en hogares. Les gustan los lugares cálidos y con humedad moderada.",
      cuidados: "Necesita un terrario de al menos 30x20x30 cm con sustrato ligeramente húmedo, ramas y cortezas para trepar. Temperatura de 22-28°C y humedad del 60-70%. Se alimenta de insectos vivos como grillos y cucarachas pequeñas. Requiere una pequeña fuente de agua. Manipulación mínima y cuidadosa.",
      tiendas: [
        {
          nombre: "Scales Madrid Centro",
          direccion: "C/ Gran Vía 42, Madrid",
          telefono: "91 234 56 78",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 3
        },
        {
          nombre: "Scales Barcelona",
          direccion: "Avda. Diagonal 305, Barcelona",
          telefono: "93 876 54 32",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "low-stock",
          stock: 1
        }
      ]
    },
    8: {
      nombre: "Tarántula Chilena",
      cientifico: "Grammostola rosea",
      imagen: "img/mascotas/artrópodos/chilena.jpg",
      precio: 55,
      genero: ["macho"],
      categoria: "aracnidos",
      descripcion: "La tarántula chilena o tarántula rosada es una especie de gran tamaño y temperamento tranquilo, lo que la hace popular como mascota. Suele tener un color marrón grisáceo con pelos rosados. Los machos viven entre 4-5 años, mientras que las hembras pueden vivir más de 20 años.",
      habitat: "Regiones desérticas y semidesérticas del norte de Chile, Bolivia y Argentina. Habita en madrigueras que excava en el suelo o aprovecha refugios naturales como grietas en rocas.",
      cuidados: "Terrario de 30x20x20 cm con sustrato seco (mezcla de fibra de coco y arena) de al menos 10 cm de profundidad para permitir excavar. Temperatura de 22-27°C con un pequeño gradiente térmico. Humedad baja de 40-60%. Alimentación con grillos, cucarachas o pequeños tenebrios cada 7-10 días para adultos. Manipulación mínima y muy cuidadosa.",
      tiendas: [
        {
          nombre: "Scales Madrid Centro",
          direccion: "C/ Gran Vía 42, Madrid",
          telefono: "91 234 56 78",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 2
        }
      ]
    },
    9: {
      nombre: "Escorpión Emperador",
      cientifico: "Pandinus imperator",
      imagen: "img/mascotas/artrópodos/escorpion.jpg",
      precio: 65,
      genero: ["macho"],
      categoria: "escorpiones",
      descripcion: "El escorpión emperador es una de las especies más grandes de escorpiones, llegando a medir hasta 20 cm. De color negro brillante, posee grandes pinzas que utiliza para capturar presas. A pesar de su apariencia intimidante, su veneno es relativamente suave y no representa un peligro grave para los humanos.",
      habitat: "Bosques tropicales y sabanas de África occidental y central. Vive bajo rocas, troncos caídos o en madrigueras que excava en suelos húmedos.",
      cuidados: "Terrario de 40x30x30 cm con sustrato húmedo y profundo (mezcla de fibra de coco y turba) de al menos 10 cm. Temperatura de 25-30°C y humedad alta (70-80%). Necesita escondites como cortezas, rocas o troncos huecos. Alimentación con grillos, cucarachas o pequeños tenebrios cada 3-4 días. Manipulación no recomendada o muy limitada.",
      tiendas: [
        {
          nombre: "Scales Madrid Norte",
          direccion: "C/ Alcalá 342, Madrid",
          telefono: "91 345 67 89",
          horario: "Lunes a Viernes: 11:00 - 20:30, Sábados: 10:00 - 14:00",
          disponibilidad: "in-stock",
          stock: 2
        },
        {
          nombre: "Scales Barcelona",
          direccion: "Avda. Diagonal 305, Barcelona",
          telefono: "93 876 54 32",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 3
        }
      ]
    },
    10: {
      nombre: "Cangrejo de Río",
      cientifico: "Astacidae",
      imagen: "img/mascotas/artrópodos/cangrejo.jpg",
      precio: 70,
      genero: ["hembra"],
      categoria: "crustaceos",
      descripcion: "El cangrejo de río es un crustáceo de agua dulce con un exoesqueleto duro y dos pinzas prominentes. Puede presentar colores que van desde el marrón rojizo hasta el azul intenso en algunas especies. Son omnívoros oportunistas y excelentes limpiadores de acuarios.",
      habitat: "Ríos, lagos y arroyos de agua dulce con fondos rocosos y vegetación. Prefieren aguas bien oxigenadas y con corriente moderada.",
      cuidados: "Acuario de al menos 80 litros para un ejemplar adulto, con sustrato de grava o arena, rocas y troncos para esconderse. Temperatura del agua entre 18-24°C, pH 7.0-8.0 y dureza media-alta. Filtración potente para mantener el agua limpia. Alimentación variada con alimento para crustáceos, vegetales y ocasionalmente proteína animal. Necesitan agua bien oxigenada.",
      tiendas: [
        {
          nombre: "Scales Valencia",
          direccion: "C/ Colón 82, Valencia",
          telefono: "96 354 78 91",
          horario: "Lunes a Viernes: 10:00 - 20:00, Sábados: 10:00 - 14:00",
          disponibilidad: "in-stock",
          stock: 5
        },
        {
          nombre: "Scales Madrid Centro",
          direccion: "C/ Gran Vía 42, Madrid",
          telefono: "91 234 56 78",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "low-stock",
          stock: 1
        }
      ]
    },
    11: {
      nombre: "Camarón Piquero",
      cientifico: "Neocaridina davidi",
      imagen: "img/mascotas/artrópodos/camaron.jpg",
      precio: 35,
      genero: ["hembra"],
      categoria: "crustaceos",
      descripcion: "El camarón piquero o camarón cherry es un pequeño crustáceo de agua dulce muy popular en acuarios plantados. Existen numerosas variedades de colores, siendo el rojo cereza el más común. Son excelentes limpiadores de algas y detritos.",
      habitat: "Originarios de Taiwán, habitan en ríos y arroyos de agua dulce con abundante vegetación y sustratos rocosos.",
      cuidados: "Acuario de al menos 20 litros, bien plantado y con escondites. Parámetros del agua: temperatura 20-28°C, pH 6.5-8.0, dureza media. Filtración suave para no aspirar a las crías. Alimentación a base de alimento específico para camarones, vegetales blanqueados y comida en polvo para invertebrados. Muy sensibles a los cambios de agua y productos químicos.",
      tiendas: [
        {
          nombre: "Scales Madrid Centro",
          direccion: "C/ Gran Vía 42, Madrid",
          telefono: "91 234 56 78",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 20
        },
        {
          nombre: "Scales Barcelona",
          direccion: "Avda. Diagonal 305, Barcelona",
          telefono: "93 876 54 32",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 15
        }
      ]
    },
    12: {
      nombre: "Polilla Luna",
      cientifico: "Actias luna",
      imagen: "img/mascotas/artrópodos/insectos/polilla.jpg",
      precio: 45,
      genero: ["hembra", "macho"],
      categoria: "insectos",
      descripcion: "La polilla luna es una de las polillas más hermosas y grandes de Norteamérica, con una envergadura de hasta 11 cm. De color verde pálido con marcas oculares y colas largas en las alas posteriores. Los adultos viven solo una semana y no se alimentan.",
      habitat: "Bosques caducifolios del este de Norteamérica. Las orugas se alimentan de hojas de nogal, abedul, liquidámbar y otras especies.",
      cuidados: "En su fase larvaria necesitan un terrario ventilado con ramas de sus plantas hospederas. Como adultos no necesitan alimentación pero sí un espacio amplio para desplegar sus alas. Son más adecuados para cría y observación temporal que como mascota permanente debido a su corto ciclo vital. Manipulación mínima y muy cuidadosa.",
      tiendas: [
        {
          nombre: "Scales Madrid Norte",
          direccion: "C/ Alcalá 342, Madrid",
          telefono: "91 345 67 89",
          horario: "Lunes a Viernes: 11:00 - 20:30, Sábados: 10:00 - 14:00",
          disponibilidad: "seasonal",
          stock: 10
        }
      ]
    },
    13: {
      nombre: "Grillo de Campo",
      cientifico: "Gryllidae",
      imagen: "img/alimento/grillos/grillos.jpg",
      precio: 25,
      genero: ["hembra"],
      categoria: "insectos",
      descripcion: "El grillo de campo es un insecto de tamaño mediano conocido por su característico canto que producen los machos frotando sus alas. De color marrón o negro, tienen antenas largas y patas traseras desarrolladas para saltar.",
      habitat: "Distribución mundial en zonas templadas y tropicales. Habitan en praderas, campos y jardines donde encuentran refugio entre la vegetación o pequeñas madrigueras en el suelo.",
      cuidados: "Terrario pequeño (20x20x20 cm) con sustrato de fibra de coco o tierra. Temperatura de 24-30°C y humedad moderada. Necesitan escondites como tubos de cartón o cajas de huevos. Alimentación con verduras frescas, frutas y alimento específico para grillos. Son ideales como mascotas de iniciación o como alimento vivo para otros animales.",
      tiendas: [
        {
          nombre: "Scales Madrid Centro",
          direccion: "C/ Gran Vía 42, Madrid",
          telefono: "91 234 56 78",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 50
        },
        {
          nombre: "Scales Barcelona",
          direccion: "Avda. Diagonal 305, Barcelona",
          telefono: "93 876 54 32",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 40
        }
      ]
    },
    14: {
      nombre: "Libélula Común",
      cientifico: "Odonata",
      imagen: "img/mascotas/artrópodos/insectos/libelula.jpg",
      precio: 50,
      genero: ["hembra", "macho"],
      categoria: "insectos",
      descripcion: "La libélula es un insecto volador de cuerpo alargado y cuatro alas transparentes con intrincadas venas. Son depredadores aéreos muy eficientes con excelente visión. Pueden presentar colores vibrantes, especialmente los machos.",
      habitat: "Zonas cercanas a cuerpos de agua dulce como estanques, lagos y arroyos. Las ninfas son acuáticas y viven en estos hábitats hasta su metamorfosis.",
      cuidados: "Las libélulas adultas no son adecuadas como mascotas permanentes debido a sus necesidades de espacio para volar y cazar. Las ninfas pueden mantenerse en acuarios con plantas acuáticas y refugios. Temperatura del agua 18-25°C. Se alimentan de pequeños invertebrados acuáticos vivos. Son más apropiadas para observación temporal o educativa que como mascota tradicional.",
      tiendas: [
        {
          nombre: "Scales Valencia",
          direccion: "C/ Colón 82, Valencia",
          telefono: "96 354 78 91",
          horario: "Lunes a Viernes: 10:00 - 20:00, Sábados: 10:00 - 14:00",
          disponibilidad: "seasonal",
          stock: 8
        }
      ]
    },
    15: {
      nombre: "Ciempiés gigante",
      cientifico: "Scolopendra gigantea",
      imagen: "img/mascotas/artrópodos/insectos/ciempies.jpg",
      precio: 85,
      genero: ["macho"],
      categoria: "miriapodos",
      descripcion: "El ciempiés gigante es uno de los miriápodos más grandes del mundo, pudiendo alcanzar hasta 30 cm de longitud. Tiene un cuerpo segmentado con numerosas patas y un par de poderosas mandíbulas venenosas. Su coloración puede variar entre tonos rojizos, marrones y negros con bandas amarillas.",
      habitat: "Regiones tropicales de Sudamérica, especialmente Venezuela y Colombia. Habitan en zonas húmedas bajo troncos, rocas o en el suelo de selvas y bosques.",
      cuidados: "Terrario de al menos 50x30x30 cm con sustrato profundo (10-15 cm) compuesto por fibra de coco o turba húmeda. Temperatura de 25-30°C y humedad alta (70-80%). Necesita escondites como cortezas, rocas o troncos huecos. Alimentación con grillos grandes, cucarachas o pequeños roedores cada 7-10 días. Manipulación NO recomendada debido a su mordedura dolorosa y potencialmente peligrosa. Mascota solo para expertos en invertebrados.",
      tiendas: [
        {
          nombre: "Scales Madrid Norte",
          direccion: "C/ Alcalá 342, Madrid",
          telefono: "91 345 67 89",
          horario: "Lunes a Viernes: 11:00 - 20:30, Sábados: 10:00 - 14:00",
          disponibilidad: "low-stock",
          stock: 1
        },
        {
          nombre: "Scales Barcelona",
          direccion: "Avda. Diagonal 305, Barcelona",
          telefono: "93 876 54 32",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "special-order",
          stock: 0
        }
      ]
    },
    16: {
      nombre: "Tarántula Mexicana de Rodillas Rojas",
      cientifico: "Brachypelma hamorii",
      imagen: "img/mascotas/artrópodos/tarantula geniculata/pexels-marcusl-3234842.jpg",
      precio: 72,
      genero: ["hembra"],
      categoria: "aracnidos",
      descripcion: "La tarántula mexicana de rodillas rojas es una especie terrestre de tamaño mediano a grande, famosa por sus distintivas rodillas de color rojo brillante que contrastan con su cuerpo de color negro. Son de temperamento relativamente dócil y movimientos lentos, lo que las hace populares entre aficionados principiantes. Las hembras pueden vivir más de 30 años en cautiverio.",
      habitat: "Nativa de las regiones costeras del Pacífico en México, principalmente en los estados de Colima, Jalisco y Michoacán. Habita en zonas semiáridas donde excava madrigueras profundas en suelos arcillosos o utiliza refugios naturales bajo rocas.",
      cuidados: "Terrario de 40x30x30 cm con sustrato seco (mezcla de fibra de coco y tierra) de al menos 15 cm de profundidad para permitir la excavación. Temperatura de 22-28°C y humedad moderada (50-65%). Un escondite es esencial, ya sea una maceta acostada o una corteza grande. Alimentación con grillos, cucarachas o gusanos de la harina cada 7-10 días para adultos. Manipulación ocasional posible pero siempre con precaución.",
      tiendas: [
        {
          nombre: "Scales Madrid Centro",
          direccion: "C/ Gran Vía 42, Madrid",
          telefono: "91 234 56 78",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 3
        },
        {
          nombre: "Scales Barcelona",
          direccion: "Avda. Diagonal 305, Barcelona",
          telefono: "93 876 54 32",
          horario: "Lunes a Sábado: 10:00 - 20:00",
          disponibilidad: "in-stock",
          stock: 2
        }
      ]
    }
  }

  // ===== PARTE 1: ASIGNAR DATA-IDs A LAS IMÁGENES =====
  // Encuentra todas las imágenes de productos y asígnales el data-id correspondiente
  const productosDOM = document.querySelectorAll(".producto");
  productosDOM.forEach((producto, index) => {
    const imagen = producto.querySelector("img");
    if (imagen) {
      imagen.setAttribute("data-id", (index + 1).toString());
      // Añadir cursor pointer para indicar que es clickable
      imagen.style.cursor = "pointer";
    }
  });

  // ===== PARTE 2: CATEGORIZACIÓN Y FILTRADO =====
  // Asignar categorías a productos basado en los datos
  productosDOM.forEach((producto) => {
    const nombreProducto = producto.querySelector("h2").textContent;

    // Buscar el artropodo en nuestra base de datos
    let categoria = null;
    Object.values(artropodosInfo).forEach((artropodo) => {
      if (artropodo.nombre === nombreProducto) {
        categoria = artropodo.categoria;
        // Añadir la categoría como un atributo data
        producto.dataset.categoria = categoria;
      }
    });

    // Si no encontramos el artropodo en la base de datos, asignamos por nombre
    if (!categoria) {
      if (
        nombreProducto.toLowerCase().includes("araña") ||
        nombreProducto.toLowerCase().includes("tarántula")
      ) {
        producto.dataset.categoria = "aracnidos";
      } else if (nombreProducto.toLowerCase().includes("escorpión")) {
        producto.dataset.categoria = "quelicerados";
      } else if (
        nombreProducto.toLowerCase().includes("cangrejo") ||
        nombreProducto.toLowerCase().includes("camarón")
      ) {
        producto.dataset.categoria = "crustaceos";
      } else if (
        nombreProducto.toLowerCase().includes("polilla") ||
        nombreProducto.toLowerCase().includes("mariquita") ||
        nombreProducto.toLowerCase().includes("grillo") ||
        nombreProducto.toLowerCase().includes("libélula")
      ) {
        producto.dataset.categoria = "insectos";
      } else if (
        nombreProducto.toLowerCase().includes("ciempiés") ||
        nombreProducto.toLowerCase().includes("milpiés")
      ) {
        producto.dataset.categoria = "miriapodos";
      } else {
        producto.dataset.categoria = "otros";
      }
    }
  });

  // Configuración de enlaces de filtrado en la barra lateral
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Obtener la categoría del texto del enlace
      const categoriaTexto = this.textContent;
      let categoriaFiltro;

      // Mapear el texto visible a la categoría en data-categoria
      switch (categoriaTexto) {
        case "Arácnidos":
          categoriaFiltro = "aracnidos";
          break;
        case "Insectos":
          categoriaFiltro = "insectos";
          break;
        case "Crustáceos":
          categoriaFiltro = "crustaceos";
          break;
        case "Miriápodos":
          categoriaFiltro = "miriapodos";
          break;
        case "Quelicerados":
          categoriaFiltro = "quelicerados";
          break;
        default:
          categoriaFiltro = "todos";
      }

      // Actualizar título de la página según categoría
      const tituloCategoriaElement =
        document.querySelector(".titulo-categoria");
      tituloCategoriaElement.textContent = categoriaTexto;

      // Marcar enlace como activo
      sidebarLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      // Filtrado de productos
      if (categoriaFiltro === "todos") {
        tituloCategoriaElement.textContent = "Artropodos";
        productosDOM.forEach((producto) => {
          producto.style.display = "";
        });
      } else {
        productosDOM.forEach((producto) => {
          if (producto.dataset.categoria === categoriaFiltro) {
            producto.style.display = "";
          } else {
            producto.style.display = "none";
          }
        });
      }

      // Guardar preferencia en localStorage
      localStorage.setItem("lastCategory", categoriaTexto);
    });
  });

  // Añadir enlace "Mostrar todos" si no existe
  let mostrarTodosExists = false;
  sidebarLinks.forEach((link) => {
    if (link.textContent === "Mostrar todos") {
      mostrarTodosExists = true;
    }
  });

  if (!mostrarTodosExists) {
    const sidebarUl = document.querySelector(".sidebar ul");
    const mostrarTodosLi = document.createElement("li");
    const mostrarTodosLink = document.createElement("a");
    mostrarTodosLink.href = "#";
    mostrarTodosLink.textContent = "Mostrar todos";
    mostrarTodosLi.appendChild(mostrarTodosLink);
    sidebarUl.insertBefore(mostrarTodosLi, sidebarUl.firstChild);

    // Configurar el enlace "Mostrar todos"
    mostrarTodosLink.addEventListener("click", function (e) {
      e.preventDefault();

      // Actualizar título
      document.querySelector(".titulo-categoria").textContent = "Artropodos";

      // Marcar este enlace como activo
      sidebarLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      // Mostrar todos los productos
      productosDOM.forEach((producto) => {
        producto.style.display = "";
      });

      // Guardar preferencia
      localStorage.setItem("lastCategory", "Mostrar todos");
    });
  }

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
      const animal = artropodosInfo[animalId];

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
