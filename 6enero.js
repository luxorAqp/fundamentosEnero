
//DIFERENCIA

//Diferencia simple !=
    /*
    console.log( 10 != 100 ) // 10 diferente de 100
    console.log( 20 != "20" ) //false
    console.log( true != 1 ) //false
    console.log( "b" != "B" )
    */

//Diferencia estricta !==
/*    console.log( 10 !== 100 )
    console.log( 20 !== "20" ) //true --> Son diferentes entre si
    console.log( true !== 1 ) //true 
    console.log( "brenda" !== "Brenda" ) //true --> las comparaciones son sensibles a mayusculas, minusculas
*/
//Mayor que > 
    /*
    console.log( 10 > 100 ) //10 mayor que 100 --> false
    console.log( -100 > -150 )
    console.log( 12 > 10 )
    console.log( "brenda" > 100 )
    console.log( "brenda" > "BRENDA" ) //Esta comparando los valores de los caracteres
    */
//Menor que <
    /*
    console.log( 5 < 10 ) //5 menor que 10
    console.log( -50 < -100 ) //false
    console.log( "b" < "B" )
    console.log( 10 < 10 )
    */

//Mayor o igual que >= 
   /*
    console.log( 10 >= 10 )
    console.log( 10 >= 5 )
    */

//Menor o igual que <=
   /* console.log( 5 <= 5 )
    console.log( 10 <= 100 )
    console.log( 10 <= 5 )
    console.log( "brenda" <= 10 )
    */


//OPERADORES LOGICOS
/*
    Nos ayudan a operar datos de tipo booleano
*/
const DATO1 = true //verdadero V
const DATO2 = false //falso F

//Negacion !dato
//console.log( !DATO1 ) // !true --> false
//console.log( !DATO2 ) // !false --> true

//AND &&  dato1 && dato2
/*
    dato1   dato2   resultado
    true    true    true
    true    false   false
    false   true    false
    false   false   false
*/

console.log( true && true ) //true
console.log( true && false ) //false
console.log( false && true ) //false
console.log( false && false ) //false

//OR ||    dato1 || dato2
/*
    dato1   dato2   resultado
    true    true    true
    true    false   true
    false   true    true
    false   false   false
*/
/*console.log( true || true ) //true
console.log( true || false ) //true
console.log( false || true ) //true
console.log( false || false ) //false

// <= --> puede ser menor que o puede ser igual que

let resultado = ( 10 < 10 )||( 10 === 10 ) // F || T --> T
console.log( resultado )

let resultado2 = ( 10 < 10 )&&( 10 === 10 ) // F && T --> F
console.log( resultado2 ) 
*/


/*falsy:
-0
-""
-null
-undefined
-NaN
*/
/* Truthy
-"0"
-"false"
-[]
-{}
-" "
*/


//AND operador de cortocircuito Devuelve el primer falsy, o en caso de que ambos
//sean truthy, devuelve el ultimo
/*console.log( undefined && true )
console.log( "gato" && "texto" )
console.log( null && "" )
console.log( "0" && NaN )
*/

/*
Averiguar si una frase contiene una palabra o no, si la contiene 
tu código debe de generar true, en caso contrario debe de generar false
*/

let phrase1 = "Esta es una frase de prueba..."
let word1 = "frase"


//Propiedades: Caracteristicas de nuestros datos  string.propiedad
//length cantidad de caracteres que conforman a la cadena de texto
console.log( phrase1.length )

//index, indice, posicion: lugar que ocupa cada caracter dentro de la cadena de texto
//string[index] == caracter en la posición indicada
//indices empiezan desde 0
console.log( phrase1[0] )

//El indice correspondiente al ultimo caracter de la cadena tendra el indice
// longitud - 1

//MÉTODOS: Son acciones que puedo llevar a cabo sobre cadenas de texto, o con las cadenas de texto
// string.metodo() == valor de retorno


let resultado = phrase1.indexOf( word1 ) !== -1
console.log( resultado )

//método: .includes()
