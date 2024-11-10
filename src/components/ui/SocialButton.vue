<template>
  <a class="social-btn" :href="props.href" target="_blank">
    <img
      class="social-btn-img"
      :src="`/icons/${props.id}.svg`"
      :alt="`${props.name} logo`"
    />
    <span>{{ props.name }}</span>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  id: string,
  name: string,
  href: string,
}>();
</script>
<style scoped>
.social-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: var(--social-button-bg);
  padding: 0 6px;
  border-radius: 2px;
  color: #fff;
}

.social-btn-img {
  width: 20px;
  height: 20px;
}
</style>
