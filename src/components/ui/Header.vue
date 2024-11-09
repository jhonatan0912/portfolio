<template>
  <header class="flex items-center justify-between">
    <h1 class="text-xl">Jhonatan Yaranga</h1>


    <section class="flex items-center gap-2">
      <ThemeToggle />
      <ResumeButton />
    </section>
  </header>
</template>
<script setup  lang="ts">
import ResumeButton from "./ResumeButton.vue";
import ThemeToggle from "./ThemeToggle.vue";


</script>
<style></style>