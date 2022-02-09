
let phrase2 = "Mi nueva frase"
let word2 = "gato"

let resultado2 = phrase2.indexOf( word2 ) !== -1
//console.log( resultado2 )

//FUNCIONES: Bloques de codigo reutilizables 
//que me permiten llevar a cabo un proceso especifico

/*
    function nombreDeLaFuncion( parametros ){
        //intrucciones
        
        return valorRetorno
    }
*/

function sumarDosNumeros( numero1, numero2 ){ //parametros
    let resultado = numero1 + numero2
    return resultado
}

let suma = sumarDosNumeros( 10, 5 ) //argumentos

console.log( suma )
console.log( sumarDosNumeros( 50, 100 ) ) //no se guarda en ningun lugar y no puedo usar el resultado despues

console.log( "canal de prueba".lastIndexOf("a",10) )// returns -1
