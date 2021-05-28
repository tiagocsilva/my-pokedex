<template>
  <a
    class="close-button shadow flex-center"
    @click="$router.go(-1)"
  >
    <font-awesome-icon :icon="['fas', 'times']" />
  </a>

</template>

<style lang="scss" scoped>
.close-button {
  background: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #68a198;
  position: fixed;
  top: 3%;
  right: 5%;
  transition: all 0.2s;
  z-index: 99;
  cursor: pointer;

  &:hover {
    background: $custom-secondary;
    color: #fff;
  }
}
</style>
