<template>
  <div>
    <!-- 自定义鼠标元素 -->
    <div class="custom-cursor" ref="cursor"></div>
    <div class="cursor-follower" ref="cursorFollower"></div>
    <div class="cursor-dot" ref="cursorDot"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref(null)
const cursorFollower = ref(null)
const cursorDot = ref(null)
let mouseX = 0
let mouseY = 0
let followerX = 0
let followerY = 0
let rafId = null

onMounted(() => {
  if (typeof window === 'undefined') return
  
  // 初始化鼠标位置
  mouseX = window.innerWidth / 2
  mouseY = window.innerHeight / 2
  followerX = mouseX
  followerY = mouseY

  // 添加鼠标移动事件
  const handleMouseMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    updateCursorPosition()
  }

  // 鼠标进入/离开交互元素时的效果
  const handleMouseEnter = () => {
    if (cursor.value) cursor.value.classList.add('cursor-hover')
    if (cursorFollower.value) cursorFollower.value.classList.add('cursor-follower-hover')
  }

  const handleMouseLeave = () => {
    if (cursor.value) cursor.value.classList.remove('cursor-hover')
    if (cursorFollower.value) cursorFollower.value.classList.remove('cursor-follower-hover')
  }

  // 添加平滑跟随动画
  const animateFollower = () => {
    followerX += (mouseX - followerX) * 0.1
    followerY += (mouseY - followerY) * 0.1

    if (cursorFollower.value) {
      cursorFollower.value.style.left = `${followerX}px`
      cursorFollower.value.style.top = `${followerY}px`
    }

    rafId = requestAnimationFrame(animateFollower)
  }

  // 更新鼠标位置
  const updateCursorPosition = () => {
    if (cursor.value) {
      cursor.value.style.left = `${mouseX}px`
      cursor.value.style.top = `${mouseY}px`
    }

    if (cursorDot.value) {
      cursorDot.value.style.left = `${mouseX}px`
      cursorDot.value.style.top = `${mouseY}px`
    }
  }

  // 初始化自定义鼠标位置
  updateCursorPosition()

  // 启动动画
  animateFollower()

  // 添加事件监听
  window.addEventListener('mousemove', handleMouseMove)
  
  // 延迟添加交互元素事件
  const setupInteractions = () => {
    const interactiveElements = document.querySelectorAll('a, button, .hero-logo, input, [role="button"], [class*="btn"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
  }

  // 立即设置一次
  setupInteractions()
  
  // 使用MutationObserver监听DOM变化
  const observer = new MutationObserver(() => {
    setupInteractions()
  })
  
  observer.observe(document.body, { childList: true, subtree: true })

  // 清理函数
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    if (rafId) {
      cancelAnimationFrame(rafId)
    }
    observer.disconnect()
  })
})
</script>

<style>
/* 全局鼠标样式 */
body {
  cursor: none !important;
}

body * {
  cursor: none !important;
}

/* 自定义鼠标 */
.custom-cursor {
  width: 20px;
  height: 20px;
  border: 2px solid #4488ff;
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  transition: all 0.15s ease;
  background-color: rgba(68, 136, 255, 0.2);
  box-shadow: 0 0 20px #4488ff, inset 0 0 10px rgba(68, 136, 255, 0.5);
}

.cursor-follower {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(68, 136, 255, 0.5);
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9998;
  transition: all 0.3s ease;
}

.cursor-dot {
  width: 4px;
  height: 4px;
  background-color: #fff;
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10000;
}

/* 悬停效果 */
.cursor-hover {
  width: 40px;
  height: 40px;
  border-color: #66ddff;
  background-color: rgba(102, 221, 255, 0.3);
  box-shadow: 0 0 30px #66ddff, inset 0 0 15px rgba(102, 221, 255, 0.7);
}

.cursor-follower-hover {
  width: 60px;
  height: 60px;
  border-color: rgba(102, 221, 255, 0.7);
}

/* 移动设备隐藏自定义鼠标 */
@media (pointer: coarse) {
  .custom-cursor, .cursor-follower, .cursor-dot {
    display: none !important;
  }
  
  body, body * {
    cursor: auto !important;
  }
}
</style>