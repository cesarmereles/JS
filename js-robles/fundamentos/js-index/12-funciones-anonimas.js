'use strict'

//calback es una funcion que se ejecuta dentro de otra
//funcion anonima es una funcion que no tiene nombre
/*
var pelicula = function(nombre_pelicula){
    return "La pelicula es: "+nombre_pelicula;
}*/
const peliculas = (nombre)=>{
    return "La pelicula es: "+nombre;
}

console.log(peliculas("Batman"));

function sumame(x,y,sumaYmuestra,sumaPordos){
    var sumar = x + y;
    sumaYmuestra(sumar);
    sumaPordos(sumar);
    return sumar;
}

/*
FUNCION ANONIMA CALLBACK
sumame(10,5,function(dato){
    console.log("La suma es: ",dato);
},
function (dato){
    console.log("La suma por dos es: ",dato*2);
});
*/
//EJEMPLO FUNCION DE FLECHA
sumame(10,5,dato=>{
    console.log("La suma es: ",dato);
},
dato=>{
    console.log("La suma por dos es: ",dato*2);
});


