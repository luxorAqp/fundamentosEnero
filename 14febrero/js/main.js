

const button = document.getElementById( "contador-click" )
const h2 = document.getElementsByTagName( "h2" )[0]
const buttonDisminuir = document.getElementById( "disminuir-click" )
const contenedor = document.querySelector( "#contenedor" )
const body = document.querySelector("body")
const section = document.getElementsByTagName("section")[0]
let carrito = []

//target.addEventListener( "evento", callback )
let contadorClicks = 0

/*
button.addEventListener( "click", (evento) => {
    ++contadorClicks

    h2.textContent = `Contador: ${contadorClicks}`
    console.log( contadorClicks )
})

buttonDisminuir.addEventListener( "click", (evento) =>{
    if( contadorClicks >
    0 ){
        --contadorClicks
        h2.textContent = `Contador: ${contadorClicks}`
    }
    console.log( contadorClicks )

})
*/

contenedor.addEventListener( "click", (evento) =>{
    console.log( "Click en el contenedor" );

    if( evento.target.id === "contador-click" ){
        ++contadorClicks
        h2.textContent = `Contador: ${contadorClicks}`
    }else if( evento.target.id === "disminuir-click" && contadorClicks > 0 ){
        --contadorClicks
        h2.textContent = `Contador: ${contadorClicks}`
    }

    //Evita la propagación del evento hacia capas mas externas
    evento.stopPropagation()
})


body.addEventListener( "click", (evento) =>{
    console.log( "CLICK SOBRE EL BODY" )
})



const productos = [
    {
        imagenPrincipal: "https://picsum.photos/id/0/200/300",
        imagenFondo:"https://picsum.photos/id/1/200/300",
        nombre: "Computadora portatil",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/1062/200/300",
        imagenFondo:"https://picsum.photos/id/1025/200/300",
        nombre: "Cobija para perro",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/111/200/300",
        imagenFondo:"https://picsum.photos/id/133/200/300",
        nombre: "Automovil",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/250/200/300",
        imagenFondo:"https://picsum.photos/id/319/200/300",
        nombre: "Camara",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/30/200/300",
        imagenFondo:"https://picsum.photos/id/326/200/300",
        nombre: "Taza",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/75/200/300",
        imagenFondo:"https://picsum.photos/id/674/200/300",
        nombre: "Kilo de uva",
        precio: "1500",
    },
]


function crearCard( productoInfo ) {    
    const card = document.createElement( "div" )
    card.classList.add( "card" )

    const imagesWrapper = document.createElement("div")
    imagesWrapper.classList.add( "img-wrapper" )

    const firstImg = document.createElement( "img" )
    firstImg.src = productoInfo.imagenPrincipal
    firstImg.classList.add("principal-img")

    const secondImg = document.createElement("img")
    secondImg.src = productoInfo.imagenFondo

    const paragraph = document.createElement("p")
    paragraph.textContent = productoInfo.nombre

    const button = document.createElement("button")
    button.textContent = "Comprar"

    card.appendChild( imagesWrapper )
    card.appendChild( paragraph )
    card.appendChild( button )

    imagesWrapper.appendChild( firstImg )
    imagesWrapper.appendChild( secondImg )

    return card
}

let fragmento = new DocumentFragment()

for( let i = 0; i < productos.length; i++ ){

    let card = crearCard( productos[i] )

    fragmento.appendChild( card )
}

section.appendChild( fragmento )

section.addEventListener( "click", (evento) =>{

    if( evento.target.matches( "button" ) ){
        //console.log( "es un boton" )
        //console.log( evento.target.parentElement )
        let element = evento.target.parentElement
        const p = element.querySelector("p") 
        //console.log(p.textContent)

        let producto = {
            nombre : p.textContent,
            precio: 1000,

        }

        carrito.push( producto )

        console.log( carrito )
    }


    evento.stopPropagation()
})




