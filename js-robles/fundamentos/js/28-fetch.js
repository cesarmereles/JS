
//let usuarios=[];
let usuarios_div = document.querySelector('#user');
let unUsuario_div = document.querySelector('#unUsuario');
let usuarioPropio = document.querySelector('#usuarioPropio');
//URL nos devuelve un json esto es una promesa
	getUser()
		.then(data => data.json())
		.then(user =>{
			listadoUsuarios(user);
			return unUsuario();
		})
		.then(response => response.json())
		.then(unUsuario=>{
			listoUnUsuario(unUsuario);
			return getInfoUsuario();
		})
		.then(resp=>{
			usuarioPropio.innerHTML=resp;	
			console.log(resp);

		})
		.catch(error =>{
			console.log(error);
			alert("Error en las peticiones");
		});
		

function getUser(){
	return fetch('https://jsonplaceholder.typicode.com/users');	
}

function unUsuario(){
	return fetch('https://jsonplaceholder.typicode.com/users/1');	
}

//Esta funcion es un ejemplo de como crear una promesa desde 0
function getInfoUsuario(){
	let profesor = {
		nombre:"Cesar Augusto",
		apellido:  'Mereles',
		email: 'cesarmereles@gmail.com'
	}
	return new Promise((resolve,reject)=>{
		let profesorString=JSON.stringify(profesor);
		if(typeof profesorString !== 'string') return reject('error');

		return resolve(profesorString);
	})
	
	
}


function listadoUsuarios(usuarios){
	//console.log(usuarios);
	usuarios.map((usuarios,i)=>{
		let nombre = document.createElement('h2');

		nombre.innerHTML = i + "-" + usuarios.name+ "-" + usuarios.username;
		usuarios_div.append(nombre);  
		document.querySelector('.loading').style.display='none'; 			
	})
}
function listoUnUsuario(usuario){
	let nombre = document.createElement('h2');
	let email = document.createElement('h1');
	nombre.innerHTML = usuario.name+ "-" + usuario.username;
	email.innerHTML = usuario.email
	unUsuario_div.append(nombre);  
	unUsuario_div.append(email);  
	document.querySelector('#unUsuario .loading').style.display='none'; 			
	
}

//data es convertido en json. Convierte un objeto a un objeto
//javascript usable. 	