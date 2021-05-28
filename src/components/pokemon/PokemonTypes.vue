<template>
  <div>
    <h3 class="text-custom-secondary">TYPES:</h3>
    <hr>

    <b-badge
      primary
      v-for="type in typeNames"
      :key="type"
      variant="primary"
      class="mr-2 p-3"
    >
      {{type | capitalize}}
    </b-badge>
  </div>
</template>

<script>
export default {
  props: {
    types: Array,
  },
  computed: {
    typeNames() {
      return this.types.map((x) => x.type.name);
    },
  },
};
</script>

<style lang="scss">
.badge {
  font-size: 16px !important;
}
</style>
