<template>
  <section class="project-card">
    <img :src="props.src" alt="Project Image" class="project-card__image"/>
    <div class="project-card__content">
      <h3 class="project-card__title">{{ props.name }}</h3>
      <a v-show="props.repository" :href="props.repository" class="project-card__link">View Project</a>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Project } from '@interfaces/project.interface';

const props = defineProps<Project>();
</script>
<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card__image {
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.project-card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-card__title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.project-card__link {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s;
}

.project-card__link:hover {
  background-color: var(--primary-color-dark);
}
</style>