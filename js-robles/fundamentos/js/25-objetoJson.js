

let peliculas = {
	titulo: "Batman vs Superman",
	anno: 2017,
	pais:"EEUU"
}

//como accedo
console.log("accedo a un elemento del Objeto: ",peliculas.titulo);

//para modificar un elemento del objeto json
console.log("Antes de modificar el anno: ",peliculas.anno);
peliculas.anno=2018;
console.log("Anno de peliculas modificado: ",peliculas.anno);

//creando un array de objetos
const colores = [
	{
		color:"verde",
		cantidad:15,
		pais:'Argentina'
	},
	{
		color:'rojo',
		cantidad:20,
		pais:'Paraguay'
	}
]

let coloresPais = document.querySelector('#colores');

for(let index in colores){
	let parrafo = document.createElement('p');
	parrafo.append(colores[index].color+" - "+colores[index].cantidad+" - "+colores[index].pais);
	coloresPais.append(parrafo);
}
