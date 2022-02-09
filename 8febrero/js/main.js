
//console.log("Hola mundo! soy un archivo de js externo")

//Create Read Update Delete


const nodosParagraph = document.getElementsByTagName("p")
console.log( nodosParagraph[0].innerText )

nodosParagraph[0].innerText = "Este es un nuevo texto añadido con JS"
nodosParagraph[1].textContent = "Esto tambien se modifico con JS" //Recomendado
