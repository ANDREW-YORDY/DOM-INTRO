console.log("**** Array Methods ****"+"\n\n");


// Splice:
// Elimina un elem del Array, y su posición también.
let arr = [ "Luxury", "Ment", "Dinner", "Evolution", "ultElem", ];
console.log(arr);
console.log(arr.length);


// Delete:
// Elimina un elem del Array, pero solo el valor.
delete arr[2];
console.log(arr);
console.log(arr[2]);
console.log(arr.length);

// Splice:
// Inserta, Remueve y Reemplaza, elem.
// arr.splice(start[, deleteCount, elem1,...elemN]):
arr.splice( 1, 1 );
console.log(arr);
console.log(arr.length);
// Removiendo 3 elem y se reemplazan con 2.
arr.splice( 0, 3, "AddElem1", "AddElem2", )
console.log(arr);
console.log(arr.length);














