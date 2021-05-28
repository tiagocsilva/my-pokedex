<template>
  <div class="pokemon-card-actions">

    <div v-if="haveOnPokedex(pokemonName)">

      <PokemonCardActionButton
        @click.native.stop.prevent="removeFromPokedex(pokemonName)"
        tooltip="Remove Pokemon from My Pokedex"
        icon="trash"
        v-if="allowRemoveFromPokedex"
      />

      <PokemonCardActionButton
        tooltip="Pokemon is in your Pokedex"
        icon="check"
        :read-only="true"
        v-else
      />
    </div>

    <PokemonCardActionButton
      @click.native.stop.prevent="addToPokedex(pokemonName)"
      tooltip="Add Pokemon to My Pokedex"
      icon="plus"
      v-else
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PokemonCardActionButton from './PokemonCardActionButton.vue';

export default {
  props: {
    pokemonName: String,
    allowRemoveFromPokedex: Boolean,
  },
  components: {
    PokemonCardActionButton,
  },
  methods: mapActions(['addToPokedex', 'removeFromPokedex']),
  computed: mapGetters(['haveOnPokedex']),
};
</script>
