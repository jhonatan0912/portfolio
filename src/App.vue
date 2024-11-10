<template>
  <main class="container">
    <Header />

    <Info />

    <Experience />
    <Skills/>
  </main>

   <CursorTrail />
</template>
<script setup  lang="ts">
import CursorTrail from "@components/CursorTrail.vue";
import Experience from "@components/Experience.vue";
import Info from "@components/Info.vue";
import Skills from "@components/Skills.vue";
import Header from "@components/ui/Header.vue";


</script>
<style scoped></style>