<template>
  <div class="pokemon-info">
    <h3 class="text-custom-secondary">Info:</h3>
    <hr>

    <span>
      Height: <b-badge>{{heightFormatted}} M</b-badge>
    </span>
    <br><br>
    <span>
      Weight:
      <b-badge>{{weightFormatted}} KG</b-badge>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    height: Number,
    weight: Number,
  },
  computed: {
    heightFormatted() {
      return this.height / 10;
    },
    weightFormatted() {
      return this.weight / 10;
    },
  },
};
</script>
