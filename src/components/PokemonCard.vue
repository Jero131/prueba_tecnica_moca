<template>
    <div class="pokemon-card hover:scale-105 transition-transform duration-200 cursor-pointer">
        <img :src="imageUrl" :alt="name" class="pokemon-image" />
        <p class="pokemon-id">N.º {{ formattedId }}</p>
        <h3 class="pokemon-name">{{ nameToUpperCase }}</h3>
        <div class="pokemon-types">
            <span v-for="type in types" :key="type.type.name" :class="['pokemon-type', typeColor(type.type.name)]">
                {{ formatTypeName(type.type.name) }}
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
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
        },
        formattedId() {
            return this.id.toString().padStart(2, '0'); // Agrega ceros a la izquierda
        },
        nameToUpperCase() {
            return this.name.charAt(0).toUpperCase() + this.name.slice(1);

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
            return colors[type] || colors.default;
        },
        formatTypeName(type) {
            // Capitaliza el nombre del tipo
            return type.charAt(0).toUpperCase() + type.slice(1);
        },
        toggleModal() {
            this.isModalVisible = !this.isModalVisible;
        }
    }
};
</script>

<style scoped>
.pokemon-card {
    @apply bg-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center w-52;
}

.pokemon-image {
    @apply w-32 h-32;
}

.pokemon-id {
    @apply text-sm text-gray-500 mt-2 font-semibold;
}

.pokemon-name {
    @apply text-xl font-bold mt-2 text-gray-800;
}

.pokemon-types {
    @apply flex space-x-1 mt-3;
}

.pokemon-type {
    @apply px-3 py-1 rounded-full text-sm font-semibold capitalize;
}
</style>
