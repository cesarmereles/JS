$(document).ready(()=>{
    //tooltips
    $(document).tooltip();
    //dialog
    $('#llamar').click(function(){
        $('#popup').dialog();
    });
    //candelario Datepicker
    $('#calendario').datepicker();

    //tab
    $('#pestanas').tabs();


    if(false===!true){
        console.log(false==true);
    }else{
        console.log(true!==false);
    }


});
