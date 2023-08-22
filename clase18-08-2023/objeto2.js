let producto1 = {
    nombre: "mp3",
    precio: 5000,
    promocion: true
};

let producto2 = {
    nombre: "teléfono",
    precio: 15000,
    promocion: false
};

let producto3 = {
    nombre: "auriculares",
    precio: 800,
    promocion: true
};

let producto4 = {
    nombre: "laptop",
    precio: 3000000,
    promocion: true
};

let producto5 = {
    nombre: "smartwatch",
    precio: 70000,
    promocion: false
};

/*quiero filtrar los productos que no esten en promocion  
 *quiero saber si hay un tamagotchi
 *obtener solo los productos que valgan mas de 80000 && tengan promocion 
*/

let productos = [producto1, producto2, producto3, producto4, producto5];

let filtroTamagotchi = productos.filter(function(producto){
    return(producto.nombre === "tamagotchi" )
})
console.log("\n filtro tamagotchi \n", filtroTamagotchi,"\n")

let filtroPromo = productos.filter(function(producto){
    return(producto.promocion === false )
})
console.log("\n filtro promocion \n", filtroPromo,"\n")

let filtroPromoPrecio = productos.filter(function(producto){
    return(producto.precio >= 80000 && producto.promocion === true)
})
console.log("\n filtro promocion y precio \n", filtroPromoPrecio ,"\n")

 