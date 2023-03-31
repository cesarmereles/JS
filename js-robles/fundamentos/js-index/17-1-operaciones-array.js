//agregar elementos al array
const arrNombres = ['maria','nahiara','ignacio'];
console.log(arrNombres);

arrNombres.push('cesar');
console.log(arrNombres);
/*
let nuevo;
do{
	nuevo = prompt("Ingrese un nuevo nombre (*fin* para finalizar ): ");
	arrNombres.push(nuevo);
	if (nuevo==='fin') 
		arrNombres.pop();
	
}while(nuevo!="fin")
console.log(arrNombres);
*/
let busqueda = arrNombres.indexOf('pepe');
if (busqueda>-1) {
	arrNombres.splice(busqueda,2);
}else{
	console.log("No encontro nada");
}
console.log(arrNombres);

let cadena ="text1, text2, text3";
const cadena_array= cadena.split(", ");
console.log(cadena_array);

for(let arrNombre in arrNombres){
	console.log(arrNombres[arrNombre]);
}