<template>
    <div class="modal-overlay" @click.self="$emit('close')">
        <div class="modal-content">
            <button @click="$emit('close')" class="close-button">Cerrar</button>
            <h3 class="pokemon-name">{{ pokemon.name }}</h3>
            <img :src="pokemon.imageUrl" :alt="pokemon.name" class="pokemon-image" />
            <p>Id: {{ pokemon.id }}</p>
            <p>Tipos:</p>
            <div class="pokemon-types">
                <span v-for="type in pokemon.types" :key="type.type.name" :class="['pokemon-type', typeColor(type.type.name)]">
                    {{ formatTypeName(type.type.name) }}
                </span>
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
    methods: {
        typeColor(type) {
            const colors = {
                grass: 'bg-green-200 text-green-700',
                poison: 'bg-purple-200 text-purple-700',
                fire: 'bg-red-200 text-red-700',
                water: 'bg-blue-200 text-blue-700',
                electric: 'bg-yellow-200 text-yellow-700',
                // Agrega más tipos si es necesario...
            };
            return colors[type] || 'bg-gray-200 text-gray-700'; // color por defecto
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
    @apply bg-white p-6 rounded-lg shadow-lg max-w-sm;
}

.close-button {
    @apply absolute top-2 right-2 bg-red-500 text-white rounded-full px-2;
}

.pokemon-image {
    @apply w-32 h-32;
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
