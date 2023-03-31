$(document).ready(()=>{
    realoadLink();
    $('#add_button')
        .removeAttr('disabled')
        .click(function(){
        $('#menu').append('<a href="'+$('#add_link').val()+'"></a>');
        $('#add_link').val('');
        realoadLink();
    })
    


})

function realoadLink(){
    $('a').each(function(index){
        let obj = $(this); 
        let href=obj.attr('href');
        obj.attr('target','_black');
        obj.text(href);
    });
}
