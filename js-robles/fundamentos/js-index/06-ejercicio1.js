/*
    Pedir dos numeros y que nos diga cual es el mayor
    el menor y si son iguales
*/

var num1 = Number(prompt("Ingrese un numero",0));
var num2 = Number(prompt("Ingrese un numero",0));
//isNaN(num1)
while(num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2)){
    var num1 = Number(prompt("Ingrese un numero",0));
    var num2 = Number(prompt("Ingrese un numero",0));
}

if(num1 > num2){
    alert("El mayor es: "+num1);
    alert("El menor es: "+num2);
}else if(num1 < num2){
    alert("El mayor es: "+num2);
    alert("El menor es num1: "+num1);
}else{
    alert("Los numero son iguales");
}