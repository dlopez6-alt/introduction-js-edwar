//Bryan Alexis Rios Restrepo
//Objetos en JS

//Bryan Alexis Rios Restrepo
//Aquí tenemos tres variables
const productName = "Sensor de humedad";
const price = 300;
const available = true;


const product = {
    productName : "Sensor de humedad",
    price : 300,
    available : true,
}

console.log(product);
console.log(typeof product);

console.log(typeof productName);
console.log(typeof price);
console.log(typeof available);

//Bryan Alexis Rios Restrepo
//Para acceder a las diferentes propiedades de un objeto lo hacemos de la siguiente manera:

console.log("El nombre del producto es: " + product.productName);
console.log("El precio del producto es: " + product.price);
console.log("El producto está disponible?: " + product.available);

//Bryan Alexis Rios Restrepo
//Agregar propiedades al objeto
product.image = "image.jpg";

console.log(product);