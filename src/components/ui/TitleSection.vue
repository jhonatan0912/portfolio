<template>
  <h3 class="my-8 text-xl font-bold text-center underline">{{ title }}</h3>
</template>

<script setup lang="ts">
defineProps({
  title: String
});
</script>
<style scoped></style>