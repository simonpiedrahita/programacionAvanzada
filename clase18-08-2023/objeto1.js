/* let estudiante={
    nombre:"simon",
    cedula:123456,
    promedio:4.5,
    estado:true
}
console.log(estudiante)
console.log(estudiante.promedio) */




let estudiante1 = {
    nombre: "simon",
    cedula: 123456,
    promedio: 4.5,
    estado: false
};

let estudiante2 = {
    nombre: "maria",
    cedula: 789012,
    promedio: 3.2,
    estado: true
};

let estudiante3 = {
    nombre: "juan",
    cedula: 345678,
    promedio: 2.7,
    estado: false
};

let estudiante4 = {
    nombre: "laura",
    cedula: 901234,
    promedio: 3.9,
    estado: true
};

let estudiante5 = {
    nombre: "carlos",
    cedula: 567890,
    promedio: 2.1,
    estado: false
};

let estudiantes=[
    estudiante1,
    estudiante2,
    estudiante3,
    estudiante4,
    estudiante5
]

let filtro = estudiantes.filter(function(estudiante){
    return(estudiante.promedio >= 3.5)
})
//imprime los estudiantes con promedio menor a 4 y qu su estado sea false 
let filtroDos = estudiantes.filter(function(estudiante){
    return(estudiante.promedio < 4 && estudiante.estado == false)
})
console.log("filtro dos\n",filtroDos)


let filtroTres = estudiantes.filter(function(estudiante){
    return(estudiante.promedio <= 3.5 /*&& estudiante.estado == false*/)
})
console.log("filtro tres\n", filtroTres)
