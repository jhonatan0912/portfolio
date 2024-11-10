<template>
  <section class="flex flex-col w-full gap-6">

    <img class="avatar" src="/avatar.png" alt="Avatar">

    <h2 class="text-4xl text-center">
      {{ $t("placeholder.presentation") }}
    </h2>

    <section class="flex justify-center gap-3">
      <SocialButton
        v-for="(social, index) in socials"
        :key="index"
        :id="social.id"
        :name="social.name"
        :href="social.href"
      />
    </section>
  </section>
</template>
<script setup lang="ts">
import { socials } from "@constants/socials";
import SocialButton from "./ui/SocialButton.vue";
</script>
<style scoped>
.avatar {
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
</style>
