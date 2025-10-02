"use strict"
const numbers = [0, 12, 8, 9, 5, 8, 71, 120, 500];

// Agregar elementos a mi arreglo pero con este método se requiere conocer la longitud del arreglo

//let numbersLength = numbers.length
//console.log(numbersLength);

//numbers [numbers.length] = 100;
//console.log(numbers);

//numbers.push(700, 800);
//console.log(numbers);

// Con el método push se agregan elementos al final del arreglo
numbers.unshift(-1, -2, -3);

// Método para eliminar el último
//numbers.pop();

// Método shift para eliminar el primer elemento de mi arreglo
//numbers.shift();

// Método splice elimina todos elementos a partir del indice asignado
numbers.splice(5);
console.table(numbers);

