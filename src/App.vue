<script setup lang="ts">
import TheCard from './components/TheCard.vue'
</script>

<template>
<div>
<header>
<h1>Advent Calendar</h1>
</header>

<main>
  <TheCard></TheCard>
</main>

<footer>
  <p>From Krasnodar with love</p>
</footer>
</div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
div {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 9rem 1fr 9rem;
}
header {
  line-height: 1.5;
  padding-block-start: 2rem;
  position: sticky;
  display: flex;
  justify-content: center;
}
main {
  background: lightblue;
}
footer {
  display: grid;
  justify-items: center; /* Центрирует элементы по горизонтали */
  align-items: end;
  padding-block-end: 1.5rem;
}
</style>
