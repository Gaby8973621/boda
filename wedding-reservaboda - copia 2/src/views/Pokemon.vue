<template>
    <div v-if="pokemon" class="text-center">
      <h1 class="text-3xl">{{ pokemon.name }}</h1>
      <img :src="pokemon.sprites.front_default" alt="Imagen del Pokémon" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pokemon: null,
      };
    },
    created() {
      const id = this.$route.params.id;
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
          this.pokemon = response.data;
        })
        .catch(error => console.error(error));
    }
  };
  </script>
  