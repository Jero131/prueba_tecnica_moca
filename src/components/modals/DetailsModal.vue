<template>
    <div class="modal-overlay" @click.self="$emit('close')">
        <div class="modal-content flex flex-wrap p-6 lg:p-8">
            <button @click="$emit('close')" class="close-button">Cerrar</button>
            <div class="modal-body flex flex-wrap md:flex-nowrap items-center">
                <!-- Imagen del Pokémon -->
                <img :src="imageUrl" :alt="pokemon.name" class="pokemon-image" />

                <!-- Contenedor gris con información -->
                <div class="container bg-gray-200 p-6 lg:p-8 rounded-2xl ml-4 flex flex-col justify-between">
                    <p class="pokemon-id">N.º {{ formattedId }}</p>
                    <h3 class="pokemon-name">{{ nameToUpperCase }}</h3>
                    <p>Altura: {{ pokemon.height / 10 }} m</p>
                    <p>Peso: {{ pokemon.weight / 10 }} kg</p>
                    <p>Habilidad: {{ pokemon.abilities[0]?.ability.name }}</p>
                    
                    <!-- Tipos del Pokémon -->
                    <div class="pokemon-types mt-4">
                        <p>Tipo:</p>
                        <span v-for="type in pokemon.types" :key="type.type.name"
                            :class="['pokemon-type', typeColor(type.type.name)]">
                            {{ formatTypeName(type.type.name) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    },
    computed: {
        imageUrl() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png`;
        },
        formattedId() {
            return this.pokemon.id.toString().padStart(2, '0');
        },
        nameToUpperCase() {
            return this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
        }
    },
    methods: {
        typeColor(type) {
            const colors = {
                grass: 'bg-green-200 text-green-700',
                poison: 'bg-purple-200 text-purple-700',
                fire: 'bg-red-200 text-red-700',
                water: 'bg-blue-200 text-blue-700',
                electric: 'bg-yellow-200 text-yellow-700',
                flying: 'bg-flying-200 text-flying-700',
                bug: 'bg-bug-200 text-bug-700',
                normal: 'bg-normal-200 text-normal-700',
                ground: 'bg-ground-200 text-ground-700',
                psychic: 'bg-psychic-200 text-psychic-700',
                ice: 'bg-ice-200 text-ice-700',
                fighting: 'bg-fighting-200 text-fighting-700',
                rock: 'bg-rock-200 text-rock-700',
                dragon: 'bg-dragon-200 text-dragon-700',
                ghost: 'bg-ghost-200 text-ghost-700',
                dark: 'bg-dark-200 text-dark-700',
                steel: 'bg-steel-200 text-steel-700',
                fairy: 'bg-fairy-200 text-fairy-700',
                default: 'bg-gray-200 text-gray-700'
            };
            return colors[type] || 'bg-gray-200 text-gray-700';
        },
        formatTypeName(type) {
            return type.charAt(0).toUpperCase() + type.slice(1);
        }
    }
};
</script>

<style scoped>
.modal-overlay {
    @apply fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50;
}

.modal-content {
    @apply bg-white rounded-lg relative flex flex-col w-full max-w-[95vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw];
}

.close-button {
    @apply absolute top-2 right-2 bg-red-500 text-white rounded-full px-2;
}

.pokemon-image {
    @apply w-full h-auto max-w-[12rem] md:max-w-[14rem] lg:max-w-[16rem] mb-4 md:mb-0;
}

.container {
    @apply flex-1 w-full md:w-auto flex flex-col justify-between mt-4 md:mt-0;
}

.pokemon-id {
    @apply text-gray-500;
}

.pokemon-name {
    @apply text-xl font-bold text-gray-800;
}

.pokemon-types {
    @apply flex space-x-1 mt-2;
}

.pokemon-type {
    @apply px-3 py-1 rounded-full text-sm font-semibold capitalize;
}
</style>
