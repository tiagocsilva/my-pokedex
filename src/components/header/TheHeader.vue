<template>
  <header class="the-header d-flex">

    <div class="px-5 logo-container position-relative">
      <img
        class="logo cursor-pointer"
        src="@/assets/images/logo.svg"
        @click="fetchPokemons()"
      />
    </div>

    <div class="w-100 position-relative">
      <div class="d-flex justify-content-between the-header-title-container">
        <h1
          class="the-header-title cursor-pointer"
          @click="fetchPokemons()"
        >
          Pokémon List
        </h1>

        <div class="flex-center">
          <b-button
            @click="$router.push({ name: 'MyPokedex' })"
            class="button-white"
            style="width: 150px"
          >My Pokédex
            <b-badge variant="danger">{{countOfPokedex}}</b-badge>
          </b-button>
        </div>

      </div>
      <Search class="search w-100" />
    </div>

  </header>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Search from './Search.vue';

export default {
  components: {
    Search,
  },
  computed: mapGetters(['countOfPokedex']),
  methods: mapActions(['fetchPokemons']),
};
</script>

<style lang="scss" scoped>
.the-header {
  background: $custom-primary;
  padding: 40px 100px;
}

.the-header-title {
  color: #fff;
  font-size: 50px;
  margin-bottom: 10px;
  font-weight: bold;
}

.logo-container {
  width: 290px;

  .logo {
    width: 150px;
    position: absolute;
    bottom: -115px;
  }
}

.search {
  position: absolute;
  bottom: -65px;
}

@media (max-width: 1100px) {
  .logo-container {
    display: none;
  }
}

@media (max-width: 760px) {
  .the-header {
    padding: 20px 50px;
    margin-bottom: 120px;
  }
  .the-header-title-container {
    flex-direction: column;
  }
  .the-header-title {
    font-size: 40px;
    text-align: center;
  }

  .search {
    bottom: -150px;
  }
}
</style>
