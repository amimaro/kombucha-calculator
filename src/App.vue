<template>
  <div id="app">
    <transition name="slide-left">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#app {
  position: relative;
  overflow: hidden;
}
#app::after {
  content: "";
  background: var(--bg-img) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
</style>
