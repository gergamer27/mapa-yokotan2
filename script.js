// Inicializar el mapa centrado en Tabasco
var map = L.map('map').setView([18.15, -92.98], 11);

// Capa humanitaria de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; HOT'
}).addTo(map);

// Tus puntos con sus descripciones
var puntos = [
    {
        nombre: "Tamulté de las Sabanas (Centro)",
        Coordenadas: [18.1616, -92.7846],
        Info: "Núcleo cultural y poblacional de la región de las Sabanas."
    },
    {
        nombre: "Mazateupa (Nacajuca)",
        Coordenadas: [18.0200, -92.9500],
        Info: "Comunidad relacionada con la Danza del Baila Viejo y la devoción a San Isidro Labrador."
    },
    {
        nombre: "Tucta (Nacajuca)",
        Coordenadas: [18.1933, -92.9936],
        Info: "Comunidad yokot'an cercana a Mazateupa y Guaytalpa."
    },
    {
        nombre: "Guaytalpa (Nacajuca)",
        Coordenadas: [18.2172, -93.0322],
        Info: "Localidad tradicional de la zona baja del municipio."
    },
    {
        nombre: "Cupilco (Comalcalco)",
        Coordenadas: [18.2392, -93.2086],
        Info: "Localidad conocida por el santuario dedicado a la Virgen de la Asunción."
    },
    {
        nombre: "Quintín Arauz (Centla)",
        Coordenadas: [18.3300, -92.6200],
        Info: "Comunidad insular ubicada en la región de los Pantanos de Centla."
    }
];

// Dibujar los marcadores
puntos.forEach(function(p) {
    L.marker(p.Coordenadas).addTo(map).bindPopup("<b>" + p.nombre + "</b><br>" + p.Info);
});