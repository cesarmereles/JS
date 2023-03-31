/*
Crear una clase deportes que reciba el atributo 
nombre y un metodo que permita mostrar por consola
ese nombre. Ademas crear un metodo que permita mostrar
si el deporte es individual o por equipo. 

Crear una subclase que sea deporteDeEquipo que permita
ademas del nombre el numero de integrantes que deben
formar parte de ese equipo. Crear un metodo para 
mostrar el siguiente mensaje: "Para jugar al futbol
necesitas 11 jugadores por equipo". Tener en cuenta
que futbol y 11 son valores que pueden variar dependiendo
del deporte (por ejemplo si fuese basquet seria 5 jugadores)
*/

class Deportes{
	constructor(nombre,esDeporteEquipo){
		this.nombre=nombre;	
		this.esDeporteEquipo=esDeporteEquipo;
	} 
	mostrarNombre(){
		console.log(this.nombre);
	}
	tipoDeporte(){
		const mensaje = this.esDeporteEquipo?`el ${this.nombre} es un deporte de equipo`:`el ${this.nombre} es un deporte individual`;
		console.log(mensaje); 
	}
}

class EsDeporteEquipo extends Deportes{
	constructor(nombre,cantJugadores){
		super(nombre);
		this.cantJugadores=cantJugadores;
	}
		
}


const deportes = new Deportes("Futbol",true);
deportes.mostrarNombre();
deportes.tipoDeporte();
