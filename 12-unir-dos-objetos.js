// Cuando se unen dos objetos lo ideal es No modificar ninguno de los dos objetos

const product = {
    productName : "Sensor de humedad",
    price : 300,
    available : true
}

Object.freeze(product);

// Objeto que almacena medidas
const measurements = {
    weight : '1 kg',
    measurement : '10cm'
}

// Rest operator, consta de (...)

const newProduct = {...product, ...measurements};

console.log(product);

console.log(newProduct);

const balon = {
    modelo : 'mundial 2022',
    precio : '100.000',
    color : 'green'
}

Object.freeze(balon);

const gorra = {
    marca : 'XIOM',
    precio : '80.000',
    color : 'rojo'
}

const newProduct1 = {...balon, ...gorra};

console.log(balon);

console.log(newProduct1);