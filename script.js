//Datos para Filtrar//

//Primer Filtro: productos//

const dwmike = [

//proyectos//
{id: 1, name:"DEPARTAMENTOS", image: "FOTO5.jpg", gender: "vivienda" ,description: "Los mejores departamentos con la mejor ubicaccion y vista de toda la ciudad."},
{id: 2, name:"CASAS APARTADAS", image: "FOTO4.jpg", gender: "vivienda" ,description: "Casas apartadas con todas las comodidades y servicios."},
{id: 3, name:"VENTA DE PROPIEDADES", image: "FOTO3.jpg", gender: "productos" ,description: "Vemos tu casa la inspeccionamos y damos el mejor precio que encontraras."},
{id: 4, name:"DESEÑOS", image: "FOTO2.jpg", gender: "productos" ,description: "Danos el diseño de casa que desas y nosotros te la enseñamos."},
{id: 5, name:"CASAS PRIVADAS", image: "FOTO1.jpg", gender: "productos" ,description: "La mejor casa con la que sueñas y con todas las comodidades posibles que hay."},

//unete//
{id: 6, name:"MEJOR ZONA", image:"FOTO9.jpg", gender:"unete", description:"Casa en la mejor zona y mejor privada."},
{id: 7, name:"CASA INDIVIDUAL", image:"FOTO10.jpg", gender:"unete", description:"Casa individual perfecto para alguien universitario o apenas independizandoce."},
{id: 8, name:"MANSION", image:"FOTO11.jpg", gender:"unete", description:"Mansiones con los espacios mas grandes posibles."},
{id: 9, name:"SUEÑOS", image:"FOTO12.jpg", gender:"unete", description:"Si no tienes una idea de la casa que buscas nosotros te ayudamos al enseñar los diferentes modelos que tenemos disponibles." },
];

// Obtener los contenedores y botones del DOM//
const xxContainer = document.getElementById("distribucion-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas //
function renderDw(genero) {
const categoria = genero === "distribucion" ? "productos" : genero;
const dwmikeToRender = categoria === "all"
? dwmike
: dwmike.filter(dw => dw.gender === categoria);

//Limpia el contenedor antes de renderizar//

xxContainer.innerHTML = '';


if (dwmikeToRender.length === 0) {
xxContainer.innerHTML = '<p class="text-center w-100">No hay disponibles para esta categoría.</p>';
return;

}

// Crea y agrega las tarjetas //

dwmikeToRender.forEach(dw => {
const cardHtml = `
<figure class="productos-card" data-gender="${dw.gender}">
<img src="${dw.image}" alt="${dw.name}">
<figcaption>
${dw.name}
</figcaption>
<div class="card-description">
<p>${dw.description}</p>
</div>
</figure>
`;
xxContainer.insertAdjacentHTML("beforeend", cardHtml);
});
}

// Agrega event listeners a los botones de filtro
filterButtons.forEach(button => {
button.addEventListener("click", () => {
const genero = button.dataset.category;


// Remueve la clase 'active' de todos los botones
filterButtons.forEach(btn => btn.classList.remove("active"));
// Agrega la clase 'active' al botón clickeado
button.classList.add("active");

// Renderiza las tarjetas con el filtro seleccionado
renderDw(genero);
});
});

// Renderizar todos para cargar la página
document.addEventListener("DOMContentLoaded", () => {
renderDw('all');
});


// Función para el botón de volver al inicio
function scrollToTop() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
}