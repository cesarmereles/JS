const bicicleta={
    color:"Rojo",
    modelo:"BMX",
    frenos:"Disco",
    velocidadMaxima:"60km",
    cambiaColor: function(nuevo_color){
        this.color=nuevo_color;
    }
}
bicicleta.cambiaColor("Azul");
console.log(bicicleta);