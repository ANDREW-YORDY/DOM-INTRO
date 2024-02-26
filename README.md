# DOM-INTRO
Aprendiendo sobre el DOM. Introducción.


*ARRAAY & OBJECT.

//MÉTODOS NATIVOS:

OPERATOR --> nullish coalescing (??)
let nameVar= "Nom Variable".
userInput = nameVar ?? "Esto se imprime si nameVar es null o undefined, sino se muestra su valor asignado normal".


OPERATOR --> delete
// Elimina la propiedad de un Objeto.
delete nameObj.nameProp.


Method -->  Object.assign()
//Copia todos los valores de las propiedades sin incluir las heredadas, de un objeto fuente(sources) a un objeto destino (target).
const objSource = { a:1, b:2 }
const objTarget = { c:3, c:4 }
const resultObj = Object.assign(objTarget, objSource). 
priint resultObj -> Output: { a:1, b:2, c:3, c:4 }.
priint objTarget -> Output: { a:1, b:2, c:3, c:4 }.


Method --> structuredClone(object)  
// Este método de bajo nivel, clona el objeto con todas sus propiedades anidadas o serializado.


Meta propiedad --> new.target
//es una meta-propiedad especial de JS, se usa dentro de las funciones constructoras, determina si la funcion se ha llamado con el operador (new) o nó.
Devuelve undefined si la llamada no se hizo co new, sinó devuelve la función.
function User(){ alert(new.target) }.


Sintaxis encadenamiento Opcional  -->  ?
// Permite acceder a las propiedades de un objeto, que puede ser null o undefined, sin provocar error de "TypeError". "Funciona con funciones y corchetes".
const  nombre = persona?.nombre;
// Si persona es null o undefined, (nombre) será undefined; de lo contrario será el valor de la propiedad "nombre" de "persona".


Symbol  --> Symbol()
Los Symbol proporcionan una forma de crear identificadores únicos que pueden ser utilizados como claves de propiedades de objetos. Esto es útil cuando se necesita garantizar que las propiedades de un objeto no entren en conflicto con las propiedades definidas por otros códigos.
Symbol  --> Symbol.for(key)
Esta llamada revisa el registro global, y si existe un symbol descrito como key, lo retornará; de lo contrario creará un nuevo symbol Symbol(key) y lo almacenará en el registro con el key dado.


Method native  -->  Object.is()
Compara valores al igual que (===).

