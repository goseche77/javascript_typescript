// console.log("Hola Mundo!!!")
// console.log("Buenos dias Mundo!!!!");
// a = 6
// b = 10
// console.log(a+b);
// Tipos de variables en Javascript var, let, const
// var: Declara una variable que puede ser reasignada y tiene un alcance de funcion global
// var nombre = "Gustavo";
// console.log(nombre);
// var nombre = "Kendy";
// console.log(nombre);
// let: Declara una variable que puede ser reasignada, pero tiene un alcance de bloque (es decir, solo esta disponible dentro del bloque en el que se define).
// var edad = 30
// if (true){
//     var edad = 38
//     console.log('Edad dentro del if ' + edad);
// }
// console.log('Edad fuera del if ' +  edad);
// let estatura = 180
// estatura = 200
// if (true) {
//     let estatura = 178
//     estatura = 220
//     console.log('Estatura dentro del if ' +  estatura);
// }
// console.log('Estatura fuera del if ' +  estatura);
// const: Declara una variable que no puede ser reasignada. Debe ser inicializada en el momento de la declaracion.
// const PI = 3.14
// console.log('El Valor de PI es ' + PI);
// const persona = {
//     nombre : "Gustavo",
//     edad : 38
// }
// console.log(persona);
// persona.edad = 31
// persona['nombre'] = 'Kendy'
// console.log(persona);
// Esto no me lo permite
// const persona = { 
//     nombre : "Gustavo",
//     edad : 38,
//     estatura : 178
// }
// console.log(info);
// persona.estatura = 165
// console.log(persona);
// const listanumeros = [1,2,3,4,5]
// console.log(listanumeros);
// listanumeros.push(6, 10)
// console.log(listanumeros);
// listanumeros.splice(6, 1, 7) // La primera es la posicion donde se va a insertar el numero, el segundo es para eliminar o no ese numero, y el tercero es para colocar el numero que va a sustituir o agregar.
// console.log(listanumeros);
// const info = {
//     nombre : "Gustavo",
//     edad : 38
// }
// console.log(info);
// let num: number 
// let nombre: string
// const arr: number [] = [1,2,3,5,7]
var obj = {
    consola: 'PS5',
    arquitectura: 'nvidia',
    cpu: 'Chip M20',
    memory_ram_gb: 8
};
console.log(obj);
// num = 7
// nombre = 'Gustavo' 
// console.log(num == 7);
// if (nombre === '6') {
//     console.log('Si es Igual');
// }else{
//     console.log('No es igual');
// }
// Ciclos en Typescript
// for (inicializacion; condicion; incremento) {
// codigo a ejecutar
// }
//----------------------------------------------------------------//
// i++; esto es igual a escribir i = i + 1 o i += 1
// Si lo queremos aumentar de 2 en 2 seria: i = i + 2 o i += 2
// let i : number
// for (let i = 0; i <= 5; i++) {
//     // console.log('Numero: ' + i);
//     // console.log('Numero: ', i);
//     console.log(`Numero dentro del for: ${i}`);
// }
// let n: number = 0
// const frutas: string[] = ['Cambur', 'Pera', 'Manzana', 'Fresa']
// while (n < frutas.length) {
//     // console.log(`Numero dentro del while: ${n} `);
//     console.log(`Numero dentro del while ${n} | ${frutas[n]} `);
//     n++
// }
// El do  while; ss similar al while, con la diferencia que este se va a ejecutar por lo menos una vez
// let band: boolean = true
// do {
//     console.log(`El valor de mi bandera es: ${band}`);
//     band = false    
// }while (band);
// For of; esto se utiliza para iterar sobre los elementos de una coleccion 
// for (elemento of iterable) {
// }
var nombres = ['Gustavo', 'Kendy', 'Mathias'];
for (var _i = 0, nombres_1 = nombres; _i < nombres_1.length; _i++) {
    var element = nombres_1[_i];
    console.log("El elemento es: ".concat(element));
}
// for in; se utiliza para iterar sobre las propiedades de un objeto 
var persona = {
    nombre: "Kendy",
    edad: 31,
    ciudad: "Guarenas"
};
for (var clave in persona) {
    console.log("".concat(clave, ": ").concat(persona[clave]));
}
