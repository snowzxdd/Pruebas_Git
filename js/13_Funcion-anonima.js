document.write("<h1>Funciones anonimas</h1>");


(
    function(){
        var mensaje ="¿Que hay de nuevo viejo?"
        console.log(mensaje);
    }
)()

var mensaje= function(){
    return "hola";
}

var pelicula = function(nombre){
    return "La pelicula que seleccionaste es: "+nombre
}
pelicula("Golden edge");