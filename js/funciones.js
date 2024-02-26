/*
  * FUNCIÓN: Bloque de código qeu realiza una tarea específica.
  * MÉTODO:  Función, o bloque de código, pero asociado a un objeto o clase específicos.
*/


/*
 * Funcion con variable global e interna, sin parámetros
 */
let varExt = "Variable Externa";

function showMessage() {
  console.log(varExt);
  let varInter = "variable interna";
  console.log(varInter);
}
showMessage();
// La variable externa solo se usa si no hay una local.

/*
 * Funcion con variable interna, con parámetros
 */
function showMessageTwo(saludo, nombre) {
  console.log(saludo + " My " + nombre);
}
showMessageTwo("Hola", "Amorcito");
let saludo = "Que hay!";
showMessageTwo(saludo, "Amorcito");
// parámetro:  cuando esta dentro de los parentesis, y cuando se está apenas declarando en la función.
// Argumento:  Es el valor pasado a la función, cuando ésta es llamada.

/*
 * Funcion con otra fncion, como parámetro.
 */
function showAltern() {
  console.log("Funcion parámetro alterna");
}
function showMessageThree(saludo, alterno = showAltern()) {
  // console.log(saludo+" : "+alterno);
  showAltern();
}
showMessageThree("Haris");

/*
 * Funcion con condición o comparación, si se le está pasando o nó, un argumento.
 */
function showMessageFour(saludo) {
  saludo = saludo || "vacío"; // si no hay parámetro, imprime 'vacío'.
  console.log(saludo);
}
showMessageFour(); // undefined o sin parámetros(vacio).


/*
 * Funcion con operador nullish coalescing.
 */
function showMessageFive(edad) {
  console.log(edad ?? "sin definir edad");
  // Si edad es igual a null o undefined, imprime "sin definir edad";
}
showMessageFive();
//showMessageFive(21);

/*
 * Funcion devolvienddo un valor al código de llamada.
 */
// function sum(a, b){
//     return a + b;
// };
// console.log(sum(2,6));


/*
* NOMENCLATURA DE FUNCIONES:

showMessage(..)     // muestra un mensaje
getAge(..)          // devuelve la edad (la obtiene de alguna manera)
calcSum(..)         // calcula una suma y devuelve el resultado
createForm(..)      // crea un formulario (y usualmente lo devuelve)
checkPermission(..) // revisa permisos, y devuelve true/false
*/

/*
Sintaxis - Declaración de Función:
function sayHi() {
  alert( "Hola" );
}

Sintaxis - Expresión  de Función:
let sayHi = function sayHi() {
  alert( "Hola" );
}
*/


// FUNCIÓN FLECHA:

// Tipo expresion:
// let func = (arg1, arg2, ..., argN) => expression;

// // version larga o comun:
// let func = function(arg1, arg2, ..., argN) {
//   return expression;
// };

//Con varios argumentos, y sin llaves ni return, (1 sola linea)
let sum = (n1, n2) => n1 + n2;
console.log(sum(3,1));

// Sin parentésis, si solo contiene un argumento, se pueden omitir los paréntesis:
let sumt = n => n * 4;
console.log(sumt(5));

// * Sin parámteros, Si no tiene parámetros, se dejan vacíos los paréntesis, no se eliminan:
let sumth  = () => 3 + 3;
console.log(sumth());

//Tipo expresión de función(se guarda en variable):
//F.F SIMPLE
/*
let age = prompt("Whats is your age?", 18);

let quest = (age < 18) ? 
() => console.log("No puedes pasar") : 
() => console.log("Adelante");

quest();
*/
// (arg1 < arg2) ? alert("True") : alert("False"); - Esto es lo mismo que un if()-else{}.


//F.F Multilínea:
// Las ff multilineas se les añade obligatorio las {}.
// La diferencia radica en que las {} necesitan usar (return), para devolver un valor.

let divi = (n3, n4) => {
  let resultado = n3 / n4;
  return resultado;
};
console.log("Resultado división = " + divi(16, 2));


console.log("**************************");


let animal = {
  nombre: "Delphin",
  category: 1
};

animal.objVer = function(){
  console.log("Whats Happend!");
};
animal.objVer();
console.log(animal.nombre);

//**

const objText =  { name: "textObj", num: 3 }

function verFunc(){
  console.log("Función objeto");
};
objText.f = verFunc;
objText.f();       //LLama a la método.
// objText['f'](); //LLama a la método.


// Función Constructora.
function Libros(name){
  this.name = name;
  this.num  =  6;
};

let ObjtextConstr = new Libros("Harry Potter"); // Constructor
console.log(ObjtextConstr.name);

// Constructor de Función:
let Biblioteca = new function(){
  this.libro =  "Harry Potter";
  this.author=  "J.K Rouling";
};
// Este constructor no puede ser llamado de nuevo, solo se  crea y se llama. No tiene futura reutilización.


// Encadenamiento Opcional: "?"

// Ejecuta el llamado de la funcion o métodos null o undefined, sin arrojar error..
let userAdmin = {
  admin(){
    console.log("I am Admin!");
  },
};

let userGuest = { };

userAdmin.admin?.();  //  Ejecuta con normalidad la función.
userGuest.admin?.();  //  No ejecuta nada, ni errores.




