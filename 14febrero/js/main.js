

const button = document.getElementById( "contador-click" )
const h2 = document.getElementsByTagName( "h2" )[0]

//target.addEventListener( "evento", callback )
let contadorClicks = 0

button.addEventListener( "click", (evento) => {
    ++contadorClicks
    
    h2.textContent = `Contador: ${contadorClicks} `
    console.log( contadorClicks )
})
