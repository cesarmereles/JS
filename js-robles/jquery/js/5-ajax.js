$(document).ready(()=>{
    //load
    //$('#dato').load('https://reqres.in/api/users?page=2');
    //get y post
    $.get('https://reqres.in/api/users',{page:2},function(response){
        console.log(response)
        response.data.forEach((element,index) => {
        
        $('#dato').append("<p>"+ element.first_name+" "+ element.last_name+ "</p>")      
      });  
    });
    //POST
    $('#form').submit(function(e){ //al no tener ningun parametro este lo redirije a una page
        e.preventDefault();
        let user={
            nombre:$('input[name="nombre"]').val(),
            edad:$('input[name="edad"]').val()
        };
        console.log(user);
        // $.post($(this).attr('action'),user,function(response){
        //     console.log(response);
        // }).done(function(){
        //     alert("Registro Exitoso");
        // })


        $.ajax({
            type:'POST',
            // dataType:'json',
            // contentType:'application/json',
            url:$(this).attr('action'),
            data: user,
            beforeSend:function(){
                console.log("Enviando USER......")
            },
            success: function(response){
                console.log(response)
            },
            error: function(){
                console.log("A ocurrido un error");
            },
            timeout: 2000
            
        })
        return false;
    })
});
