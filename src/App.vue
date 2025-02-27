<script setup lang="ts">
import TheCard from './components/TheCard.vue'

const dataCards = [
  { number: 1, text: 'Европа', href: 'https://www.kinopoisk.ru/film/623379/' },
  { number: 2, text: 'Всё везде и сразу', href: 'https://www.kinopoisk.ru/film/1322324/' },
  { number: 3, text: 'Монстры', href: 'https://www.kinopoisk.ru/film/516472/' },
  { number: 4, text: 'Кловерфилд, 10', href: 'https://www.kinopoisk.ru/film/843463/' },
  { number: 5, text: 'Перспектива', href: 'https://www.kinopoisk.ru/film/1113039/' },
  { number: 6, text: 'Поезд в Пусан', href: 'https://www.kinopoisk.ru/film/977288/' },
  { number: 7, text: 'Бескрайняя ночь', href: 'https://www.kinopoisk.ru/film/1083297/' },
  { number: 8, text: 'Временная петля', href: 'https://www.kinopoisk.ru/film/313125/' },
  { number: 9, text: 'Ошибка времени', href: 'https://www.kinopoisk.ru/film/736209/' },
  { number: 10, text: 'Чужие на районе', href: 'https://www.kinopoisk.ru/film/470486/' },
  { number: 11, text: 'Арк: Ковчег времени', href: 'https://www.kinopoisk.ru/film/974465/' },
  { number: 12, text: 'Луна 2112', href: 'https://www.kinopoisk.ru/film/406671/' },
  { number: 13, text: '"V" значит Вендетта', href: 'https://www.kinopoisk.ru/film/86208/' },
  { number: 14, text: 'Компаньон', href: 'https://www.kinopoisk.ru/film/6275518/' },
  { number: 15, text: 'Прибытие', href: 'https://www.kinopoisk.ru/film/718811/' },
  { number: 16, text: 'Треугольник', href: 'https://www.kinopoisk.ru/film/406403/' },
  { number: 17, text: 'Начало', href: 'https://www.kinopoisk.ru/film/447301/' },
  { number: 18, text: 'Матрица', href: 'https://www.kinopoisk.ru/film/301/' },
  { number: 19, text: 'Она', href: 'https://www.kinopoisk.ru/film/577488/' },
  { number: 20, text: 'Субстанция', href: 'https://www.kinopoisk.ru/film/4860213/' },
  { number: 21, text: 'Платформа', href: 'https://www.kinopoisk.ru/film/1134778/' },
  { number: 22, text: 'Вечное сияние чистого разума', href: 'https://www.kinopoisk.ru/film/5492/' },
  { number: 23, text: 'Гаттака', href: 'https://www.kinopoisk.ru/film/5012/' },
  { number: 24, text: 'Гравитация', href: 'https://www.kinopoisk.ru/film/468466/' },
]
</script>

<template>
  <div class="layout">
    <header>
      <h1>Advent Calendar</h1>
      <p>Мои рекомендации фантастики</p>
    </header>

    <main>
      <div class="container">
        <TheCard v-for="card in dataCards" :number="card.number" :key="card.number"
          >{{ card.text
          }}<template #href><a :href="card.href" target="_blank">Ссылка</a></template></TheCard
        >
      </div>
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
  text-shadow:
    0 0 10px var(--pink),
    0 0 20px var(--pink),
    0 0 40px var(--pink),
    0 0 80px var(--pink),
    0 0 160px var(--pink);
}
.layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 9rem 1fr 3rem;
  block-size: 100%;
}
header {
  line-height: 1.5;
  padding-block-start: 2rem;
  position: sticky;
  display: grid;
  place-items: center;
}
h1 {
  font-size: 3rem;
  font-family: 'TechnoCharm';
}
p {
  font-size: 1rem;
  font-family: Verdana, sans-serif;
}
main {
  inline-size: 100%;
  max-inline-size: 1600px;
  justify-self: center;
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  gap: 1rem; /* Отступы между элементами сетки */
  margin: 2rem; /* Внешние отступы со всех сторон */
}
a {
  color: var(--white);
}
a:hover {
  text-shadow:
    0 0 10px var(--white),
    0 0 20px var(--white),
    0 0 40px var(--white),
    0 0 80px var(--white),
    0 0 160px var(--white);
}
footer {
  display: grid;
  justify-content: center;
  align-items: end;
  padding-block-end: 1.5rem;
}
</style>
