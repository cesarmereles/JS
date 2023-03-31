window.addEventListener('load',()=>{
    function cambiarColor(){
        let bg= btn.style.background;
        if(btn.style.background ==="green"){
            btn.style.background="red";
        }else{
            btn.style.background="green";
        }
        btn.style.padding="7px";
        btn.style.border="1px solid black"
        return true;
    }
    
    let btn = document.querySelector('#boton');
    //evento click
    btn.addEventListener('click',()=>{
        cambiarColor();
        btn.style.border="10px dashed black";
    });
    //evento mouseOver
    btn.addEventListener('mouseover',()=>{
        btn.style.background="#ccc";
    });
    //evento mouseout
    btn.addEventListener('mouseout',()=>{
        btn.style.background="yellow";
    });
    
    //capturo el campo para aplicar los eventos
    let input = document.querySelector("#nombre");
    //focus
    input.addEventListener('focus',()=>{
        console.log("focus");    
    });
    //blur
    input.addEventListener('blur',()=>{
        console.log("Estas fuera (blur)");    
    });
    //keydown
    //String.fromCharCode->convierte en a caracter el evento
    input.addEventListener('keydown',(event)=>{  
        console.log("Pulsando esta tecla (keydown)",String.fromCharCode(event.keyCode));    
    });
    //keypress
    input.addEventListener('keypress',(event)=>{  
        console.log("tecla presionada (keypress)",String.fromCharCode(event.keyCode));    
    });
    
    //keyup
    input.addEventListener('keyup',(event)=>{  
        console.log("tecla soltada (keyup)",String.fromCharCode(event.keyCode));    
    });
    
})
