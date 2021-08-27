var optPlatillo = "";
var optBebida= "";
var cantPlatillo= 0;
var cantBebida= 0;

optPlatillo= prompt ("Menu \n Seleccione la opcion de su agrado: \n1. Hamburguesa de res($40) \n2. Hotdog ($30)  \n3. Papas Fritas($30)");
cantPlatillo= prompt ("Cuantas ordenes requiere");
cantPlatillo= parseInt(cantPlatillo);

optBebida= prompt ("Menu \n Seleccione la opcion de su agrado: \n1. Jugo del valle($40) \n2. Refresco ($30)  \n3. Cerveza($30)");
cantBebida= prompt ("Cuantas Bebidas requiere");
cantBebida= parseInt(cantPlatillo);

var totalComida= 0;
switch (optPlatillo)