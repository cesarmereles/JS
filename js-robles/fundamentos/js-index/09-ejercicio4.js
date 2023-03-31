/*
mostrar todos los numeros impares que hay entre dos numeros ingresados
por el usuario
*/

var desde = parseInt(prompt("Ingrese un numero desde",0));
var hasta = parseInt(prompt("Ingrese un numero hasta",0));
document.write("<h3>Desde: "+desde+" Hasta: "+hasta+" </h3>");

for(var j=desde; j<hasta; j++){
    if(j%2!=0){
        document.write(j+"<br/>");
    }
}