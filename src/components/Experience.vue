<template>
  <section class="experience">
    <TitleSection :title="$t('placeholder.experienceTitle')"/>

    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center">
        <h4 class="text-lg font-bold">Frontend Developer</h4>
        <p class="text-gray-500 text-md">Geor SAC</p>
      </div>
      <ul>
        <li class="list-disc list-outside">
          {{ $t('placeholder.georExperience1') }}
        </li>
        <li class="list-disc list-outside">
          {{ $t('placeholder.georExperience2') }}
        </li>
        <li class="list-disc list-outside">
          {{ $t('placeholder.georExperience3') }}
        </li>
        <li class="list-disc list-outside">
          {{ $t('placeholder.georExperience4') }}
        </li>
        <li class="list-disc list-outside">
          {{ $t('placeholder.georExperience5') }}
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
import TitleSection from './ui/TitleSection.vue';
</script>
<style scoped></style>
