/* BUCLES - LOOPS.
 * Recorrer o iterar cada li de la linta ul con id -> lista-ul
 */

// --> while:     *******************************************************************************************while

// Primero, se obtiene la lista ul:
// let lista = document.getElementById("lista-ul");

// Segundo, se obtiene la cantidad de elementos li de la lista ul, usando lamlista obtenida previamente:
// let elementos_lista = document.getElementsByTagName('li').length;  //cod errado
// let elementos_lista = lista.getElementsByTagName('li');

// let cont = 0;

// while ( cont < elementos_lista.length ) {  //se obtiene la longitud de la lista
//     console.log(elementos_lista[cont].textContent);  //se accede al contenido de cada li.
//     cont ++;
// };

// --> do while:  ****************************************************************************************do while

// do{
//     console.log(elementos_lista[cont].textContent);
//     cont++;
// }while( cont < elementos_lista.length )

// -->  for:      ********************************************************************************************for

// for(cont; cont < elementos_lista.length; cont++ ){
//     console.log(elementos_lista[cont].textContent);
// }

// -->  for in:  --> Itera a Propiedades del objeto:     *************************************************for in

// const fruta   = { nombre: "Mango", color: "amarillo", unidad: 2 };

// const frutas  = [
//                     { nombre: "Mango", color: "amarillo", unidad: 2},
//                     { nombre: "Fresa", color: "rojo",     unidad: 6},
//                     { nombre: "mamon", color: "verde",    unidad: 9}
//                 ];

// const frutera = [
//   { nombre: "Donde Haris", local: 10, DIR: 1234 },
//   { nombre: "Lulos manga", local: 7 },
// ];

// array (fruta) ---> uno solo:
// for( propiedad in fruta ){
//     // console.log(fruta); // imprime todo el objeto completo
//     // console.log(propiedad); // imprime solo la llave
//     console.log(propiedad+": " +fruta[propiedad]);  // imprime las propiedades de cada llave.
// };
// console.log("************* for in **************"+"\n\n");

// array (frutas) ---> array con sub arrays arrays:
// for( indice in frutas ){
//     // console.log(frutas);
//     console.log("");
//     console.log("[ "+indice+" ]");
//     // console.log(frutas[indice]);  // imprime cada objeto por separado
//     for( propiedades in frutas[indice] ){
//         // console.log( propiedades );  // Imprime solo la llave de cada objeto.
//         // console.log( frutas[indice][propiedades] );  // Imprime solo las propiedades.
//         console.log(propiedades + ": " + frutas[indice][propiedades] );
//     };
// };

// for (index in frutera ) {
//     console.log("");
//     console.log("<"+index+">");

//     // for( propiedad2 in frutera ){
//     for( propiedad2 in frutera[index] ){

//         // console.log(frutera+"-");                   // [object Object],[object Object]-
//         // console.log(propiedad2+"--");               // 0--   ---> nombre clave
//         // console.log(frutera[frutera]     +"*");     // undefined*
//         // console.log(frutera[propiedad2]  +"**");    // [object Object]**
//         // console.log(propiedad2[frutera]  +"***");   // undefined***
//         // console.log(propiedad2[index]    +"****");  // 1*****

//         console.log(propiedad2   +": ");
//     };
// };

// const granero = [
//   [
//     { nombre: "verdurera", local: 1 },
//     { nombre: "granero-1", local: 2 },
//   ],
//   [
//     { nombre: "frutas", local: 3 },
//     { nombre: "granero-2", local: 4 },
//   ],
// ];

// const tienda = [{
//     nombre: "tienda divina",
//     dir:    "calle 6",
//     local:  5
// }];

// BUCLE CON ERROR DE ITERECIÓN. (for in), NO ES RECCOMENDABLE PARA BUCLES ANIDADOS. Usar (for of)
// for( index in granero ){
//     console.log(" esp1");

//     for( propiedad01 in granero[index] ){
//     console.log(" esp2");
//     console.log(propiedad01+"=" +granero[index][propiedad01]);

