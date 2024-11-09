<template>
  <section class="skills">
    <h3 class="my-6 text-xl font-bold text-center underline">SKILLS</h3>

    <section class="skills-grid">
      <SkillCard
        v-for="(skill, index) in skills"
        :key="index"
        :id="skill.id"
        :name="skill.name"
      />
    </section>
  </section>
</template>
<script setup lang="ts">
import { skills } from "@constants/skills";
import SkillCard from "@components/ui/SkillCard.vue";
</script>
<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 1rem;
}
</style>
