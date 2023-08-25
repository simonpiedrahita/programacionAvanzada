// SOLUCION DEL PUNTO NUMERO 8 - TALLER
let planeta1 = {
    nombre:"Tierra",
    latitud:80.5,
    longitud:109.10,
    nivelOxigeno:0.21,
    volumenAgua:0.75
}

let planeta2 = {
    nombre:"Saturno",
    latitud:50.5,
    longitud:222.50,
    nivelOxigeno:0.34,
    volumenAgua:0.90
}

let planetas=Array(planeta1,planeta2)

function analizarPlanetas(planetas){
    //recorrer un arreglo 
    let mapa= planetas.map(function(planeta){
        return (planeta)
    })
    return mapa 
}

console.log(analizarPlanetas(planetas))