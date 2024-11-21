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
        imageUrl() { //Función para traer cada imagen de cada pokemón
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
        },
        formattedId() {// Función que Agrega ceros a la izquierda
            return this.id.toString().padStart(2, '0'); 
        },
        nameToUpperCase() { //Función que Capitaliza la primera letra del nombre
            return this.name.charAt(0).toUpperCase() + this.name.slice(1);

        }
    },
    methods: {
        typeColor(type) { //Función que me define los colores de los tipos
            const colores = {
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
            return colores[type] || colores.default;
        },
        formatTypeName(type) { //Función que Capitaliza el nombre del Pokemón
            return type.charAt(0).toUpperCase() + type.slice(1);
        },
        toggleModal() { //Función que cambia el estado del modal
            this.isModalVisible = !this.isModalVisible;
        }
    }
};
</script>


