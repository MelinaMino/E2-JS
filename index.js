const PIZZAS = [
    { ID: 1, nombre: 'Muzzarella', ingredientes: ['Salsa de Tomate', 'Muzzarella', 'Aceitunas Verdes'], precio: 560 },
    { ID: 2, nombre: 'Huevo', ingredientes: ['Salsa de Tomate', 'Muzzarella', 'Huevo Duro', 'Aceitunas negras'], precio: 590 },
    { ID: 3, nombre: 'Jamón y Morrones', ingredientes: ['Salsa de Tomate', 'Muzzarella', 'Jamon cocido', 'Morrones'], precio: 640 },
    { ID: 4, nombre: 'Napolitana', ingredientes: ['Salsa de Tomate', 'Muzzarella', 'Tomate fresco', 'Oregano', 'Aceitunas verdes'], precio: 630 },
    { ID: 5, nombre: 'Roquefort', ingredientes: ['Salsa de Tomate', 'Muzzarella', 'Roquefort', 'Aceitunas negras '], precio: 680 },
    { ID: 6, nombre: 'Fugazzeta', ingredientes: ['Queso Muzzarella', 'Cebolla', 'Oregano', 'Aceitunas verdes'], precio: 650 },
]

//PIZZAS CON ID IMPAR
const impares = [];
PIZZAS.filter(pizza => {
    if (pizza.ID % 2 !== 0) {
        impares.push(pizza.nombre);
        impares.toString;
    }
})
console.log(`Las pizzas con ID impar son ${impares}.`);

//PIZZAS CON PRECIO MENOR A 600

const valor = [];
PIZZAS.filter(pizza => {
    if (pizza.precio < 600) {
        valor.push(pizza.nombre);
        valor.toString;
    }
})

console.log(`Las pizzas cuyo precio es menor a $600 son: ${valor}.`)

//LOS NOMBRES DE TODAS LAS PIZZAS
const NamePizza = PIZZAS.map(pizza => pizza.nombre)
console.log(`Los nombres de todas las pizzas en la carta son:${NamePizza}`);

// LOS PRECIOS DE TODAS LAS PIZZAS 
const CostPizza = PIZZAS.map(pizza => pizza.precio)
console.log(`Los precios de todas las pizzas en la carta son:${CostPizza}`);

//EL NOMBRE DE CADA PIZZA CON SU PRECIO
const NameValor = PIZZAS.forEach(pizza => PIZZAS.nombre, PIZZAS.precio)
console.log(`Las pizzas se llaman ${NamePizza} y sus respectivos valores son ${CostPizza}`);