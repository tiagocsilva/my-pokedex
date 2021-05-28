<template>
  <div class="d-flex justify-content-center">
    <b-pagination
      class="pagination shadow-sm"
      size="md"
      :total-rows="totalOfPokemons"
      v-model="currentPage"
      :per-page="paginationSize"
    >
    </b-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['totalOfPokemons', 'currentPokemonsPage']),
    paginationSize() {
      return process.env.VUE_APP_PAGINATION_SIZE;
    },
    currentPage: {
      get() {
        return this.currentPokemonsPage;
      },
      set(val) {
        this.$emit('updatePage', val);
      },
    },
  },
};
</script>

<style lang="scss">
.pagination {
  .page-item {
    box-shadow: 2px 2px 2px #cdcdcd;
  }
  .page-link {
    padding: 20px;
    color: $custom-primary;
    border: none;
    transition: all 0.2s;
  }
}

.page-item.active .page-link {
  background: $custom-primary;
  border-color: $custom-primary;
}
</style>
