<template>
    <div class="main-view" @scroll="handleScroll">
        <div class="pokemon-grid">
            <PokemonCard 
                v-for="pokemon in pokemons" 
                :key="pokemon.id" 
                :name="pokemon.name" 
                :id="pokemon.id" 
                :types="pokemon.types" 
                @click="openModal(pokemon)" />
        </div>

        <!-- Modal, visible cuando `isModalVisible` es true -->
        <DetailsModal 
            v-if="isModalVisible" 
            :pokemon="selectedPokemon" 
            @close="toggleModal" 
        />
    </div>
</template>

<script>
import api from '@/services/Api';
import PokemonCard from '@/components/PokemonCard.vue';
import DetailsModal from './modals/DetailsModal.vue';

export default {
    components: {
        PokemonCard,
        DetailsModal,
    },
    data() {
        return {
            pokemons: [],
            page: 1,           // Página actual
            limit: 20,         // Número de Pokémon a cargar por vez
            isLoading: false,  // Estado de carga
            isModalVisible: false,  // Visibilidad del modal
            selectedPokemon: null  // Pokémon seleccionado
        };
    },
    async created() {
        window.addEventListener('scroll', this.handleScroll);
        await this.fetchPokemons();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        async fetchPokemons() {
            if (this.isLoading) return;

            this.isLoading = true;
            try {
                const start = (this.page - 1) * this.limit;
                const end = start + this.limit;
                const response = await api.getTotalOfPokemons();
                const results = response.data.results.slice(start, end);

                const promises = results.map((pokemon, index) =>
                    api.getPokemonByID(start + index + 1)
                );

                const pokemonData = await Promise.all(promises);
                this.pokemons.push(...pokemonData.map(p => p.data));
                this.page++;
            } catch (error) {
                console.error('Error al obtener los Pokémon:', error);
            } finally {
                this.isLoading = false;
            }
        },
        handleScroll() {
            const bottomOfWindow =
                window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 5;

            if (bottomOfWindow && !this.isLoading) {
                this.fetchPokemons();
            }
        },
        toggleModal() {
            this.isModalVisible = !this.isModalVisible;
        },
        openModal(pokemon) {
            this.selectedPokemon = pokemon;
            this.isModalVisible = true;
        }
    }
};
</script>

<style scoped>
.main-view {
    @apply p-6 min-h-screen flex justify-center overflow-auto;
}

.pokemon-grid {
    @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg;
}
</style>
