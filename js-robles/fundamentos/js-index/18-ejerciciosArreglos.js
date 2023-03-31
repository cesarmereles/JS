/*
1-pida 6 numeros y los meta en un array
2-mostrar todos sus elementos en el cuerpo de la pagina y consola
3-ordenarlo y mostrarlo
4-invertir su orden y mostrarlo
5-mostrar cuantos elementos tiene el array
6-busqueda de un valor especifico introducido x usuario si esta en el array y cual es su
indice
*/ 

const arregloNumeros = [];
let cont=0;

function listarArreglo(elemento,textoPersonalizado=""){
    document.write("<h1>Elementos del array"+ textoPersonalizado +"</h1>");
    document.write("<ul>");
    arregloNumeros.forEach((elemento,indice)=>{
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}


//cargo el array
do{
    let ingresarNum = parseInt(prompt("ingrese 6 numeros aleatoriamente: ",0));    
    arregloNumeros[cont]=ingresarNum;
    cont++;
}while(cont<6); 

//imprimo en cuerpo de la pagina
listarArreglo(arregloNumeros);
//imprimo el arreglo en consola
console.log(arregloNumeros);

//ordeno y muestro
arregloNumeros.sort((a,b)=>{return a-b});
listarArreglo(arregloNumeros,"Ordenado");
arregloNumeros.reverse();
listarArreglo(arregloNumeros, "Invertido");
console.log("cantidad de elementos de un array: "+arregloNumeros.length);
let indice = parseInt(prompt("ingrese un indice buscado: ",0));    
let buscado=arregloNumeros.findIndex(numero=>numero==indice);
if(buscado){
    console.log("El indice buscado es; "+buscado);
}else{
    console.log("Indice no encontrado");
}
