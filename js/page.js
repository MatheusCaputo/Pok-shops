
const getUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

const generatePokemonPromises = () =>{
    const pokemonPromises = [];

    for(let i=1;i<150;i++){
        pokemonPromises.push(fetch(getUrl(i)).then(response => response.json()));
    }

    return pokemonPromises;
};


const generateHtmlWaterPokemon = (pokemons) => {
    return liPokemons = pokemons.reduce((accumulator, pokemon) =>{
        let typePokemon = pokemon.types.map(pokeType => pokeType.type.name)
            if(typePokemon[0] === "water" || typePokemon[1] === "water"){
                accumulator += `
                <li class="card">
                    <i class="card-price">${pokemon.base_experience}</i>
                    <h2 class="card-title">${pokemon.name}</h2>
                    <img class="card-image" src="${pokemon.sprites.front_default}">
                    <h3>R$${pokemon.base_experience}</h3>
                    <button class="addToCart">Comprar</button>
                </li>`;                
            }
        return accumulator;
    }, "");
}

const generateHtmlFirePokemon = (pokemons) => {
    return liPokemons = pokemons.reduce((accumulator, pokemon) =>{
        let typePokemon = pokemon.types.map(pokeType => pokeType.type.name)
            if(typePokemon[0] === "fire" || typePokemon[1] === "fire"){
                accumulator += `
                <li class="card">
                    <i class="card-price">${pokemon.base_experience}</i>
                    <h2 class="card-title">${pokemon.name}</h2>
                    <img class="card-image" src="${pokemon.sprites.front_default}">
                    <h3>R$${pokemon.base_experience}</h3>
                    <button class="addToCart">Comprar</button>
                </li>`;                
            }
        return accumulator;
    }, "");
}

const insertPokemon = pokemon => {
    const $pokeList = document.querySelector(".pokeList");
    $pokeList.innerHTML = pokemon;
}

const fetchTypePokemon =  () =>{

    const pokemonPromises = generatePokemonPromises();

    Promise.all(pokemonPromises)  
        .then(generateHtmlWaterPokemon)
        .then(insertPokemon)
}       

fetchTypePokemon();


