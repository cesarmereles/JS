$(document).ready(()=>{
    //$('.elemento').draggable(); //

    //redimensionar
    //$('.elemento').resizable(); 
    //selecionar
    //$('.lista').selectable();
    //ordenar
    $('.lista').sortable({
        update: function(event){
            console.log('ha cambiado la listas');
        }
    });
    //drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop:function(){
            console.log("has largado algo dentro");
        }
    });
    //efectos
    $('#mostrar').click(function(){
        //$('.caja-efectos').fadeToggle(); 1 efecto
        //$('.caja-efectos').effect("explode");2 efecto
        //$('.caja-efectos').toggle("explode"); 3 efecto
        $('.caja-efectos').toggle("blind");
    })
});
