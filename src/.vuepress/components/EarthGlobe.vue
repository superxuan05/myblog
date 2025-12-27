<template>
  <div ref="mountPoint" class="earth-globe"></div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import * as THREE from 'three'

const mountPoint = ref(null)
let frameId

onMounted(() => {
  const width = mountPoint.value.clientWidth || 600
  const height = mountPoint.value.clientHeight || 400

  // 场景、相机、渲染器
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000814)
  
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
  camera.position.z = 2.5

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.shadowMap.enabled = true
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 0.5
  mountPoint.value.appendChild(renderer.domElement)

  // 创建星空背景
  const starsGeometry = new THREE.BufferGeometry()
  const starPositions = []
  const starColors = []
  
  for (let i = 0; i < 5000; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    starPositions.push(x, y, z)
    
    // 随机星星颜色
    const color = new THREE.Color()
    const colorVariation = Math.random()
    if (colorVariation > 0.8) {
      color.setHSL(0.6, 0.2, Math.random() * 0.5 + 0.5) // 蓝色星星
    } else if (colorVariation > 0.5) {
      color.setHSL(0.1, 0.1, Math.random() * 0.5 + 0.5) // 黄色星星
    } else {
      color.setHSL(0, 0, Math.random() * 0.5 + 0.5) // 白色星星
    }
    starColors.push(color.r, color.g, color.b)
  }
  
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3))
  starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3))
  
  const starsMaterial = new THREE.PointsMaterial({
    size: 1.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  })
  
  const stars = new THREE.Points(starsGeometry, starsMaterial)
  scene.add(stars)

  // 地球球体
  const geometry = new THREE.SphereGeometry(0.9, 64, 64)
  const texture = new THREE.TextureLoader().load(
    'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'
  )
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    emissive: 0x4488ff,
    emissiveIntensity: 0.35,
    roughness: 0.8
  })
  const earth = new THREE.Mesh(geometry, material)
  scene.add(earth)

  // 大气层效果
  const atmosphereGeometry = new THREE.SphereGeometry(1.05, 64, 64)
  const atmosphereMaterial = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
      }
    `,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    transparent: true,
    depthWrite: false
  })
  
  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
  earth.add(atmosphere)

  // 光照设置
  const ambientLight = new THREE.AmbientLight(0x404040, 1.5)
  scene.add(ambientLight)

  const sunLight = new THREE.DirectionalLight(0xffffff, 1.5)
  sunLight.position.set(5, 3, 5)
  sunLight.castShadow = true
  scene.add(sunLight)

  // 动画循环
  const animate = () => {
    frameId = requestAnimationFrame(animate)
    earth.rotation.y += 0.01
    stars.rotation.y += 0.0002
    renderer.render(scene, camera)
  }
  animate()

  // 响应式
  const handleResize = () => {
    const w = mountPoint.value.clientWidth
    const h = mountPoint.value.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', handleResize)

  onUnmounted(() => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('resize', handleResize)
    if (mountPoint.value && renderer.domElement) {
      mountPoint.value.removeChild(renderer.domElement)
    }
  })
})
</script>

<style scoped>
.earth-globe {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
}
</style>