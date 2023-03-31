

let formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',()=>{
	
	let peliculas=document.querySelector('#addpelicula').value;
	if(peliculas.length>=1){
		localStorage.setItem(peliculas,peliculas);	
	}
});

let listado = document.querySelector('#listado');
let ul = document.querySelector('#listado-peliculas');
for(let i in localStorage){
	if(typeof(localStorage[i])=='string'){
		let li = document.createElement('li');
		li.append(localStorage[i]);
		ul.append(li);
	}
}

let formularioBorrar = document.querySelector('#formularioBorrar');

formularioBorrar.addEventListener('submit',()=>{
	
	let delpelicula=document.querySelector('#delpelicula').value;
	if(delpelicula.length>=1){
		localStorage.removeItem(delpelicula);	
	}
});
