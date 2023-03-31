'use strict'

//parametros REST Y SPREAD
//rest: lo uso cuando no sabemos la cantidad de parametros que van a venir
function listadoFrutas(fruta1,fruta2,...resto_frutas){
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log("Resto de Frutas REST: ",resto_frutas);
}


//listadoFrutas("naranja","manzana","sandia","pera","coco");

var frutas=["naranja","manzana"];
listadoFrutas(...frutas,"sandia","pera","coco");