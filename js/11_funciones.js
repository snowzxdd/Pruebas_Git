document.write("<h1>Funciones </h1>");

//cuando no se reciben valores de entrada
function saludar(){

    return document.write ("<p>Hola a todos</p>");
}
//saludar();

// funcion con parametros de entrada
function concatena_el_nombre(nombre,apellidoP,apellidoM){
    
var nombreC= nombre+apellidoP+apellidoM;
document.write(nombreC);
return nombreC;

  
}
/*var nombre_com=concatena_el_nombre ("Luis","Espinosa","Gutierrez");
console.log(nombre_com);*/

//Funcion con parametros opcionales
function calculadora(num1,num2,mostrar=true){
    if(mostrar==true){
        console.log("se muestran resultados en la consola");
        console.log(num1+num2);
        console.log(num1-num2);
        console.log(num1*num2);
        console.log(num1/num2);
    } else {
        document.write("<p>",num1+num2,"</p>");
        document.write("<p>",num1-num2,"</p>");
        document.write("<p>",num1*num2,"</p>");
        document.write("<p>",num1/num2,"</p>");
    }
   
}
