<template>
  <div class="d-flex search-container">
    <div class="flex-center px-3 w-100 mr-5 bg-white rounded shadow">
      <font-awesome-icon
        :icon="['fas', 'search']"
        class="search-icon"
      />
      <b-input
        v-model="filter"
        type="text"
        class="input"
        placeholder="Enter the number or name of the Pokémon"
        autocomplete="off"
        @keypress.enter="search"
      />
    </div>
    <b-button
      @click="search"
      class="button-white px-5 shadow"
    >Search</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      filter: '',
    };
  },
  methods: {
    ...mapActions(['fetchPokemons', 'fetchPokemonsByName']),
    search() {
      if (this.filter) this.fetchPokemonsByName(this.filter.toLowerCase());
      else this.fetchPokemons();
    },
  },
};
</script>

<style lang="scss" scoped>
.search-icon {
  color: #000;
  font-size: 20px;
}

.input {
  border: none;
  padding: 28px;

  &::placeholder {
    color: #c4c4c4;
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
}

@media (max-width: 760px) {
  .search-container {
    flex-direction: column;
    width: 100%;

    & > div {
      margin-bottom: 20px;
    }
  }
}
</style>
