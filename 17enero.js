/*
//Multiplos
    numero < multiplos < limite

//Mitades
    Son dos resultados diferentes

*/

/*
for( let i = 0; i < 3; i++ ){
    console.log( `esta es la iteracion no. ${i} del for externo` )
    for( let j = 0; j < 5; j++ ){
        console.log( j )
    }
}
*/

let numbersArray = [3, 5, 100, 10, 1000, 999, 109] 

let numbersArraySorted = numbersArray.sort(function compareNumbers(a, b) {
    console.log( a, b )
    return a - b;
})
console.log( numbersArraySorted );
