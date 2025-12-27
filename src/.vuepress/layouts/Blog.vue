<script setup lang="ts">
import { Blog } from "vuepress-theme-hope/blog";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
import EarthGlobe from "../components/EarthGlobe.vue";
</script>

<template>
  <Blog>
    <template #heroInfo="data">
      <!-- 1. 地球底层 -->
      <EarthGlobe class="hero-earth" />
      <!-- 2. 原来的标语/背景 -->
      <BingHeroBackground />
      <HitokotoBlogHero v-bind="data" />
    </template>
  </Blog>
</template>

<style scoped>
.hero-earth {
  position: absolute;
  inset: 0;
  z-index: 0;          /* 最底层 */
  pointer-events: none;
}
</style>