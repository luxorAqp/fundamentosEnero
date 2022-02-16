
document.addEventListener( "DOMContentLoaded", e =>{
   // console.log( "El DOM esta listo" )
    guardarInformacion()
})

function guardarInformacion(  ){
    localStorage.clear()
    //Local Storage
    /*
    let localStorage = window.localStorage
    console.log( localStorage )
    */

    //Agregar una nueva clase al local storage
    /*
    localStorage.setItem( "clave", "Valor guardado" )
    localStorage.setItem( "user", { name: "Brenda Gonzalez", age: 27, mascotas: [ "Juno" ] } )
    localStorage.setItem( "carritoCompras", [ "Chocolate", "Pastel" ] )
    localStorage.setItem( "age", 27 )
    */

    const user =  { 
        name: "Brenda Gonzalez", 
        age: 27, 
        mascotas: [ "Juno" ] 
    }

    localStorage.setItem( "user", JSON.stringify( user ) )
    localStorage.setItem( "arreglo", JSON.stringify( [ "Brenda", "Cindy", "Andres" ] ) )
    localStorage.setItem( "number", JSON.stringify( 27 ) )
    localStorage.setItem( "cadena", JSON.stringify('Brenda Gonzalez') )


    consultarInformacion()
}


function consultarInformacion(){

    //localStorage.getItem( "clave" )

    let usuario = JSON.parse( localStorage.getItem( "user" ) )
    console.log( usuario )
    let numero = JSON.parse( localStorage.getItem( "number" ) )
    console.log( numero )

    let cadenaTexto = JSON.parse( localStorage.getItem( "cadena" ) ) // ""cadena de texto""
    console.log(cadenaTexto)

    //let cadenaSinStringify = JSON.parse( "Brenda" )
    //console.log( cadenaSinStringify )

    eliminarUsuario()
}

function eliminarUsuario(){
    localStorage.removeItem( "user" )
}