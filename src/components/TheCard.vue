<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  number: number,
}>();
const number = ref(props.number);
</script>

<template>
  <div>
    {{ number }}
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  block-size: 25rem;
}
</style>
