// Datos por defecto para la carta del bar
const defaultMenuData = {
    // Sección Desayunos
    "desayunos": [
        {
            id: "des1",
            name: "Tostada con tomate",
            description: "Tostada de pan de masa madre con tomate rallado y aceite de oliva virgen extra",
            price: 2.50,
            featured: true
        },
        {
            id: "des2",
            name: "Croissant con jamón y queso",
            description: "Croissant recién horneado con jamón serrano y queso manchego",
            price: 3.00,
            featured: false
        },
        {
            id: "des3",
            name: "Café con leche y magdalenas",
            description: "Café con leche acompañado de dos magdalenas caseras",
            price: 3.50,
            featured: false
        },
        {
            id: "des4",
            name: "Zumo de naranja natural",
            description: "Zumo de naranja recién exprimido",
            price: 2.20,
            image: "https://images.unsplash.com/photo-1613478223719-2ab802602423",
            featured: false
        }
    ],
    
    // Sección Bocadillos
    "bocadillos": [
        {
            id: "boc1",
            name: "Bocadillo de jamón ibérico",
            description: "Pan crujiente con jamón ibérico de bellota y tomate rallado",
            price: 4.50,
            featured: true
        },
        {
            id: "boc2",
            name: "Bocadillo de tortilla",
            description: "Tortilla de patatas casera en pan rústico",
            price: 5.00,
            featured: false
        },
        {
            id: "boc3",
            name: "Bocadillo vegetal con atún",
            description: "Lechuga, tomate, cebolla, huevo duro, atún y mayonesa",
            price: 4.80,
            featured: false
        }
    ],
    
    // Sección Croquetas
    "croquetas": [
        {
            id: "cro1",
            name: "Croquetas de jamón (6 uds)",
            description: "Croquetas cremosas de jamón ibérico",
            price: 8.50,
            featured: true
        },
        {
            id: "cro2",
            name: "Croquetas de boletus (6 uds)",
            description: "Croquetas caseras de boletus edulis",
            price: 9.00,
            featured: false
        },
        {
            id: "cro3",
            name: "Croquetas de queso azul (6 uds)",
            description: "Croquetas cremosas de queso cabrales",
            price: 8.00,
            featured: false
        }
    ],
    
    // Sección Especiales
    "especiales": [
        {
            id: "esp1",
            name: "Entrecot de ternera",
            description: "Entrecot de ternera a la parrilla con patatas y pimientos",
            price: 12.50,
            featured: true
        },
        {
            id: "esp2",
            name: "Pulpo a la brasa",
            description: "Pulpo braseado con patatas confitadas y pimentón de la Vera",
            price: 16.80,
            image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
            featured: true
        },
        {
            id: "esp3",
            name: "Secreto ibérico",
            description: "Secreto de cerdo ibérico a la plancha con patatas fritas caseras",
            price: 14.50,
            image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55",
            featured: false
        }
    ],
    
    // Sección Postres
    "postres": [
        {
            id: "pos1",
            name: "Tarta de queso casera",
            description: "Tarta de queso horneada con mermelada de frutos rojos",
            price: 5.50,
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
            featured: true
        },
        {
            id: "pos2",
            name: "Coulant de chocolate",
            description: "Bizcocho de chocolate con interior fundido y helado de vainilla",
            price: 6.00,
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
            featured: false
        },
        {
            id: "pos3",
            name: "Crema catalana",
            description: "Crema catalana tradicional con azúcar caramelizado",
            price: 4.80,
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
            featured: false
        }
    ],
    
    // Sección Tablas
    "tablas": [
        {
            id: "tab1",
            name: "Tabla de quesos",
            description: "Selección de 5 quesos nacionales con membrillo, nueces y pan",
            price: 14.50,
            image: "https://images.unsplash.com/photo-1536624737221-c5e0ca3fca31",
            featured: true
        },
        {
            id: "tab2",
            name: "Tabla de ibéricos",
            description: "Jamón, lomo, chorizo y salchichón ibéricos de bellota",
            price: 18.00,
            image: "https://images.unsplash.com/photo-1614522407266-5c29f9dc111b",
            featured: false
        },
        {
            id: "tab3",
            name: "Tabla mixta",
            description: "Combinación de embutidos ibéricos y quesos seleccionados",
            price: 16.50,
            image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41",
            featured: false
        }
    ],
    
    // Sección Sugerencias
    "sugerencias": [
        {
            id: "sug1",
            name: "Arroz negro con alioli",
            description: "Arroz negro con sepia, gambas y alioli casero (mínimo 2 personas)",
            price: 16.00,
            image: "https://images.unsplash.com/photo-1626458554904-f4fc424c9bd2",
            featured: true
        },
        {
            id: "sug2",
            name: "Bacalao confitado",
            description: "Bacalao confitado a baja temperatura con crema de pimientos asados",
            price: 15.50,
            image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
            featured: false
        },
        {
            id: "sug3",
            name: "Carrillera de ternera",
            description: "Carrillera de ternera estofada al vino tinto con puré de patata",
            price: 14.80,
            image: "https://images.unsplash.com/photo-1544025162-d76694265947",
            featured: false
        }
    ],
    
    // Sección Torradas
    "torradas": [
        {
            id: "tor1",
            name: "Torrada de escalivada",
            description: "Pan tostado con berenjena, pimiento y cebolla asados, y anchoas",
            price: 6.50,
            image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
            featured: true
        },
        {
            id: "tor2",
            name: "Torrada de sobrasada",
            description: "Pan tostado con sobrasada ibérica, miel y queso de cabra gratinado",
            price: 5.80,
            image: "https://images.unsplash.com/photo-1591985666643-1ecc67616216",
            featured: false
        },
        {
            id: "tor3",
            name: "Torrada de salmón",
            description: "Pan tostado con aguacate, salmón ahumado y queso crema",
            price: 7.00,
            image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02",
            featured: false
        }
    ],
    
    // Sección Vermuts
    "vermuts": [
        {
            id: "ver1",
            name: "Vermut casero",
            description: "Vermut casero con aceituna, naranja y sifón",
            price: 3.50,
            image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
            featured: true
        },
        {
            id: "ver2",
            name: "Vermut reserva",
            description: "Vermut reserva premium con naranja, aceituna y chips de patata",
            price: 4.50,
            image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a",
            featured: false
        },
        {
            id: "ver3",
            name: "Aperol Spritz",
            description: "Aperol, cava, soda y naranja",
            price: 6.00,
            image: "https://images.unsplash.com/photo-1527761939622-933c972ef22b",
            featured: false
        }
    ],
    
    // Sección Tapas
    "tapas": [
        {
            id: "tap1",
            name: "Patatas bravas",
            description: "Patatas fritas con salsa brava casera y alioli",
            price: 5.50,
            image: "https://images.unsplash.com/photo-1623259838743-9f1e884fba59",
            featured: true
        },
        {
            id: "tap2",
            name: "Calamares a la andaluza",
            description: "Calamares fritos con limón y mayonesa de lima",
            price: 8.50,
            image: "https://images.unsplash.com/photo-1599487489953-4ca48d4f61d7",
            featured: false
        },
        {
            id: "tap3",
            name: "Gambas al ajillo",
            description: "Gambas salteadas con ajo, guindilla y aceite de oliva",
            price: 9.80,
            image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41",
            featured: false
        },
        {
            id: "tap4",
            name: "Ensaladilla rusa",
            description: "Ensaladilla rusa casera con atún y pimientos del piquillo",
            price: 6.00,
            image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41",
            featured: false
        },
        {
            id: "tap5",
            name: "Boquerones en vinagre",
            description: "Boquerones marinados en vinagre, ajo y perejil",
            price: 7.00,
            image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41",
            featured: false
        }
    ]
};