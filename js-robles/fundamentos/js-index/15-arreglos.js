'use strict'

const arreglos = ["cesar","river","campeon",43,true];

const lenguajes = new Array("PHP","JS","JAVA","PYTHON");

console.log(arreglos);
console.log(lenguajes[2]);
console.log(arreglos.length);

document.write("Listado de Lenguajes de Programacion 2021");
document.write("<ul>");
for(var j=0;j<lenguajes.length;j++){
    document.write("<li>"+lenguajes[j]+"</li>");
}
document.write("</ul>");
document.write("Otra forma de recorre el Array ForEach");

document.write("<ul>");
//elemento->es el arreglo en si y indice es la posicion
lenguajes.forEach((elemento,indice) => { 
    document.write("<li>"+"Posicion: "+indice+" - "+elemento+"</li>");
});
document.write("</ul>");
