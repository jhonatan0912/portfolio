<template>
  <div class="cursor-trail" :style="{ top: `${y}px`, left: `${x}px` }"></div>
</template>

<script setup lang="ts">
import { usePointer } from "@vueuse/core";
import { ref, watchEffect } from "vue";

const { x, y } = usePointer();

const smoothX = ref(0);
const smoothY = ref(0);

const smoothMove = () => {
  const deltaX = +x - (smoothX.value);
  const deltaY = +y - (smoothY.value);

  const smoothFactor = 0.1;

  smoothX.value += deltaX * smoothFactor;
  smoothY.value += deltaY * smoothFactor;
};

watchEffect(() => {
  requestAnimationFrame(smoothMove);
});
</script>

<style scoped>
.cursor-trail {
  position: absolute;
  z-index: 9999;
  pointer-events: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 0 10px var(--cursor-trail-shadow-8), 0 0 20px var(--cursor-trail-shadow-6);
  opacity: 0.8;
  cursor: unset;
  display: none;
  animation: shadow-grow .5s ease-out infinite alternate;
}

@keyframes shadow-grow {
  0% {
    width: 15px;
    height: 15px;
    box-shadow: 0 0 10px var(--cursor-trail-shadow-8), 0 0 20px var(--cursor-trail-shadow-6);
  }

  100% {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 20px var(--cursor-trail-shadow-8), 0 0 40px var(--cursor-trail-shadow-6);
  }
}

@media screen and (min-width: 1024px) {
  .cursor-trail {
    display: flex;
  }
}
</style>
