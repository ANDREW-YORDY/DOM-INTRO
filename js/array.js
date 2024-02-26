console.log("*** Array ***"+"\n\n");


// Sintaxis
let arrx = new Array();
let arry = [];


const universe = [ "Galaxy", "Planet", "Moon" ];
const Planet   = [ "Terra", {name: "My World."}, true, function(){console.log("f.elem.array!");} ];


console.log(universe[2]);  // Acceder a un elem específico.

universe[2] = "Asteroid";  // Reemplazar el elem.
console.log(universe[2]);

universe[3] = "New Asteroid";  // Agregar nuevo elmen.
console.log(universe);
console.log(universe.length);  // Verificar longitud del array.

//Almacenando elem de varios tipos. (Obtener el obj del indice 1, y mostrar su elem).
console.log(Planet[1].name);

//Accediento al array 3, o a la funcion de este, y ejecutarla.
Planet[3]();

// Obtener el último elem del array.
console.log(universe[universe.length -1]);
// O mejor con at()
console.log(universe.at(-1) +" at()");













