// PokemonCard.vue
<template>
  <div class="pokemon-card">
    <img :src="imageUrl" :alt="name" />
    <h3>{{ name }}</h3>
    <p class="sc-number-wrapper font-extrabold text-2xl sm:text-xl">#{{ id }}</p>
    <div class="types">
      <span v-for="type in types" :key="type.type.name" class="type">
        {{ type.type.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    id: Number,
    types: Array
  },
  computed: {
    imageUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    }
  }
};
</script>

<style scoped>
.pokemon-card {
  background: #f2f2f2;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  width: 120px;
}
.types {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
}
.type {
  background: #ccc;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}
</style>
