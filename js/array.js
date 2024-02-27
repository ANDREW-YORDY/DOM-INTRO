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

/**
 * MÉTODOS -->  pop/push  -  shif/unshift
 */

//Tipo Cola(FIFO): Colección ordenada de elem.
// Push    --> Inserta o agrega un elem al final.
// Pop     --> Toma u obtiene un elemn desde el final.
// Shift   --> Obtiene el elem del princpio, avanzando la cola.
// Unshift --> Agrega el elem al principio del array.

console.log( universe.shift() );
console.log(universe);
console.log( universe.shift() );
console.log(universe);

console.log( universe.unshift('Nebula') );
console.log(universe);

console.log( universe.push('Star, Marcian') );
console.log(universe);

console.log( universe.pop() );
console.log(universe);


// Los métodos push/pop son rápidos, mientras que shift/unshift son lentos.


/**
 * Bucles   ---->
 */

const arrLoop = [ 'elementOne', 'elementTwo', 'elementThree',  ];

console.log("\n"+"*** for ***");

for (let x = 0; x < arrLoop.length; x++){
    console.log(arrLoop[x]);
};

console.log("\n"+"*** for of ***");

for ( let value of arrLoop ){
    console.log(value);
};

console.log("\n"+"*** for in ***");

// No se debe usar for-in en array.
for ( let key in arrLoop ){
    console.log(arrLoop[key]);
};

//****** new Array() */
const arrNew = new Array( "Elem1", "Elem2", "Elem3", );


const matrix = 
[ 
    [1, 2, 3],  
    [4, 5, 6],
    [7, 8, 9],
];

console.log( matrix[2][1] );  // output: 8

const matrixx = 
[ [ [1, 2, 3],  [4, 5, 6] ,[7, 8, 9] ], [10, 11] ];

console.log( matrixx[0][2][0] );  // output: 7


console.log(arrLoop);
console.log(String(arrLoop));





