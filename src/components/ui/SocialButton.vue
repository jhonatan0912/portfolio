<template>
  <a class="social-btn" :href="href" target="_blank">
    <img
      class="social-btn-img"
      :src="`/src/assets/icons/${name}.svg`"
      :alt="`${name} logo`"
    />
    <span>{{ name }}</span>
  </a>
</template>
<script setup lang="ts">
defineProps({
  name: String,
  href: String,
});
</script>
<style scoped>
.social-btn {
  display: flex;
  align-items: center;
  gap: 4px;
}

.social-btn-img {
  width: 20px;
  height: 20px;
}
</style>
