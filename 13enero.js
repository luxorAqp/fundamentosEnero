
//Objetos 

/*
let variableObjeto = {
    propiedad1 : valor1,
    propiedad2 : valor2,
    propiedad3 : valor3,
    metodo : function( parametro ){
        //instrucciones
    },
    otroMetodo(parametros){
        //instrucciones
    }
}
*/

//variableObjeto.otroMetodo()

const objetoUsuario = {
    nombre : "Brenda",
    apellido: "Gonzalez Quesada",
    edad : 26,
    pasatiempos: [ "Hornear", "Escuchar música", "Leer", "Admirar michis" ],
    mascota: {
        especie : "Gato",
        color: "Calico",
        nombre : "Juno",
    },
    estaVacunada: true,
    saludar : function(){
        console.log( "Hola mundo, soy Brenda!" )
    }
}

/*

//Sacar el valor de una propiedad
// objeto.propiedad --> sintaxis del punto
let brendaEdad = objetoUsuario.edad
console.log( brendaEdad )

// objeto["propiedad"] --> sintaxis de corchetes
let usuarioNombre = objetoUsuario["nombre"]
console.log( usuarioNombre )

let primerPasatiempo = objetoUsuario.pasatiempos[ 0 ]
console.log( primerPasatiempo )

let propiedad = "nombre"
let nombreMascota = objetoUsuario.mascota[ propiedad ]
console.log( nombreMascota )

objetoUsuario.saludar()
*/

//modificacion:     objeto.propiedad = nuevoValor
objetoUsuario.nombre = "Otro nombre"
objetoUsuario.estaVacunada = false
//console.log( objetoUsuario )


//Agregar nuevas propiedades
//Cuando intento extraer una propiedad que no existe dentro del objeto
//voy a obtener un undefined

// objeto.nuevaPropiedad = valorInicial

objetoUsuario.bandaFavorita = "Iron Maiden"
let bandaFavorita = objetoUsuario.bandaFavorita

//console.log( objetoUsuario )

//Eliminar propiedades
// delete objeto.propiedadAEliminar

delete objetoUsuario.nombre

//console.log( objetoUsuario )



let objeto1 = {
    propiedad1 : "valor1",
    propiedad2 : 100
}

let objeto2 = objeto1


//console.log( objeto1 === objeto2 )

objeto1.propiedad1 = 0
//console.log( objeto2 )

const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

//Crea un array de nombre emails y almacena todos los correos del arreglo users.

let emails = []

/*let email1 = users[0].email
console.log( email1 )
emails.push( email1 )

let email2 = users[1].email
email.push( email2 )
*/

for( let i = 0; i < users.length; i++ ){
    let email = users[i].email
    emails.push( email )
}

console.log( emails )

