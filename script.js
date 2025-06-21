const palabras = ["Responsable", "Activo", "Autodidacta", "Creativo","Proactivo", "Colaborador"];
let indice = 0;
const elemento = document.getElementById("cambio-palabra");

function cambiarPalabra() {
    elemento.textContent = palabras[indice];
    indice = (indice + 1) % palabras.length; 
}

cambiarPalabra();
setInterval(cambiarPalabra, 2000); 

