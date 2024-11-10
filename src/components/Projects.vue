<template>
  <section class="projects">
    <TitleSection title="PROJECTS"/>

    <div class="projects-grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :src="project.src"
        :name="project.name"
        :repository="project.repository"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { projects } from '@constants/projects';
import ProjectCard from './ui/ProjectCard.vue';
import TitleSection from './ui/TitleSection.vue';
</script>
<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>