
//Comentarios: Texto que es ignorado en el momento de la ejecución
// Comentario de una linea

/* 
Comentario
de multiples
lineas
*/

//PALABRAS RESERVADAS: Palabras o terminos que tienen un uso especifico dentro del lenguaje

//camelCase
//let nombreDeLaVariable = dato

let variableNumber = 10;
let variableNumberDecimal = 3.5;
let varianleNumberNegativo = -100

let variableString = "Esto de una cadena de texto % . _ ";
let variableStringNumero = '100'
let variableSringConComillas = 'Mi libro favorito es: "La nausea"';

let variableBooleanVerdadera = true;
let variableBooleanFalsa = false;

console.log( variableNumber );
//REASIGNACIÓN
variableNumber = 200;
console.log( variableNumber );
variableNumber = "ESTA ES UNA REASIGNACION";
console.log( variableNumber );

console.log( variableString );

/* ; solo es necesario cuando la siguiente 
instruccion empieza con alguno de los siguientes caracteres
()
[]
{}
*/


//Alcance / scope

/*
    let --> alcance local
    var --> alcance global
*/
var userName = "Brenda Gonzalez";
console.log( userName );

userName = "Esta es otra cadena";
console.log( userName );

//const 

const PI = 3.1416
console.log( PI )
/*
no permite REASIGNACIONES
PI = 300
*/
