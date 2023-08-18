/* let notas=[1.0,2.5,3.4,4.8,3.7,5.0] */
let notas=[1.0,2.5,5.0]

//buscando 1 elementos particular 
let resultado=notas.some(function(nota){
    return(nota==5.0)
})
console.log(resultado)

//buscando 1 elementos particular 
let resultadoDos=notas.find(function(nota){
    return(nota==5.0)
})
console.log(resultadoDos)