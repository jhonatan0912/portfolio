<template>
  <section class="skills">
    <TitleSection :title="$t('placeholder.skillsTitle')"/>

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
import TitleSection from "./ui/TitleSection.vue";
</script>
<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 1rem;
}
</style>
