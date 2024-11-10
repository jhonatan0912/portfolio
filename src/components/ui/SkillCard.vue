<template>
  <section class="skill-card">
    <img :src="`/icons/${id}.svg`" :alt="`${name} Icon`" />

    <span class="text-center skill-card-name">
      {{ name }}
    </span>
  </section>
</template>
<script setup lang="ts">
defineProps({
  id: String,
  name: String,
});
</script>
<style scoped>
.skill-card {
  background: linear-gradient(145deg, #dcdcdc, #f5f5f5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border-radius: var(--main-border-radius);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(255, 255, 255, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid #b8b8b8;
  transition: all 0.3s ease-in-out;
}

.skill-card:hover {
  background: linear-gradient(145deg, #c0c0c0, #ffffff);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15),
    0 10px 20px rgba(255, 255, 255, 0.2), 0 14px 28px rgba(0, 0, 0, 0.2);
  transform: translateY(-6px);
}

.skill-card-name {
  color: var(--main-black);
}
</style>
