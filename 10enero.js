
//Función: bloque de codigo que lleva a cabo una tarea especifica y es reutilizable
/*
DECLARACION DE UNA FUNCION
function nombreDeLaFuncion( parametro1, parametro2, parametro3 ){
    //instrucciones para completar la tarea
    return valorDeRetorno //El return debe ser siempre la ultima instruccion en la funcion 
}

nombreDeLaFuncion( argumento1, argumento2, argumento3 ) //Se asigna el valor que van a tener los parametros
*/

/*
function multiplicarDosNumeros( num1 = 0, num2 = 0 ){
    console.log( `El valor de num1 es: ${ num1 }, el valor de num2: ${ num2 }` )

    return num1 * num2
}

let resultadoMultiplicacion = multiplicarDosNumeros( 10, 5 )
console.log( resultadoMultiplicacion )

//console.log( multiplicarDosNumeros( 6, 7 ) )

console.log( multiplicarDosNumeros( 10 ) )
*/


//Función que reemplace la primera palabra de una frase por la palabra "gato"
/*
    1.Las palabras se separan entre sí a traves de espacios
    2.La primera palabra es la que empieza al inicio de la frase y termina
    antes del primer espacio
    3. "Borro" la primera palabra ( del inicio al primer espacio) y sutituyo con "gato"
*/

//Esta declarada e inicializada fuera de cualquier bloque de codigo
//Puede ser utilizada en cualquier punto del archivo / programa 

let variableGlobal = "Valor disponible para cualquier parte del archivo"

function reemplazarPalabra( frase, palabra ){
    //Estan declaradas dentro de un bloque de codigo, se convierten de alcance local
    //Solo existen dentro de este bloque de codigo donde fueron declaradas
    let indicePrimerEspacio = frase.indexOf( " " )
    let fraseSinPalabra = frase.slice( indicePrimerEspacio )
    let nuevaFrase = palabra.concat( fraseSinPalabra )

    return nuevaFrase   
}

let resultado = reemplazarPalabra( "Esta es una frase cualquiera modificada", "academlo" )
console.log( resultado )

//console.log( otraVariable )



//Arreglos: estructura de datos, me permiten almacenados muchos datos a la vez

//                      0        1         2        3   ...   
let arregloNombres = [ "Brenda", "Vicky", "Erick", "Israel", "Roberto" ] //longitud = 4
console.log( arregloNombres )

let longitudNombres = arregloNombres.length
console.log( longitudNombres )

//Indice del ultimo elemento = longitud - 1

// Extraer un elemento en particular a traves del indice --> arreglo[indice] 
let primerElemento = arregloNombres[0]
console.log( primerElemento )
let ultimoElemento = arregloNombres[ arregloNombres.length - 1 ]
console.log( ultimoElemento )

console.log( arregloNombres[ 1000 ] ) //No existe el indice 1000 --> undefined

let arregloMatriz = [ [1, 2], [ 2, 2 ] ]
let uno = arregloMatriz[0][0]
let ultimoNumero = arregloMatriz[1][1]
console.log( uno )
console.log( ultimoNumero )

