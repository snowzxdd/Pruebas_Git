document.write("<h1>Funcion anidada </h1>");
function porConsola(num1,num2){
    if(mostrar==true){
        console.log("se muestran resultados en la consola");
        console.log(num1+num2);
        console.log(num1-num2);
        console.log(num1*num2);
        console.log(num1/num2);
    }
}
function porHTML(num1,num2,){
    console.log("se muestran resultados en la consola");
    document.write("<p>",num1+num2,"</p>");
    document.write("<p>",num1-num2,"</p>");
    document.write("<p>",num1*num2,"</p>");
    document.write("<p>",num1/num2,"</p>");
}
function calculadora (num1,num2,mostrar=true){
    if(mostrar==true){
        porConsola(num1,num2);
    
    }
    else{
        porHTML(num1,num2);
    }
}