$(document).ready(()=>{
    //selectores por ID
    $('#rojo').css('background','red')
                         .css('color','white');
    $('#amarillo').css('background','yellow')
                         .css('color','green');
    $('#verde').css('background','green')
                         .css('color','white');                     

    //selectores clases 
    let parrafo = $('.zebra').css('padding','3px');
    
    $('.sin-borde').click(function(){
        //console.log('ingresa');
        $(this).addClass('zebra');
    });

    //selectores por clases
    let parrafos = $('p').css('cursor','pointer');
    parrafos.click(function(){
        let that = $(this);
        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
    })
    //por Atributo
    $('[title="Google"]').css('background','#ccc');

    //otros
    $('p, a').addClass('margen-superior');

    //buscar una clase
    let buscar = $('.caja').find('.resaltado');
    console.log(buscar)

                         
})