<template>
  <button class="resume-button" aria-label="Download cv" @click="onClick">
    {{ $t('placeholder.resumeButton') }}
  </button>
</template>
<script setup lang="ts">

const onClick = () => {
  // window.open('./../../assets/resume.pdf', '_blank');
  console.log('onClick');
};
</script>
<style scoped>
.resume-button {
  padding: .5rem 1rem;
  border: 1px solid var(--main-border-color);
  border-radius: var(--main-border-radius);

  &:hover {
    scale: .96;
  }
}
</style>