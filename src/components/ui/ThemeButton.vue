<template>
  <div class="theme-button" @click="toggleDark(!isDark)">
    {{ isDark ? '🌙' : '🌒' }}
  </div>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark)

</script>
<style scoped>
.theme-button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid var(--main-border-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    scale: .96;
  }
}
</style>