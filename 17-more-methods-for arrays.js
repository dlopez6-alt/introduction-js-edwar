// More methods for arrays
// Se creo usando el constructor
const months = new Array('May', 'january', 'july', 'June');

// Este No tiene constructor
const shoppingCart = [
    {productName: 'Smart TV 60', price: 900},
    {productName: 'Smart TV 50', price: 700},
    {productName: 'Tablet', price: 900},
    {productName: 'Sound-bar', price: 600},
    {productName: 'Google assistand', price: 400},
    {productName: 'Sound-bar', price: 800},
    {productName: 'Play station', price: 450},
    {productName: 'Mouse', price: 50},
]

// Recorrer el arreglo con un forEach para que muestre todos los elementos
// En este caso month es un parámetro
months.forEach(function(month){
    console.log(month);
});

// Verificar si un mes existe con un forEach
months.forEach(function(month1){
    if (month1 == 'May') {
        console.log('The month of May exist in the array');

    }else{
        console.log("Doesn´t  exist");
    }
});

// Buscar en un arreglo si algo existe, si existe devuelve true si no un false
const result = months.includes('June');
console.log(result);

// ==================================================================

// En JS includes no funciona con los objetos 
const result2 = shoppingCart.includes('Tablet');
console.log(result2);

const num = 5 == 5;
console.log('Igualación doble', num);

// Con igualación doble solo compara el valor por eso en la consola tenemos un true
const num2 = 5 == '5';
console.log('Igualación doble', num2);

// Con igualación triple verifica si es de el mismo valor y tipo 
const num3 = 5 === '5';
console.log('Igualación triple', num3);

// ===================================================================
//  En conclusión para un arreglo plano se usa includes y para un arreglo de objetos se usa some 
//const result5 = shoppingCart.some(function(product){

//    return product.productName === 'Mouse'
//})
    
//console.log(result5);
    
// Hace lo mismo que el código anterior pero más corto con Array Function
let result6 = shoppingCart.some(product => product.productName === "Play station");
    
console.log(result6);
    
 // ===================================================================
    
 // Método reduce
 // Sumar todos los precios del carrito de compras
result6 = shoppingCart.reduce(function(total, product){
    return total + product.price
}, 0)

console.log(result6);
    
// Lo mismo pero con función flecha
result6 = shoppingCart.reduce((total, product) => total + product.price, 0);
    
console.log(result6);
    
// ===================================================================

// Filtrar los valores menores que 700 
result6 = shoppingCart.filter(function(product){
    return product.price < 700
});

console.log(result6);

result6 = shoppingCart.filter((product) => product.price < 700)
console.log(result6);


// Filtrar los del mismo producto
result6 = shoppingCart.filter(function(product){
    return product.productName === "Sound-bar"
});

console.log(result6);

// Lo mismo pero con Arrow Function
result6 = shoppingCart.filter((product => product.productName === "Sound-bar"))
console.log(result6);

// Todos exepto un tipo
result6 = shoppingCart.filter(function(product){
    return product.productName !== "Sound-bar"
});

console.log(result6);

result6 = shoppingCart.filter((product => product.productName !== "Sound-bar"))
console.log(result6);