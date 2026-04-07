<template>
  <Blog>
    <template #heroInfo="data">
      <!-- 头部横幅图片 -->
      <transition 
        :css="false"
        @before-enter="onBeforeEnterBanner"
        @enter="onEnterBanner"
        @leave="onLeaveBanner"
      >
        <div v-if="showBanner" class="header-banner">
          <img src="/banner.svg" alt="Header Banner" class="banner-image" />
        </div>
      </transition>
      
      <!-- 全屏背景层：地球 -->
      <div class="globe-box">
        <div class="globe-container">
          <transition 
            :css="false"
            @before-enter="onBeforeEnterGlobe"
            @enter="onEnterGlobe"
          >
            <div v-if="showGlobe">
              <EarthGlobe />
            </div>
          </transition>
        </div>
      </div>

      <!-- 前景层：标题 / 标语 -->
      <div class="text-box">
        <transition-group 
          :css="false"
          tag="div" 
          class="hero-content"
          @before-enter="onBeforeEnterContent"
          @enter="onEnterContent"
        >
          <img v-if="showLogo" key="logo" :src="$frontmatter.heroImage" class="hero-logo" />
          <h1 v-if="showTitle" key="title">{{ $frontmatter.heroText }}</h1>
          <p v-if="showTagline" key="tagline" class="tagline">{{ $frontmatter.tagline }}</p>
        </transition-group>
      </div>
      
      <!-- 装饰粒子背景 - 使用Vue的内置transition -->
      <div class="particles-container">
        <transition-group 
          name="particles" 
          tag="div"
        >
          <div 
            v-for="(particle, index) in particles" 
            :key="`particle-${index}`"
            class="particle"
            :style="{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }"
          ></div>
        </transition-group>
      </div>
    </template>
  </Blog>
  
  <!-- 全局鼠标效果 -->
  <CustomCursor />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CustomCursor from './CustomCursor.vue'

// 控制各个元素的显示状态
const showBanner = ref(false)
const showGlobe = ref(false)
const showLogo = ref(false)
const showTitle = ref(false)
const showTagline = ref(false)

// 粒子系统 - 使用Vue的响应式系统
const particles = ref([])

// 生成随机粒子
const generateParticles = () => {
  const count = 30
  const newParticles = []
  
  for (let i = 0; i < count; i++) {
    newParticles.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      id: i
    })
  }
  
  particles.value = newParticles
}

// Vue内置的JavaScript钩子动画 - 横幅
const onBeforeEnterBanner = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateY(-100%)'
}

const onEnterBanner = (el, done) => {
  const duration = 800
  const startTime = performance.now()
  
  const animate = (currentTime) => {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1)
    
    // 使用Vue的内置缓动函数
    const easeProgress = easeOutCubic(progress)
    
    el.style.opacity = easeProgress
    el.style.transform = `translateY(${(1 - easeProgress) * -100}%)`
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      done()
    }
  }
  
  requestAnimationFrame(animate)
}

const onLeaveBanner = (el, done) => {
  el.style.transition = 'all 0.3s ease'
  el.style.opacity = 0
  el.style.transform = 'translateY(-100%)'
  setTimeout(done, 300)
}

// Vue内置的JavaScript钩子动画 - 地球
const onBeforeEnterGlobe = (el) => {
  el.style.opacity = 0
  el.style.transform = 'scale(0.8)'
}

const onEnterGlobe = (el, done) => {
  const duration = 1500
  const startTime = performance.now()
  
  const animate = (currentTime) => {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1)
    
    const easeProgress = easeOutExpo(progress)
    
    el.style.opacity = easeProgress
    el.style.transform = `scale(${0.8 + easeProgress * 0.2})`
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      done()
    }
  }
  
  requestAnimationFrame(animate)
}

// Vue内置的JavaScript钩子动画 - 内容
const onBeforeEnterContent = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateY(30px)'
}

const onEnterContent = (el, done) => {
  const duration = 600
  const startTime = performance.now()
  
  const animate = (currentTime) => {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1)
    
    const easeProgress = easeOutCubic(progress)
    
    el.style.opacity = easeProgress
    el.style.transform = `translateY(${(1 - easeProgress) * 30}px)`
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      done()
    }
  }
  
  requestAnimationFrame(animate)
}

// Vue内置的缓动函数
const easeOutCubic = (t) => {
  return 1 - Math.pow(1 - t, 3)
}

const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(-2, 10 * t - 10)
}

// 页面加载后的动画序列
onMounted(() => {
  // 生成粒子
  generateParticles()
  
  // 使用Vue的nextTick确保DOM更新
  setTimeout(() => {
    showBanner.value = true
  }, 100)
  
  setTimeout(() => {
    showGlobe.value = true
  }, 700)
  
  setTimeout(() => {
    showLogo.value = true
  }, 1400)
  
  setTimeout(() => {
    showTitle.value = true
  }, 1700)
  
  setTimeout(() => {
    showTagline.value = true
  }, 2000)
})
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

/* 粒子背景 */
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(68, 136, 255, 0.8);
  animation: float 10s infinite ease-in-out;
}

/* Vue内置的transition-group粒子动画 */
.particles-enter-active {
  transition: all 0.8s ease-out;
}

.particles-leave-active {
  transition: all 0.5s ease-in;
}

.particles-enter-from {
  opacity: 0;
  transform: scale(0);
}

.particles-leave-to {
  opacity: 0;
  transform: scale(2);
}

.particles-move {
  transition: transform 0.5s ease-out;
}

/* 粒子动画 */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-40px) translateX(-10px);
  }
  75% {
    transform: translateY(-20px) translateX(5px);
  }
}

/* Logo特殊动画 */
.hero-logo {
  animation: pulse 2s infinite alternate, glow 3s infinite alternate;
  transform-origin: center;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.8), 0 0 60px rgba(68, 136, 255, 0.6);
  }
}

@keyframes glow {
  0% {
    filter: brightness(1);
  }
  100% {
    filter: brightness(1.2);
  }
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