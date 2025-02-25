<script setup lang="ts">
import TheCard from './components/TheCard.vue'

const dataCards = [
  { number: 1, text: 'sos' },
  { number: 2, text: 'sos' },
  { number: 3, text: 'sos' },
  { number: 4, text: 'sos' },
  { number: 5, text: 'sos' },
  { number: 6, text: 'sos' },
  { number: 7, text: 'sos' },
  { number: 8, text: 'sos' },
  { number: 9, text: 'sos' },
  { number: 10, text: 'sos' },
  { number: 11, text: 'sos' },
  { number: 12, text: 'sos' },
  { number: 13, text: 'sos' },
  { number: 14, text: 'sos' },
  { number: 15, text: 'sos' },
  { number: 16, text: 'sos' },
  { number: 17, text: 'sos' },
  { number: 18, text: 'sos' },
  { number: 19, text: 'sos' },
  { number: 20, text: 'sos' },
  { number: 21, text: 'sos' },
  { number: 22, text: 'sos' },
  { number: 23, text: 'sos' },
  { number: 24, text: 'sos' },
]
</script>

<template>
  <div>
    <header>
      <h1>Advent Calendar</h1>
    </header>

    <main>
      <TheCard v-for="card in dataCards" :number="card.number" :key="card.number">{{
        card.text
      }}</TheCard>
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
  font-family: 'Droid Sans', 'Roboto', 'Oxygen', sans-serif;
  font-weight: 600;
  background: var(--pink);
  color: var(--darkblue);
}
h1 {
  color: var(--darkblue);
}
main {
  background: lightblue;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  gap: 1rem; /* Отступы между элементами сетки */
  margin: 2rem; /* Внешние отступы со всех сторон */
  border-color: darkblue;
}
footer {
  display: grid;
  justify-items: center; /* Центрирует элементы по горизонтали */
  align-items: end;
  padding-block-end: 1.5rem;
}
</style>