//         for( propiedad02 in granero[propiedad01] ){
//             console.log(propiedad02+": " +granero[index][propiedad02][propiedad02]);
//         };
//     };
// }; // X ERROR X:
// El bucle interno anidado (for (propiedad02 in granero[propiedad01])) intenta iterar sobre las propiedades de cada objeto dentro del array granero. Pero aquí está el error crucial.
// El error: En la línea for (propiedad02 in granero[propiedad01]), granero[propiedad01] intenta acceder al objeto dentro del array granero usando propiedad01 como índice. Sin embargo, propiedad01 es una cadena que representa el nombre de una propiedad, no un número que pueda usarse como índice de array. Por lo tanto, este acceso no está funcionando como se esperaba y generará un error.
// Cómo solucionarlo: Necesitamos asegurarnos de que propiedad01 sea un número para usarlo como índice de array. La mejor manera de hacer esto es usar un bucle for-of en lugar de for-in para iterar sobre los elementos del array granero. Veamos cómo se vería el código corregido:

// BUCLE CORRECTO, DE ITERECIÓN. CORRECIÓN Y COMPARATIVA CON EL BUCLE for in DE ARRIBA.
// for (let arrayInterno of granero) {
//     // console.log("esp1");

//     for (let objeto of arrayInterno) {
//         // console.log("esp2");
//         console.log(" ");

//         for (let propiedad in objeto) {
//             console.log(propiedad + ": " + objeto[propiedad]);
//         };
//     };
// };

// -->  for of:  --> Itera a Propiedades del objeto:     ***********************************************for of
// Itera sobre objetos iterables , extrayendo sus valores:

// const bar = ["nombre bar", "bar 1", 9];

// for( let valor of bar ){
//         // console.log("+");
//         console.log(valor);     // --> Normal
//         // console.log(bar);
//         // console.log(bar[1]);
//         // console.log(bar[valor]);
// };
// console.log("************* for of **************"+"\n\n");

// const bar_interior = [
//   {
//     nombre: "bar interior",
//     dir: "calle 6",
//     local: 5,
//   },
// ];

// for (objExt of bar_interior) {
//   console.log("objeto externo: ");
//   console.log(" ");

//   for (const iterator in objExt) {
//     console.log(iterator + ": " + objExt[iterator]);
//   };
// };

// -->  for of:  --> Itera a Propiedades del objeto:     ********************************************** for each

// array* sencillo:
const helado = ["ron con pasas", "cremoso", 4];

// array de dos niveles:
const helados = [["fresa", "batido", 2]];

// objeto* sencillo:
const obj_helado = {
  nombre: "helado fres",
  color: "combinado",
  unidad: 8,
};

// objeto de dos niveles x1
const heladeria_x = [[{ nombre: "helados col", ciudad: "baq", numero: 1 }]];

// objeto de dos niveles x2
const heladeria_y = [
  [
    { nombre: "helados col2", ciudad: "baq2", numero: 1 },
    { nombre: "cream helad", ciudad: "med", numero: 2 },
  ],
];

helado.forEach((element) => {
  // console.log(element);
});

helados.forEach((element) => {
  // console.log(element);
  element.forEach((iteracion) => {
    // console.log(iteracion);
  });
});

// ERROR:  No se puede usar o iterar con forEach, a un OBJETO.
// obj_helado.forEach(element => {
//   // console.log(element);
// });

// ERROR:  No se puede usar o iterar con forEach, a un OBJETO.
// heladeria_x.forEach(element => {
//   // console.log(element);
//   element.forEach(iteracion => {
//     // console.log(iteracion);
//     iteracion.forEach(cirujia => {
//       // console.log(cirujia);
//     });
//   });
// });

// *
// conclusión - clasificación de loops:
// *

/*
1. while
2. do while
3. for
4. for in
5. for of
6. forEach
*/

const arrayy = ["primer array", 1, "finAarray"];
const objectt = {
  nombre: "objeto uno",
  numero: 2,
};
let cont = 0;

