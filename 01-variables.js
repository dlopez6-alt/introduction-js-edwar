// alert("Estoy en hello world");
// convenciones para nombrar variables
// CamelCase
// UpperCamelCase => se usa para nombrar las clases en JS
// lowerCamelCase => se usa para nombrar las variables en JS
// SCREAMING_SNAKE_CASE => se usa para nombrar las variables constantes 
// caja-kebab => Se usa para nombrar archivos multimedia en JS

// snake_case => Generalmente usado para nombrar variables en el lenguaje phyton

// Caja-De-Tren =>  Variante del kebab-case

// YA NO se usa var para declarar las variables, actualmente se usa let
// En JS No es obligatorio indicar el tipo de variable
// JS se puede o NO usar el punto y coma al final de una sentencia
var product = "sensor-1";
var product2 = "sensor-2";

console.log(product);
console.log(product2);

// No se puede iniciar una variable con un guión medio
//var -sensor = "sensor-3";

// No se puede iniciar una variable con número
//var 1sensor = "sensor-4";

// Si está permitido iniciar una variable con guión al piso
var _sensor = "sensor-5";

console.log(_sensor);

//crear una variable de las 3 formas distintas 

//var sensor10 = "Sensor de lluvia";
//const sensor10 = "Sensor de lluvia";
let sensor10 = "Sensor de lluvia";

console.log(sensor10);

// Ejemplo con var
// No me indica error por duplicidad de variables
//var sensor11 = "Sensor de humedad";
//var sensor11 = "Sensor de calor";

//console.log(sensor11);

// Let no permite duplicidad al declarar variables
//let sensor12 = "Sensor de velocidad";
//let sensor12 = "Sensor de Luz";

// No muestra error por falta de inicialización
//console.log(userName);
//var userName = "Bryan";

//console.log(userName);
//let userName = "Bryan";

// Usando la declaración const No se puede cambiar su valor
const maxSize = 1024;
maxSize = 2048;

console.log(maxSize);


