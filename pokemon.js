//2.- Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.


let pokemon = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle']

//let pokemonMayus = []; 
//for (let i = 0; i < pokemon.length; i++) { 
 //    pokemonMayus.push(pokemon[i].toUpperCase()); 
//}

let pokemonMayus = pokemon.map(nombre => nombre.toUpperCase());

console.log("POKEMONS:", pokemonMayus);

//3.- Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego.

let pokemon2 = [

    {   nombre: 'Pikachu',      tipo: 'Electrico'   },
    {   nombre: 'Charmander',   tipo: 'Fuego',      },
    {   nombre: 'Bulbasaur',    tipo: 'Planta'      },
    {   nombre: 'Squirtle',     tipo: 'Agua'        },
    {   nombre: 'Charmeleon',   tipo: 'Fuego'       },
    {   nombre: 'Weedle',       tipo: 'bicho'       },
    {   nombre: 'Charizard',    tipo: 'Fuego'       }
]

let pokemonFuego = pokemon2.filter((element) => {
    return(element.tipo === 'Fuego')
}) 

console.log("POKEMONS FUEGO:", pokemonFuego);


