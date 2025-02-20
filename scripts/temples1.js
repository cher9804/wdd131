// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
// 	navigation.classList.toggle('open');
// 	hamButton.classList.toggle('open');
// });
const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
	},
	// Add more temple objects here...
];

createTempleCard(temples);

// MINE
// document.addEventListener("click", (event) => {
// 	let className = event.target.classList; // classList es un DOMTokenList

// 	if (className.contains("home")) { // Usamos contains() en lugar de ==
// 		createTempleCard(temples);
// 	} else if (className.contains("new")) {
// 		createTempleCard(temples.filter(temple => {
// 			let year = parseInt(temple.dedicated.split(",")[0]);
// 			return year > 2000;
// 		}))
//     } else if (className.contains("old")) {
// 		createTempleCard(temples.filter(temple => {
// 			let year = parseInt(temple.dedicated.split(",")[0]);
// 			return year <= 1900

// 		}))
// 	} else if (className.contains("small")) {
// 		createTempleCard(temples.filter(temple => {
// 			let area = temple.area;
// 			return area < 10000
// 		}))
//     } else if (className.contains("large")) {
// 		createTempleCard(temples.filter(temple => {
// 			let area = temple.area;
// 			return area > 90000
// 		}))
//     }
// });

document.addEventListener("click", (event) => {
    let filters = {
        "home": () => createTempleCard(temples),
        "new": () => createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000)),
        "old": () => createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) <= 1900)),
        "small": () => createTempleCard(temples.filter(temple => temple.area < 10000)),
        "large": () => createTempleCard(temples.filter(temple => temple.area > 90000))
    };

    let clickedClass = [...event.target.classList].find(cls => filters[cls]);
    if (clickedClass) {
        filters[clickedClass]();
    }
});



function createTempleCard(filteredTemples) {
	document.querySelector(".gallery").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`; //innetHTML interpreta los tags que se le agregan a la variable
		dedication.innerHTML = `<span class="label">Size:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Area:</span> ${temple.area}`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.classList.add("image-card");
		location.classList.add("image-text");
		dedication.classList.add("image-text");
		area.classList.add("image-text");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);
		document.querySelector(".gallery").appendChild(card)
	})
}
// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById(
	"lastModified"
).textContent = `Last Modified: ${lastModifiedDate}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

window.addEventListener('resize', function() {
    const element = document.querySelector("#menu"); // Selecciona el elemento
	const element1 = document.querySelector(".navigation"); // Selecciona el elemento
    const width = window.innerWidth; // Obtiene el ancho de la ventana

    if (width >= 600) { // Si el ancho es menor o igual a 768px (por ejemplo, para móviles)
        element.classList.remove('open'); // Remueve la clase
		element1.classList.remove('open'); // Remueve la clase

    // } else {
    //     element.classList.add('nombre-clase'); // Agrega la clase
    }
});

// Llamada inicial al cargar la página para verificar el tamaño desde el inicio
document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.elemento');
    const width = window.innerWidth;
    
    if (width <= 768) {
        element.classList.remove('nombre-clase');
    } else {
        element.classList.add('nombre-clase');
    }
});
