<script setup>
import { ref, watch } from 'vue';
import { useScreen, useGrid } from 'vue-screen';
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from './components/Header.vue';
import HeaderMobile from './components/HeaderMobile.vue';
import Loanding from './components/Loanding.vue';
let isTouched = ref(false)
let route = useRoute()
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

let showMenu = ref(false)

watch(route, value => {
  console.log(value.path.split('/').length)
  if(value.path.includes('projetos') && value.path.split('/').length > 2) return showMenu.value = false
  showMenu.value = true
})

const loaded = ref(true)

</script>

<template>
  <Header v-if="!responsive"></Header>
  <Transition name="menuAnimation">
    <HeaderMobile v-if="responsive && !isTouched && showMenu"></HeaderMobile>
  </Transition>
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

.menuAnimation-enter-active, .menuAnimation-leave-active {
  transition: 0.2;
  transition-property: opacity;
}
.menuAnimation-enter-from {
  opacity: 0 ;
}
.menuAnimation-enter-to {
  opacity: 1;
}
.menuAnimation-leave-to {
  opacity: 0;
}
</style>
