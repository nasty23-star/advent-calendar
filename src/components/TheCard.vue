<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  number: number
}>()
const number = ref(props.number)
</script>

<template>
  <label>
    <input type="checkbox" />
    <div class="card">
      <div class="front">{{ number }}</div>
      <div class="back">
        <div class="card_title">
          <slot></slot>
        </div>
        <div class="back_href">
          <slot name="href"></slot>
        </div>
      </div>
    </div>
  </label>
</template>

<style scoped>
.card {
  position: relative;
  block-size: 12rem;
  transform-style: preserve-3d;
  transition: transform 1s;
  cursor: pointer;
  border: 3px solid var(--color-border);
  border-radius: 10px;
  box-shadow:
    0 0 10px rgba(255, 255, 255, 0.5),
    inset 0 0 10px var(--pink),
    0 0 10px var(--pink),
    inset 0 0 20px var(--pink),
    0 0 20px var(--pink),
    inset 0 0 25px var(--pink);
}
input {
  position: absolute;
  visibility: hidden;
}
input:checked + .card {
  transform: rotateY(180deg);
}
.card .front,
.card .back {
  position: absolute;
  block-size: 100%;
  inline-size: 100%;
  display: grid;
  place-items: center;
  text-align: center;
  padding-inline: 20px;
  padding-block: 20px;
  backface-visibility: hidden;
}
.front {
  block-size: 12rem;
  text-align: center;
  font-family: 'TechnoCharm';
  font-size: 2rem;
}
.back {
  display: grid;
  justify-content: center;
  transform: rotateY(180deg);
  text-transform: none;
  letter-spacing: 0;
}
</style>
