
<template>
  <div class="main-view">
    <PokemonCard
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :name="pokemon.name"
      :id="pokemon.id"
      :types="pokemon.types"
    />
  </div>
</template>

<script>
import api from '@/services/Api';
import PokemonCard from '@/components/PokemonCard.vue';

export default {
  components: {
    PokemonCard
  },
  data() {
    return {
      pokemons: []
    };
  },
  async created() {
    await this.fetchPokemons();
  },
  methods: {
    async fetchPokemons() {
      try {
        
        const response = await api.getTotalOfPokemons();
        const results = response.data.results.slice(0,1000);

        
        const promises = results.map((pokemon, index) =>
          api.getPokemonByID(index + 1)
        );

        const pokemonData = await Promise.all(promises);
        this.pokemons = pokemonData.map(p => p.data);
      } catch (error) {
        console.error('Error al obtener los Pokémon:', error);
      }
    }
  }
};
</script>

<style scoped>
.main-view {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  background-color: #d5d5d5;
  padding: 2rem;
}
</style>
