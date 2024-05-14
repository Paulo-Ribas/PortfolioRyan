<template>
  <div class="loading-container">
    <div class="loading-circle"></div>
    <!--não é necessário por enquanto-->
  </div>
</template>

<script setup>
</script>

<style scoped>

.loading-container {
    width: 100%;
    height: calc(100% - 80px);
    background-color: #181818;
    position: absolute;
    z-index: 3;
}

</style>