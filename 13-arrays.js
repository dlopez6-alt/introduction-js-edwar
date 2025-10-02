// Arrays en JS

const numbers = [10, 20, 30, 80, 100];

console.log(numbers);

// Otra forma de visualización en tabla
console.table(numbers);

// Crear un arreglo con el constructor
const months = new Array('May', 'january', 'july', 'june');

console.table(months);

const miArray = ['hello', 42, true, false, null, {myName: 'Bryan', myJob: 'Student'}, [3172293]];

console.log(miArray);

// Consultar un elemento de un arreglo
console.log(typeof numbers[2]);
console.log(miArray[5]);

// Método para conocer la longitud de un arreglo 
console.log("Bryan tu arreglo tiene : " + numbers.length + "elementos");

// Un iterador con forEach

const numbers2 = [10, 20, 30, 80, 100, 7, 8];
numbers2.forEach(function(number){
    console.log(number);
})

const months2 = ('may', 'juanary', 'juli', 'june');
months.forEach(function(months){
    console.log(months);
})

const miArray2 = ['hello', 42, true, false, null, {myName: 'Bryan', myJob: 'Student'}, [3172293]];
miArray2.forEach(function(dates){
    console.log(dates);
})