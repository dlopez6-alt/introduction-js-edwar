// Funciones parámetros y argumentos

// Los parámetros se pasan en los parentesis de la función
function add(num1, num2){
    return console.log(num1 + num2);
};

add( 5, 15);// Estos valores que se envían a la función se llaman argumentos
add( 7, 85);
add( 3, 20);
add( 7, 7);
add( 5, 5);

//=============================================================================
// Ejercicio con la expresión de una función

const add1 = (function(num3, num4){
    console.log(num3 + num4);
});

add( 5, 15);
add( 3, 20);
add( 7, 7);
add( 5, 5);

//=============================================================================

// Ejemplo cuando no se colocan argumentos, se coloca por defecto los valores en los parámetros
function add2(num7 = 35, num8 = 10){
    return console.log(num7 - num8);
};

add2();

// Función que retorna un valor

function add3(num9, num10){
    return num9 * num10
};

const result = add3(4 , 5)
console.log(result);

// Ejemplo un poco mas avanzado
let total = 0;
//Funcion para sumar productos
function addShoppingCart(price){
    return total += price;
};

// Funcion para agregar el impuesto a pagar
function calculateTax(total){
    return 1.19 * total;
};

total = addShoppingCart(800);
total = addShoppingCart(500);
total = addShoppingCart(200);
total = addShoppingCart(900);

console.log(`La suma de los productos es: ${total}`);

const totalToPay = calculateTax(total);

console.log(`La suma de los productos mas el impuesto es: ${totalToPay}`);


