<template>
  <main class="container">
    <Header />

    <Info />

    <Skills/>
  </main>

   <CursorTrail />
</template>
<script setup  lang="ts">
import Header from "@components/ui/Header.vue";
import CursorTrail from "@components/CursorTrail.vue";
import Info from "@components/Info.vue";
import Skills from "@components/Skills.vue";


</script>
<style scoped></style>