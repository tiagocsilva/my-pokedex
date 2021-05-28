<template>
  <div>
    <h3 class="text-custom-secondary">STATS:</h3>
    <hr>

    <div
      v-for="stat in stats"
      :key="stat.stat.name"
      class="row mb-1"
    >
      <div class="col-sm-2">{{ stat.stat.name | transformAttributeName }}:</div>
      <div class="col-sm-10 pt-1">
        <b-progress
          :value="stat.base_stat"
          variant="primary"
          :key="stat.stat.name"
          animated
          show-progress
          height="2rem"
        ></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
import util from '@/util';

export default {
  props: {
    stats: Array,
  },
  filters: {
    transformAttributeName(value) {
      const words = value.split('-').map((x) => util.capitalize(x));
      return words.join(' ');
    },
  },
};
</script>
