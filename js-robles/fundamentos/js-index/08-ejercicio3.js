//var numero = parseInt(prompt("Ingrese un numero (-1 para salir): ",0));
var desde = parseInt(prompt("Ingrese un numero desde",0));
var hasta = parseInt(prompt("Ingrese un numero hasta",0));
document.write("<h3>Desde: "+desde+" Hasta: "+hasta+" </h3>");
for(var j=desde; j<hasta; j++){
    document.write(j+"<br/>");
}