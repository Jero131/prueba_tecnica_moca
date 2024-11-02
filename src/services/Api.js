import axios from 'axios';

export const api_url = 'https://pokeapi.co/api/v2/';

const api = (url = api_url) => {
  return axios.create({
    baseURL: url,
  });
};


export default {

  getPokemonByID(pokemonID) {
    const result = api().get(`pokemon/${pokemonID}/`);
    return result;
  },

  getTotalOfPokemons() {
    const result = api().get('pokemon?limit=-1&offset=0');
    return result;
  },

  getTypeRelations(type) {
    const result = api().get(`type/${type}`);
    return result;
  },
};