const vector = ["texto1",45,"texto2",true,'k'];
console.log (vector);

let busqueda = vector.find(elemento=>elemento==="texto1");
console.log (busqueda); 


let busqueda1 = vector.findIndex(elemento=>elemento===true);
console.log (busqueda1); 

const precios =[10,50,30,1,77];

let controlPrecios = precios.some(precio =>20);
console.log("control precios ",controlPrecios);