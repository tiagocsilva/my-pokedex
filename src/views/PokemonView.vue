<template>
  <div class="pokemon-view flex-center flex-column">

   <CloseButton />

    <overdrive
      :id="name"
      :easing="easing"
      :duration="1200"
      :key="name"
      style="z-index: 99"
    >
      <img
        class="pokemon-image"
        :src="pokemon ? pokemon.image : null"
      />
    </overdrive>

    <b-container
      v-if="pokemon"
      fluid
      class="pokemon-view-details p-5 shadow"
    >

    <h1 class="mt-4 text-center text-custom-secondary">{{pokemon.name | capitalize}}</h1>
    <hr class="mb-5">

      <PokemonTypes
        :types="pokemon.types"
        class="mb-5"
      />

      <PokemonInfo
        :height="pokemon.height"
        :weight="pokemon.weight"
        class="mb-5"
      />

      <PokemonStats :stats="pokemon.stats" />

      <PokemonEvolution :pokemon-name="name" />

    </b-container>

  </div>
</template>

<script>
import * as easing from 'eases/bounce-out';
import { mapGetters } from 'vuex';
import PokemonEvolution from '@/components/pokemon/PokemonEvolution.vue';
import PokemonStats from '@/components/pokemon/PokemonStats.vue';
import PokemonTypes from '@/components/pokemon/PokemonTypes.vue';
import PokemonInfo from '@/components/pokemon/PokemonInfo.vue';
import CloseButton from '@/components/CloseButton.vue';

export default {
  components: {
    PokemonEvolution,
    PokemonStats,
    PokemonTypes,
    PokemonInfo,
    CloseButton,
  },
  computed: {
    ...mapGetters(['getPokemonByName']),
    name() {
      return this.$route.params.name;
    },
    easing() {
      return easing;
    },
    pokemon() {
      return this.getPokemonByName(this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-view {
  position: absolute;
  top: 0px;
  left: 0px;
  background: $custom-secondary;
  min-height: 100%;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  overflow: auto;

  .pokemon-view-details {
    background: #fff;
    width: 90%;
    border-radius: 20px;
    margin-top: -60px;
  }
}

.pokemon-image {
  width: 200px;
  height: 200px;
  z-index: 99;
}
</style>
