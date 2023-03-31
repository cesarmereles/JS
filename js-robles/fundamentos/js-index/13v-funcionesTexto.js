/* let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let expresion = /[A-E]/gi;
let array_emparejamientos = cadena.match(expresion);
console.log(array_emparejamientos);
let cadena2 = "River es el mejor";
let expression = cadena2.match(/mejor/);
console.log(expression);
let cadena3 = "texto de prueba";
console.log(cadena3.split(" "));
 */
let cadena = "Cesar Augusto Mereles es hincha de River Plate Argentina River";

let busqueda = cadena.match(/River/g);
//console.log(busqueda);

let sacarString = cadena.substr(6,7);
//console.log(sacarString);

let letra = cadena.charAt(0)
//console.log(letra);

let busqueda_startWith = cadena.startsWith("Cesar");
//console.log(busqueda_startWith);

let textoNuevo = cadena.replace("hincha","Super hincha");
//console.log(textoNuevo);

let slice_metodo = cadena.slice(10);
//console.log(slice_metodo);

let split_metodo = cadena.split(" ");
console.log(split_metodo);
