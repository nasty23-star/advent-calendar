<script setup lang="ts">
import { ref } from 'vue';
import type { ICard } from '@/types/common';

const props = defineProps<{
  card: ICard
}>();
const card = ref(props.card);
</script>

<template>
  <div>
    {{ card.number  }}
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  block-size: 25rem;
}
</style>
