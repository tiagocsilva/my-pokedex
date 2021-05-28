import Vue from 'vue';
import Vuex from 'vuex';

import pokemonService from '@/api/pokemon';
import * as types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    pokedex: [],
    pokemons: [],
    totalOfPokemons: 0,
    currentPokemonsPage: 0,
  },
  getters: {
    getPokemonByName: (state) => (name) => state.pokemons.find((x) => x.name === name),
    haveOnPokedex: (state) => (name) => state.pokedex.some((x) => x.name === name),
    countOfPokedex: (state) => state.pokedex.length,
  },
  mutations: {
    [types.SET_LOADING](state, payload) {
      state.loading = payload;
    },
    [types.CLEAR_POKEMONS](state) {
      state.pokemons = [];
    },
    [types.SET_POKEMONS](state, payload) {
      state.pokemons = payload;
    },
    [types.SET_TOTAL_OF_POKEMONS](state, payload) {
      state.totalOfPokemons = payload;
    },
    [types.SET_CURRENT_POKEMONS_PAGE](state, payload) {
      state.currentPokemonsPage = payload;
    },
    [types.ADD_TO_POKEDEX](state, payload) {
      state.pokedex.push(payload);
    },
    [types.REMOVE_FROM_POKEDEX](state, payload) {
      state.pokedex = state.pokedex.filter((x) => x.name !== payload.name);
    },
  },
  actions: {
    async fetchPokemons({ commit, dispatch }, page) {
      commit(types.SET_LOADING, true);
      commit(types.CLEAR_POKEMONS);

      const pokemonsResponse = await pokemonService.get(page);
      commit(types.SET_TOTAL_OF_POKEMONS, pokemonsResponse.count);
      commit(types.SET_CURRENT_POKEMONS_PAGE, page || 1);

      await dispatch('fetchPokemonsDetails', pokemonsResponse.results);

      commit(types.SET_LOADING, false);
    },
    async fetchPokemonsDetails({ commit }, pokemons) {
      const pokemonsWithDetails = await Promise.all(pokemons.map(
        (x) => pokemonService.getByName(x.name),
      ));

      commit(types.SET_POKEMONS, pokemonsWithDetails.map(
        (x) => ({
          name: x.name,
          image: x.sprites.other.dream_world.front_default || x.sprites.front_default,
          types: x.types,
          stats: x.stats,
          weight: x.weight,
          height: x.height,
        }),
      ));
    },
    async fetchPokemonsByName({ commit, dispatch }, name) {
      commit(types.SET_LOADING, true);
      commit(types.CLEAR_POKEMONS);
      commit(types.SET_CURRENT_POKEMONS_PAGE, 1);

      const pokemons = [];

      try {
        const pokemon = await pokemonService.getByName(name);
        pokemons.push(pokemon);
      } catch (e) {
        // Pokemon not found
      }

      commit(types.SET_TOTAL_OF_POKEMONS, pokemons.length);
      await dispatch('fetchPokemonsDetails', pokemons);

      commit(types.SET_LOADING, false);
    },
    addToPokedex({ commit, state }, pokemonName) {
      commit(types.ADD_TO_POKEDEX, state.pokemons.find((x) => x.name === pokemonName));
    },
    removeFromPokedex({ commit, state }, pokemonName) {
      commit(types.REMOVE_FROM_POKEDEX, state.pokedex.find((x) => x.name === pokemonName));
    },
  },
});
