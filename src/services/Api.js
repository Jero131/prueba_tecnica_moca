import axios from 'axios';

export const api_url = 'https://pokeapi.co/api/v2/';

const api = (url = api_url) => { // Url base de la api
  return axios.create({
    baseURL: url,
  });
};


export default {

  getPokemonByID(pokemonID) {  //Buscar pokemón por ID
    const result = api().get(`pokemon/${pokemonID}/`);
    return result;
  },

  getTotalOfPokemons() {  //
    const result = api().get('pokemon?limit=-1&offset=0');
    return result;
  },

};