$(document).ready(()=>{
    
    //mouseover y mouseout
    let caja = $('#caja');
    /*
    caja.mouseover(function(){
        $(this).css('background','red');
    })
    caja.mouseout(function(){
        $(this).css('background','green');
    })*/

    function cambiaRojo(){
        $(this).css('background','red');
    }
    function cambiaVerde(){
        $(this).css('background','green');
    }
    caja.hover(cambiaRojo,cambiaVerde);

    //evento click y dclick
    caja.click(function(){
        $(this).css('background','blue')
               .css('color','white');
    })      
    caja.dblclick(function(){
        $(this).css('background','pink')
               .css('color','yellow');
    });
    //focus y blur
    let nombre=$('#nombre');      
    let datos = $('#datos')
    nombre.focus(function(){
        $(this).css('border','2px solid green');
    })
    nombre.blur(function(){
        $(this).css('border','1px solid #ccc');
        //con el metodo val obtengo la información que tengo en el input
        //metodo text lo utilizo para incrustar dentro de la pagina
        //metodo show para mostrarlo
        datos.val()
        datos.text($(this).val()).show();
    });
    //mousedown y mouseup
    datos.mousedown(function(){
        $(this).css('border-color','red');
    });
    datos.mouseup(function(){
        $(this).css('border-color','green');
    });
    //mousemove: captura el movimiento del raton
    $(document).mousemove(function(){
        // console.log(event.clientX);
        // console.log(event.clientY);
        let sigueme = $('#sigueme');
        $('body').css('cursor','none');
        sigueme.css('left',event.clientX);
        sigueme.css('top',event.clientY);
    })



})
