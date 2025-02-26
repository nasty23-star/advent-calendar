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
      <div class="back"><slot></slot></div>
    </div>
  </label>
</template>

<style scoped>
div {
  block-size: 25rem;
}
.card {
  position: relative;
  block-size: 12rem;
  color: white;
  transform-style: preserve-3d;
  transition: transform 1s;
  cursor: pointer;
}
input {
  position: absolute;
  visibility: hidden;
}
input:checked + .card {
  transform: rotateY(180deg);
}
.card div {
  position: absolute;
  block-size: 100%;
  inline-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-inline: 20px;
  padding-block: 20px;
  backface-visibility: hidden;
}
.front {
  background-image: linear-gradient(to bottom, var(--lighter-violet), var(--pink));
  block-size: 12rem;
  text-align: center;
  font-family: 'TechnoCharm';
  font-size: 2rem;
}
.back {
  transform: rotateY(180deg);
  text-transform: none;
  letter-spacing: 0;
}
</style>
