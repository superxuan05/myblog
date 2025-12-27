<template>
  <Blog>
    <template #heroInfo="data">
      <!-- 头部横幅图片 -->
      <div class="header-banner">
        <img src="/banner.svg" alt="Header Banner" class="banner-image" />
      </div>
      
      <!-- 全屏背景层：地球 -->
      <div class="globe-box">
        <div class="globe-container">
          <EarthGlobe />
        </div>
      </div>

      <!-- 前景层：标题 / 标语 -->
      <div class="text-box">
        <div class="hero-content">
          <img :src="$frontmatter.heroImage" class="hero-logo" />
          <h1>{{ $frontmatter.heroText }}</h1>
          <p class="tagline">{{ $frontmatter.tagline }}</p>
        </div>
      </div>
    </template>
  </Blog>
  
  <!-- 全局鼠标效果 -->
  <CustomCursor />
</template>

<script setup>
import CustomCursor from './CustomCursor.vue'
</script>

<style scoped>
.header-banner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  z-index: 2;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  filter: brightness(0.8);
}

.globe-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  overflow: hidden;
  background: radial-gradient(ellipse at center, rgba(0, 8, 20, 0.7) 0%, rgba(0, 0, 0, 1) 100%);
}

.globe-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none; /* 允许点击穿透到地球 */
}

.hero-content {
  text-align: center;
  color: #fff;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-width: 80%;
  pointer-events: auto; /* 恢复内容区域的点击事件 */
}

.hero-logo { 
  width: 100px; 
  height: 100px; 
  border-radius: 50%;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.hero-logo:hover {
  transform: scale(1.05);
}

h1 {
  font-size: clamp(1.8rem, 5vw, 3rem);
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.8);
}

.tagline {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-content {
    padding: 1.5rem;
    margin: 0 1rem;
  }
  
  .hero-logo {
    width: 80px;
    height: 80px;
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 1rem;
    margin: 0 0.5rem;
  }
  
  .hero-logo {
    width: 60px;
    height: 60px;
  }
}
</style>