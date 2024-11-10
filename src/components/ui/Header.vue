<template>
  <header class="flex items-center justify-between header">
    <h1 class="text-xl font-bold">
      Jhonatan Yaranga
    </h1>

    <section class="flex items-center gap-2">
      <ResumeButton />
      <ThemeButton />
      <LanguageToggle />
    </section>
  </header>
</template>
<script setup  lang="ts">
import LanguageToggle from "./LanguageToggle.vue";
import ResumeButton from "./ResumeButton.vue";
import ThemeButton from "./ThemeButton.vue";


</script>
<style>
.header {
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  transform: translateX(-50%);
  padding: 8px 16px;
  background-color: var(--main-bg-color);
  z-index: 2;
}

@media (min-width: 768px) {
  .header {
    padding: 16px 32px;
  }
}
</style>