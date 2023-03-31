'use strict'
const categorias = ['accion','terror','comedia'];
const peliculas = ["avenger", "mentiros mentiroso", "la liga de la justicia"];



//console.log(peliculas.sort());
//console.log(peliculas.reverse());

//defino un array multidimensional
const cine =[categorias,peliculas];
console.log(cine[0][2]);
console.log(cine[1][0]);
//para acceder a un elemnto del array
//console.log(cine[0][1]);
//console.log(cine[1][1]);

//insertar un elemento en un array
/*
var elemento="";
do{
    elemento=prompt("ingrese las peliculas: ");
    peliculas.push(elemento);
}while(elemento!="FIN");
peliculas.pop();
console.log(peliculas);*/

//BUSCAR UN ELEMENTO EN UN ARRAY
var busqueda = peliculas.indexOf('avenger');
if(busqueda > -1){
    peliculas.splice(busqueda,1) 
    //los parametros cargados son la posicion y la cantidad de indices a borrar
}
console.log(peliculas);

//CONVERTIR UN ARRAY EN UN STRING
var peliculasString = peliculas.join();
console.log(peliculasString);

var cadena ="texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);