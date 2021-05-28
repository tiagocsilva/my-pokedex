<template>
  <div class="my-pokedex flex-center flex-column">
    <CloseButton />
    <h1 class="text-custom-secondary mb-5">My Pokédex</h1>

    <div class="flex-center flex-wrap">
      <PokemonCard
        v-for="pokemon in pokedex"
        :key="pokemon.name"
        :name="pokemon.name"
        :image-url="pokemon.image"
        allow-remove-from-pokedex
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import PokemonCard from '@/components/pokemonCard/PokemonCard.vue';
import CloseButton from '@/components/CloseButton.vue';

export default {
  components: {
    CloseButton,
    PokemonCard,
  },
  computed: {
    ...mapGetters(['getPokemonByName']),
    ...mapState(['pokedex']),
  },
};
</script>

<style lang="scss" scoped>
.my-pokedex {
  padding: 50px;
}
</style>
