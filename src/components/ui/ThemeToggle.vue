<template>
  <div class="theme-toggle" @click="toggleDark(!isDark)">
    <span class="toggle-button" :class="{ dark: isDark, light: !isDark }">
      {{ isDark ? '🌙' : '🌒' }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark)

</script>
<style scoped>
.theme-toggle {
  width: 60px;
  height: 34px;
  border-radius: 50px;
  border: 1px solid var(--main-border-color);
  position: relative;
}

.toggle-button {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  background-color: #ccc;
  user-select: none;

  &.dark {
    right: 0;
  }
}
</style>