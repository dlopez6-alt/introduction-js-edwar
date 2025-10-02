//Bryan Alexis Rios Restrepo
//Desestructuración de objetos

const product = {
    productName : "Sensor de humedad",
    price : 300,
    available : true,
}

//Bryan Alexis Rios Restrepo
//Aquí un ejemplo de desestructuración de objetos

const productPrice = product.price;
//const productName = product.productName;

console.log(productPrice);
console.log(product.productName);

//Bryan Alexis Rios Restrepo
//Para que sirve el destructuring? Sirve para extraer los valores de un objeto

const {price, available, productName} = product;

console.log(price, available, productName);