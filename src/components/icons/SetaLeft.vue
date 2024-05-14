<template>
  <svg @click="$emit('clicked')" xmlns="http://www.w3.org/2000/svg" width="24" height="41" viewBox="0 0 24 41" fill="none">
  <path d="M21.4676 38.2007L4 20.7332L21.4676 3.26562" stroke="white" stroke-width="4.65801" stroke-linecap="round"/>
</svg>
</template>

<script>
export default {

}
</script>

<style scoped>
  svg {
    cursor: pointer;
    z-index: 2;
  }
</style>