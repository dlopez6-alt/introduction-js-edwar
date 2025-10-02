//Bryan Alexis Rios Restrepo 
//Metodos para los objetos
//Con esta línea de código garantizo buenas prácticas
"use strict";

const product = {
    productName : "Sensor de humedad",
    price : 300,
    available : true,
}

const speedMax  = 80;
//speedMax = 70;

console.log(speedMax);

//Bryan Alexis Rios Restrepo
//Aunque el objeto product este declarado como constante permite agregar propiedades 
product.quantity = 10;
console.log(product);

//Bryan Alexis Rios Restrepo
//Con el método o funci ón freeze bloqueamos el objeto para que no se puedan agregar mas propiedades o eliminarlas o modificarlas(editarlas)
//Object.freeze(product);

//Bryan Alexis Rios Restrepo
//Si usamos el método seal no podemos agregar ni eliminar pero si puede editar o modificar una propiedad
//Object.seal(product);

//Bryan Alexis Rios Restrepo
//Vamos a agregar una nueva propiedad color
//product.color = "red";
 
//Bryan Alexis Rios Restrepo
//Forma de saber si un objeto esta bloqueado
//console.log("El objeto esta bloqueado?:" + Object.isFrozen(product));

let response;
if (Object.isFrozen(product)) {
   response = "Si";
}else{
 response = "No";
}

console.log("¿El objeto está bloqueado?:" + response);

//Bryan Alexis Rios Restrepo
//Eliminar una propiedad de un objeto
//delete product.price;
//console.log(product);

//Bryan Alexis Rios Restrepo
//Modificar o editar las propiedades de un objeto 
product.productName = "Sensor de PH";
console.log(product);

//Bryan Alexis Rios Restrepo
//Saber si un objeto está sellado
console.log("El objeto está sellado:?" + Object.isSealed(product));