<script setup>
import { ref, watch } from 'vue';
import { useScreen, useGrid } from 'vue-screen';
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import HeaderMobile from './components/HeaderMobile.vue';
import Loanding from './components/Loanding.vue';
let isTouched = ref(false)
document.addEventListener('touchstart', () => {
    isTouched.value = true
})
document.addEventListener('touchend', ()=> {
  isTouched.value = false
})
document.addEventListener('touchCancel', ()=> {
  isTouched.value = false
})
let  screen = useScreen()
let grid = useGrid({
    sm: 500,
    md: 870,
    lg: 1250,
    xl: Infinity,
  })
let responsive = ref(screen.width <= 560)

watch(screen, value => {
    if(value.width <= 560) return responsive.value = true
    responsive.value = false
}, {deep: true})

const loaded = ref(true)

</script>

<template>
  <Header v-if="!responsive"></Header>
  <HeaderMobile v-if="responsive && !isTouched"></HeaderMobile>
  <Loanding v-if="!loaded"></Loanding>
  <RouterView v-if="loaded" />
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua');
  @import url('https://fonts.googleapis.com/css2?family=Inter');
  @import url('https://fonts.googleapis.com/css2?family=Roboto');

#app {
  overflow: auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
