<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import TheCard from './components/TheCard.vue'
</script>

<template>
  <header>
<h1>Advent Calendar</h1>
<TheCard></TheCard>
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" /> -->

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    <!-- </div> -->
  </header>

  <RouterView />
</template>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  padding-top: 30px;
  position: sticky;
  display: flex;
  justify-content: center;
}

</style>
