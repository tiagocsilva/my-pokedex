<template>
  <b-card class="pokemon m-5 position-relative">
    <PokemonCardActions
      :pokemon-name="name"
      :allow-remove-from-pokedex="allowRemoveFromPokedex"
    />

    <span class="pokemon-name">{{name | capitalize}}</span>

    <div class="position-relative h-100">
      <overdrive
        :id="name"
        :key="name"
      >
        <img
          class="pokemon-image"
          :src="imageUrl"
        />
      </overdrive>

    </div>

  </b-card>
</template>

<script>
import PokemonCardActions from './PokemonCardActions.vue';

export default {
  components: {
    PokemonCardActions,
  },
  props: {
    name: String,
    imageUrl: String,
    allowRemoveFromPokedex: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.pokemon {
  padding: 25px;
  border-radius: 30px;
  background: $custom-secondary;
  border: none;
  color: #fff;
  width: 320px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover,
  &:active {
    opacity: 0.8;
  }

  .pokemon-name {
    font-family: 'Rammetto One', cursive;
    font-weight: normal;
    font-size: 18px;
  }
}

.pokemon-image {
  position: absolute;
  right: -80px;
  bottom: -20px;
  width: 150px;
  height: 150px;
}
</style>
