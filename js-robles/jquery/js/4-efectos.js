$(document).ready(()=>{
    let caja = $('#caja');
    let mostrar = $('#mostrar');
    let ocultar = $('#ocultar');
    mostrar.hide();

    mostrar.click(function(){
        $(this).hide();
        ocultar.show();
        // caja.show('fast');
        //caja.fadeIn('slow');
        caja.fadeTo('slow',1);
    })
    ocultar.click(function(){
        $(this).hide();
        mostrar.show();
        // caja.hide('fast');
        //caja.fadeOut('slow');
        //caja.fadeTo('slow',0);
    });

    $('#todoenuno').click(function(){
        //caja.toggle('slow');
        //caja.fadeToggle('slow'); //efectos
        caja.slideToggle('slow');  //efectos
    })

    $('#animar').click(function(){
        caja.animate({
                        marginLeft:'500px',
                        fontSize:'40px',
                        height: '110px'
                    },'slow')
            .animate({
                        borderRadius: '900px',
                        marginTop: '100px' 
                    },'slow')
            .animate({
                        borderRadius: '0px',
                        marginLeft: '0px' 
                    },'slow')                        
            .animate({
                        borderRadius: '100px',
                        marginTop: '0px' 
                },'slow')    
                        

    })

});
