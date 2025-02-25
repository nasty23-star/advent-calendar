<script setup lang="ts">
import { ref } from 'vue';
import type { ICard } from '@/types/common';

const props = defineProps<{
  card: ICard
}>();
const card = ref(props.card);
</script>

<template>
  {{ card }}
  <div>
    {{ card.number  }}
    {{ card.text }}
  </div>
</template>

<style scoped>
div {
  block-size: 25rem;
}
</style>
