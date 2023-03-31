'use strict'

function cambiaColor(color){
    texto.style.background = color;
}

//seleccionamos el elemento ID CONCRETO
let caja = document.getElementById("miCaja").innerHTML;
console.log(caja);
//Para agregar un valor nuevo a la etiqueta HTML
let cajaModificado = document.getElementById("miCajaModificado");
cajaModificado.innerHTML= "Incrusto un texto desde JS";
console.log(cajaModificado);
//Agregando un estilo CSS
let pEstilo = document.getElementById("estilo");
pEstilo.style.background="red";
pEstilo.style.padding="20px";
pEstilo.style.color="white";
//Para agregar un clase al elemento html uso el atributo className
pEstilo.className = "ClaseNueva";
//Otra forma de seleccionar un elemento HTML tipo CSS
let tipoquery = document.querySelector("#tipoquery");
tipoquery.style.background="green";
//----------------------------------------------------------
//Seleccionar elementos HTML por etiqueta
let todosLosDiv = document.getElementsByTagName("div");
console.log(todosLosDiv);
//Para seleccionar el contenido de un elemento html
let contenido_div = todosLosDiv[3].textContent;
console.log(contenido_div);

//recorrer todos los div 
let valor;
let seccion=document.querySelector("#miSeccion");
let hr = document.createElement("hr");
for(valor in todosLosDiv){
    //compruebo que los elementos que estan en la etiqueta div son string
    if(typeof(todosLosDiv[valor].textContent)==='string'){
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo); 
    }
    
}
seccion.append(hr);

//Seleccionar elementos HTML por su clase
let divRojos = document.getElementsByClassName('rojo');
let divAmarillos = document.getElementsByClassName('amarillo');
divAmarillos[0].style.background='yellow';
let div;
for(div in divRojos){
    if(divRojos[div].className==="rojo"){
        divRojos[div].style.background="red";    
    }
   
}


