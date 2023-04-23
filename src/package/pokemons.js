
const API = {}

const URLPOKEMON = 'https://pokeapi.co/api/v2/pokemon/'

API.pokemons = async () => {
    const pokemons = [];
    const response = await fetch(`${URLPOKEMON}`);
    const jsonData = await response.json();

    for (const p of jsonData.results) {
        const url = p.url.replace(URLPOKEMON, '');
        const pokemonResponse = await fetch(`${URLPOKEMON}${url}`);
        const pokemonData = await pokemonResponse.json();
        const ability = pokemonData.abilities[0].ability.name;
        const img = pokemonData.sprites.front_default;
        const baseExperience = pokemonData.base_experience;
        const pokemon = { name: p.name, url: url, ability, img, baseExperience };
        pokemons.push(pokemon);
    }
    return pokemons;
}
API.pokemon = async (url) => {
    const response = await fetch(URLPOKEMON + url);
    const jsonData = await response.json();
    imgurl = jsonData.sprites.versions["generation-v"]["black-white"].animated.front_default;
    baseExp = jsonData.base_experience
    names = jsonData.name
    speed = jsonData.stats[5].base_stat
    specialDefense = jsonData.stats[4].base_stat
    specialAtack = jsonData.stats[3].base_stat
    defensa = jsonData.stats[2].base_stat
    attk = jsonData.stats[1].base_stat
    hp = jsonData.stats[0].base_stat
    return {baseExp,names,speed,specialDefense,specialAtack,defensa,attk,hp,imgurl};
}


module.exports = API;
