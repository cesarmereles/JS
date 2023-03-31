window.addEventListener('load',()=>{
    function intervalo(){
        let tiempo = setInterval(()=>{
            console.log("tiempo");
            let encabezado = document.querySelector('h1') 
            if(encabezado.style.fontSize=="50px"){
                encabezado.style.fontSize="20px"
            }else{
                encabezado.style.fontSize="50px"
            }
        },3000);
        return tiempo;
    }
    
    
    //setInterval -> actua como un bucle
    let tiempo = intervalo();    
    let stop = document.querySelector("#stop");
    stop.addEventListener('click',()=>{
        alert("ciclo finalizado");
        clearInterval(tiempo);    
    });
    let start = document.querySelector("#start");
    start.addEventListener('click',()=>{
        alert("ciclo iniciado");
        intervalo();
    });


})