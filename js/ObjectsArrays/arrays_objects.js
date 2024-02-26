
const DivFather = document.getElementById('arrayDiv');
let divNew = document.createElement('div');
let divSubNewLeft = document.createElement('div');
let divSubNewRigth = document.createElement('div');
divNew.textContent = "Este es un texto añadido al nuevo div";

DivFather.style.margin = "5%"
DivFather.style.padding = "3%"

divNew.style.backgroundColor = "1B1A55"
divNew.style.color = "FEFBF6";
divNew.style.padding = "10%"
divNew.style.marginTop = "4%"
divNew.style.margin = "auto"
divNew.style.border = "solid 1px #cec7c7"

divSubNewLeft.style.border ="2px solid #cec7c7"
divSubNewLeft.style.padding ="7%";
divSubNewRigth.style.padding ="7%";
divSubNewRigth.style.border ="2px solid #cec7c7";

// Añado el nuevo div como hijo del div existente en el fichero html.
DivFather.appendChild(divNew);
divNew.appendChild(divSubNewLeft);
divNew.appendChild(divSubNewRigth);

console.log("Div Padre: " + DivFather);
console.log("Div Hijo : "  + divNew.innerHTML);


/*
//OBJETOS:
*/

//Nombre de propiedad de dos palabraas.
let user = {
    name: "John",
    age: 30,
    "likes birds": true  // Las claves con más de una palabra deben ir entre comillas
  };
let codes = {
    "15": "COL",
    "11": "ARG",
    "17": "SWI",
    "13": "GER",
};

/* La notación de punto no funciona para acceder a propiedades con claves de más de una palabra:
*  Esto nos daría un error de sintaxis
/* user.likes birds = true */

// Nota que a la izquierda de in debe estar el nombre de la propiedad que suele ser un string entre comillas.
// Si omitimos las comillas, significa que es una variable. 
// alert( "name" in user ); 
// mostrará "true", porque user.name sí existe.
// alert( "blabla" in user ); 
// mostrará false, porque user.blabla no existe

for (let key in user){
    console.log(key);        //Propiedad
    console.log(user[key]);  //Valor
};

for (let key in codes){
    console.log(key);
    console.log(codes[key]);
};
// Notese que este loop, ordena por defecto los elementos.

// Eliminar unaa propiedad:
// delete obj.prop;


// CLONACIÓN Y MEZCLA, Objectt.assign:

let users = {
    name: "Propio",
    age:  "28"
};

// is created, the new empty object.
let clone = {};

// we copy all the user properties, in the:
for (let key in users){
    clone[key] = users[key];
};
clone.name = "New Name"
console.log(clone.name);
console.log(users.name);

/* También se usa el método assign(). El cual copia todas las propiedades de uno o 
 * más objetos fuente a un objeto destino, y devuelve el objeto destino.
*/
let resources = {
    adress: "Calle2",
    age: 21,
};

Object.assign(users, resources);
console.log(users);  // Imprime users, pero con las propiedades nuevas modificadas y añadidas.
Object.assign(users, {name: "Jorge Curioso"}); // Otra manera.
console.log(users);

//Otra manera:
//Simple Cloning:
let clone2 = Object.assign({}, users);
console.log(clone2);

//Nested Cloning:
let user_nested = {
    name: "puritico",
    age: 16,
    size: {
        height: 1.85,
        kg: "78kg",
    },
};
console.log(user_nested.size);

let clone3 = Object.assign({}, user_nested);
console.log(clone3.size);
console.log(user_nested.size === clone3.size);
// user_nested.size.kg = "65kg";
console.log(clone3.size.kg); //65kg, obtiene el resultado desde el otro.

/* Para corregir lo anterior, y lograr que la propiedaad size
del nuevo objeto creado clone3, se modifique y muestre talvalor, y no el del objet clonado,
tanto user_nested como clone3, deben ser separados, se aplica la clonación profunda (deep cloning).
*/

// Deep Cloning:
// structuredClone(object)  
// Este método clona el objeto con todas sus propiedades anidadas.

let clone_nested = structuredClone(user_nested);

user_nested.size.kg = "80kg";
console.log("kg user_nested  " + user_nested.size.kg);
console.log("kg clone_nested " + clone_nested.size.kg); 
// imprime el valor original clonado inicial, es decir, user_nested y clone_nested están totalmente separados.

console.log(user_nested.size);
console.log(clone_nested.size);


console.log("\n"+"**********CREANDO MÉTODOS DENTRO DEL OBJETO********"+"\n\n");

let continente = {
    name: "America",
    num:   1,
    sum(){
        return 4 + 4;
    },
    abrevInternVar(name){
        let nameAbrev;
        nameAbrev = name;         // nameAbrev-> Hace referencia a la variable local de éste mismo método.
        return nameAbrev;
    },
    abreveExternVar(name){
        return this.name = name;  // this.name-> Hace referenccia a la propiedad inicial name del objeto. 
    },
};
console.log(continente);
console.log(continente.name);
console.log(continente.sum);
console.log(continente.sum());
console.log(continente.abrevInternVar("Funcion con argumento {ref-var-local}"));
console.log(continente.name);
console.log(continente.abreveExternVar("Funcion con argumento {ref-var-obj}"));
console.log(continente.name);  // contiene el nuevo valor añadido por el métoddo abreveExternVar().


// Recommendation: usar this.nameProp y no nameObj.nameProp.


// CONSTRUCTOR:

// Se pueden omitir llos paréntesis:
/*
let user = new User();
let user = new User;
*/
// Ambos casos, son lo mismo.


// Encadenamiento Opcional: "?"

// Ejecuta el llamado de la funcion o métodos null o undefined, sin arrojar error..
let key = "firstName";

let user1 = {
    firstName: "Jarys",
};
let user2 = { };

console.log(user1?.[key]);
console.log(user2?.[key]);  // undefined
console.log("**delete ?**")
//Tambien se puede usar ?. con delete:
delete user1?.firstName;
console.log(user1?.[key]);


// Symbol()  --> tipo de datos primitivos.

// Es un valor único e inmutable que se utiliza como identificador de propiedad para evitar 
//*colisiones de nombres de propiedades cuando se trabaja con objetos, con codigos de terceros.
const mySymbol = Symbol();

const objSymb = {
    [mySymbol]: 'Valor de Symbol',    //Usando Symbol como clave de propiedad.
};

console.log(objSymb[mySymbol]);      //Accede a la propiedad usando el Symbol.

// Symbol.for(key)  -->  Symbols Globals.

//*Esta llamada revisa el registro global, y si existe un symbol descrito como key, lo retornará;
// de lo contrario creará un nuevo symbol Symbol(key) y lo almacenará en el registro con el key dado.

//  leer desde el registro global
let id = Symbol.for("id"); // si el símbolo no existe, se crea

// léelo nuevamente (tal vez de otra parte del código)
let idAgain = Symbol.for("id");

// el mismo symbol
// alert( id === idAgain ); // true







