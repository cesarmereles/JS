"use strict"

//bucle while
let valor=Number(prompt("Ingrese un numero"));
do{
    if (!isNaN(valor)) { 
        console.log(typeof valor);
    }else{
        console.log("No ingreso un numero");
    }
    valor=Number(prompt("Ingrese un numero"));
    

}while(valor!==0);




