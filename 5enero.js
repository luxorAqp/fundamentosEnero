
//guardar cambios: ctrl + s 

/*
let userName = null
console.log( userName )
*/
//undefined --> no esta definido, carece de valor significativo
//null --> carece de valor. Suele ser asignado de forma explicita

//OPERADORES DE ASIGNACION
/*
let contador = 10
console.log( contador )
contador += 5 // 10 + 5 = 15
console.log( contador ) 
contador -= 3 // 15 - 3 = 12
console.log( contador )
contador *= 2 // 12 * 2 = 24
console.log( contador )
contador /= 6  // 24 / 6 = 4
console.log( contador )
*/

/*let number1 = 26
let newNumber = 10  

newNumber += number1
console.log( newNumber )
*/

//OPERADORES ARITMETICOS

let suma = 10 + 10
console.log( suma )

//concatenenación
let concatenarString = "10" + "10"
console.log( concatenarString )

console.log( typeof suma ) 
console.log( typeof ( concatenarString ) )

let sumaStringNumber = 10 + "diez" 
console.log( sumaStringNumber )

//resta
let number1 = 10
let number2 = 5

/*
let resultadoResta = number1 - number2 //10 - 5
console.log( resultadoResta )

let restaString = "Esta es una cadena" - "palabra" //NaN
console.log( restaString )
*/
/*
NaN --> Not a Number. Se obtiene al realizar 
operaciones que NO producen resultados significantes
typeof NaN --> number (es de tipo number)
Es un numero especial.
*/

/* Valores especiales en los numeros
se consideran numeros pero no se comportan como tal
--> Infinity
--> -Infinity
--> NaN
*/

/*//Resta booleanos
let restaBooleanos = false - true // 0 -1
console.log( typeof restaBooleanos )

//PARSEINT() conversion explicita de tipo

let brendaAge = "26"
console.log( typeof brendaAge )
brendaAge = parseInt( brendaAge )
console.log( brendaAge )

console.log( parseInt( "Brenda" ) ) //NaN (tipo number)
console.log( parseInt( true ) )
console.log( parseInt( false ) )
*/
/*
//Multiplicaciones

let resultadoMultiplicacion = number1 * number2
console.log( resultadoMultiplicacion )

console.log( number1 * "7" )
console.log( number1 * "gato" ) //10 * NaN = NaN

//Division
let resultadoDivision = number1 / number2
console.log( resultadoDivision )

console.log( "Juno" / 5 ) //NaN / 5
console.log( "100" / "20" ) // 5 (las conversiones si dan como resultado valores numericos)
console.log( -100 / 0 ) // -Infinity
console.log( 12/5 )
*/

//Residuo %
/*let resultadoResiduo = number1 % number2 // 10 % 5
console.log( resultadoResiduo )
console.log( 20 % 3 )
console.log( "10" % 3 )
console.log( 80 % 3 )
console.log( 5 % 10 )

let negativo = -number1
console.log( negativo )
console.log( -negativo ) // -(-10) --> 10
*/
/*console.log( ++number1 ) //El incremento sucede antes
console.log( number1 )
console.log( number1++ )
console.log( number1 )
*/

//console.log( --number2 ) //El decremento sucede antes
//console.log( number2-- )

//COMPARACIONES

//Igualdad simple ==

/*console.log(number1 == number2 ) // 10 == 5
console.log( 100 == 100 )
console.log( "brenda" == "BRENDA" )
console.log( "gato" == "gato" )
console.log( "100" == 100 )
console.log( undefined == undefined )
console.log( undefined == null )
console.log( false == false )
console.log( false == 0 )
*/

//Igualdad estricta === 

/*
console.log(number1 === number2 ) // 10 === 5
console.log( 100 === 100 )
console.log( "brenda" === "BRENDA" )
console.log( "gato" === "gato" )
console.log( "100" === 100 )
console.log( undefined === undefined )
console.log( undefined === null )
console.log( false === false )
console.log( false === 0 )
*/
