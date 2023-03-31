/*calback (significa llamada de vuelta) es una funcion que se ejecuta dentro de otra

*/
function sumame(x,y,sumaYmuestra,sumaPordos){
    let sumar = x + y;
    sumaYmuestra(sumar);
    sumaPordos(sumar);
    return sumar;
}

//ACA LLAMAMOS A LA FUNCION SUMAME Y LE PASAMOS COMO PARAMETRO UNA FUNCION DE CALLBACK
sumame(10,5,function(dato){      
    console.log("La suma es: ",dato);
},
(dato)=>{
    console.log("La suma por dos es: ",dato*2);
});

function foo(callback) {
    console.log("hello")
    callback();
 }
 foo(()=> {console.log("finished")});