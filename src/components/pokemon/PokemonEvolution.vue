<template>
  <div>
    <h3 class="mt-5 text-custom-secondary">EVOLUTION:</h3>
    <hr>
    <div class="flex-center flex-wrap">
      <div
        v-for="evolution in evolutions"
        :key="evolution.name"
        class="mx-5 my-3"
      >
        <img
          class="pokemon-image"
          :src="evolution.image"
        />
        <h5 class="text-center">{{evolution.name | capitalize}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import pokemonService from '@/api/pokemon';
import evolutionChainService from '@/api/evolutionChain';
import pokemonSpeciesService from '@/api/pokemonSpecies';

export default {
  props: {
    pokemonName: String,
  },
  data() {
    return {
      evolutions: [],
    };
  },
  methods: {
    getNextEvolutions(evolutionList) {
      return evolutionList
        .map((x) => [x.species.name].concat(...this.getNextEvolutions(x.evolves_to)))
        .reduce((arr, curr) => [...arr, ...curr], []);
    },
  },
  async created() {
    const specie = await pokemonSpeciesService.getByPokemonName(this.pokemonName);
    const evolutionsChain = (await evolutionChainService.getByUrl(specie.evolution_chain.url))
      .chain;

    const evolutionsSpecies = [
      evolutionsChain.species.name,
      ...this.getNextEvolutions(evolutionsChain.evolves_to),
    ];

    const pokemonsEvolutions = await Promise.all(
      evolutionsSpecies.map((x) => pokemonService.getByName(x)),
    );

    this.evolutions = pokemonsEvolutions.map((x) => ({
      name: x.name,
      image: x.sprites.other['official-artwork'].front_default,
    }));
  },
};
</script>

<style lang="scss" scoped>
.pokemon-image {
  width: 150px;
  height: 150px;
}
</style>
