// array

const numeros = [ 1, 2, 3, 4, 5 ]; 
const animals = [ "Loro", "Perro", "Gato", "Pez", "Buho" ]; 
show(animals);
showDom("array_1", animals);

function show(arr){
    for( let i = 0; i<animals.length; i++ ){
        console.log(animals[i]);
    };
};

function showDom(element, arr){
    document.getElementById(element).innerHTML ="";
    for(let i = 0; i<arr.length; i++){
        document.getElementById(element).innerHTML +=
        `<div>${arr[i]}<div>`;
    };
};




















