
/*
Callback (llamada de vuelta)

    Construir una casa
        -construccion 
        -acabados
        -pintar
*/

/*

function levantarParedes( siguientePaso ) { //Segunda función ejecutada
    console.log( "La casa esta en construcción" )
    siguientePaso(pintarCasa) //agregarAcabados( pintarCasa )
}

function agregarAcabados( ultimoPaso ){ //Tercera función ejecutada
    console.log( "Se estan agregando todos los acabados" )
    ultimoPaso() // pintarCasa()
}

function pintarCasa(){ //Ultima funcion ejecutada
    console.log( "Se pinta la casa" )
    console.log( "LA CASA YA ES HABITABLE!" )
}


function construirCasa( primerPaso ){ //Primera en ejecutarse (Funcion principal)
    primerPaso( agregarAcabados ) // levantarParedes( agregarAcabados )
}

construirCasa( levantarParedes )

*/


/*
function prepararDesayuno( platillo, siguientePaso ){
    console.log( `Estoy preparando ${platillo} para desayunar` )
    console.log("...30min despues...")

    siguientePaso()
}

function servirDesayuno(){
    console.log( `Sirviendo el desayuno que acaba de ser preparado` )
}

function ponerLunch(){
    console.log( `Meter el desayuno en tuppers para poder llevarlo como lunch` )
}

prepararDesayuno( "Huevos revueltos", servirDesayuno )

prepararDesayuno( "hot cakes", ponerLunch )

*/

/*

    {
        name: "Nombre del producto",
        precio: 100
    }

*/

/*
let carrito = []

function agregarProducto( producto, siguientePaso ){
    carrito.push( producto )

    siguientePaso()
}

function sumarPrecios(){
    let total = 0

    for( let i = 0; i < carrito.length; i++){
        total += carrito[i].precio
    }

    console.log( `El total de tu carrito es de ${ total }` )
}


//Pasando la referencia a la declaracion de la funcion como argumento 
agregarProducto( {nombre: "Chocolates", precio: 100}, sumarPrecios )


//Pasar directamente una funcion anonima como argumento
agregarProducto( {nombre: "Pastel", precio: 400}, function(){
    let total = 0

    for( let i = 0; i < carrito.length; i++){
        total += carrito[i].precio
    }

    console.log( `El total de tu carrito es de ${ total }` )
})

//Pasar una función flecha
agregarProducto( {nombre: "Helado", precio: 90}, () => {
    let total = 0

    for( let i = 0; i < carrito.length; i++){
        total += carrito[i].precio
    }

    console.log( `El total de tu carrito es de ${ total }` )
})

*/

//Métodos para arreglos


//forEach

let arregloNumeros = [ 5, 10, 12, 7, 22 ]


let retornoForEach = arregloNumeros.forEach( elementoActual =>{
    if( (elementoActual%2) === 0 ){
        console.log(`${elementoActual} es par`)
    }else{
         console.log(`${elementoActual} es impar`)
    }
})

console.log( retornoForEach )

let retornoMap = arregloNumeros.map( elementoActual => elementoActual * 2 )

console.log( retornoMap )


let retornoFilter = arregloNumeros.filter( elementoActual => (elementoActual % 2) === 0 && elementoActual > 10 )
console.log( retornoFilter )

function funcionFiltrarPares( arreglo ){
    let nuevoArreglo = []
    for( let i = 0; i < arreglo.length; i++ ){
        if( ( carreglo[i] % 2 ) === 0 ){
            nuevoArreglo.push( arreglo[i] )
        }
    }

    return nuevoArreglo
} 

let retornoFind = arregloNumeros.find( elementoActual => elementoActual > 10)
console.log( retornoFind )