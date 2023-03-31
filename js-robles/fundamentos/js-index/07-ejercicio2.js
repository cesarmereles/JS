'use strict'
/*
var valor=10;
if(isNaN(valor)){
    alert("soy texto "+isNaN(valor));
}else{
    alert("soy numero "+isNaN(valor));
}

utilizando un bucle mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado
*/
var suma=0,contador=0;
var numero = parseInt(prompt("Ingrese un numero (-1 para salir): ",0));
while(numero >= 0){
    if(isNaN(numero)){
        numero=0;
    }else if(numero>=0){
        suma+=numero; 
        numero = parseInt(prompt("Ingrese un numero (-1 para salir): ",0));        
        contador++;
    }
    
}
alert("La suma de los numero ingresados son: "+suma+" y su media es: "+suma/contador);
