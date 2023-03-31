$(document).ready(function(){
    //slider
    if(window.location.href.indexOf('index')>-1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }    
    //post
    if(window.location.href.indexOf('index')>-1){
        let post = [
            {
                title: 'prueba de titulo1',
                date:'Publicado el dia: ' + moment().date() + ' De ' + moment().format("MMMM") + ' Del año ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptas? Quae nobis aliqua'
            },
            {
                title: 'prueba de titulo2',
                date:'Publicado el dia: ' + moment().date() + ' De ' + moment().format("MMMM") + ' Del año ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptas? Quae nobis aliqua'
            },
            {
                title: 'prueba de titulo3',
                date:'Publicado el dia: ' + moment().date() + ' De ' + moment().format("MMMM") + ' Del año ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptas? Quae nobis aliqua'
            },
            {
                title: 'prueba de titulo4',
                date:'Publicado el dia: ' + moment().date() + ' De ' + moment().format("MMMM") + ' Del año ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptas? Quae nobis aliqua'
            }
        ]  
    
        post.forEach((item, index)=>{
            let post = 
            `       
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                <a href="#" class="boton">Leer Mas</a>
            </article>
            `;
            $(posts).append(post);
        });
    }
    //selector de temas
    let theme = $('#theme');

    $('#to-green').click(function(){
        theme.attr('href','css/green.css');
    });

    $('#to-blue').click(function(){
        theme.attr('href','css/blue.css');
    });

    $('#to-red').click(function(){
        theme.attr('href','css/red.css');
    });
    //scroll
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        },500);
        return false;
    })
    //login 
    $('#login form').submit(function(){
        let form_name = $('#form_name').val();
        localStorage.setItem('form_name',form_name);
    });
    
    let form_name = localStorage.getItem("form_name");
    if(form_name!==null){
    // if(form_name!==null || form_name!==undefined){    
        let acercaDe = $('#acercaDe p');
        acercaDe.html("<strong>Bienvenido, "+form_name+"</strong>");
        acercaDe.append("<a href='#' id='logout'>Cerrar Sesion</a>");
        
        $('#login').hide();
        
        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    //acordeon
    if(window.location.href.indexOf('Acerca')>-1){
        // console.log("entro");
        $('#acordeon').accordion();
    }   
    //reloj
    if(window.location.href.indexOf('reloj')>-1){
        setInterval(function(){
            let reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        },1000);
    }
    //validacion de formularios
    if(window.location.href.indexOf('contacto')>-1){
        // $("form input[name='fechanac']").datepicker({
		//  	dateFormat: 'dd-mm-yy'
		// });
        $("form input[name='fechanac']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

        $.validate({
            lang:"es",
            errorMessagePosition:'top',
            scrollTopOnError: true

        })

    }
});