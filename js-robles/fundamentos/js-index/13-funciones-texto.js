'use strict'
//transformacion de texto o cadenas
let numero =333;
let texto1="Bienvenidos a Js";
let texto2="ES UN BUEN CURSO";

//convertir un numero a string
let dato=numero.toString();
console.log(typeof dato)

//convertir de minuscula a mayuscula
let dato1=texto1.toLocaleUpperCase();
console.log(dato1);

//convertir de minuscula a mayuscula
//var dato2=texto2.toLowerCase();
//console.log(dato2);
//CALCULAR LA LONGITUD DE UN TEXTO
let nombre = "Mereles cesar augusto";
console.log(nombre.length);

//para buscar una palabra indexOf -> indica en 
//que posicion existe la palabra.Tambien esta la funcion search
//(si no encuentra utiliza el valor -1) 
/************************************************************** */
let texto = "Nahiara Nicel Mereles";
console.log("(indexOf) esta en la posicion: "+texto.indexOf("Nicel"));
/************************************************************** */
let texto1 = "Nachato cesar ignacio cesar Mereles";
console.log("(lastIndexOf) esta en la posicion: "+texto1.lastIndexOf("cesar"));
/************************************************************** */
let texto2 = "River es el mejor equipo del mundo";
console.log("(MATCH): "+texto2.match(/mejor/));
/************************************************************** */
let texto3 = "River es el mejor equipo del mundo";
console.log("(SUBSTR): "+texto3.substr(12,5));
/*PARA SACAR UNA LETRA EN PARTICULAR USO LA FUNCION charAt(num_posicion a buscar)
startWith -> usado para buscar un texto en particular al 
inicio de la cadena (devuelve TRUE O FALSE)
endWith -> usado para buscar un texto al final de la cadena
texto.includes-> otra funcion para buscar una palabra 
si la encuentra devuelve TRUE*/
//************************************************************************** */
let texto4 = "River es el campeon de la copa libertadores";
console.log("texto sin modificar: "+texto4);
console.log("(REPLACE)Texto nuevo: "+texto4.replace("campeon","Super Campeon"));

let texto5 = "River es el campeon de la copa libertadores";
console.log("(SLICE)Texto nuevo: "+texto5.slice(5)); 
//corta un string a partir de un nro de caracter

let texto6 = "River es el campeon de la copa libertadores";
console.log("(SPLIT)Texto nuevo: "+texto6.split('/'));
console.log(texto6.length);
//metodo trim() elimina los espacios vacios