console.log("POINT CONTROL");
console.log(typeof objectt);
console.log("");

// ** ARRAY **

// 1
// array
while (cont < arrayy.length) {
  console.log("Print bucle while    - " + "Array: " + arrayy[0]);
  cont++;
}
// object
while (cont < objectt.length) {
  console.log("Print bucle while  - " + "object: " + objectt);
  cont++;
}
/* en este bloque, el error radica, en que no es posible iterar un objeto con while, sino
solo con for in. Y el otro error, radica en que la propiedad length, no existe en 
los objetos, sino; solo en los arrays:
solución:
for (const propiedad in objectt){
  console.log("propiedad: "+propiedad+" valor: "+objectt[propiedad]);
};
 */

console.log("**************************");

// 2
//array
do {
  console.log("Print bucle do while - Array: " + arrayy[2]);
  cont++;
} while (cont < arrayy.length);

//object
do {
  // console.log("Print bucle while - " +objectt);
  cont++;
} while (cont < objectt.length);
/* en este bloque, el error radica, en que no es posible iterar un objeto con do while, sino
solo con for in o usando Object.keys(). Y el otro error, radica en que la propiedad length, no existe en 
los objetos, sino; solo en los arrays:

Object.keys(objectt).forEach(propiedad =>{
  console.log(" Print bucle forEach - Propiedad: "+propiedad+", valor: "+objectt[propiedad]);
}); */

console.log("**************************");

// 3
//array
for (let contt = 0; contt < arrayy.length; contt++) {
  console.log(
    "Print bucle for: " + "Array # " + contt + ", valor: " + arrayy[contt]
  );
}

//object
for (let contt2 = 0; contt2 < objectt.length; contt2++) {
  console.log("Print bucle for: " + "Objeto # " + objectt[contt2]);
}
/* en este bloque, el error radica, en que no es posible iterar un objeto con el bucle for, 
sino, solo con for in */

console.log("**************************");

// 4
//array
for (propiedad in arrayy) {
  console.log("POSITION: " + propiedad + " - VALUE: " + arrayy[propiedad]);
}

//object
for (propiedad in objectt) {
  console.log("PROPERTY: " + propiedad + " - VALUE: " + objectt[propiedad]);
}

console.log("**************************");

// 5
//array
for (valor of arrayy) {
  console.log("Print for of: " + valor);
}

//object
// for (valor of objectt){
//   console.log(valor);
// };
/* en este bloque, el error radica, en que no es posible iterar un objeto con el bucle for of, 
sino, solo con for in, ya que para acceder a la propiedad del objeto, solo se puede con
la iteración for in */

console.log("**************************");

// 6
//array
arrayy.forEach((iteracion) => {
  console.log("Print forEach - Array: " + iteracion);
});

//object
// objectt.forEach(iteracion =>{
//   console.log(iteracion);
// });

// Object.keys(objectt).
console.log(" ");
Object.keys(objectt).forEach((iteracion) => {
  console.log(
    "Object.Keys.forEach- PROPERTY: " +
      iteracion +
      " - VALUE: " +
      objectt[iteracion]
  );
});

// console.log("*************conclusion*************");

/*  BUCLE           APLICACIÓN

    while     -->   array         
    do while  -->   array
    for       -->   array
    for in    -->   array, object : property/value
    for of    -->   array         : value
    forEach   -->   array, object(Object.keys().)
*/

// console.log("********************************");
// console.log("********************************");

// for (let x = 0; x < 10; x++) {
//   console.log("   * ");

// //   for (let y = 0; y < 10; y++) {
// //     let v =+ " ** ";
// //     let b.int = v;
// //     console.log(v+2);
// //   };
// // };


// SENTENCIA switch case:
// let arg = prompt("Ingrese un valor");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'Uno o cero' );
//     break;

//   case '2':
//     alert( 'Dos' );
//     break;

//   case 3:
//     alert( '¡Nunca ejecuta!' );
//     break;
//   default:
//     alert( 'Un valor desconocido' );
// };
