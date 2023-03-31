window.addEventListener('load',()=>{
    let formulario = document.querySelector('#formulario');
    let box_resultado = document.querySelector('.resultado');
    box_resultado.style.display="none";
    //capturo el evento submit
    formulario.addEventListener('submit',()=>{
        //console.log("submit");
        let nombre = document.querySelector("#nombre").value;
        /*.value -> con esta propiedad le saco el valor del campo*/
        let apellido= document.querySelector("#apellido").value;
        let edad= parseInt(document.querySelector("#edad").value);
        //validamos los datos
        if(nombre.trim() == "" || nombre.length==0){
            document.querySelector('#error_nombre').innerHTML="El nombre no es valido";
            alert("El nombre ingresado no es valido");
            return false;
        }else{
            document.querySelector('#error_nombre').style.display="none";
        }

        if(apellido.trim() == "" || apellido.length==0 ){
            alert("El apellido ingresado no es valido");
            return false;
        }

        if(edad=="" || edad<=0 || isNaN(edad)){
            alert("El edad ingresado no es valido");
            return false;
        }
        
        let vnombre = document.querySelector("#vnombre span");
        let vapellido = document.querySelector("#vapellido span");
        let vedad = document.querySelector("#vedad span");
        vnombre.innerHTML = nombre;
        vapellido.innerHTML = apellido;
        vedad.innerHTML = edad; 

        
        box_resultado.style.display="block";
    });
})