
//para comprobar si el navegador es compatible
if (typeof(Storage)!=='undefined') {
	console.log("LocalStorage disponible");
}else{
	console.log("LocalStorage no esta disponible");
}

//como guardar datos en el localStorage
localStorage.setItem('titulo','curso de php');

//como recuperar un elemento
document.querySelector('#colores').innerHTML=localStorage.getItem('titulo');

//GUARDAR OBJETOS json 
let datosPersonales = {
	nombre:'Cesar Augusto Mereles',
	edad:44,
	correo:'cesarmereles@gmail.com'
};

//para almacenar datos tipos objetos tengo que convertirlos
//json string. El localstorage no permite guardar
//el objeto json en formato nativo 
localStorage.setItem('datos', JSON.stringify(datosPersonales));


//recuperar el objeto guardado. Tengo que convertir el json que esta 
//string a un json objeto usable
let datosPersonalesRecuperados = JSON.parse(localStorage.getItem('datos'));
console.log(datosPersonalesRecuperados);
document.querySelector('#colores').append(datosPersonalesRecuperados.nombre);

//para borrar datos del localstorage
localStorage.clear();