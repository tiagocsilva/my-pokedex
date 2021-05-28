<template>
  <button
    :class="classList"
    v-b-tooltip.hover
    :title="tooltip"
  >
    <font-awesome-icon :icon="['fas', icon]" />
  </button>
</template>

<script>
export default {
  props: { readOnly: Boolean, icon: String, tooltip: String },
  computed: {
    classList() {
      return {
        shadow: true,
        'read-only': this.readOnly,
        'flex-center': true,
        'action-button': true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.action-button {
  background: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: $custom-secondary;
  position: absolute;
  top: -15px;
  left: -15px;
  transition: all 0.2s;
  border: none;

  &:not(.read-only):hover {
    background: $custom-secondary;
    color: #fff;
  }

  &.read-only {
    cursor: default;
  }
}
</style>
