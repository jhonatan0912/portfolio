<template>
  <button class="switch" @click="toggleLanguage">
    <input type="checkbox" :checked="locale === 'en'" />
    <span class="slider round">
      <img
        :class="`${locale === 'en' ? 'en' : 'es'}`"
        :src="`/countries/${locale}.png`"
        alt="Language Flag"
      />
    </span>
  </button>
</template>
<script setup lang="ts">
import { setLanguage } from "@helpers/i18n";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const toggleLanguage = () => {
  const newLanguage = locale.value === 'en' ? 'es' : 'en';
  setLanguage(newLanguage);
};
</script>
<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 62px;
  height: 32px;
  border: 1px solid var(--main-border-color);
  border-radius: 32px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: .4s;
  transition: .4s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider img {
  position: absolute;
  width: 18px;
  height: 18px;
  transition: transform 0.3s;
  width: 26px;
  height: 26px;
  border-radius: 50%;
}

.slider img.en {
  transform: translateX(-16px);
}

.slider img.es {
  transform: translateX(16px);
}
</style>
