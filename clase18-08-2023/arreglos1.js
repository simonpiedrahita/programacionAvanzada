let numeros =[7,14,21,28] //forma tradicional 
let nombres=Array("simon","andres","sara","luisa")/*forma orientada a objetos */

//filtrando un array 

let filtro=numeros.filter(function(numero){
    return(numero<20)
})
console.log(filtro)

let filtroDos=nombres.filter(function(nombre){
    return(nombre.length>4)
})
console.log(filtroDos)