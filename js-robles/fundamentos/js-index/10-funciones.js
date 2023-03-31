'use strict';

function mostrarConsola(num1,num2){
    console.log("Suma: "+ (num1+num2));
    console.log("Resta: "+ (num1-num2));
    console.log("Multiplicacion: "+ (num1*num2));
    console.log("Division: "+ (num1/num2));
    console.log("*************************************");
}
function mostrarPantalla(num1,num2){
    document.write("Suma: "+ (num1+num2)+"<br/>");
    document.write("Resta: "+ (num1-num2)+"<br/>");
    document.write("Multiplicacion: "+ (num1*num2)+"<br/>");
    document.write("Division: "+ (num1/num2)+"<br/>");
    document.write("*************************************");
}

//funciones
function calculadora(num1,num2,mostrar=false){
    if(mostrar==false){
        mostrarConsola(num1,num2);
    }else{
        mostrarPantalla(num1,num2);
    }
    
    //return "hola soy la calculadora";
}

//llamando a la funcion directa
//console.log(calculadora());

//Funcion con parametro
/*
for(var j=1;j<=10;j++){
    console.log(j);
    calculadora(j,8);
}*/

//funcion con parametro opcional
calculadora(5,4);
calculadora(10,8,true); 