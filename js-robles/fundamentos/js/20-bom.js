//browser object model
console.log(window.innerWidth);//ancho
console.log(window.innerHeight); //alto

console.log(screen.width);//ancho
console.log(screen.height); //alto

console.log(window.location.href);
function redirect(url){
    window.location.href=url;
}

function abrirVentana(url){
    window.open(url,"",width=500,height=500);
}
